import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import '../../assets/styles/Login.css'
import { login } from '../../redux/userSlice';

function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const nav=useNavigate();
    const dispatch = useDispatch();
    const logincredentials = {email,password};
   

    const authenticateUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8082/api/v1/auth/user/authenticate",
          logincredentials
        );
        const token = response.data.token;
        localStorage.setItem("auth", token);
        localStorage.setItem("email", email);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return token;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      if (!email.trim()) {
        validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        validationErrors.email = "Email is not valid";
      }
      if (!password.trim()) {
        validationErrors.password = "Password is required";
      } else if (password.length < 6 || password.length>15) {
        validationErrors.password = "Password should be at least 6 characters";
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {

        
        const token = await authenticateUser();
        if (token==null) {
          alert("Invalid Email or Password");
          return;
        } else {
          dispatch(login(email));
          nav('/home');     
        }
               
      }
    }
  return (
    <div className='wrapper bg'>
        <div className='container' id="main">
          <div className='row' id="login">

            <div className='col-md-6 right'>
                <div className='input-box'>
                     <header className='header'>Create account</header>
                      <div className='input-field'>
                            <input
                                type="email"
                                className='input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <h6 className='error'>{errors.email && <span>{errors.email}</span>}</h6>
                     </div>
                      <div className='input-field'>
                            <input
                                type="password"
                                className='input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <h6 className='error'>{errors.password && <span>{errors.password}</span>}</h6>

                      </div>
                      <div className='input-field'>

                        <input type='submit'  onClick={handleSubmit} className='submit' value="Sign In"/>
                       
                      </div>
                      <div className='signin'>
                            <h6>No account ? <Link to="/signup">Sign Up here</Link></h6>                
                      </div>
                </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../../../assets/styles/AdminSignup.css'
import axios from "axios";
function AdminSignup() {
  
     const [userName, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [errors, setErrors] = useState({});
     const nav=useNavigate();
     const details={userName,email,password};
     

     const postData = async (details) =>{
      try{
          const response=await axios.post(
            "http://localhost:8082/api/v1/auth/admin/register",details,
            {
              header:{
                "Content-Type":"application/json"
              },
            }
          );
          return response.data;
      }catch(error)
      {
        console.error("Error:",error);
      }
     };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const details={userName,email,password}
    console.log(details);
    const validationErrors = {};

    if (!userName.trim()) {
      validationErrors.name = "Username is required";
        }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
        } 
        else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
         }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
         } 
         else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
         }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      postData(details)
      .then(()=>{
       
        nav('/Adminlogin') ;
      })
    }
  };
  return (
    <div className='wrapper bg'>
    <div className='container' id='main'>
      <div className='row' id="login">
     
        <div className='col-md-6 right'>
            <div className='input-box'>
                 <header className='header'>Sign Up</header>
                   <div className='input-field'>
                   <input
                   type="text"
                   className='input'
                   value={userName}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Username"
                 />
                 <h6 className='error'>{errors.name && <span>{errors.name}</span>}</h6>

           </div>
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
                 <input
            type="password"
            className='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <h6 className='error'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h6>

           </div>
           <div className='input-field'>
             <input type='submit'  onClick={handleSubmit} className='submit' value="Sign Up"/>
            
           </div>
           <div className='signin'>
                            <h6>Already have a account ?<Link to="/Adminlogin">Log in here</Link></h6>                       
                      </div>
                  
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default AdminSignup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

    }
  }

  return (
    <div className='body'>
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className='header'>Login</h2>
          <div>
            <AccountCircleIcon />
            <input
              type="email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <h6>{errors.email && <span>{errors.email}</span>}</h6>
          </div>
          <div>
            <KeyIcon />
            <input
              type="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <h6>{errors.password && <span>{errors.password}</span>}</h6>
          </div>
          <div>
            <button className='button'>Login</button>
          </div>
          <Link to="/register">
            <p className="group">No Account ? Signup Now</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

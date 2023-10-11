import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../redux/userSlice';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const email = user.email ;

  const handleLogout = () => {
    dispatch(logout());
   navigate('/login') 
    
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark sticky-top">
        <div className="container-fluid">
          <Link to="/sturcture">
            <span className="navbar-brand text-white">
              <i className='bx bx-menu'></i>
            </span>
          </Link>
          <span className="navbar-brand text-white" id="garden">
            <i className='bx bx-leaf'></i>Garden
          </span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link to="/home" id='link'>
                <span className="nav-link text-light" id="nav">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" id='link'>
                <span className="nav-link text-light" id="nav">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" id='link'>
                <span className="nav-link text-light" id="nav">Contact</span>
              </Link>
            </li>
            <li className="nav-item">
            <div className="actions">
            {email ? (
              <>
                
                 <button type='button' className =" btn btn-outline-primary" onClick={handleLogout}>Logout</button>
                         
                
              </>
            ) : (
              <>
              <button type='button' className =" btn btn-outline-primary" onClick={handleLogout}>Login</button>
              </>
            )}
          </div>
            </li>
            <li className="nav-item">
              <Link to="/signup">
                <button type='button' className="btn btn-outline-primary">Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

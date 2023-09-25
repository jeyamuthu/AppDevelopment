import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import "../../assets/styles/Header.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../redux/userSlice';


function Header() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();


  const showSidebar = () => setSidebar(!sidebar);
  const user = useSelector(selectUser);
  const email = user.email ;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


 

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }} >
        <nav className="navbar navbar-expand-lg navbar-light  bg-dark sticky-top"  >
          <div className="container-fluid my-3"  id="call" >
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <a className="navbar-brand px-4 mt-3" href="#" id="brand" >
             <img  id="logo"></img>
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{margin:"0"}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mx-5 " id="navhr"> {/* Changed to ml-auto for right alignment */}
                <li className="nav-item " id="navr">
                  <a className="nav-link text-light fs-4 px-3" id="navl" aria-current="page" href="#" onClick={()=>{navigate("/home")}}>
                    Home
                  </a>
                </li>
                <li className="nav-item" id="navr" onClick={()=>{navigate("/about")}}>
                  <a className="nav-link text-light fs-4 px-3" id="navl" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item"id="navr" onClick={()=>{navigate("/contact")}}>
                  <a className="nav-link text-light fs-4 px-3" id="navl" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item text-light" id="navr"  onClick={handleLogout}>
                  <a
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/home" className="menu-bars">
                <AiIcons.AiOutlineClose color="black" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
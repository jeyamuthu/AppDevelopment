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
                  <span className="nav-link text-light fs-4 px-3" id="navl" aria-current="page" onClick={()=>{navigate("/home")}}>
                    Home
                  </span>
                </li>
                <li className="nav-item" id="navr" onClick={()=>{navigate("/about")}}>
                  <span className="nav-link text-light fs-4 px-3" id="navl">
                    About
                  </span>
                </li>
                <li className="nav-item"id="navr" onClick={()=>{navigate("/contact")}}>
                  <span className="nav-link text-light fs-4 px-3" id="navl">
                    Contact
                  </span>
                </li>
                <li className="nav-item text-light" id="navr"  onClick={handleLogout}>
                  <span
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                  <div className="actions">
                  {email ? (
                    <>
                      
                       <span className="bg-dark" onClick={handleLogout}>Logout</span>
                               
                      
                    </>
                  ) : (
                    <>
                    <span  onClick={handleLogout}>Login</span>
                    </>
                  )}
                </div>
                  </span>
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
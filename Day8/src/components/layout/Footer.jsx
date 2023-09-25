import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const openWindow = (url) => {
        window.open(url, '_blank');
    }
  return (
    <div>
      <footer className='bg-dark text-white pt-5 pb-4'>
        <div className='container text-center text-md-left'>
          <div className='row text-center text-md-left'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Little Garden</h5>
              <p>Welcome to LittleGarden !</p>
              <Link to="/feedback" id="link"><p className='text-primary'>@Feedback</p></Link>
            </div>
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Support</h5>
              <p>
                <Link to="/privacy" id='link'><span className='text-white' style={{ textDecoration: "none" }}>Privacy Policy</span></Link>
              </p>
              <p>
                <Link to="/terms" id='link'><span className='text-white' style={{ textDecoration: "none" }}>Terms & Conditions</span></Link>
              </p>
              <p>
                <Link to="/faq" id='link'><span className='text-white' style={{ textDecoration: "none" }}>FAQ</span></Link>
              </p>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Help</h5>
              <p>
                <Link to="/home" id="link"><span className='text-white' style={{ textDecoration: "none" }}>Home</span></Link>
              </p>
              <p>
                <Link to="/about" id='link'><span className='text-white' style={{ textDecoration: "none" }}>About us</span></Link>
              </p>
              <p>
                <Link to="/login" id="link"><span className='text-white' style={{ textDecoration: "none" }}>Login</span></Link>
              </p>
              <p>
                <Link to="/signup" id='link'><span className='text-white' style={{ textDecoration: "none" }}>SignIn</span></Link>
              </p>
            </div>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <Link to="/contact" id="link"><h5 className='text-uppercase mb-4 font weight-bold text-warning'>Contact</h5></Link>
              <p>
                <i class='bx bxs-home-smile'></i> Coimbatore, India
              </p>
              <p>
                <i class='bx bx-envelope'></i> 727821tuit043@skct.edu.in
              </p>
              <p>
                <i class='bx bx-phone'></i> +91 3453485343
              </p>
              <p>
                <i class='bx bx-printer' ></i>+01 238 238 23
              </p>
            </div>
          </div>
          <div className='mb-4'>
            <div className='row align-item-center'>
              <div className='col-md-7 col-lg-8'>
                <p>Copyright @2020 All rights reserved by:The provider</p>
              </div>
              <div className='col-md-7 col-lg-4'>
                <div className='text-center text-md-right'>
                <ul className='list-instyled list-inline ml-6%'>
                <li className='list-inline-item'>
                  <span
                    onClick={() => openWindow('https://www.facebook.com/')}
                    className='btn-sm text-white'
                    style={{ fontSize: "27px" }}
                  >
                    <i className='bx bxl-facebook'></i>
                  </span>
                </li>
                <li className='list-inline-item'>
                  <span
                    onClick={() => openWindow('https://www.instagram.com/')}
                    className=' btn-sm text-white'
                    style={{ fontSize: "27px" }}
                  >
                    <i className='bx bxl-instagram'></i>
                  </span>
                </li>
                <li className='list-inline-item'>
                  <span
                    onClick={() => openWindow('https://twitter.com/')}
                    className=' btn-sm text-white'
                    style={{ fontSize: "27px" }}
                  >
                    <i className='bx bxl-twitter'></i>
                  </span>
                </li>
                <li className='list-inline-item'>
                  <span
                    onClick={() => openWindow('https://www.youtube.com/')}
                    className=' btn-sm text-white'
                    style={{ fontSize: "27px" }}
                  >
                    <i className='bx bxl-youtube'></i>
                  </span>
                </li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;

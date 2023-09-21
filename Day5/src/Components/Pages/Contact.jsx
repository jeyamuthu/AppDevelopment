import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import '../Assets/Contact.css'
import Sidebar from './Sidebar';

function Contact() {
  
  return (
    <div>
      <Navbar/>
        <div className='conatiner'>
          <p className='para1 mt-3'>Contact Us!</p>
        </div>
        <div className='container'>

                <p className='cp'>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p className='cp'>
                    <i class='bx bx-envelope'></i> 727821tuit043@skct.edu.in
                </p>
                <p className='cp'>
                <i class='bx bx-phone'></i> +91 3453485343
                </p>
                <p className='cp'>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
                  
        </div>
        <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           <img  src="https://www.thehomegarden.com/static/images/contacts/contact1.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded"src="https://www.thehomegarden.com/static/images/contacts/contact2.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded" src="https://www.thehomegarden.com/static/images/contacts/contact3.jpg"/>
         </div>
      </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Contact
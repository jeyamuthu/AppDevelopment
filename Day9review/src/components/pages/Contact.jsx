import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import '../../assets/styles/Contact.css'
import Header from '../layout/Header'

function Contact() {
  return (
    <div>
    <Header/>
    <div class="container" id="cont-head">
    <div class="row" id="cont">
        <div class="col-md-7" id="cm7">
         
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name"/>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Email</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email"/>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your number"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button class="btn btn-dark">Submit</button>
        </div>
        <div class="col-md-5 " id="cm5">
          <h4>Contact us</h4>
          <div class="mt-4">
              <div class="d-flex">
                <i class="bi bi-geo-alt-fill"></i>
                <p >Address: Coimbatore,Tamilnadu</p>
              </div>
              <div class="d-flex">
                <i class="bi bi-telephone-fill"></i>
                <p>Contact :- 2318128371</p>
              </div>
              <div class="d-flex">
                <i class="bi bi-envelope-fill"></i>
                <p>Email:- Jeyamuthu@gmail.com</p>
              </div>
              <div class="d-flex">
                <i class="bi bi-browser-chrome"></i>
                <p>Website: www.contact.com</p>
              </div>
          </div>
        </div>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Contact
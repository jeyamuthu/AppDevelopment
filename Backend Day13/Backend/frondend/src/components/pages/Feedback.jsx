import React, { useState } from 'react';
import Footer from '../layout/Footer';
import '../../assets/styles/Feedback.css'
import Header from '../layout/Header';
import axios from "axios";
function Contact() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const details={email,message};

  const postData = async (details) =>{
    try{
        const response=await axios.post(
          "http://localhost:8083/feedback/newfeedback",details,
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
   
    if (!message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      postData(details)
      .then(()=>{
       
        alert("feedback was successful");
        setEmail('');
        setMessage('');
      }) 
    }
  };

  return (
    <div>
      <Header />
      <div className="contact-form">
        <h1 style={{ color: "black" }}>Feedback</h1>
        <div className="container" id="contact-container">
          <div className="main">
            <div className="content">
              <h2>Feedback</h2>
              <form onSubmit={handleSubmit}>
               
                <div>
                  <input
                    id="contact-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                  />
                  <h6 className='error'>{errors.email && <span>{errors.email}</span>}</h6>
                </div>
              
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                  ></textarea>
                  <h6 className='error'>{errors.message && <span>{errors.message}</span>}</h6>
                </div>
                <button type="submit" className="btn">
                  Send
                </button>
              </form>
            </div>
            <div className="form-img">
              <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

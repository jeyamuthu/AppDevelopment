import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function AdminFeedback() {
  const [Feedback, setFeedback] = useState(null);


  const GetAllFeedback = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8083/feedback/getfeedback"
      );
      setFeedback(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(()=>{
    GetAllFeedback();
  },[]);
  
  return (

  
    <div>
    <div class="container-fluid bg-primary text-center">
            <h2>Feedback Details</h2>
    </div>

    <table  class="table table-bordered text-center">
       
        <tbody>
        
      {Feedback && Feedback.map((feedback) => (
      
                <tr key={feedback.email}>

                    <td>{feedback.email}</td>
                    <td>{feedback.message}</td>
                </tr>
     
            
        
      ))}
      </tbody>
      </table>
    
  
  

    
    </div>
  )
}

export default AdminFeedback
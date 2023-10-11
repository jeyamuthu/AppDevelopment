import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function AdminConact() {
  const [Contact, setContact] = useState(null);


  const GetAllContact = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8083/contact/getcontact"
      );
      setContact(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(()=>{
    GetAllContact();
  },[]);
  
  return (

  
    <div>
    <div class="container-fluid  bg-primary text-center">
            <h2>Contact Details</h2>
    </div>

    <table  class="table table-bordered text-center">
       
        <tbody>
        
      {Contact && Contact.map((contact) => (
      
                <tr key={contact.email}>
                     <td>{contact.email}</td>
                     <td>{contact.mobile}</td>
                    <td>{contact.message}</td>
                </tr>
     
            
        
      ))}
      </tbody>
      </table>
    
  
  

    
    </div>
  )
}

export default AdminConact
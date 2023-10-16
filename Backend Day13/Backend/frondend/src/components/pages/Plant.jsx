import React from 'react';
import { useEffect, useState } from "react";
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../../assets/styles/Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Plant() {
  const [Plants, setPlants] = useState(null);


  const GetAllPlants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/api/v1/auth/getall"
      );
      setPlants(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(()=>{
    GetAllPlants();
  },[]);
  
  return (

  
    <div>
    <Header/>
    <section className="featured-products">
    <h2>Plant Details</h2>
  
    <div className="product-list">
      {Plants && Plants.map((plant) => (
        <div className="product-card" key={plant.id}>
     
            <img
              src={plant.plantImage}
              alt={plant.commonName}
              className="product-image"

            />
              <h3>{plant.commonName}</h3>
              <p>{plant.description}</p>
              <Link >View More</Link>
            </div>
          
        
      ))}
      
    </div>
  
  </section>
  <Footer/>
    
    </div>
  )
}

export default Plant
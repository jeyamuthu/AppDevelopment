import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Plantid() {
  const [plants, setPlants] = useState([]);
  const { id } = useParams();
  const GetAllPlants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8082/api/v1/auth/plant/getplant/${id}`
      );
      setPlants(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(() => {
    GetAllPlants();
  }, []);
  return (
 <div>
 <Header/>
      <div className="container">
      <div className="row">
      <div className="col">
        <h2 className='text-center'>{plants.commonName}</h2>
        <p>{plants.scientificName}</p>
        <p>{plants.description}</p>
        <p>{plants.plantFamily}</p>
        <p>{plants.plantType}</p>
        <p>{plants.position}</p>
        <p>{plants.frostTolerant}</p>
        <p>{plants.spacing}</p>
        <p>{plants.planting}</p>
        <p>{plants.feeding}</p>
        <p>{plants.harvesting}</p>
        <p>{plants.pests}</p>
        <p>{plants.disease}</p>
        <p>{plants.fertilization}</p>
        <p>{plants.notes}</p>
        
      </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
}

export default Plantid;
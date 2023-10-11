import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../../assets/styles/AddOrUpdate.css';
import axios from "axios";

function AddOrUpdate() {
    const[commonName,setCommonName]=useState('');
    const[scientificName,setScientificName]=useState('');
    const[description,setDescription]=useState('');
    const[plantFamily,setPlantFamily]=useState('');
    const[plantType,setPlantType]=useState('');
    const[position,setPosition]=useState('');
    const[frostTolerant,setFrostTolerant]=useState('');
    const[spacing,setSpacing]=useState('');
    const[planting,setPlanting]=useState('');
    const[feeding,setFeeding]=useState('');
    const[harvesting,setHarvesting]=useState('');
    const[pests,setPests]=useState('');
    const[disease,setDisease]=useState('');
    const[fertilization,setFertilization]=useState('');
    const[notes,setNotes]=useState('');
    const[plantImage,setPlantImage]=useState('');
    const [errors, setErrors] = useState({});
    const nav=useNavigate();
   
    const details={commonName,scientificName,description,plantFamily,plantType,position,frostTolerant,spacing,planting,feeding,harvesting,pests,disease,fertilization,notes,plantImage};
    const postData = async (details) =>{
      try{
          const response=await axios.post(
            "http://localhost:8082/api/v1/auth/plant/add",details,
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

    const handleSubmit =(e)=>{
        e.preventDefault();
        const validationErrors={};
        if (!commonName.trim()) {
            validationErrors.commonName = "name is required";
              }
        if (!scientificName.trim()) {
            validationErrors.scientificName = "scientific name is required";
              }
        if (!description.trim()) {
            validationErrors.description = "description is required";
              }
        if (!plantFamily.trim()) {
            validationErrors.plantFamily = "plant family is required";
              }
        if (!plantType.trim()) {
            validationErrors.plantType = "plant type is required";
              }
        if (!position.trim()) {
            validationErrors.position = "position is required";
              }
        if (!frostTolerant.trim()) {
            validationErrors.frostTolerant = "frost tolerant is required";
              }
        if (!spacing.trim()) {
            validationErrors.spacing = "spacing is required";
              }
        if (!planting.trim()) {
            validationErrors.planting = "planting is required";
              }
        if (!feeding.trim()) {
            validationErrors.feeding = "feeding is required";
              }
        if (!harvesting.trim()) {
            validationErrors.harvesting = "harvesting is required";
              }
        if (!pests.trim()) {
            validationErrors.pests = "pests is required";
              }
        if (!disease.trim()) {
            validationErrors.disease = "disease is required";
              }
        if (!fertilization.trim()) {
            validationErrors.fertilization = "fertilization is required";
              }
        if (!notes.trim()) {
            validationErrors.notes = "notes is required";
              }
        if (!plantImage.trim()) {
            validationErrors.plantImage = "plantImage is required";
              }

              setErrors(validationErrors);
  
              if (Object.keys(validationErrors).length === 0) {
                
                postData(details)
                .then(()=>{
                 
                  alert("plant detail successfully added") ;
                  nav('/plant')
                })      
              }

    }
    
  return (
    <div className='body'>
      <div className="container" id="AddCont">
        <div className="row" >
          <div id="cm6">
            <form>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={commonName}
                  onChange={(e)=>setCommonName(e.target.value)}
                  placeholder="Enter plant name"
                />
                <h6 className='error'>{errors.commonName && <span>{errors.commonName}</span>}</h6>
              </div>
            
              <div className="mb-3">
                <label>ScientificName</label>
                <input
                  type="text"
                  className="form-control"
                  value={scientificName}
                  onChange={(e)=>setScientificName(e.target.value)}
                  placeholder="Enter scientific name"
                />
                <h6 className='error'>{errors.scientificName && <span>{errors.scientificName}</span>}</h6>
              </div>
            
              <div className="mb-3">
                <label>description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  placeholder="Enter plant description"
                />
                <h6 className='error'>{errors.description && <span>{errors.description}</span>}</h6>
              </div>
          
              <div className="mb-3">
                <label>PlantFamily</label>
                <input
                  type="text"
                  className="form-control"
                  value={plantFamily}
                  onChange={(e)=>setPlantFamily(e.target.value)}
                  placeholder="Enter Plant Family"
                />
                <h6 className='error'>{errors.plantFamily && <span>{errors.plantFamily}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>PlantType</label>
                <input
                  type="text"
                  className="form-control"
                  value={plantType}
                  onChange={(e)=>setPlantType(e.target.value)}
                  placeholder="Enter Plant Type"
                />
                <h6 className='error'>{errors.plantType && <span>{errors.plantType}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Position</label>
                <input
                  type="text"
                  className="form-control"
                  value={position}
                  onChange={(e)=>setPosition(e.target.value)}
                  placeholder="Enter Plant Position"
                />
                <h6 className='error'>{errors.position && <span>{errors.position}</span>}</h6>
              </div>
            
              <div className="mb-3">
                <label>FrostTolerant</label>
                <input
                  type="text"
                  className="form-control"
                  value={frostTolerant}
                  onChange={(e)=>setFrostTolerant(e.target.value)}
                  placeholder="Enter Frost Tolerant"
                />
                <h6 className='error'>{errors.frostTolerant && <span>{errors.frostTolerant}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Spacing</label>
                <input
                  type="text"
                  className="form-control"
                  value={spacing}
                  onChange={(e)=>setSpacing(e.target.value)}
                  placeholder="Enter plant spacing"
                />
                <h6 className='error'>{errors.spacing && <span>{errors.spacing}</span>}</h6>
              </div>
            
              <div className="mb-3">
                <label>planting</label>
                <input
                  type="text"
                  className="form-control"
                  value={planting}
                  onChange={(e)=>setPlanting(e.target.value)}
                  placeholder="Enter planting"
                />
                <h6 className='error'>{errors.planting && <span>{errors.planting}</span>}</h6>
              </div>
            
              <div className="mb-3">
                <label>feeding</label>
                <input
                  type="text"
                  className="form-control"
                  value={feeding}
                  onChange={(e)=>setFeeding(e.target.value)}
                  placeholder="Enter feeding"
                />
                <h6 className='error'>{errors.feeding && <span>{errors.feeding}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Harvesting</label>
                <input
                  type="text"
                  className="form-control"
                  value={harvesting}
                  onChange={(e)=>setHarvesting(e.target.value)}
                  placeholder="Enter harvesting"
                />
                <h6 className='error'>{errors.harvesting && <span>{errors.harvesting}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Pests</label>
                <input
                  type="text"
                  className="form-control"
                  value={pests}
                  onChange={(e)=>setPests(e.target.value)}
                  placeholder="Enter pests"
                />
                <h6 className='error'>{errors.pests && <span>{errors.pests}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Disease</label>
                <input
                  type="text"
                  className="form-control"
                  value={disease}
                  onChange={(e)=>setDisease(e.target.value)}
                  placeholder="Enter disease"
                />
                <h6 className='error'>{errors.disease && <span>{errors.disease}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Fertilization</label>
                <input
                  type="text"
                  className="form-control"
                  value={fertilization}
                  onChange={(e)=>setFertilization(e.target.value)}
                  placeholder="Enter fertilization"
                />
                <h6 className='error'>{errors.fertilization && <span>{errors.fertilization}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>Notes</label>
                <input
                  type="text"
                  className="form-control"
                  value={notes}
                  onChange={(e)=>setNotes(e.target.value)}
                  placeholder="Enter notes"
                />
                <h6 className='error'>{errors.notes && <span>{errors.notes}</span>}</h6>
              </div>
              <div className="mb-3">
                <label>PlantImage</label>
                <input
                  type="text"
                  className="form-control"
                  value={plantImage}
                  onChange={(e)=>setPlantImage(e.target.value)}
                  placeholder="Enter plant Image"
                />
                <h6 className='error'>{errors.plantImage && <span>{errors.plantImage}</span>}</h6>
              </div>
            
              <button className="btn btn-dark" onClick={handleSubmit} id="submit-btn" type="submit">
                Submit
              </button>
              <button className="btn btn-dark" id="cancel-btn">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrUpdate;

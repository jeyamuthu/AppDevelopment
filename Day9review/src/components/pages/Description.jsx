import  { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom';
import  '../../assets/styles/Description.css'

const Description = () => {
  return (
    <Fragment>
      <div className="centerContainer">
        <div className="description">
          <img  className ="home-img" src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Welcome description" />
          <div className="description_content">
            <div className="title">Welcome to LittleGarden!</div>
            <p>
            We are your go-to source for all your home and garden needs. Explore our extensive collection of high-quality products and accessories designed to enhance your living spaces and bring beauty to your outdoor areas.
            </p>
            
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
    </Fragment>
  );
};

export default Description;

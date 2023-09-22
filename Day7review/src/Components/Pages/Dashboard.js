import React from 'react'
import Navbar from './Navbar'

import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Dashboard() {
    const featuredProducts = useSelector((state) => state.featuredProducts.products);

  return (
    <div>
    <Navbar/>
  
    <div className='container'>
    
    <p className='para mt-3' >Details View</p>
    </div>
  
    <div className='container'> 
      
         <div className='row'>
         {featuredProducts.map((product) => (
          
          <div className="product col-sm-3" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="st" />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
         </div>
         </div>
        

    <Footer/>
    </div>
  )
}

export default Dashboard
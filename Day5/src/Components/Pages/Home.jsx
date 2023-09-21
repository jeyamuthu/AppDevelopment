import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Assets/Home.css'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Home() {

  const featuredProducts = useSelector((state) => state.featuredProducts.products);
  return (
    <div>
    <Navbar/> 

    <div className='container'> 
      <p className='para mt-3' >Products</p>
        </div>
    <div className='container'> 
      
         <div className='row'>
         {featuredProducts.map((product) => (
          
          <div className="product col-sm-4" key={product.id}>
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

export default Home


   

  
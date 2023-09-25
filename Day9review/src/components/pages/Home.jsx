import React, { useEffect,useState } from 'react'
import Navbar from '../layout/Navbar'
import Slide from '../layout/Slide'
import Footer from '../layout/Footer'

import '../../assets/styles/Home.css'
import Description from './Description'

import Loader from '../layout/Loader'
import Guide from './Guide'
import Header from '../layout/Header'




function Home() {

const[isLoading,setLoading]=useState(true);

useEffect(()=> {
  const loadingTimer=setTimeout(() => {
    setLoading(false);
    
  }, 2000);
  return  ()=>clearTimeout(loadingTimer);
},[]);
  return (
    <div>
    {isLoading? (
      <Loader/>
    ):(
        <div>

        <Header/> 

        <Slide/>
        <Description className="mt-7"/>
        <section className="featured-products">
        <h2>Growing Guides</h2>
        <div className="product-list">
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/edited_blackberry/eb8ddee17ea1743be543d3617a3a72b6.jpg"
              alt="Blockberry"
              className="product-image"
            />
            <h3>Blockberry</h3>
          
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20201203_200613_934/76aa6e67c7982df25e8afda193fd1732.jpg"
              alt="Chamomile"
              className="product-image"
            />
            <h3>Chamomile</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/jerusalem-artichoke-3703002_1920/acfa0295179fac3d32eeb2aea37ca460.jpg"
              alt="Jerusalem Artichoke"
              className="product-image"
            />
            <h3>Jerusalem Artichoke</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20230604_205029_190/bcaf6e9ae3234fc4ac08ed89c9d100e2.jpg"
              alt="Lettuce"
              className="product-image"
            />
            <h3>Lettuce</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/apricot-871493_1920/17e6891076c1de5c11b6653fed73c841.jpg"
              alt="Apricot"
              className="product-image"
            />
            <h3>Apricot</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/vines-1747224_1920/493ffb6f5a6b59571e7ddb3b5ce5091b.jpg"
              alt="Vines"
              className="product-image"
            />
            <h3>Vines</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/mango-51995_1920/83f3e99f0bf754b0d707b6d2aa9ab430.jpg"
              alt="Mango"
              className="product-image"
            />
            <h3>Mango</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/oranges-1117628_1920/962d0a1762bbd767888d2765c7e351ac.jpg"
              alt="Orange"
              className="product-image"
            />
            <h3>Orange</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/redcurrant-166372_1920/9f4bf4c4e8433ce13b1914e971fa899e.jpg"
              alt="Redcurrants"
              className="product-image"
            />
            <h3>Redcurrant</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/currants-447438_1920/57b1cb54f7572efdc790408e576d01e1.jpg"
              alt="Currants"
              className="product-image"
            />
            <h3>Currants</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/turnip/b88db289bc22ac51482b9c7697f28d69.jpg"
              alt="Turnip"
              className="product-image"
            />
            <h3>Turnip</h3>
          </div>
          <div className="product-card">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20200107_080202_1/7217444af935ab29ce7b93f85c094b3f.jpg"
              alt="Corn"
              className="product-image"
            />
            <h3>Corn</h3>
          </div>
         
         
        </div>
      </section>
     
   <Guide/>
    <Footer/>
        </div>
    )}
   
    </div>
  )
}

export default Home




   

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Assets/Home.css'

function Home() {

  return (
    <div>
    <Navbar/> 

    <div className='container'> 
      <p className='para mt-3' >Welcome to HomeGarden!</p>
        </div>
        <div className='container'>
        <div className='row'>
           <div className='col-sm-4'>
             <img  src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210518_222112_564/3f9e2069b29e02ecfbc6dd2853575491.jpg"/>
           </div>
           <div className='col-sm-4'>
             <img  className="lazyloaded"src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210530_160554_068/2688cc6604d516f2757a25b1319c9854.jpg"/>
           </div>
           <div className='col-sm-4'>
             <img  className="lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210120_212242_071/3dca7759ccf1972ff517cdefc14f60f5.jpg"/>
           </div>
        </div>
        </div>
        <div className='container'>
        <div className='row'>
           <div className='col-sm-4'>
             <img  src="https://www.thehomegarden.com/static/images/contacts/contact1.jpg"/>
           </div>
           <div className='col-sm-4'>
             <img  className="lazyloaded"src="https://www.thehomegarden.com/static/images/contacts/contact2.jpg"/>
           </div>
           <div className='col-sm-4'>
             <img  className="lazyloaded" src="https://www.thehomegarden.com/static/images/contacts/contact3.jpg"/>
           </div>
        </div>
        </div>
    
    
    <Footer/>
    </div>
  )
}

export default Home


   

  
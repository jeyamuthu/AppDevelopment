import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className='container'>
    <p className='para mt-3' >Welcome to Garden!</p>
    </div>

    <Footer/>
    </div>
  )
}

export default Dashboard
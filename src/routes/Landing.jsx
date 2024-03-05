import React from 'react'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Footer from '../components/landing/Footer'
import Programs from '../components/landing/Programs'

const Landing = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Programs/>
     <Footer/>
    </div>
  )
}

export default Landing

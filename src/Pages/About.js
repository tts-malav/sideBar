import React from 'react'
import NavbarA from '../Components/NavbarA'
import HeroSection from '../Components/HeroSection'

const About = () => {
  return (
    <>
    <div className='flex flex-col'>
      <div className='sticky w-screen'>
        <NavbarA />
      </div>
      <div className="mt-16"> 
        <HeroSection />
      </div>
    </div>

    </>
  )
}

export default About
import { useState } from 'react'
import Navbar from './components/landing_page_components/Navbar'
import Hero from './components/landing_page_components/Hero'
import AboutUs from './components/landing_page_components/AboutUs'
import WhyUs from './components/landing_page_components/WhyUs'
import OurHouseboats from './components/landing_page_components/OurHouseboats'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyUs />
      <OurHouseboats />
    </>
  )
}

export default App

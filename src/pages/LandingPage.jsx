import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/landing_page_components/Hero'
import AboutUs from '../components/landing_page_components/AboutUs'
import WhyUs from '../components/landing_page_components/WhyUs'
import OurHouseboats from '../components/landing_page_components/OurHouseboats'
import Badge from '../components/landing_page_components/Badge'
import StepInsideInfinite from '../components/landing_page_components/StepInsideInfinite'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'


function LandingPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <WhyUs />
            <OurHouseboats />
            <Badge />
            <StepInsideInfinite />
            <ContactUs />
            <Footer />
        </>
    )
}

export default LandingPage
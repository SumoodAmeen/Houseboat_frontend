import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/aboutus_page_components/Hero'
import AboutUs from '../components/aboutus_page_components/AboutUs'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function Details() {

    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Details
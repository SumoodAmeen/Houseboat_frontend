import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/aboutus_page_components/Hero'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function Details() {

    return (
        <>
            <Navbar />
            <Hero />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Details
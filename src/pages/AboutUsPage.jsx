import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/aboutus_page_components/Hero'
import AboutUs from '../components/aboutus_page_components/AboutUs'
import OurStory from '../components/aboutus_page_components/OurStory'
import Badge from '../components/aboutus_page_components/Badge'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function AboutUsPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <OurStory />
            <Badge />
            <ContactUs />
            <Footer />
        </>
    )
}

export default AboutUsPage
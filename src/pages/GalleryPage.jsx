import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/gallery_page_components/Hero'
import Gallery from '../components/gallery_page_components/Gallery'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function GalleryPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    )
}

export default GalleryPage
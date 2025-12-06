import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import BoatDetail from '../components/detail_page_components/BoatDetail'
import Gallery from '../components/detail_page_components/Gallery'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function Details() {

    return (
        <>
            <Navbar />
            <BoatDetail />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Details
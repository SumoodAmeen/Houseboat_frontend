import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/booking_page_components/Hero'
import ForYou from '../components/booking_page_components/ForYou'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'



function BookingPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <ForYou />
            <ContactUs />
            <Footer />
        </>
    )
}

export default BookingPage
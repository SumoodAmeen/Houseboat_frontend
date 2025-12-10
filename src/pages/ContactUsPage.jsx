import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/contactus_page_component/Hero'
import ContactForm from '../components/contactus_page_component/ContactForm'
import Maps from '../components/contactus_page_component/Maps'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function ContactUsPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <ContactForm />
            <Maps />
            <Footer />
        </>
    )
}

export default ContactUsPage
import { useState } from 'react'
import Navbar from '../components/landing_page_components/Navbar'
import Hero from '../components/contactus_page_component/Hero'
import ContactForm from '../components/contactus_page_component/ContactForm'
import Footer from '../components/landing_page_components/Footer'

function ContactUsPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactUsPage
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BookingPage from './pages/BookingPage'
import Details from './pages/Details'
import GalleryPage from './pages/GalleryPage'
import AboutUsPage from './pages/AboutUsPage'
import ScrollToTop from './ScrollToTop'
import ContactUsPage from './pages/ContactUsPage'


function App() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
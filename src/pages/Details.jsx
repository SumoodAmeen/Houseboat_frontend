import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { houseboats } from '../data/houseboats'
import Navbar from '../components/landing_page_components/Navbar'
import BoatDetail from '../components/detail_page_components/BoatDetail'
import Gallery from '../components/detail_page_components/Gallery'
import Description from '../components/detail_page_components/Description'
import ContactForm from '../components/detail_page_components/ContactForm'
import ContactUs from '../components/landing_page_components/ContactUs'
import Footer from '../components/landing_page_components/Footer'

function Details() {
    const { id } = useParams();
    const [boat, setBoat] = useState(null);

    useEffect(() => {
        const foundBoat = houseboats.find(b => b.id === parseInt(id));
        if (foundBoat) {
            setBoat(foundBoat);
        }
    }, [id]);

    if (!boat) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <BoatDetail boat={boat} />
            <Gallery />
            <Description boat={boat} />
            <ContactForm />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Details
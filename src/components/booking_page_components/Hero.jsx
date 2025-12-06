import React from 'react';
import heroImage from '../../assets/booking/booking_hero.webp';

const Hero = () => {
    return (
        <section
            className="relative w-full h-[55vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay for better text readability (optional) */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="relative h-full flex items-center px-4 md:px-[30px]">
                <div className="max-w-[1750px] mx-auto w-full">
                    <h1 className="font-glitten text-[33px] md:text-[80px] md:pt-0 pt-85 font-400 text-white leading-tight">
                        Comfort & Luxury<br />
                        Book Your Perfect Stay
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;

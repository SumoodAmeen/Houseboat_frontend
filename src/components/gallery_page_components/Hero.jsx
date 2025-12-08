import React from 'react';
import galleryHero from '../../assets/gallery/gallery_hero.webp';

const Hero = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[85vh] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${galleryHero})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-[50px]">
                <h1 className="font-glitten text-white text-[33px] md:text-[60px] font-normal leading-tight mt-20 md:mt-0">
                    Gallery
                </h1>
            </div>
        </section>
    );
};

export default Hero;

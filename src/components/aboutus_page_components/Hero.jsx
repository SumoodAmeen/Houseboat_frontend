import React from 'react';
import aboutHero from '../../assets/about/about_hero.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[85vh] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${aboutHero})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-[50px] md:pb-[100px] px-4 md:px-[50px]">
                <h1 className="font-glitten text-white text-[33px] md:text-[60px] font-normal leading-tight">
                    About Infinity
                </h1>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';

// Importing images
import boat1 from '../../assets/landing/boat1.webp';
import bookingHero from '../../assets/landing/booking_hero (1).webp';
import step2 from '../../assets/landing/step2.webp';
import step4 from '../../assets/landing/step4.webp';
import contact3 from '../../assets/landing/boat3.png';
import caneo from '../../assets/gallery/caneo.webp';
import galleryHero from '../../assets/gallery/gallery_hero.webp';
import boat2 from '../../assets/landing/boat2.webp';

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    // Image data structure for easier management
    const galleryImages = [
        // Block 1 (Initial View)
        { src: boat1, alt: "Houseboat", className: "col-span-1 md:col-span-6 h-[250px] md:h-[350px]" },
        { src: bookingHero, alt: "Sunset", className: "col-span-1 md:col-span-6 h-[250px] md:h-[350px]" },

        // Complex Grid Section
        { src: step2, alt: "Dining", className: "col-span-1 md:col-span-3 h-[250px] md:h-[300px]" },
        { src: step4, alt: "Wheel", className: "col-span-1 md:col-span-3 h-[250px] md:h-[300px]" },
        { src: caneo, alt: "Canoe", className: "col-span-1 md:col-span-4 md:row-span-2 h-[250px] md:h-[630px]" }, // Tall image on right
        { src: contact3, alt: "Sunset Boat", className: "col-span-1 md:col-span-6 h-[250px] md:h-[300px]" },

        // Extra images for "View More"
        { src: galleryHero, alt: "Gallery Hero", className: "col-span-1 md:col-span-6 h-[250px] md:h-[350px]" },
        { src: boat2, alt: "Boat 2", className: "col-span-1 md:col-span-6 h-[250px] md:h-[350px]" },
    ];

    // Mobile: Show 4 initially
    // Desktop: Show 6 initially (The first block)
    const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

    // Custom layout render for Desktop to match the specific design
    const renderDesktopLayout = () => {
        const imagesToRender = showAll ? galleryImages : galleryImages.slice(0, 6);

        return (
            <div className="hidden md:flex flex-col gap-6 max-w-[1240px] mx-auto px-4">
                {/* Row 1 */}
                <div className="flex gap-6">
                    <div className="w-1/2 h-[350px] rounded-[20px] overflow-hidden">
                        <img src={boat1} alt="Houseboat" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="w-1/2 h-[350px] rounded-[20px] overflow-hidden">
                        <img src={bookingHero} alt="Sunset" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                {/* Row 2 & 3 Container */}
                <div className="flex gap-6">
                    {/* Left Column Group */}
                    <div className="w-[65%] flex flex-col gap-6">
                        {/* Top Row of Left Group */}
                        <div className="flex gap-6">
                            <div className="w-1/2 h-[300px] rounded-[20px] overflow-hidden">
                                <img src={step2} alt="Dining" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="w-1/2 h-[300px] rounded-[20px] overflow-hidden">
                                <img src={step4} alt="Wheel" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        {/* Bottom Row of Left Group */}
                        <div className="w-full h-[300px] rounded-[20px] overflow-hidden">
                            <img src={contact3} alt="Sunset Boat" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Right Column (Tall Image) */}
                    <div className="w-[35%] h-[624px] rounded-[20px] overflow-hidden">
                        <img src={caneo} alt="Canoe" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                {/* Extra Content (Shown when View More is clicked) */}
                {showAll && (
                    <div className="flex gap-6 mt-0">
                        <div className="w-1/2 h-[350px] rounded-[20px] overflow-hidden">
                            <img src={galleryHero} alt="Gallery Hero" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-1/2 h-[350px] rounded-[20px] overflow-hidden">
                            <img src={boat2} alt="Boat 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const renderMobileLayout = () => {
        // Mobile: Show 4 items initially
        const mobileImages = showAll ? galleryImages : galleryImages.slice(0, 4);

        return (
            <div className="md:hidden flex flex-col gap-4 px-4">
                {mobileImages.map((img, index) => (
                    <div key={index} className="w-full h-[250px] rounded-[15px] overflow-hidden">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="py-[50px] md:py-[80px] bg-white" id="gallery">
            <div className="text-center mb-[30px] md:mb-[50px]">
                <h2 className="font-glitten text-[24px] md:text-[45px] text-[#0E1727] font-normal">
                    Step Into Infinity
                </h2>
            </div>

            {renderDesktopLayout()}
            {renderMobileLayout()}

            <div className="flex justify-center mt-[40px] md:mt-[60px]">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-[134px] md:w-[163px] h-[35px] md:h-[43px] bg-[#009FE0] text-white rounded-[6px] md:rounded-[10px] font-400 text-[14px] md:text-[16px] hover:bg-[#0088c2] transition-colors duration-300"
                >
                    {showAll ? 'View Less' : 'View All'}
                </button>
            </div>
        </section>
    );
};

export default Gallery;

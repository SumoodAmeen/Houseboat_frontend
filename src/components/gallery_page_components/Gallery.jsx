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

    return (
        <section className="py-[50px] md:py-[80px] bg-white" id="gallery">
            <div className="text-center mb-[30px] md:mb-[50px]">
                <h2 className="font-glitten text-[24px] md:text-[45px] text-[#0E1727] font-normal">
                    Step Into Infinity
                </h2>
            </div>

            <div className="flex flex-col gap-2 md:gap-6 max-w-[1240px] mx-auto px-4">
                {/* Row 1 */}
                <div className="flex gap-2 md:gap-6">
                    <div className="w-1/2 h-[120px] md:h-[350px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                        <img src={boat1} alt="Houseboat" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="w-1/2 h-[120px] md:h-[350px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                        <img src={bookingHero} alt="Sunset" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                {/* Row 2 & 3 Container */}
                <div className="flex gap-2 md:gap-6">
                    {/* Left Column Group */}
                    <div className="w-[65%] flex flex-col gap-2 md:gap-6">
                        {/* Top Row of Left Group */}
                        <div className="flex gap-2 md:gap-6">
                            <div className="w-1/2 h-[100px] md:h-[300px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                                <img src={step2} alt="Dining" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="w-1/2 h-[100px] md:h-[300px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                                <img src={step4} alt="Wheel" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        {/* Bottom Row of Left Group */}
                        <div className="w-full h-[100px] md:h-[300px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                            <img src={contact3} alt="Sunset Boat" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Right Column (Tall Image) */}
                    <div className="w-[35%] h-[208px] md:h-[624px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                        <img src={caneo} alt="Canoe" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                {/* Extra Content (Shown when View More is clicked) */}
                {showAll && (
                    <div className="flex gap-2 md:gap-6 mt-0">
                        <div className="w-1/2 h-[120px] md:h-[350px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                            <img src={galleryHero} alt="Gallery Hero" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-1/2 h-[120px] md:h-[350px] rounded-[10px] md:rounded-[20px] overflow-hidden">
                            <img src={boat2} alt="Boat 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                )}
            </div>

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

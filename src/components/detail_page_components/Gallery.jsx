import React, { useState } from 'react';
import boat1 from '../../assets/landing/boat1.webp';
import boat2 from '../../assets/landing/boat2.webp';
import boat3 from '../../assets/landing/boat3.png';
import heroImage from '../../assets/booking/booking_hero.webp';
import heroHouseboat from '../../assets/landing/Hero_houseboat.webp';
import step1 from '../../assets/landing/step1.webp';
import step2 from '../../assets/landing/step2.png';
import step3 from '../../assets/landing/step3.png';
import step4 from '../../assets/landing/step4.png';

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    const images = [
        heroHouseboat, // 1 (Full on mobile)
        boat2,         // 2 (Half)
        step1,         // 3 (Half)
        step2,         // 4 (Half)
        step3,         // 5 (Half)
        boat1,         // 6 (Full on mobile)
        step4,
        boat3,
        heroImage
    ];

    // Desktop: Show 6 images (2 rows of 3) initially
    // Mobile: Show 6 images (4 rows: 1, 2, 2, 1) initially
    const visibleImages = showAll ? images : images.slice(0, 6);

    return (
        <section className="w-full py-8 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
                <h2 className="font-glitten text-[30px] md:text-[40px] text-[#2D3542] text-center mb-8 md:mb-12">
                    Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {visibleImages.map((img, index) => (
                        <div
                            key={index}
                            className={`
                                relative overflow-hidden rounded-[20px] h-[200px] md:h-[300px]
                                ${/* Mobile Layout Logic */ ''}
                                ${index === 0 || index === 5 ? 'col-span-2 md:col-span-1' : 'col-span-1'}
                            `}
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                {!showAll && images.length > 6 && (
                    <div className="flex justify-center mt-8 md:mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="w-[300px] md:w-[200px] h-[44px] md:h-[50px] bg-[#00A8E8] text-white rounded-[10px] text-[16px] font-400 hover:bg-[#0096d1] transition-colors"
                        >
                            View All
                        </button>
                    </div>
                )}

                {showAll && (
                    <div className="flex justify-center mt-8 md:mt-12">
                        <button
                            onClick={() => setShowAll(false)}
                            className="w-[300px] md:w-[200px] h-[44px] md:h-[50px] border border-[#00A8E8] text-[#00A8E8] rounded-[10px] text-[16px] font-400 hover:bg-blue-50 transition-colors"
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;

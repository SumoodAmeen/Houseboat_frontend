import React from 'react';
import badgeBg from '../../assets/about/badge.webp';

const Badge = () => {
    return (
        <section className="w-full px-4 pb-[50px] md:pb-[80px] bg-white">
            <div className="max-w-[1240px] mx-auto">
                <div
                    className="relative w-full rounded-[20px] overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-around py-[60px] md:py-[50px] gap-[40px] md:gap-0"
                    style={{
                        backgroundImage: `url(${badgeBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#0E1727]/80"></div>

                    {/* Content Items */}

                    {/* Item 1: Since 1980 */}
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="font-glitten text-[16px] md:text-[20px] text-white/80 font-normal mb-1 md:mb-2 md:order-1 order-2">
                            Since
                        </span>
                        <span className="font-outfit text-[40px] md:text-[60px] text-white font-500 leading-none md:order-2 order-1">
                            1980
                        </span>
                    </div>

                    {/* Item 2: Happy Guests */}
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="font-glitten text-[16px] md:text-[20px] text-white/80 font-normal mb-1 md:mb-2 md:order-1 order-2">
                            Happy Guests
                        </span>
                        <span className="font-outfit text-[40px] md:text-[60px] text-white font-500 leading-none md:order-2 order-1">
                            1000+
                        </span>
                    </div>

                    {/* Item 3: Owned House Boats */}
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="font-glitten text-[16px] md:text-[20px] text-white/80 font-normal mb-1 md:mb-2 md:order-1 order-2">
                            Owned House Boats
                        </span>
                        <span className="font-outfit text-[40px] md:text-[60px] text-white font-500 leading-none md:order-2 order-1">
                            5
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Badge;

import React, { useState } from 'react';
import boatImage from '../../assets/landing/boat1.webp';

const BoatDetail = ({ boat }) => {
    return (
        <section className="w-full py-8 md:py-40 bg-white">
            <div className="max-w-full mx-auto px-4 md:pl-[50px] md:pr-[0px]">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">

                    {/* Mobile Image (Visible only on mobile) */}
                    <div className="md:hidden w-full flex justify-center mb-6">
                        <img
                            src={boat.image}
                            alt={boat.title}
                            className="w-[353px] h-[322px] object-cover rounded-[20px]"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left md:h-[630px] md:justify-end md:gap-10">
                        <div>
                            <h1 className="font-glitten text-[#2D3542] text-[30px] md:text-[40px] w-[298px] md:w-[749px] mb-4 md:mb-6 leading-tight">
                                {boat.title}
                            </h1>

                            <p className="text-[#2D3542] text-[14px] md:text-[18px] w-[342px] md:w-[660px] leading-[22px] md:leading-[30px] mb-6 md:mb-0 font-400">
                                {boat.longDescription}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="w-[300px] md:w-[469px] h-[44px] md:h-[50px] bg-[#00A8E8] text-white rounded-[10px] text-[16px] font-400 hover:bg-[#0096d1] transition-colors">
                                Book Now
                            </button>
                            {/* Heart Icon for Mobile/Desktop if needed, not specified but common in details */}
                            <button className="w-[44px] md:w-[50px] h-[44px] md:h-[50px] border border-[#2D3542]/20 rounded-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <svg className="w-6 h-6 text-[#2D3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Image (Visible only on desktop) */}
                    <div className="hidden md:block">
                        <img
                            src={boat.image}
                            alt={boat.title}
                            className="w-[974px] h-[700px] object-cover rounded-l-[20px] rounded-r-[0px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BoatDetail;

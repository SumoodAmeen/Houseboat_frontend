import React from 'react';
import { useNavigate } from 'react-router-dom';
import { houseboats } from '../../data/houseboats';
import tickIcon from '../../assets/booking/tick.svg';

const ForYou = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-full mx-auto">
                {/* Title */}
                <h2 className="font-glitten text-[24px] pl-[34px] md:pl-[50px] md:text-[40px] font-400 text-[#2D3542] mb-8 md:mb-12">
                    For You
                </h2>

                {/* Cards Container */}
                <div className="flex flex-col gap-6 md:gap-18 items-center">
                    {houseboats.map((boat) => (
                        <div
                            key={boat.id}
                            className="w-[353px] md:w-[1460px] h-[508px] md:h-[495px] bg-[#FFFFFF] rounded-[20px] shadow-[8px_8px_15px_15px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Image */}
                            <div className="relative w-full pt-[10px] md:w-[589px] h-[180px] md:h-[495px] flex-shrink-0 md:p-[10px]">
                                <img
                                    src={boat.image}
                                    alt={boat.title}
                                    className="w-[333px] md:w-full h-[180px] md:h-full object-cover mx-auto md:mx-0 rounded-[10px] md:rounded-[20px]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                {/* Title and Description */}
                                <div>
                                    <h3 className="text-[20px] md:text-[30px] font-400 text-[#2D3542] mb-2">
                                        {boat.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[18px] font-400 text-[#2D3542] mb-3">
                                        {boat.description}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[14px] md:text-[16px] font-400 text-[#2D3542]">
                                            5 Star Rating
                                        </span>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-6 mb-4">
                                        {boat.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <img src={tickIcon} alt="check" className="w-4 h-4 md:w-5 md:h-5" />
                                                <span className="text-[12px] md:text-[14px] font-400 text-[#2D3542]">
                                                    {amenity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price and Button */}
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <p className="text-[12px] md:text-[14px] font-400 text-[#2D3542] mb-1">
                                            starting from
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[24px] md:text-[32px] font-600 text-[#2D3542]">
                                                ₹{boat.price}
                                            </span>
                                            <span className="text-[14px] md:text-[16px] font-400 text-[#2D3542]">
                                                / night
                                            </span>
                                        </div>
                                        <p className="text-[10px] md:text-[12px] font-400 text-gray-500">
                                            excl. tax
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate(`/details/${boat.id}`)}
                                        className="w-full md:w-[625px] h-[44px] md:h-[56px] bg-[#00A8E8] text-white rounded-[10px] text-[16px] md:text-[18px] font-400 hover:bg-[#0096d1] transition-colors pr-4">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForYou;

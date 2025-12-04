import React, { useState } from 'react';

const Hero = () => {
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ guests, checkIn, checkOut });
        // Add your form submission logic here
    };

    return (
        <section className="relative min-h-[98vh] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute md:h-[90vh] inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/src/assets/landing/Hero_houseboat.webp')",
                }}
            >
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 pt-[150px] md:pt-[230px] px-4 md:px-0">
                {/* Title */}
                <h1 className="font-glitten font-400 text-[33px] md:text-[60px] leading-[43px] md:leading-[80px] w-[351px] md:w-[924px] pl-4 md:pl-[50px] text-gray-900">
                    Experience an Authentic Homestay in{' '}
                    <span className="text-[#00A8E8]">Kerala Backwaters.</span>
                </h1>

                {/* Description */}
                <p className="font-400 text-[14px] md:text-[18px] leading-[20px] md:leading-normal w-[318px] md:w-[581px] pl-4 md:pl-[50px] mt-6 text-black">
                    Luxury houseboats with private crews, clean interiors, and transparent pricing — book your stay without the usual guesswork.
                </p>

                {/* Button */}
                <button className="w-[134px] md:w-[163px] h-[35px] md:h-[43px] bg-[#00A8E8] text-white rounded-[6px] md:rounded-[10px] ml-4 md:ml-[50px] mt-6 font-400 text-[14px] md:text-[16px] hover:bg-[#0088c2] transition-colors duration-300">
                    Explore Now
                </button>
            </div>

            {/* Booking Form - Desktop */}
            <div className="hidden md:block absolute bottom-[5px] left-1/2 transform -translate-x-1/2 w-[922px] h-[143px] bg-white rounded-[15px] shadow-2xl">
                <form onSubmit={handleSubmit} className="flex items-center justify-between h-full px-8">
                    {/* Guests */}
                    <div className="flex flex-col">
                        <label className="text-[16px] font-400 text-gray-700 mb-2">
                            Guests
                        </label>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-[204px] h-[51px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8] cursor-pointer"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Check In */}
                    <div className="flex flex-col">
                        <label className="text-[16px] font-400 text-gray-700 mb-2">
                            Check In
                        </label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className="w-[204px] h-[51px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8]"
                        />
                    </div>

                    {/* Check Out */}
                    <div className="flex flex-col">
                        <label className="text-[16px] font-400 text-gray-700 mb-2">
                            Check Out
                        </label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className="w-[204px] h-[51px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[194px] h-[51px] bg-[#00A8E8] text-white rounded-[10px] font-400 text-[16px] hover:bg-[#0088c2] transition-colors duration-300 mt-6"
                    >
                        Check Availability
                    </button>
                </form>
            </div>

            {/* Booking Form - Mobile */}
            <div className="md:hidden absolute bottom-[-173.5px] left-1/2 transform -translate-x-1/2 w-[291px] h-[347px] bg-white rounded-[15px] shadow-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-full px-8 py-6 gap-4">
                    {/* Guests */}
                    <div className="flex flex-col w-full">
                        <label className="text-[14px] font-400 text-gray-700 mb-2">
                            Guests
                        </label>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-[222px] h-[44px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8] cursor-pointer mx-auto"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Check In */}
                    <div className="flex flex-col w-full">
                        <label className="text-[14px] font-400 text-gray-700 mb-2">
                            Check In
                        </label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className="w-[222px] h-[44px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8] mx-auto"
                        />
                    </div>

                    {/* Check Out */}
                    <div className="flex flex-col w-full">
                        <label className="text-[14px] font-400 text-gray-700 mb-2">
                            Check Out
                        </label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className="w-[222px] h-[44px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8] mx-auto"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[222px] h-[44px] bg-[#00A8E8] text-white rounded-[10px] font-400 text-[14px] hover:bg-[#0088c2] transition-colors duration-300"
                    >
                        Check Availability
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;

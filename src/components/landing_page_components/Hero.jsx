import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import calendarIcon from '../../assets/landing/calendar.webp';
import heroImg from '../../assets/landing/Hero_houseboat.webp';

const Hero = () => {
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);

    // CSS to hide default calendar icon
    const dateInputStyle = `
        input[type="date"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            cursor: pointer;
        }
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-clear-button {
            display: none;
        }
    `;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ guests, checkIn, checkOut });
        // Add your form submission logic here
    };

    return (
        <>
            <style>{dateInputStyle}</style>
            <section className="relative min-h-[108vh] max-[430px]:min-h-[850px] w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute md:h-[90vh] max-[430px]:h-[550px] h-[75vh] inset-0 bg-cover bg-no-repeat bg-[calc(8%_-_20px)_100%] md:bg-[center_calc(100%_+_35px)]"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                    }}
                >
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 pt-[130px] max-[430px]:pt-[100px] px-3 md:px-0">
                    {/* Title */}
                    <h1 className="font-glitten font-400 text-[33px] md:text-[60px] leading-[43px] md:leading-[80px] w-[371px] max-[430px]:w-full md:w-[924px] pl-1 md:pl-[50px] text-[#F5F5F5] md:text-[#0E1727]">
                        Experience an Authentic Homestay in{' '}
                        <span className="text-[#12BAFF] md:text-[#009FE0]">Kerala Backwaters.</span>
                    </h1>

                    {/* Description */}
                    <p className="font-400 text-[14px] md:text-[18px] leading-[20px] md:leading-normal w-[318px] md:w-[581px] pl-1 md:pl-[50px] mt-6 text-[#FFFFFF] md:text-black">
                        Luxury houseboats with private crews, clean interiors, and transparent pricing — book your stay without the usual guesswork.
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => navigate('/booking')}
                        className="w-[134px] md:w-[163px] h-[35px] md:h-[43px] bg-[#009FE0] text-white rounded-[6px] md:rounded-[10px] ml-1 md:ml-[50px] mt-6 font-400 text-[14px] md:text-[16px] hover:bg-[#0088c2] transition-colors duration-300">
                        Explore Now
                    </button>
                </div>

                {/* Unified Booking Form - Responsive */}
                <div className="absolute bottom-[100px] max-[430px]:bottom-[100px] md:bottom-[100px] left-1/2 transform -translate-x-1/2 w-[291px] max-[430px]:w-[280px] md:w-[922px] h-[347px] max-[430px]:h-[300px] md:h-[143px] bg-[#F2F2F2]/95 rounded-[15px] shadow-2xl">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 py-1 md:py-0 gap-4 md:gap-0">
                        {/* Guests */}
                        <div className="flex flex-col w-full md:w-auto">
                            <label className="text-[14px] max-[430px]:text-[12px] md:text-[16px] font-400 text-gray-700 mb-2">
                                Guests
                            </label>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="w-[222px] max-[430px]:w-[200px] md:w-[204px] h-[44px] max-[430px]:h-[38px] md:h-[51px] border border-gray-300 rounded-[10px] px-4 text-gray-700 focus:outline-none focus:border-[#00A8E8] cursor-pointer mx-auto md:mx-0 bg-white"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Check In */}
                        <div className="flex flex-col w-full md:w-auto relative">
                            <label className="text-[14px] max-[430px]:text-[12px] md:text-[16px] font-400 text-gray-700 mb-2">
                                Check In
                            </label>
                            <div className="relative mx-auto md:mx-0">
                                <input
                                    ref={checkInRef}
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    placeholder="DD/MM/YYYY"
                                    className="w-[222px] max-[430px]:w-[200px] md:w-[204px] h-[44px] max-[430px]:h-[38px] md:h-[51px] border border-gray-300 rounded-[10px] pl-4 pr-10 text-gray-700 focus:outline-none focus:border-[#00A8E8] bg-white"
                                    style={{
                                        backgroundImage: `url(${calendarIcon})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 12px center',
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                                    onClick={() => checkInRef.current?.showPicker()}
                                ></div>
                            </div>
                        </div>

                        {/* Check Out */}
                        <div className="flex flex-col w-full md:w-auto relative">
                            <label className="text-[14px] max-[430px]:text-[12px] md:text-[16px] font-400 text-gray-700 mb-2">
                                Check Out
                            </label>
                            <div className="relative mx-auto md:mx-0">
                                <input
                                    ref={checkOutRef}
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    placeholder="DD/MM/YYYY"
                                    className="w-[222px] max-[430px]:w-[200px] md:w-[204px] h-[44px] max-[430px]:h-[38px] md:h-[51px] border border-gray-300 rounded-[10px] pl-4 pr-10 text-gray-700 focus:outline-none focus:border-[#00A8E8] bg-white"
                                    style={{
                                        backgroundImage: `url(${calendarIcon})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 12px center',
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                                    onClick={() => checkOutRef.current?.showPicker()}
                                ></div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-[222px] max-[430px]:w-[200px] md:w-[194px] h-[44px] max-[430px]:h-[38px] md:h-[51px] bg-[#00A8E8] text-white rounded-[10px] font-400 text-[14px] max-[430px]:text-[12px] md:text-[16px] hover:bg-[#0088c2] transition-colors duration-300 md:mt-6"
                        >
                            Check Availability
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Hero;

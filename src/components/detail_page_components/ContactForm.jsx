import React from 'react';
import calendarIcon from '../../assets/landing/calendar.webp'; // Assuming we might need a calendar icon, or use standard input type="date"

const ContactForm = () => {
    return (
        <section className="w-full py-8 md:py-12 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-[50px] flex justify-center">
                <div className="w-full max-w-[800px] bg-[#F2F2F2] rounded-[20px] p-6 md:p-10">
                    <h2 className="text-[24px] md:text-[30px] font-500 text-[#00A8E8] mb-4">
                        Book Here
                    </h2>
                    <div className="w-full h-[1px] bg-[#000000]/10 mb-6 md:mb-8"></div>

                    <form className="flex flex-col gap-4 md:gap-6">
                        {/* Name Row */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">E mail</label>
                            <input
                                type="email"
                                className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                            />
                        </div>

                        {/* Street Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Street Address</label>
                            <input
                                type="text"
                                className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                            />
                        </div>

                        {/* Country / Region */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Country / Region</label>
                            <input
                                type="text"
                                className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8]"
                            />
                        </div>

                        {/* Dates Row */}
                        <div className="flex flex-row gap-4 md:gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Check In</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                        className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8] text-[#2D3542]/60 placeholder:text-[#2D3542]/60"
                                    />
                                    {/* Custom calendar icon could go here if needed, but native date picker usually has one */}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Check Out</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                        className="w-full h-[44px] md:h-[50px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] px-4 outline-none focus:border-[#00A8E8] text-[#2D3542]/60 placeholder:text-[#2D3542]/60"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] md:text-[16px] text-[#2D3542] font-400">Additional Information</label>
                            <textarea
                                className="w-full h-[120px] md:h-[150px] bg-[#F2F2F2] border border-[#00A8E8]/50 rounded-[10px] p-4 outline-none focus:border-[#00A8E8] resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full h-[44px] md:h-[50px] bg-[#00A8E8] text-white rounded-[10px] text-[16px] font-400 hover:bg-[#0096d1] transition-colors mt-2">
                            Done
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

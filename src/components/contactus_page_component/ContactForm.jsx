import React from 'react';
import callIcon from '../../assets/landing/call.webp';
import mailIcon from '../../assets/landing/mail.webp';

const ContactForm = () => {
    return (
        <section className="w-full py-[50px] md:py-[80px] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[100px]">

                {/* Left Side (Desktop) / Top & Bottom (Mobile) */}
                <div className="w-full md:w-1/2 flex flex-col">
                    {/* Text Content */}
                    <div className="mb-[40px]">
                        <h2 className="font-glitten text-[32px] md:text-[48px] text-[#0E1727] font-normal mb-4 leading-tight text-center md:text-left">
                            We Would Like To Hear From You
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-[#2D3542] font-normal leading-[1.6] text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin
                        </p>
                    </div>

                    {/* Contact Cards - Desktop View (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-col gap-6">
                        {/* Phone Card */}
                        <div className="w-[350px] h-[100px] bg-[#CDEFFF] rounded-[20px] flex items-center px-8 gap-4 shadow-sm">
                            <img src={callIcon} alt="Phone" className="w-[24px] h-[24px]" />
                            <span className="font-outfit text-[20px] text-[#2D3542] font-400">
                                91 9887665xxx
                            </span>
                        </div>

                        {/* Email Card */}
                        <div className="w-[350px] h-[100px] bg-white border border-[#EAEAEA] rounded-[20px] flex items-center px-8 gap-4 shadow-sm">
                            <img src={mailIcon} alt="Email" className="w-[24px] h-[24px]" />
                            <span className="font-outfit text-[20px] text-[#2D3542] font-400">
                                Info@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side (Desktop) / Middle (Mobile) - Form */}
                <div className="w-full md:w-1/2">
                    <div className="bg-[#F2F2F2] rounded-[20px] p-[30px] md:p-[50px] shadow-[0_8px_18px_rgba(0,159,224,0.15)]">
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full h-[50px] bg-white border border-[#009FE0]/50 rounded-[10px] px-4 text-[14px] outline-none focus:border-[#0096d1]"
                            />
                            <input
                                type="email"
                                placeholder="E mail"
                                className="w-full h-[50px] bg-white border border-[#009FE0]/50 rounded-[10px] px-4 text-[14px] outline-none focus:border-[#0096d1]"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full h-[50px] bg-white border border-[#009FE0]/50 rounded-[10px] px-4 text-[14px] outline-none focus:border-[#0096d1]"
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full h-[150px] bg-white border border-[#009FE0]/50 rounded-[10px] p-4 text-[14px] outline-none resize-none focus:border-[#0096d1]"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-[150px] h-[45px] bg-[#009FE0] text-white rounded-[10px] text-[16px] font-500 mt-4 hover:bg-[#0088c2] transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Cards - Mobile View (Visible on Mobile only, at bottom) */}
                <div className="md:hidden flex flex-col gap-4 mt-4">
                    {/* Phone Card */}
                    <div className="w-full h-[80px] bg-[#CDEFFF] rounded-[20px] flex items-center justify-center gap-4 shadow-sm">
                        <img src={callIcon} alt="Phone" className="w-[20px] h-[20px]" />
                        <span className="font-outfit text-[18px] text-[#2D3542] font-400">
                            91 9887665xxx
                        </span>
                    </div>

                    {/* Email Card */}
                    <div className="w-full h-[80px] bg-white border border-[#EAEAEA] rounded-[20px] flex items-center justify-center gap-4 shadow-sm">
                        <img src={mailIcon} alt="Email" className="w-[20px] h-[20px]" />
                        <span className="font-outfit text-[18px] text-[#2D3542] font-400">
                            Info@gmail.com
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactForm;

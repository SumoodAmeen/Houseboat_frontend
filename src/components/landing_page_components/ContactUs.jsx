import React, { useState } from 'react';
import contact1 from '../../assets/landing/contact1.webp';
import contact2 from '../../assets/landing/contact2.webp';
import contact3 from '../../assets/landing/contact3.webp';
import callIcon from '../../assets/landing/call.webp';
import mailIcon from '../../assets/landing/mail.webp';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Title and Description */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="font-glitten text-[24px] md:text-[40px] font-400 text-[#2D3542] mb-4 md:mb-6 w-[306px] md:w-auto mx-auto">
                        We Would Like To Hear From You
                    </h2>
                    <p className="text-[14px] md:text-[18px] font-400 text-[#2D3542] w-[326px] md:w-[487px] mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin
                    </p>
                </div>

                {/* Main Content - Desktop: Images Left, Form Right | Mobile: Form Top, Images Bottom */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
                    {/* Images - Desktop: Left, Mobile: Bottom (order-2) */}
                    <div className="order-2 md:order-1 relative w-[350px] h-[220px] md:w-[650px] md:h-[360px] mx-auto md:mx-0">
                        {/* Image 1 - Left */}
                        <img
                            src={contact1}
                            alt="Contact 1"
                            className="absolute w-[181px] h-[210px] md:w-[299px] md:h-[346px] rounded-[20px] object-cover left-0 top-[15px] md:left-[1px] md:top-[20px] z-20"
                        />
                        {/* Image 2 - Center, behind others */}
                        <img
                            src={contact2}
                            alt="Contact 2"
                            className="absolute w-[130px] h-[170px] md:w-[216px] md:h-[316px] rounded-[20px] object-cover left-[100px] top-0 md:left-[165px] md:top-[0px] z-20"
                        />
                        {/* Image 3 - Right */}
                        <img
                            src={contact3}
                            alt="Contact 3"
                            className="absolute w-[185px] h-[200px] md:w-[325px] md:h-[350px] rounded-[20px] object-cover left-[140px] top-[0px] md:left-[230px] md:top-[20px] z-20"
                        />
                    </div>

                    {/* Form Section - Desktop: Right, Mobile: Top (order-1) */}
                    <div className="order-1 md:order-2 w-full md:w-auto">
                        {/* Form Container */}
                        <form
                            onSubmit={handleSubmit}
                            className="w-[351px] md:w-[551px] h-[350px] md:h-[510px] bg-[#F2F2F2] rounded-[20px] p-6 md:p-8 flex flex-col gap-3 md:gap-4 mx-auto shadow-[0_8px_18px_rgba(0,159,224,0.15)]"
                        >
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full h-[40px] md:h-[50px] px-4 rounded-[10px] border border-[#009FE0]/50 bg-white text-[14px] md:text-[16px] focus:outline-none focus:border-[#0096d1]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full h-[40px] md:h-[50px] px-4 rounded-[10px] border border-[#009FE0]/50 bg-white text-[14px] md:text-[16px] focus:outline-none focus:border-[#0096d1]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full h-[40px] md:h-[50px] px-4 rounded-[10px] border border-[#009FE0]/50 bg-white text-[14px] md:text-[16px] focus:outline-none focus:border-[#0096d1]"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full flex-1 px-4 py-3 rounded-[10px] border border-[#009FE0]/50 bg-white text-[14px] md:text-[16px] resize-none focus:outline-none focus:border-[#0096d1]"
                            />
                            <button
                                type="submit"
                                className="w-[104px] md:w-[120px] h-[30px] md:h-[43px] bg-[#00A8E8] text-white rounded-[10px] text-[14px] md:text-[18px] font-400 hover:bg-[#0096d1] transition-colors"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Contact Info - Below Form */}
                        <div className="flex gap-6 md:gap-8 justify-center mt-6 md:mt-8">
                            <div className="flex items-center gap-2">
                                <img src={callIcon} alt="Call" className="w-[15px] h-[14px] md:w-[15px] h-[14px]" />
                                <span className="text-[14px] md:text-[18px] font-400 text-[#2D3542]">91 9887665xxx</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={mailIcon} alt="Email" className="w-[16px] h-[12px] md:w-[16px] h-[12px]" />
                                <span className="text-[14px] md:text-[18px] font-400 text-[#2D3542]">Info@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

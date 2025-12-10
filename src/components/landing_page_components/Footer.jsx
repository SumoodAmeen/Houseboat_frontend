import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import instaIcon from '../../assets/landing/insta.png';
import facebookIcon from '../../assets/landing/facebook.png';
import linkedinIcon from '../../assets/landing/lnkedin.png';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribe email:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#C1EDFF] py-8 md:py-12">
            <div className="max-w-full mx-auto px-4 md:pl-[50px] md:pr-[50px]">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
                    {/* Logo and Description */}
                    <div className="md:max-w-[379px]">
                        <h2 className="font-glitten text-[20px] md:text-[50px] font-400 text-[#2D3542] mb-4">
                            Infinity
                        </h2>
                        <p className="text-[14px] md:text-[18px] font-400 text-[#2D3542] w-[291px] md:w-[379px] leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis.
                        </p>
                    </div>

                    {/* Links Section - Right side, aligned with description */}
                    <div className="flex flex-nowrap justify-between gap-4 md:gap-6 md:mt-[70px]">
                        {/* Quick Links */}
                        <div className="order-1 flex-shrink-0">
                            <h3 className="text-[14px] md:text-[18px] font-bold text-[#2D3542] mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/booking" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        Bookings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="order-2 flex-shrink-0">
                            <h3 className="text-[14px] md:text-[18px] font-bold text-[#2D3542] mb-4">
                                Terms Conditions
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#privacy" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="order-3 flex-shrink-0">
                            <h3 className="text-[14px] md:text-[18px] font-bold text-[#2D3542] mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="mailto:Info@gmail.com" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        Info@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:919887665xxx" className="text-[14px] md:text-[16px] font-400 text-[#2D3542] hover:text-[#00A8E8] transition-colors">
                                        91 9887665xxx
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Subscribe - Mobile: Below links, Desktop: Same row */}
                        <div className="order-4 w-full md:w-auto hidden md:block">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-[#2D3542] mb-4">
                                Subscribe
                            </h3>
                            <form onSubmit={handleSubscribe} className="relative inline-block w-[280px] md:w-[345px]">
                                <input
                                    type="email"
                                    placeholder="E mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[32px] md:h-[42px] pl-4 pr-[60px] md:pr-[75px] rounded-[10px] border border-[#00A8E8] bg-white text-[14px] md:text-[16px] focus:outline-none focus:border-[#0096d1]"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-[4px] top-[50%] translate-y-[-50%] w-[50.6px] md:w-[65px] h-[24px] md:h-[34px] bg-[#00A8E8] text-white rounded-[4px] md:rounded-[8px] text-[10.9px] md:text-[14px] font-400 hover:bg-[#0096d1] transition-colors"
                                >
                                    Sent
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Subscribe + Social Icons Row - Mobile only */}
                    <div className="flex items-center gap-3 md:hidden">
                        <form onSubmit={handleSubscribe} className="relative inline-block flex-1 max-w-[200px]">
                            <input
                                type="email"
                                placeholder="E mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-[32px] pl-3 pr-[50px] rounded-[10px] border border-[#00A8E8] bg-white text-[12px] focus:outline-none focus:border-[#0096d1]"
                            />
                            <button
                                type="submit"
                                className="absolute right-[3px] top-[50%] translate-y-[-50%] w-[42px] h-[24px] bg-[#00A8E8] text-white rounded-[4px] text-[10px] font-400 hover:bg-[#0096d1] transition-colors"
                            >
                                Sent
                            </button>
                        </form>
                        <div className="flex gap-2">
                            <a href="https://www.instagram.com/sumooo.d/" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] flex items-center justify-center">
                                <img src={instaIcon} alt="Instagram" className="w-full h-full object-contain" />
                            </a>
                            <a href="#linkedin" className="w-[24px] h-[24px] flex items-center justify-center">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
                            </a>
                            <a href="#facebook" className="w-[24px] h-[24px] flex items-center justify-center">
                                <img src={facebookIcon} alt="Facebook" className="w-full h-full object-contain" />
                            </a>
                        </div>
                    </div>
                </div>



                {/* Copyright */}
                <div className="border-t border-[#2D3542]/20 pt-6">
                    <p className="text-[12px] md:text-[14px] font-400 text-[#2D3542] text-center">
                        © 2025 Axinor Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

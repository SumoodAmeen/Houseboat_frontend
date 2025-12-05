import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isScrolled
                ? 'bg-white/10 backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]'
                : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center max-w-full px-3 pt-[50px] md:px-[50px] md:pt-[50px] pb-[50px]">
                {/* Logo */}
                <div className="navbar-logo">
                    <a
                        href="#home"
                        className="font-glitten text-[30px] md:pl-0 pl-1 text-navbar-logo no-underline font-400"
                    >
                        Infinity
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex list-none items-center gap-[50px] m-0 p-0">
                    <li>
                        <a
                            href="#home"
                            className="text-[18px] text-navbar-text no-underline transition-colors font-400 duration-300 hover:text-navbar-button"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#booking"
                            className="text-[18px] text-navbar-text no-underline transition-colors font-400 duration-300 hover:text-navbar-button"
                        >
                            Booking
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-[18px] text-navbar-text no-underline transition-colors font-400 duration-300 hover:text-navbar-button"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="text-[18px] text-navbar-text no-underline transition-colors font-400 duration-300 hover:text-navbar-button"
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="inline-block w-[126px] h-[36px] bg-navbar-button font-400 text-navbar-logo no-underline rounded-[5px] text-[18px] text-center leading-[36px] transition-colors duration-300 hover:bg-[#0088c2]"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <div
                    className="md:hidden flex flex-col cursor-pointer gap-[5px] pr-1"
                    onClick={toggleMobileMenu}
                >
                    <span
                        className={`w-[25px] h-[3px] bg-navbar-logo transition-all duration-300 rounded-[3px] ${isMobileMenuOpen ? 'rotate-45 translate-x-[8px] translate-y-[8px]' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-[25px] h-[3px] bg-navbar-logo transition-all duration-300 rounded-[3px] ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-[25px] h-[3px] bg-navbar-logo transition-all duration-300 rounded-[3px] ${isMobileMenuOpen ? '-rotate-45 translate-x-[8px] -translate-y-[8px]' : ''
                            }`}
                    ></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1100] flex flex-col items-center pt-16 px-4 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={closeMobileMenu}
            >
                {/* Logo and Close Button Container */}
                <div
                    className={`bg-white w-full h-[56px] max-w-[400px] rounded-[20px] px-6 mb-4 flex items-center justify-between transform transition-all duration-300 ${isMobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="font-glitten text-[30px] text-black font-400 mx-auto pl-8">
                        Infinity
                    </div>
                    <button
                        onClick={closeMobileMenu}
                        className="text-gray-500 hover:text-black transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Items Container */}
                <div
                    className={`bg-white w-full h-[356px] max-w-[400px] rounded-[20px] p-6 transform transition-all duration-300 ${isMobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className="list-none p-0 m-0 flex flex-col gap-4">
                        <li>
                            <a
                                href="#home"
                                className="block w-full h-[50px] py-3 bg-[#F5F5F5] rounded-[10px] text-center text-[16px] text-[#333] hover:bg-gray-200 transition-colors duration-300 no-underline"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#booking"
                                className="block w-full h-[50px] py-3 bg-[#F5F5F5] rounded-[10px] text-center text-[16px] text-[#333] hover:bg-gray-200 transition-colors duration-300 no-underline"
                                onClick={closeMobileMenu}
                            >
                                Booking
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block w-full h-[50px] py-3 bg-[#F5F5F5] rounded-[10px] text-center text-[16px] text-[#333] hover:bg-gray-200 transition-colors duration-300 no-underline"
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                className="block w-full h-[50px] py-3 bg-[#F5F5F5] rounded-[10px] text-center text-[16px] text-[#333] hover:bg-gray-200 transition-colors duration-300 no-underline"
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block w-full h-[50px] py-3 bg-[#F5F5F5] rounded-[10px] text-center text-[16px] text-[#333] hover:bg-gray-200 transition-colors duration-300 no-underline"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;

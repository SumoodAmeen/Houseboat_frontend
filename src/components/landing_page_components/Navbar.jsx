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
            <div className="flex justify-between items-center max-w-full px-[50px] pt-[50px] md:px-[50px] md:pt-[50px]">
                {/* Logo */}
                <div className="navbar-logo">
                    <a
                        href="#home"
                        className="font-glitten text-[30px] text-navbar-logo no-underline font-400"
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
                    className="md:hidden flex flex-col cursor-pointer gap-[5px]"
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

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 w-[70%] h-screen bg-white/95 backdrop-blur-[10px] transition-all duration-300 pt-[100px] shadow-[-2px_0_10px_rgba(0,0,0,0.1)] ${isMobileMenuOpen ? 'right-0' : '-right-full'
                    }`}
            >
                <ul className="list-none p-0 m-0 flex flex-col gap-[30px] px-[30px]">
                    <li>
                        <a
                            href="#home"
                            className="text-[18px] text-navbar-text no-underline block py-[10px] transition-colors duration-300 hover:text-navbar-button"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#booking"
                            className="text-[18px] text-navbar-text no-underline block py-[10px] transition-colors duration-300 hover:text-navbar-button"
                            onClick={closeMobileMenu}
                        >
                            Booking
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-[18px] text-navbar-text no-underline block py-[10px] transition-colors duration-300 hover:text-navbar-button"
                            onClick={closeMobileMenu}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="text-[18px] text-navbar-text no-underline block py-[10px] transition-colors duration-300 hover:text-navbar-button"
                            onClick={closeMobileMenu}
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="inline-block w-[126px] h-[36px] bg-navbar-button text-navbar-logo no-underline rounded-[5px] text-[18px] text-center leading-[36px] transition-colors duration-300 hover:bg-[#0088c2]"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

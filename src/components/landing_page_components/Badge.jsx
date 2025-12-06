import React from 'react';
import wifiIcon from '../../assets/landing/wifi.webp';
import breakfastIcon from '../../assets/landing/breakfast.webp';
import safetyIcon from '../../assets/landing/safety.webp';
import rooftopIcon from '../../assets/landing/rooftop.webp';

const Badge = () => {
    const badges = [
        { icon: wifiIcon, label: 'High-Speed Wi-Fi' },
        { icon: breakfastIcon, label: 'Breakfast' },
        { icon: safetyIcon, label: 'Safety & Hygiene' },
        { icon: rooftopIcon, label: 'Rooftop Lounges' }
    ];

    return (
        <section className="w-full h-[263px] md:h-[229px] bg-[#C1EDFF]">
            <div className="max-w-[1465px] mx-auto h-full px-4">
                {/* Unified Responsive Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-full items-center justify-items-center">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-2 md:gap-3"
                        >
                            <img
                                src={badge.icon}
                                alt={badge.label}
                                className="w-[43px] h-[43px] md:w-[61px] md:h-[61px] object-contain"
                            />
                            <span className="text-[14px] md:text-[20px] font-400 text-[#2D3542] text-center">
                                {badge.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Badge;

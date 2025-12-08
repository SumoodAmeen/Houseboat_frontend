import React from 'react';
import boat1 from '../../assets/about/boat1.webp';
import aboutUsImage from '../../assets/about/about_us_image.webp';
import bookingHero from '../../assets/about/booking_hero (1).webp';

const AboutUs = () => {
    return (
        <section className="w-full py-[50px] md:py-[80px] px-4">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">
                {/* Title */}
                <h2 className="font-glitten text-[24px] md:text-[40px] text-[#0E1727] font-normal mb-6 md:mb-8 text-center">
                    About us
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[18px] text-[#2D3542] font-normal leading-[1.6] text-center max-w-[900px] mb-[40px] md:mb-[60px]">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec.
                    Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin.
                    Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim lorem bibendum faucibus nunc.
                    Quis quisque lectus aliquam in lectus locus. Leo congue dictum tortor dui ac adipiscing aenean dignissim enim.
                    Vitae habitasse sit ipsum habitant placerat dignissim. Tincidunt vitae fringilla vel nunc.
                </p>

                {/* Images Row */}
                <div className="w-full h-[200px] md:h-[400px] rounded-[20px] overflow-hidden flex">
                    <div className="w-1/3 h-full">
                        <img
                            src={bookingHero}
                            alt="Sunset Boat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/3 h-full">
                        <img
                            src={aboutUsImage}
                            alt="Houseboat Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/3 h-full">
                        <img
                            src={boat1}
                            alt="Houseboat Exterior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

import React from 'react';
import aboutUsImage from '../../assets/landing/about_us_image.webp';

const AboutUs = () => {
    return (
        <section id="about" className="w-full py-0 md:pb-0 md:py-10">
            <div className="max-w-[1740px] pb-3 mx-auto px-4 md:px-0">
                {/* Mobile View */}
                <div className="md:hidden flex flex-col items-center">
                    <h2 className="font-glitten text-[24px] font-400 text-[#2D3542] mb-6 text-center">
                        About Infinity
                    </h2>
                    <p className="w-[333px] text-[14px] font-400 leading-[20px] text-[#2D3542] mb-6 text-center">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim lorem bibendum faucibus nunc. Quis quisque lectus aliquam in lectus locus.Leo congue dictum tortor dui ac adipiscing aenean dignissim enim. Vitae habitasse sit ipsum habitant placerat dignissim.
                    </p>
                    <img
                        src={aboutUsImage}
                        alt="Houseboat on water"
                        className="w-[353px] h-[203px] rounded-[20px] object-cover mb-6"
                    />
                    <button className="w-[124px] h-[35px] bg-[#009FE0] text-white rounded-[10px] text-[14px] font-400 hover:bg-[#0088c2] transition-colors duration-300">
                        Know More
                    </button>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex md:justify-between md:items-start">
                    <div>
                        <h2 className="font-glitten text-[40px] font-400 text-[#2D3542] mb-6">
                            About Infinity
                        </h2>
                        <p className="w-[815px] text-[18px] font-400 leading-[30px] text-[#2D3542] mb-8">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim lorem bibendum faucibus nunc. Quis quisque lectus aliquam in lectus locus.
                            <br />
                            Leo congue dictum tortor dui ac adipiscing aenean dignissim enim. Vitae habitasse sit ipsum habitant placerat dignissim. Tincidunt vitae fringilla vel nunc. Eget at vitae sed parturient ultrices diam mauris sit aliquam. Velit sagittis sed scelerisque ultrices. Suscipit euismod sem sed quam laoreet dolor sit bibendum sed.
                            Pellentesque fermentum accumsan quis a volutpat imperdiet sed.
                        </p>
                        <button className="w-[163px] h-[43px] bg-[#009FE0] text-white rounded-[10px] text-[18px] font-400 hover:bg-[#0088c2] transition-colors duration-300">
                            Explore Now
                        </button>
                    </div>
                    <div className='pt-[10px]'>
                        <img
                            src={aboutUsImage}
                            alt="Houseboat on water"
                            className="w-[751px] h-[460px] rounded-[20px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

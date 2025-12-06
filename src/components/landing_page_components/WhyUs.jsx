import React from 'react';
import whyUsImage from '../../assets/landing/whyus_image.webp';

const WhyUs = () => {
    return (
        <section id="whyus" className="w-full md:h-[100vh] relative">
            {/* Background Image - Full Width */}
            <div
                className="absolute mt-50 md:mt-120 inset-0 w-full h-[250px] md:h-[400px] bg-cover md:bg-bottom bg-no-repeat"
                style={{ backgroundImage: `url(${whyUsImage})` }}
            />


            {/* Gradient Overlay - Adapts to image lighting */}
            <div
                className="absolute inset-0 w-full h-[300px] md:pt-120 md:h-[400px]"
                style={{
                    background: 'linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 1) 30%, rgba(169,203,231,0.3) 70%, transparent 100%), linear-gradient(to right, rgba(168, 203, 230) 0%, rgba(173, 207, 235, 0.95) 50%,rgba(198, 226, 246, 0.95) 90%, rgba(200, 229, 247, 1) 100%)'
                }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full py-16 md:py-20">
                <div className="max-w-[1440px] mx-auto px-4">
                    {/* Unified Responsive View */}
                    <div className="flex flex-col items-center text-center md:pt-20">
                        <h2 className="font-glitten text-[24px] md:text-[40px] font-400 text-[#2D3542] mb-6">
                            Why Infinity
                        </h2>
                        <p className="w-[353px] md:w-[900px] text-[14px] md:text-[18px] font-400 leading-[20px] md:leading-[30px] text-[#2D3542] mb-6 md:mb-0">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim lorem bibendum faucibus nunc. Quis quisque lectus aliquam in lectus locus.
                            <br />
                            Leo congue dictum tortor dui ac adipiscing aenean dignissim enim. Vitae habitasse sit ipsum habitant placerat dignissim.
                            <span className="hidden md:inline"> Tincidunt vitae fringilla vel nunc. Eget at vitae sed parturient ultrices diam mauris sit aliquam. Velit sagittis sed scelerisque ultrices. Suscipit euismod sem sed quam laoreet dolor sit bibendum sed. Pellentesque fermentum accumsan quis a volutpat imperdiet sed.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

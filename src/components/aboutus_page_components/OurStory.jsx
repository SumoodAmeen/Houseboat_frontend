import React from 'react';
import boat1 from '../../assets/about/boat1.webp';

const OurStory = () => {
    return (
        <section className="w-full py-[50px] md:py-[80px] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px]">
                {/* Text Content - Left on Desktop, Top on Mobile */}
                <div className="w-full md:w-1/2 order-1 md:order-1">
                    <h2 className="font-glitten text-[24px] md:text-[40px] text-[#0E1727] font-normal mb-6 md:mb-8 text-center md:text-left">
                        Our Story
                    </h2>
                    <p className="text-[14px] md:text-[18px] text-[#2D3542] font-normal leading-[1.6] mb-6 text-center md:text-left">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec.
                        Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin.
                        Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim lorem bibendum faucibus nunc.
                        Quis quisque lectus aliquam in lectus locus.
                    </p>
                    <p className="text-[14px] md:text-[18px] text-[#2D3542] font-normal leading-[1.6] mb-6 text-center md:text-left">
                        Leo congue dictum tortor dui ac adipiscing aenean dignissim enim. Vitae habitasse sit ipsum habitant placerat dignissim.
                        Tincidunt vitae fringilla vel nunc. Eget at vitae sed parturient ultrices diam mauris sit aliquam.
                        Velit sagittis sed scelerisque ultrices. Suscipit euismod sem sed quam laoreet dolor sit bibendum sed.
                    </p>
                    <p className="text-[14px] md:text-[18px] text-[#2D3542] font-normal leading-[1.6] text-center md:text-left">
                        Pellentesque fermentum accumsan quis a volutpat imperdiet sed.
                        Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec.
                        Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin.
                    </p>
                </div>

                {/* Image - Right on Desktop, Bottom on Mobile */}
                <div className="w-full md:w-1/2 order-2 md:order-2">
                    <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden">
                        <img
                            src={boat1}
                            alt="Our Story - Houseboat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;

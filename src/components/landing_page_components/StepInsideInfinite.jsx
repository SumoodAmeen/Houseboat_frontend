import React from 'react';
import { useNavigate } from 'react-router-dom';
import step1 from '../../assets/landing/step1.webp';
import step2 from '../../assets/landing/step2.webp';
import step3 from '../../assets/landing/step3.webp';
import step4 from '../../assets/landing/step4.webp';

const StepInsideInfinite = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Mobile Title - Only visible on mobile */}
                <h2 className="md:hidden font-glitten text-[24px] font-400 text-[#2D3542] text-center mb-8">
                    Step Inside Infinity
                </h2>

                {/* Main Content - Desktop: Left/Right, Mobile: Stacked */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                    {/* Left Side - Title + Text Content */}
                    <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                        {/* Desktop Title - Only visible on desktop */}
                        <h2 className="hidden md:block font-glitten text-[40px] font-400 text-[#2D3542]">
                            Step Inside Infinity
                        </h2>
                        <p className="w-[348px] md:w-[358px] text-[14px] md:text-[18px] font-400 leading-relaxed text-[#2D3542]">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim
                        </p>
                        {/* Desktop Button - Hidden on mobile */}
                        <button
                            onClick={() => navigate('/gallery')}
                            className="hidden md:block w-[163px] h-[43px] bg-[#00A8E8] text-white rounded-[10px] text-[18px] font-400 hover:bg-[#0096d1] transition-colors">
                            See All
                        </button>
                    </div>

                    {/* Right Side - 2x2 Image Grid */}
                    <div className="flex flex-col gap-4 md:gap-0">
                        <div className="w-[353px] md:w-auto flex flex-col gap-2 md:gap-6 mx-auto md:mx-0">
                            {/* Row 1 */}
                            <div className="flex gap-2 md:gap-6">
                                <img
                                    src={step1}
                                    alt="Step Inside Infinity 1"
                                    className="w-[221px] h-[118px] md:w-[580px] md:h-[333px] rounded-[10px] md:rounded-[20px] object-cover flex-shrink-0"
                                />
                                <img
                                    src={step2}
                                    alt="Step Inside Infinity 2"
                                    className="w-[124px] h-[118px] md:w-[327px] md:h-[333px] rounded-[10px] md:rounded-[20px] object-cover flex-shrink-0"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="flex gap-2 md:gap-6">
                                <img
                                    src={step3}
                                    alt="Step Inside Infinity 3"
                                    className="w-[124px] h-[118px] md:w-[327px] md:h-[333px] rounded-[10px] md:rounded-[20px] object-cover flex-shrink-0"
                                />
                                <img
                                    src={step4}
                                    alt="Step Inside Infinity 4"
                                    className="w-[221px] h-[118px] md:w-[580px] md:h-[333px] rounded-[10px] md:rounded-[20px] object-cover flex-shrink-0"
                                />
                            </div>
                        </div>

                        {/* Mobile Button - Only visible on mobile, below images */}
                        <button
                            onClick={() => navigate('/gallery')}
                            className="md:hidden w-[124px] h-[35px] bg-[#00A8E8] text-white rounded-[10px] text-[14px] font-400 hover:bg-[#0096d1] transition-colors mx-auto">
                            See All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepInsideInfinite;

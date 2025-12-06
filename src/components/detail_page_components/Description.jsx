import React from 'react';
import tickIcon from '../../assets/booking/tick.svg';

const Description = () => {
    const amenities = [
        'High-Speed Wifi',
        'Beddings',
        'Work Desk',
        'Air Conditioning',
        'Charging Point',
        'Body Soap'
    ];

    // Mobile order is slightly different in the image (2 cols):
    // Wifi, AC
    // Beddings, Work Desk
    // Charging, Body Soap
    // This matches the desktop order if we just let it flow in a grid/flex container.
    // Desktop: Row of 6.
    // Mobile: Grid 2 cols.

    return (
        <section className="w-full py-8 md:py-12 bg-white">
            <div className="max-w-[1440px] px-4 md:px-[50px]">
                {/* Title */}
                <h2 className="font-glitten text-[30px] md:text-[40px] text-[#2D3542] mb-2 md:mb-4 leading-tight">
                    Alleppey Dulux<br className="md:hidden" /> Houseboat 1 Bedroom
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                    <span className="text-[14px] md:text-[16px] font-500 text-[#2D3542]">
                        5 Star Rating
                    </span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Description Text */}
                <p className="text-[#2D3542] text-[14px] md:text-[16px] leading-[22px] md:leading-[28px] mb-8 md:mb-12 font-400 max-w-[100%] md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim
                </p>

                {/* Amenities Section */}
                <div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#2D3542] mb-6 md:mb-8">
                        Amenities
                    </h3>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-12 gap-y-6 gap-x-4">
                        {/* 
                           The desktop image shows a single row of items. 
                           The mobile image shows 2 columns.
                           Let's map them.
                        */}
                        {amenities.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <img src={tickIcon} alt="check" className="w-5 h-5 md:w-6 md:h-6" />
                                <span className="text-[14px] md:text-[16px] text-[#2D3542] font-400 whitespace-nowrap">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;

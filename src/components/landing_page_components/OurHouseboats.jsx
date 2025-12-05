import React from 'react';
import boat1 from '../../assets/landing/boat1.webp';
import boat2 from '../../assets/landing/boat2.webp';
import boat3 from '../../assets/landing/boat3.png';

const OurHouseboats = () => {
    const houseboats = [
        {
            id: 1,
            image: boat1,
            title: 'Alleppey Dulux Houseboat',
            description: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id: 2,
            image: boat2,
            title: 'Alleppey Dulux Houseboat',
            description: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id: 3,
            image: boat3,
            title: 'Alleppey Dulux Houseboat',
            description: 'Lorem ipsum dolor sit amet consectetur'
        }
    ];

    return (
        <section id="houseboats" className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-glitten text-[24px] md:text-[40px] font-400 text-[#2D3542] mb-6">
                        Our House Boats
                    </h2>
                    <p className="w-full md:w-[738px] mx-auto text-[14px] md:text-[18px] font-400 leading-[20px] md:leading-[30px] text-[#2D3542]">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet volutpat convallis dis ipsum proin integer interdum in donec. Convallis at sapien felis ipsum bibendum sagittis. Sed enim urna id hac. Integer accumsan diam et feugiat sed proin. Eu volutpat enim dignissim vivamus aliquet duis nullam. Et vehicula viverra felis facilisi enim
                    </p>
                </div>

                {/* Mobile View - Vertical Cards */}
                <div className="md:hidden flex flex-col gap-8 items-center">
                    {houseboats.map((boat) => (
                        <div key={boat.id} className="w-full max-w-[353px] bg-white rounded-[20px] shadow-lg overflow-hidden">
                            <img
                                src={boat.image}
                                alt={boat.title}
                                className="w-full h-[280px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-[18px] font-400 text-[#2D3542] mb-3">
                                    {boat.title}
                                </h3>
                                <p className="text-[14px] font-400 text-[#2D3542] mb-4">
                                    {boat.description}
                                </p>
                                <div className="flex gap-3">
                                    <button className="flex-1 h-[35px] border-2 border-[#009FE0] text-[#009FE0] rounded-[10px] text-[14px] font-400 hover:bg-[#009FE0] hover:text-white transition-colors duration-300">
                                        Enquire
                                    </button>
                                    <button className="flex-1 h-[35px] bg-[#009FE0] text-white rounded-[10px] text-[14px] font-400 hover:bg-[#0088c2] transition-colors duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View - Horizontal Cards */}
                <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                    {houseboats.map((boat) => (
                        <div key={boat.id} className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                            <img
                                src={boat.image}
                                alt={boat.title}
                                className="w-[434px] h-[338px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="w-[246px] text-[20px] font-400 text-[#2D3542] mb-3">
                                    {boat.title}
                                </h3>
                                <p className="w-[328px] text-[16px] font-400 text-[#2D3542] mb-6">
                                    {boat.description}
                                </p>
                                <div className="flex gap-3">
                                    <button className="w-[190px] h-[43px] border-2 border-[#009FE0] text-[#009FE0] rounded-[10px] text-[18px] font-400 hover:bg-[#009FE0] hover:text-white transition-colors duration-300">
                                        Enquire
                                    </button>
                                    <button className="w-[190px] h-[43px] bg-[#009FE0] text-white rounded-[10px] text-[18px] font-400 hover:bg-[#0088c2] transition-colors duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHouseboats;

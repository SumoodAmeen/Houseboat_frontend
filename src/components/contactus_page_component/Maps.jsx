import React from 'react';

const Maps = () => {
    return (
        <section className="w-full py-[50px] md:py-[80px] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">
                {/* Title */}
                <h2 className="font-glitten text-[24px] md:text-[40px] text-[#0E1727] font-normal mb-8 text-center">
                    Visit Us At
                </h2>

                {/* Map Container */}
                <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.053353704289!2d76.3263673758661!3d9.99825699010672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(100%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Maps;

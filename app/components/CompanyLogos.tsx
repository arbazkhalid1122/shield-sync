import React from 'react';

const CompanyLogos: React.FC = () => {
    // Create arrays for each row of logos
    const firstRowLogos = [
        { name: "Bristol Myers Squibb", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#bristol", className: "h-6 md:h-8" },
        { name: "Philips", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#philips", className: "h-5 md:h-7" },
        { name: "Vodafone", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#vodafone", className: "h-8 md:h-10" },
        { name: "NASA", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#nasa", className: "h-8 md:h-10" },
        { name: "Accenture", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#accenture", className: "h-5 md:h-7" },
        { name: "DB", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#db", className: "h-8 md:h-10" },
    ];

    const secondRowLogos = [
        { name: "Warner Bros", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#warner", className: "h-8 md:h-10" },
        { name: "Moderna", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#moderna", className: "h-5 md:h-7" },
        { name: "Trello", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#trello", className: "h-5 md:h-7" },
        { name: "HP", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#hp", className: "h-7 md:h-9" },
        { name: "Wharton", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#wharton", className: "h-5 md:h-7" },
        { name: "WB", logo: "/lovable-uploads/5be1440e-c8cc-4415-a325-5d242624715c.png#wb", className: "h-8 md:h-10" },
    ];

    return (
        <div className="mx-auto">
            {/* First row of logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16 mb-8 md:mb-12">
                {firstRowLogos.map((logo, index) => (
                    <div key={`row1-${index}`} className="opacity-80">
                        <img
                            src={logo.logo}
                            alt={logo.name}
                            className={`${logo.className} object-contain`}
                        />
                    </div>
                ))}
            </div>

            {/* Second row of logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
                {secondRowLogos.map((logo, index) => (
                    <div key={`row2-${index}`} className="opacity-80">
                        <img
                            src={logo.logo}
                            alt={logo.name}
                            className={`${logo.className} object-contain`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyLogos;

import React from "react";
import Image from "next/image";
import { SiVodafone } from "react-icons/si";
import hp from "@/public/hp.svg";
import trello from "@/public/trello.svg";
import philips from "@/public/philips.svg";
import w from "@/public/w.svg";
import { SiTesla } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { SiNasa } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiNvidia } from "react-icons/si";
import { RiPerplexityLine } from "react-icons/ri";

const logos = [
  { name: "Philips", logo: philips },
  {
    name: "Vodafone",
    icon: <SiVodafone className="w-full h-full" />,
    isIcon: true,
  },
  { name: "Nasa", icon: <SiNasa className="w-full h-full" />, isIcon: true },
  { name: "Tesla", icon: <SiTesla className="w-full h-full" />, isIcon: true },
  { name: "Dell", icon: <SiDell className="w-full h-full" />, isIcon: true },
  { name: "Trello", logo: trello },
  { name: "HP", logo: hp },
  { name: "Wharton", logo: w },
  {
    name: "Microsoft",
    icon: <TiVendorMicrosoft className="w-full h-full" />,
    isIcon: true,
  },
  {
    name: "Nvidia",
    icon: <SiNvidia className="w-full h-full" />,
    isIcon: true,
  },
  {
    name: "Perpelexity",
    icon: <RiPerplexityLine className="w-full h-full" />,
    isIcon: true,
  },
];

const CompanyLogos: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 mb-4">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 md:h-16 min-w-[80px] max-w-[120px]"
          >
            {logo.isIcon ? (
              <div className="w-12 h-12 flex items-center justify-center">
                {logo.icon}
              </div>
            ) : (
              <Image
                src={logo.logo}
                alt={logo.name}
                className="w-12 h-auto object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;

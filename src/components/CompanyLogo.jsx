import React from "react";
import Amhara from "../assets/amhara_bank.svg";
import Dashin from "../assets/dashen_bank.svg";
import tele from "../assets/tele.png";
import Amu from "../assets/Amu.png";
import Cbe from "../assets/Cbe.png";

const CompanyLogo = () => {
  const logos = [Amhara, Dashin, tele, Amu, Cbe];
  return (
    <div className="w-full container overflow-hidden mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div
        className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 
      sm:text-base text-xl font-semibold text-left"
      >
        Proud partner at <br /> Arba Minch University & Dashen Bank
      </div>

      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => {
          return (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyLogo;

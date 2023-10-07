import React from "react";

import SadyaLogo from "public/assets/images/SADYA LOGOTYPE 3D 1.png";

import MainButton from "@/components/ui/MainButton";

const NavigationBar = () => {
  return (
    <div className="flex items-start justify-between px-6 py-4 bg-gradient-to-b from-white via-white-50 to-transparent h-[11.25rem] fold:h-[11.25rem] xs:h-[11.25rem] sm:h-[11.25rem] md:h-[11.25rem] lg:h-[11.25rem] xl:h-[11.25rem] 2xl:h-[11.25rem]">
      <div className="relative font-extrabold text-black text-[1.875rem] tracking-0 leading-normal xs:text-[1.875rem] sm:text-[1.875rem] md:text-[1.875rem] lg:text-[1.875rem] xl:text-[1.875rem] 2xl:text-[1.875rem]">
        <img className="relative w-[123px] h-[80px] sm:w-[98.4px] sm:h-[64px]" alt="Sadya LOGOTYPE" src={SadyaLogo.src} />
      </div>
      <div>
        <MainButton label="GET TICKETS" type="get-tickets" />
        {/* Add other navigation items/buttons as needed */}
      </div>
    </div>
  );
};

export default NavigationBar;

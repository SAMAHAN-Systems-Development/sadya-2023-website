import React from "react";

import MainButton from "@/components/ui/MainButton";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white h-[5.625rem] fold:h-[5.625rem] xs:h-[5.625rem] sm:h-[5.625rem] md:h-[5.625rem] lg:h-[5.625rem] xl:h-[5.625rem] 2xl:h-[5.625rem]">
      <div className="relative font-extrabold text-black text-[30px] tracking-0 leading-normal fold:text-[20px] xs:text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
        <div>SADYA</div>
        <div>2023</div>
      </div>
      <div>
        <MainButton label="GET TICKETS" type="get-tickets"/>
        <button/>
      </div>
    </div>
  );
};

export default NavigationBar;

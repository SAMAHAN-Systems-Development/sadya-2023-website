import React from "react";

import MainButton from "@/components/ui/MainButton";

const NavigationBar = () => {
  return (
    <div className="flex items-start justify-between px-6 py-4 bg-gradient-to-b from-white via-white-50 to-transparent h-[11.25rem] fold:h-[11.25rem] xs:h-[11.25rem] sm:h-[11.25rem] md:h-[11.25rem] lg:h-[11.25rem] xl:h-[11.25rem] 2xl:h-[11.25rem]">
      <div className="relative font-extrabold text-black text-[30px] tracking-0 leading-normal fold:text-[20px] xs:text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
        <div>SADYA</div>
        <div>2023</div>
      </div>
      <div>
        <MainButton label="GET TICKETS" type="get-tickets" />
        <button />
      </div>
    </div>
  );
};

export default NavigationBar;

import React from "react";

import MainButton from "@/components/ui/MainButton";


const NavigationBar = () => {
  return (
    <div className="flex h-[90px] items-center justify-between px-[25px] py-[10px] bg-[#333333]">
      <div className="relative w-[146px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[30px] tracking-[0] leading-[normal]">
        SADYA 2023
      </div>
      <div>
        <MainButton label="GET TICKETS" type="get-tickets"/>
        <button/>
      </div>
    </div>
  );
};

export default NavigationBar;

import React from "react";

import MainButton from "@/components/ui/MainButton";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white h-24 md:h-24 lg:h-24 xl:h-24 2xl:h-24">
      <div className="relative font-extrabold text-black text-lg tracking-0 leading-normal md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
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
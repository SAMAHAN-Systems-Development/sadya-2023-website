import React from 'react';
// import { GetTicketsBtn } from "./GetTicketsBtn";

// interface Props {
//   brandImage: string;
// }

const NavigationBar = () => {
  return (
    // not sure if ang iresponsive is ang navbar mismo or both navbar and content.
    // P.S. incomplete components for now. Will work again once complete.
    <div className="flex items-center justify-start py-4 relative bg-black">
      {/* Note: Placeholders, assuming we will use Sadya Branding and GetTicketsButton */}
      {/* <img src={brandImage} alt="Brand Logo" className="w-36 sm:w-48 md:w-60 lg:w-72 xl:w-96 2xl:w-120" /> */}
      <div className="relative w-[146px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[30px] px-10">
        SADYA 2023
      </div>
      {/* <GetTicketsBtn /> */}
    </div>
  );
};

export default NavigationBar;

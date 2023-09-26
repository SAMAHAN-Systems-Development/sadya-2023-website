import React from 'react';
import Image from 'next/image';
const Hero = () => {
 
  return (
    <div className="h-screen grid grid-cols-2 items-center justify-center">
        
        <div className="mx-10 px-5">
           
            <Image src="/2.jpg" 
            alt="placeholder_banner" 
            width={500}
            height={300} 
            className="w-full"
            />
    </div>

        <div className="w-[60%] flex flex-col gap-5">
            <h2 className="text-2xl gap-2">SADYA 2023 Event Website</h2>
            <h2 className="text-7xl font-bold">The Ateneo U-Fest</h2>
            <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor.
            </p>
            <button className="w-[10rem] bg-white text-black py-2 px-1 rounded-lg">
                BUTTON
            </button>
        </div>
    </div>
  );
};




export default Hero;

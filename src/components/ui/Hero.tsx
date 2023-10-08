import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import imgSrc from 'public/assets/images/MainLogo.png';

const Hero = () => {
 
  return (
    <div className="justify-end w-full  lg:h-[45rem] md:h-[42rem] sm:h-[30rem] h-[18rem] flex flex-col">
      <div className="absolute top-0 w-full lg:h-[55rem] md:h-[50rem] sm:h-[38rem] h-[24rem]"> 
            <Image src={imgSrc} 
            alt="placeholder_banner" 
            placeholder="blur"
            draggable={false}
            className="object-cover object-top h-full" 
            fill
            />
      </div>
      <div className="z-10 flex-col text-center px-8">
            <Link href="/#ticket-purchase">
             <button className="inline-flex items-center gap-[0.625rem] px-[1.75rem] py-[0.75rem] sm:px-[2.1875rem] sm:py-[0.9375rem] overflow-hidden justify-center 
              cursor-pointer shadow-lg font-inter mt-[-0.0625rem] tracking-[0] font-bold leading-[normal] whitespace-nowrap relative md:text-[1.25rem] sm:text-[1rem] text-[.8rem] bg-lavander text-white hover:bg-lightlavander rounded-[625rem]
             md:w-[12.75rem] md:h-[3.375rem] sm:w-[10.1875rem] sm:h-[2.6875rem] w-[8.175rem] h-[2.1375rem] 
             ">
               GET TICKETS
             </button>
                  <h3 className="pt-8 font-londrina text-center font-bold md:text-[1.875rem] sm:text-[1.5rem] text-[1.2rem] ">October 12-14, 2023 </h3>
                  <p className="font-inter md:text-[1.375rem] sm:text-[1.1rem] text-[.88rem]">
                  Don&apos;t miss out! Grab your tickets for an event filled with joy and excitement.
                  </p>                  
                  </Link>
            </div>
        </div>

        
 
  );
};




export default Hero;

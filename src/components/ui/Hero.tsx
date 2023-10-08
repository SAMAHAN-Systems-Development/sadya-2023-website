import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import imgSrc from 'public/assets/images/LOGOTYPE B.png';

const Hero = () => {
 
  return (
    <div className="justify-end w-full  md:h-[60.4375rem] sm:h-[50.75rem] h-[45.375rem] relative flex flex-col">
         <div className="2xl:w-[79.375rem] 2xl:h-[45.25rem] xl:w-[75rem] xl:h-[45.25rem] lg:w-[62rem] lg:h-[45.25rem] md:w-[48.3125rem] md:h-[45.25rem] sm:w-[36rem] sm:h-[36.1875rem] w-full h-[26.125rem] z-10 "> 
            <Image src={imgSrc} 
            alt="placeholder_banner" 
            placeholder="blur"
            draggable={false}
            className="absolute object-cover top-0 left-0 right-0" 
            fill
            />
      </div>
      <div className="z-10 flex-col text-center">
              <Link href="/#ticket-purchase">
              <button className="inline-flex items-center gap-[0.625rem] px-[1.75rem] py-[0.75rem] sm:px-[2.1875rem] sm:py-[0.9375rem] overflow-hidden justify-center 
                cursor-pointer shadow-lg font-inter mt-[-0.0625rem] tracking-[0] font-bold leading-[normal] whitespace-nowrap relative md:text-[1.25rem] sm:text-[1rem] text-[.8rem] bg-lavander text-white hover:bg-lightlavander rounded-[625rem]
              md:w-[12.75rem] md:h-[3.375rem] sm:w-[10.1875rem] sm:h-[2.6875rem] w-[8.175rem] h-[2.1375rem] 
              ">
                GET TICKETS
              </button>
                    <h3 className="py-5 font-inter text-center font-bold md:text-[1.875rem] sm:text-[1.5rem] text-[1.2rem] ">October 12-14, 2023 </h3>
                    <p className="font-inter md:text-[1.375rem] sm:text-[1.1rem] text-[.88rem]">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor.
                    </p>
              </Link>
 
            </div>
        </div>

        
 
  );
};




export default Hero;

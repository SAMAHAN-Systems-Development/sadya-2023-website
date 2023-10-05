import React from 'react';
import Image from 'next/image'
import imgSrc from 'public/assets/images/temporary_hero.jpg';

import MainButton from '@/components/ui/MainButton'
const Hero = () => {
 
  return (
    <div className="my-5 flex flex-col justify-center">
        
        <div className="w-full flex justify-center my-5 ">
           
            <Image src={imgSrc} 
            alt="placeholder_banner" 
            placeholder="blur"
            draggable={false}
            width={1000}
            height={500} 
            />
      </div>

        <div className="text-center">
          <div className="my-3">
              <MainButton label="GET TICKETS" type="get-tickets"/>
          </div>
          
            <h3 className="text-center my-3 text-5xl font-bold">October 12-14, 2023 </h3>
            <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor.
            </p>
            
        </div>
    </div>
  );
};




export default Hero;

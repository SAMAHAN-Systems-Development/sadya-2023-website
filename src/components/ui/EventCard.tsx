import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type CardProps = {
  date: string;
  description: string;
  floor: string;
  imageUrl: StaticImageData;
  title: string;
};

const EventCard: React.FC<CardProps> = ({
  title,
  date,
  description,
  floor,
  imageUrl,
}) => {
  return (
    // <div className='flex relative rounded-xl overflow-hidden h-80 md:h-80 md:w-[500px]'>
    <div className='flex relative rounded-xl overflow-hidden h-80 w-full xsm:w-[320px] sm:w-[400px] md:w-[500px]'>
      <Image src={imageUrl} alt={'${title} Photo'} className='absolute object-cover' draggable={false} placeholder='blur' fill/>
      <div className="flex flex-col z-10 px-5 py-5 justify-between w-full h-full bg-transparent bg-gradient-to-t from-[#9747FF]">
        <div className="text-base xsm:text-[14.4px] sm:text-[18px] md:text-[18px]">{title}</div>
        <div>
          <p className="text-gray-700 xsm:text-[12px] sm:text-[15px] md:text-[15px]">{date}</p>
          <p className="font-londrina text-gray-700 xsm:text-[24px] sm:text-[30px] md:text-[30px]">{description}</p>
          <p className="text-gray-700 xsm:text-[12px] sm:text-[15px] md:text-[15px]">{floor}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
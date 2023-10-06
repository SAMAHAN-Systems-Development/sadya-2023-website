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
    <div className='flex relative rounded-xl overflow-hidden lg:w-[450px]'>
      <Image src={imageUrl} alt='Event Photo' className='absolute object-cover' fill/>
      <div className="z-10">
        <div className="px-4 py-4">
          <div className="text-base mb-2">{title}</div>
        </div>
        <div className="flex flex-col px-4 py-4">
          <p className="text-gray-700 text-base mt-20">{date}</p>
          <p className="font-bold text-gray-700 text-xl">{description}</p>
          <p className="text-gray-700 text-base">{floor}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

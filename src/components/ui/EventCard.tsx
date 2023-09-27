import React from 'react';

interface CardProps {
  date: string;
  description: string;
  floor: string;
  title: string;
}

const EventCard: React.FC<CardProps> = ({
  title,
  date,
  description,
  floor,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-black">
        <div className="px-4 py-4">
          <div className="text-base mb-2">{title}</div>
          <p className="text-gray-700 text-base mt-20">{date}</p>
          <p className="font-bold text-gray-700 text-xl">{description}</p>
          <p className="text-gray-700 text-base">{floor}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from 'react';

type CardProps = {
  date: string;
  description: string;
  floor: string;
  title: string;
};

const cardStyle = {
  width: '450px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
};

const EventCard: React.FC<CardProps> = ({
  title,
  date,
  description,
  floor,
}) => {
  return (
    <div style={containerStyle}>
      <div className="rounded-xl overflow-hidden shadow-lg bg-black" style={cardStyle}>
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

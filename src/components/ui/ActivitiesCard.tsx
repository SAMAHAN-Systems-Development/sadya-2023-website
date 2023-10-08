import React from 'react';

type EventDataTypes = {
  children: React.ReactNode;
  eventDataDate: string;
  eventDataDay: string;
};

const ActivitiesCard: React.FC<EventDataTypes> = ({
  children,
  eventDataDate,
  eventDataDay,
}) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex flex-col sm:w-[441.98px] sm:h-[585.56px] w-[353.58px] h-[468.45px] items-center gap-[0.8525rem] relative bg-[#ffffff] rounded-[0.7519rem] shadow-xl">
        <div className="uppercase relative sm:w-[441.9808px] sm:h-[92.2496px] w-[353.58px] h-[73.8px] py-4 text-[#ff0e69] sm:text-[41.7008px] text-[33.37px] leading-[41.7008px] text-center font-londrina font-black tracking-[0]">
          {eventDataDay}
        </div>
        <div className="absolute sm:w-[217px] sm:h-[31px] w-[173.9px] h-[24.52px] text-[11.55px] top-[65px] sm:text-[14.44px] font-inter font-semibold text-[#333333] text-center tracking-[0] leading-[normal]">
          {eventDataDate}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ActivitiesCard;

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
      <div className="inline-flex flex-col sm:w-[441.98px] sm:h-[585.56px] w-[353.58px] h-[468.45px] items-center bg-[#ffffff] rounded-[0.7519rem] shadow-xl">
        <div className="uppercase relative leading-none pt-8 text-[#ff0e69] sm:text-[41.7008px] text-[33.37px] text-center font-londrina font-black tracking-[0]">
          {eventDataDay}
        </div>
        <div className="text-[11.55px] sm:text-[14.44px] pb-4 font-semibold text-[#333333] text-center tracking-[0]">
          {eventDataDate}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ActivitiesCard;

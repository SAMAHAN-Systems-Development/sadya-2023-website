import React from 'react'

type EventDataTypes = {
    children: React.ReactNode;
    eventDataDate: string;
    eventDataDay: string;
};

const ActivitiesCard: React.FC<EventDataTypes> = ({
    children, eventDataDate, eventDataDay
}) => {
    return (
        <div className="flex justify-center">
            <div className="inline-flex flex-col w-[441.98px] h-[585.56px] items-center gap-[0.8525rem] relative bg-[#ffffff] rounded-[0.7519rem] shadow-xl ">
                <div className="relative w-[441.9808px] h-[92.2496px] mt-[-0.0063rem] py-4 text-[#ff0e69] text-[41.7008px] leading-[41.7008px] text-center font-londrina font-black tracking-[0]">
                    {eventDataDay}
                </div>
                <div className="absolute mt-1 w-[217px] h-[31px] top-[3.6875rem] left-[7rem] font-inter font-semibold text-[#333333] text-center tracking-[0] leading-[normal]">
                    {eventDataDate}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>

    )
}
export default ActivitiesCard

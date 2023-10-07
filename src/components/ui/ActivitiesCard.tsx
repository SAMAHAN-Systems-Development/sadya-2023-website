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
            <div className="inline-flex flex-col w-[27.6238rem] h-[36.5975rem] items-center gap-[0.8525rem] relative bg-[#ffffff] rounded-[0.7519rem] shadow-xl">
                <div className="relative w-[27.6238rem] h-[5.7656rem] mt-[-0.0063rem] py-4 text-[#ff0e69] text-[2.6063rem] text-center leading-[2.6063rem] font-londrina font-black tracking-[0]">
                    {eventDataDay}
                </div>
                <div className="absolute mt-1 w-[13.5625rem] h-[1.9375rem] top-[3.6875rem] left-[7rem] font-inter font-semibold text-[#333333] text-center tracking-[0] leading-[normal]">
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


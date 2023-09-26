import React from "react";

interface Props {
    activity: string;
    location: string;
    time: string;
}

export const ActivitiesTile = ( { activity, time, location } : Props ) : JSX.Element => {
    return (
        <div className="inline-flex flex-col items-center justify-center bg-lightgold gap-[0.625rem] rounded-[0.625rem] relative h-[5.625rem]">
            <div className="relative w-[48.5rem] h-[5.625rem] rounded-[0.625rem] mix-blend-overlay"/>
            <div className="absolute w-[30.375rem] h-[3.063rem] top-[1.25rem] left-[16.438rem] [font-family:'Inter-Bold',Helvetica] font-bold text-[#292929] text-[1.438rem] text-center tracking-[0] leading-[normal] flex justify-center items-center">
                {activity} </div>
            <div className="absolute w-[0.3125rem] h-[4.5625rem] top-[0.5625rem] left-[258px] bg-[#afafaf] rounded-[0.625rem] mix-blend-luminosity"/>
            <div className="absolute w-[14.375rem] h-[1.5rem] top-[2.75rem] left-[1.75rem] [font-family:'Inter-Medium',Helvetica] font-medium text-[#292929] text-[1.25rem] tracking-[0] leading-[normal]">
                {location} </div>
            <div className="absolute w-[14.375rem] h-[1.5rem] top-[1.25rem] left-[1.75rem] [font-family:'Inter-Bold',Helvetica] font-bold text-[#292929] text-[1.25rem] tracking-[0] leading-[normal]">
                {time} </div>
        </div>
    );
};


export default ActivitiesTile;
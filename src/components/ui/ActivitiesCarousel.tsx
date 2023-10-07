
'use client'
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import ActivitiesCard from '@/components/ui/ActivitiesCard';
import { EventData } from '@/data/EventData';

const ActivitiesCarousel = () => {
  const eventDays = ['Day 1', 'Day 2', 'Day 3'];

  return (
    <div className='carousel-container'>
      <Splide options={{ padding: { left: '530px', right: '430px' },
    perPage: 1,
    fixedWidth: '', // Adjust the fixed width as needed
    focus: 'center',
    arrows: false,
    pagination: true,}}>
        {eventDays.map((day, index) => (
          <SplideSlide key={index}>
            <div className="activities-card">
              <ActivitiesCard
                eventDataDate={`October ${12 + index}, 2023`}
                eventDataDay={day}
              >
                <div className='flex flex-col items-start text-black '>
                  {EventData.filter((event) => event.eventDataDay === day).map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="uppercase mb-1 mt-2 w-[350px] font-londrina font-black text-[#323232] text-[32.1px] tracking-[0] leading-[normal] whitespace-normal">
                        {item.eventDataDescription}
                      </div>
                      <div className="w-[350px] font-inter font-medium text-[#323232] text-[12px] tracking-[0] leading-[normal]">
                        {item.eventDataFloor}
                      </div>
                      <div className="divider w-[350px] h-[0.1875rem] mt-2 mb-2 bg-[#b8b8b8] rounded-[0.7519rem]" />
                    </div>
                  ))}
                </div>
              </ActivitiesCard>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <style jsx global>{`
      .carousel-container {
        margin-right: 15px; /* Adjust the margin as needed */
      }
      .activities-card {
        margin-right: 100px;
      }
        .splide__pagination {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        
        .splide__pagination__page {
          width: 10px;
          height: 10px; 
          margin: 0 5px; 
          background-color: #333;
          border-radius: 50%;
        }
        
        .splide__pagination__page.is-active {
          background-color: #ff0e69;
        }
      `}</style>
    </div>
  );
}

export default ActivitiesCarousel;

'use client'
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import ActivitiesCard from '@/components/ui/ActivitiesCard';
import { EventData } from '@/data/EventData';

const ActivitiesCarousel = () => {
  const eventDays = ['Day 1', 'Day 2', 'Day 3'];

  return (
    <div className='carousel-container relative'>
      <Splide options={{
        padding: { left: '33.125rem', right: '33.125rem' },
        perPage: 1,
        fixedWidth: '', // Adjust the fixed width as needed
        focus: 'center',
        gap: '3.125rem',
        arrows: false,
        autoWidth: true,
        pagination: true,
        breakpoints: {
          640: { // Adjust the breakpoint for mobile devices
            perPage: 1, // Number of slides to show on mobile
            gap: '3.125rem', // Gap for mobile devices
            autoWidth: true, // Disable auto width for mobile
          },
          768: {
            perPage: 1,
            gap: '3.125rem',
            autoWidth: true,
          }
        }
      }}>
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
                      <div className="w-[350px] font-inter font-medium text-[#323232] text-[9.63px] tracking-[0] leading-[normal]">
                        {item.eventDataFloor}
                      </div>
                      <div className="divider w-[350px] h-[3px] mt-2 mb-2 bg-[#b8b8b8] rounded-[0.7519rem]" />
                    </div>
                  ))}
                </div>
              </ActivitiesCard>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom pagination */}
      <style jsx global>{`
        /* Adjust pagination dot styles */
        .splide__pagination {
          position: absolute;
          bottom: -30px; /* Adjust the distance from the bottom as needed */
          left: 50%; /* Center horizontally */
          transform: translateX(-50%); /* Center horizontally */
          display: flex;
          justify-content: center;
          align-items: center; /* Align items to the center */
          width: 100%; /* Make the pagination dots full width of the card */
        }
        
        .splide__pagination__page {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background-color: #ffffff;
          border-radius: 50%;
        }
        
        .splide__pagination__page.is-active {
          background-color: #ff0e69;
        }

        /* Adjust pagination dot position for smaller screens */
        @media (max-width: 640px) {
          .splide__pagination {
            bottom: 0; /* Adjust the distance from the bottom for mobile */
          }
        }
      `}</style>
    </div>
  );
}

export default ActivitiesCarousel;

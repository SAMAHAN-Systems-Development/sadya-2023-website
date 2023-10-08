'use client';
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import ActivitiesCard from '@/components/ui/ActivitiesCard';
import { EventData } from '@/data/EventData';

const ActivitiesCarousel = () => {
  const eventDays = ['Day 1', 'Day 2', 'Day 3'];

  return (
    <div className="overflow-hidden">
      <Splide
        options={{
          // padding: { left: '33.125rem', right: '33.125rem' },
          // type: 'loop',
          perPage: 1,
          fixedWidth: 'auto', // Adjust the fixed width as needed
          focus: 'center',
          gap: '3.125rem',
          arrows: false,
          trimSpace: false,
          // autoWidth: true,
          pagination: true,
          breakpoints: {
            640: {
              // Adjust the breakpoint for mobile devices
              perPage: 1, // Number of slides to show on mobile
              gap: '1rem', // Gap for mobile devices
              autoWidth: false, // Disable auto width for mobile
            },
          },
        }}
      >
        {eventDays.map((day, index) => (
          <SplideSlide key={index}>
            <div className="activities-card">
              <ActivitiesCard
                eventDataDate={`October ${12 + index}, 2023`}
                eventDataDay={day}
              >
                <div className="flex flex-col items-start text-black ">
                  {EventData.filter((event) => event.eventDataDay === day).map(
                    (item, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="uppercase mb-1 mt-2 sm:w-[350px] w-[285.56px] font-londrina font-black text-[#323232] sm:text-[32.1px] text-[25.67px] tracking-[0] leading-[normal] whitespace-normal">
                          {item.eventDataDescription}
                        </div>
                        <div className="sm:w-[350px] w-[285.56px] font-inter font-medium text-[#323232] text-[9.63px] tracking-[0] leading-[normal]">
                          {item.eventDataFloor}
                        </div>
                        <div className="divider sm:w-[350px] w-[295.19px] sm:h-[0.1875rem] h-[2.57px] mt-2 mb-2 bg-[#b8b8b8] rounded-[0.7519rem]" />
                      </div>
                    )
                  )}
                </div>
                *
              </ActivitiesCard>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom pagination */}
      <style jsx global>{`
        /* Adjust pagination dot styles */
        .splide__pagination {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center; /* Align items to the center */
          margin-top: 15px; /* Adjust margin for mobile */
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
      `}</style>
    </div>
  );
};

export default ActivitiesCarousel;

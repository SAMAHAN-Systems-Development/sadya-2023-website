import React from 'react';
import '@splidejs/react-splide/css';
import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';
import ActivitiesCarousel from '@/components/ui/ActivitiesCarousel';

const ActivitiesSection = () => {
  return (
    <div className="flex justify-center flex-col">
      <SectionUI>
        <SectionTitle
          title="what's on"
          subtitle="Discover our exciting lineup of daily events and 
plan your day accordingly."
        />

        <ActivitiesCarousel />
      </SectionUI>
    </div>
  );
};

export default ActivitiesSection;

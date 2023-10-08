import React from 'react';

import '@splidejs/react-splide/css';

// import SectionUI from '@/components/SectionUI';
import ActivitiesCarousel from '@/components/ui/ActivitiesCarousel';
import SectionTitle from '@/components/ui/SectionTitle';

const ActivitiesSection = () => {
  return (
    <div className="flex justify-center flex-col mt-52">
        <SectionTitle
          title="what's on"
          subtitle="Discover our exciting lineup of daily events and 
plan your day accordingly."
        />
        <ActivitiesCarousel />
    </div>
  );
};

export default ActivitiesSection;

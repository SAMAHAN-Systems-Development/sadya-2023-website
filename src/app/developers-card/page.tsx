import React from 'react';

import picSample from 'public/assets/images/SysEgg.png';

import DeveloperCard from '@/components/ui/DeveloperCard';

function page() {
  return (
    <div>
      <DeveloperCard
        course="BS Computer Science"
        developerType="Back-End Developer"
        facebook="https://www.facebook.com/mabzeh.marmar/"
        fullName="Angelli Kezzed Alkuino"
        imageUrl={picSample}
        instagram="https://www.facebook.com/mabzeh.marmar/"
        twitter="https://www.facebook.com/mabzeh.marmar/"
      />
    </div>
  );
}

export default page;

import React from 'react';

import SectionUI from '@/components/SectionUI';
import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developers';

const DeveloperSection = () => {
  return (
    <SectionUI>
      <div className="pt-20 flex flex-col items-center">
        <h1 className="font-semibold text-center text-crimson font-londrina text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl uppercase">
          SAMAHAN <br /> SYSDEV TEAM
        </h1>
        <span className="text-xs sm:text-base font-normal font-inter text-black normal-case mt-2">
          Non exercitation elit dolor do quis pariatur nisi culpa occaecat
          officia.
        </span>
        <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {Developers.map((item, index) => (
            <div key={index}>
              <DeveloperCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </SectionUI>
  );
};

export default DeveloperSection;

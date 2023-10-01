import React from 'react';

import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developers';

const DeveloperSection = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold text-center">
        SAMAHAN <br /> SYSDEV TEAM
      </h1>
      <span className="text-center pt-5 px-10">
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
  );
};

export default DeveloperSection;

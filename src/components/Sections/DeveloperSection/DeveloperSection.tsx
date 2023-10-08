import React from 'react';

import DeveloperCard from '@/components/ui/DeveloperCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { Developers } from '@/data/developers';

const DeveloperSection = () => {
  return (
      <div className="py-12 flex flex-col items-center bg-gradient-to-t from-lightlavander/20 to-lightlavander/5">
        <SectionTitle
          title="SAMAHAN SysDev Team"
          subtitle="Explore innovation at its core – meet the talented developers behind the scenes."
        />
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

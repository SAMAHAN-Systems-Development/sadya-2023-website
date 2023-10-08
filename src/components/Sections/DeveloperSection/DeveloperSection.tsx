import React from 'react';

import SectionUI from '@/components/SectionUI';
import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developers';
import SectionTitle from '@/components/ui/SectionTitle';

const DeveloperSection = () => {
  return (
    <SectionUI>
      <div className="pt-20 flex flex-col items-center">
        <SectionTitle
          title="samahan sysdev team"
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
    </SectionUI>
  );
};

export default DeveloperSection;

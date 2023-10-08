import React from 'react';

import SectionUI from '@/components/SectionUI';
import DeveloperCard from '@/components/ui/DeveloperCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { Developers } from '@/data/developers';

const DeveloperSection = () => {
  return (
    <SectionUI>
      <div className="pt-20 flex flex-col items-center">
        <SectionTitle
          title="samahan sysdev team"
          subtitle="Non exercitation elit dolor do quis pariatur nisi culpa occaecat officia."
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

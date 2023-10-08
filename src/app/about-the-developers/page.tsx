import React from 'react';
import type { Metadata } from 'next';

import DeveloperPage from '@/components/DeveloperPage/DeveloperPage';
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = {
  title: 'SAMAHAN SysDev Team',
  description:
    'Explore innovation at its core – meet the talented developers behind the scenes.',
};

const page = () => {
  return (
    <>
      <NavigationBar isDevPage={true} />
      <DeveloperPage />
    </>
  );
};

export default page;

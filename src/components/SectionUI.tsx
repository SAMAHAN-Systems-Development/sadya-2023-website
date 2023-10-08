import type { FC } from 'react';
import React from 'react';

type SectionUIProps = {
  children: React.ReactNode;
};

const SectionUI: FC<SectionUIProps> = ({ children }) => {
  return <section className="container-2xl mb-5 mt-20 sm:mt-32 md:mt-40  lg:mt-52">{children}</section>;
};

export default SectionUI;

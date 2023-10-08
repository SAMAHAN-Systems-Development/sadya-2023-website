import type { FC } from 'react';
import React from 'react';

type SectionUIProps = {
  children: React.ReactNode;
};

const SectionUI: FC<SectionUIProps> = ({ children }) => {
  return <section className="container-2xl my-5 lg:my-10">{children}</section>;
};

export default SectionUI;

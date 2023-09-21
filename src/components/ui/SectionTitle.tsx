import React from 'react';

type TextProps = {
  title: string;
  subtitle: string;
};
const SectionTitle = (props: TextProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </>
  );
};

export default SectionTitle;

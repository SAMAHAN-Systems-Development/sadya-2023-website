import React from 'react';

type TextProps = {
  title: string;
  subtitle: string;
};
const SectionTitle = (props: TextProps) => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl">{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </div>
    </>
  );
};

export default SectionTitle;

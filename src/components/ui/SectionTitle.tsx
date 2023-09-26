import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <h1 className="flex justify-center text-center font-semibold flex-col text-6xl uppercase">
        {title}
        <span className="text-base font-normal normal-case justify-center mt-2">
          {subtitle}
        </span>
      </h1>
    </>
  );
};

export default SectionTitle;

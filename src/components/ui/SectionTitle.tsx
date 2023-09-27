import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <h1 className="flex justify-center text-center font-semibold flex-col sm:text-6xl text-2xl uppercase">
        {title}
        <span className="sm:text-base text-xs font-normal normal-case justify-center mt-2">
          {subtitle}
        </span>
      </h1>
    </>
  );
};

export default SectionTitle;

import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="flex justify-center text-center font-semibold flex-col font-londrina sm:text-8xl text-2xl uppercase">
          {title}
        </h1>
        <div className="w-96">
          <p className="sm:text-base text-xs font-normal font-inter normal-case justify-center mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

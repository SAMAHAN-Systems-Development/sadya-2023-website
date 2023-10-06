import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="flex justify-center text-center font-semibold text-crimson flex-col font-londrina sm:text-8xl text-2xl uppercase">
          {title}
        </h1>
        <div className="w-[31.188rem]">
          <p className="sm:text-base text-xs font-normal font-inter text-black normal-case justify-center mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

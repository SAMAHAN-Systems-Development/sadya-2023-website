import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-crimson font-londrina text-2xl sm:text-8xl uppercase">
          {title}
        </h1>
        <div className="w-[31.188rem]">
          <p className="text-xs sm:text-base font-normal font-inter text-black normal-case mt-2 text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

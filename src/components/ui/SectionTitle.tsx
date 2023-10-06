import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center text-center">
        <h1 className="font-semibold text-crimson font-londrina 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl xsm:text-7xl text-5xl flex-wrap uppercase">
          {title}
        </h1>
        <div className="lg:w-[31.188rem] xl:w-[31.188rem] md:w-[30.9] sm:w-[24rem]">
          <p className="text-xs sm:text-base font-normal font-inter flex flex-wrap text-black normal-case mt-2 text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

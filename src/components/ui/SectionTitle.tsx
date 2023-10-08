import React from 'react';

type TextProps = {
  subtitle: string;
  title: string;
};

const SectionTitle: React.FC<TextProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="font-semibold text-crimson font-londrina text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl uppercase">
          {title}
        </h1>
        <div className="w-full md:w-[30.9rem] lg:w-[31.188rem] xl:w-[31.188rem]">
          <p className="md:text-[1.375rem] sm:text-[1.1rem] text-[.88rem] sm:text-base font-normal text-black normal-case mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

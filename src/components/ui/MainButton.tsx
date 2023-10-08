import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type MainButtonProps = {
  label: string;
  type?: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  [
    'inline-flex items-center gap-[0.625rem] px-[1.55rem] py-[0.55rem] sm:px-[2.1875rem] sm:py-[0.9375rem] overflow-hidden justify-center relative cursor-pointer shadow-lg ',
    'font-inter w-fit mt-[-0.0625rem] tracking-[0] font-bold leading-[normal] whitespace-nowrap relative text-[0.7rem] sm:text-[1.25rem]',
  ],
  {
    variants: {
      type: {
        'get-tickets':
          'bg-lavander text-white hover:bg-lightlavander rounded-[625rem]',
        about:
          'px-[3.1875rem] py-[0.9375rem ] outline outline-2 outline-[#333333] text-[#333333] rounded-[0.725rem] hover:text-[#757575] hover:outline-[#757575]',
      },
    },
  }
);

const MainButton: React.FC<MainButtonProps> = ({ label, type }) => {
  return <div className={buttonVariants({ type })}>{label}</div>;
};

export default MainButton;

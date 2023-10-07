import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type MainButtonProps = {
  label: string;
  type?: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    [
      'inline-flex items-center gap-[0.625rem] px-[2.1875rem] py-[0.9375rem] overflow-hidden justify-center relative cursor-pointer shadow-lg ',
      'font-inter w-fit mt-[-0.0625rem] tracking-[0] font-[1.25rem] font-bold leading-[normal] whitespace-nowrap relative xs:text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:[20px] ',
    ],
    {
      variants: {
        type: {
          'get-tickets': 'bg-lavander text-white hover:bg-lightlavander rounded-[625rem]',
          'about': 'px-[3.1875rem] py-[0.9375rem ] outline outline-2 outline-[#333333] text-[#333333] rounded-[0.725rem] hover:text-[#757575] hover:outline-[#757575]',
        },
      },
    }
  );
  

const MainButton: React.FC<MainButtonProps> = ({ label, type }) => {
  return (
    <div className={buttonVariants({ type })}>
      {label}
    </div>
  );
};

export default MainButton;



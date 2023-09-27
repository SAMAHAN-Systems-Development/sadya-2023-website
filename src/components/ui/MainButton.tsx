import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type MainButtonProps = {
  label: string;
  type?: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    [
      'inline-flex items-center gap-[10px] px-[35px] py-[15px] overflow-hidden rounded-[10px] justify-center relative',
      '[font-family:\'Inter-ExtraBold\',Helvetica] w-fit mt-[-1.00px] tracking-[0] font-extrabold leading-[normal] whitespace-nowrap relative',
    ],
    {
      variants: {
        type: {
          'get-tickets': 'bg-white text-[#333333] hover:bg-hovergrey',
          'about': 'bg-[#C1C1C1] text-[#333333] border-2 border-solid border-[#C1C1C1] hover:border-[#757575] hover:text-[#757575]',
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



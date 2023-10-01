import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type ButtonProps = {
  label: string;
  size?: string;
  type?: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  [
    'px-6 py-3 capitalize w-fit rounded-full group/main hover:bg-blue/50 transition-all ease-in-out duration-300 cursor-pointer',
  ],
  {
    variants: {
      size: {
        small: 'text-sm',
        default: 'text-md',
        large: 'text-lg',
      },
      type: {
        primary: 'bg-blue',
        secondary: 'bg-orange',
      },
    },
  }
);

const Button: React.FC<ButtonProps> = ({ label, size, type }) => {  
  return (
    <div className={buttonVariants({ size, type })}>
      <p className="group-hover/main:scale-95 transition-all ease-in-out duration-300">
        {label}
      </p>
    </div>
  );
};

export default Button;

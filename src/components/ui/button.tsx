import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, onClick, asChild }: Props) => {
  const customButton = cn(
    'py-2 px-4 text-center bg-button content-center font-semibold rounded-md text-sm hover:bg-[#F6F7EB] hover:text-black active:scale-95 transition-all duration-200 ease-in-out',
    className,
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: customButton,
    });
  }
  return (
    <button className={customButton} onClick={onClick}>
      {children}
    </button>
  );
};

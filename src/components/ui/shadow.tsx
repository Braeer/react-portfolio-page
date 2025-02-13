import { cn } from '@/lib/utils';

export const Shadow = ({ className, right }: { className?: string; right?: boolean }) => {
  return (
    <div
      className={cn(
        'absolute translate-x-[-40%] translate-y-[-50%] shadow-[#5F4BB64D] shadow-[0_0_200px_200px] blur-3xl  rounded-full',
        right ? 'top-[75%] right-0' : 'top-[35%] -left-[5%]',
        className,
      )}
    />
  );
};

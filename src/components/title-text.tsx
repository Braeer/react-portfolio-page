import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TitleText = ({ children, className }: Props) => {
  return <h2 className={cn('text-5xl font-Liter', className)}>{children}</h2>;
};

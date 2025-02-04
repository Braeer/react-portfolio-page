import { cn } from '@/lib/utils';
import { AboutCard } from './about-card';

type Props = {
  className?: string;
  data: {
    title: string;
    icon: string;
  }[];
};

export const AboutCards = ({ className, data }: Props) => {
  return (
    <div className={cn('flex w-full gap-5', className)}>
      {data.map((item, index) => (
        <AboutCard key={index} text={item.title} img={`./public/img/icons/${item.icon}`} />
      ))}
    </div>
  );
};

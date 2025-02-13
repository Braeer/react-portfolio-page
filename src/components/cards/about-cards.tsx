import { cn } from '@/lib/utils';
import { AboutCard } from './about-card';

type Props = {
  className?: string;
  data: {
    title: string;
    icon: string;
    shadow: string;
  }[];
};

export const AboutCards = ({ className, data }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full gap-20 gap flex-wrap items-center justify-center max-w-[1220px] mx-auto',
        className,
      )}>
      {data.map((item, index) => (
        <AboutCard
          key={index}
          text={item.title}
          img={`/img/icons/${item.icon}`}
          shadow={item.shadow}
        />
      ))}
    </div>
  );
};

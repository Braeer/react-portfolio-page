import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { cn } from '@/lib/utils';

export const AboutCard = ({ text, img, shadow }: { text: string; img: string; shadow: string }) => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <div className="relative flex items-center w-[120px] min-h-[160px] p-3 justify-center bg-white/10 backdrop-blur-xl rounded-xl border border-white/40 shadow-l hover:bg-[#FDFDFD]">
          <div
            className={cn(
              "absolute inset-0 before:content-[''] before:absolute before:inset-0 before:blur-2xl before:opacity-60 hover:before:shadow-3xl before:z-[-1] before:transition-all before:duration-300 before:ease-in-out",
              shadow ? `before:${shadow}` : '',
            )}
          />
          <img src={img} alt={text} className="w-full h-full object-cover z-10" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-full border-none text-white bg-inherit shadow-none p-0">
        <p className="opacity-100 font-semibold font-TitleFonts">{text}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

import { Card } from './ui/card';

export const AboutCard = ({ text, img }: { text: string; img: string }) => {
  return (
    <Card className="relative flex flex-col items-center gap-2 w-[120px] min-h-[160px] p-3 bg-slate-600 border-none text-white">
      <img src={img} alt={text} className="w-[100px] " />
      <p className="absolute bottom-3 text-center font-Roboto font-bold ">{text}</p>
    </Card>
  );
};

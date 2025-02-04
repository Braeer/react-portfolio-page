import { AboutCards } from '../about-cards';
import { TitleText } from '../title-text';
import data from '@/assets/data.json';

export const AboutMe = () => {
  return (
    <section className="py-10 px-4 md:px-10">
      <TitleText>Обо мне</TitleText>
      <p className="mt-5 text-lg max-w-[900px]">{data.aboutText}</p>
      <h4 className="mt-10 font-bold text-2xl mb-5">Я работал с:</h4>
      <AboutCards data={data.aboutCards} />
      <p className="mt-3 italic">и с многими библиотеками</p>
    </section>
  );
};
// Я владею такими технологиями как:

import { AboutCards, TitleText } from '../';
import data from '@/assets/data.json';

export const AboutMe = () => {
  return (
    <section className="pb-10 mt-28 px-4 md:px-10">
      <TitleText className="text-center">Моя база знаний</TitleText>
      <p className="mt-5 mb-20 leading-5 text- max-w-[632px] mx-auto text-center text-[#F6F7EBCC] opacity-80">
        {data.aboutText}
      </p>
      <AboutCards data={data.aboutCards} />
    </section>
  );
};
// Я владею такими технологиями как:

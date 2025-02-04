import { TitleText } from '../title-text';
import data from '@/assets/data.json';

export const AboutMe = () => {
  return (
    <section className="py-10 px-4 md:px-10">
      <TitleText className="text-center">Обо мне</TitleText>
      <p className="mt-5 text-lg max-w-[600px] text-center mx-auto">{data.aboutText}</p>
      <div>
        <TitleText className="text-center mt-10">Мои навыки</TitleText>
      </div>
    </section>
  );
};

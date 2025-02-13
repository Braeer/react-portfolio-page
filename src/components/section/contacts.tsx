import { TitleText } from '../';
import Data from '@/assets/data.json';

export const Contacts = () => {
  return (
    <section id="contacts" className=" px-4 mt-20 text-center">
      <TitleText className="text-center">Контакты</TitleText>
      <ul className="flex flex-col mt-10 text-xl gap-3 underline-offset-4">
        <li>
          <a href={Data.links.resume} className="hover:underline">
            Мое резюме
          </a>
        </li>
        <li className="text-base md:text-xl">{Data.links.email}</li>
        <li>
          <a href={Data.links.telegram} className="hover:underline">
            Telegram
          </a>
        </li>
        <li>
          <a href={Data.links.github} className="hover:underline">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

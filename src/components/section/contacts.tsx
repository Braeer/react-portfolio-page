import { TitleText } from '../title-text';
import Data from '@/assets/data.json';

export const Contacts = () => {
  return (
    <section id="contacts" className="py-10 px-4 md:px-10 mt-10">
      <TitleText>Контакты</TitleText>
      <ul className="flex flex-col mt-10 text-xl gap-3 ml-6">
        <li>
          <a href={Data.links.resume}>Мое резюме</a>
        </li>
        <li className="text-base md:text-xl">{Data.links.email}</li>
        <li>
          <a href={Data.links.telegram}>Telegram</a>
        </li>
        <li>
          <a href={Data.links.github}>GitHub</a>
        </li>
      </ul>
    </section>
  );
};

import { X } from 'lucide-react';
import { Button } from './ui/button';

type Props = {
  title: string;
  img: string;
  description: string;
  stack: string[];
  link: string;
  gitLink: string;
  backendGitLink?: string;
  backendStack?: string[];
  closeModal: () => void;
};

export const ProjectModal = ({
  title,
  img,
  description,
  stack,
  closeModal,
  link,
  backendStack,
  backendGitLink,
  gitLink,
}: Props) => {
  return (
    <div className="relative">
      <Button
        className="absolute top-[20px] right-5 p-2 bg-purple-500 rounded-xl text-white hover:text-black"
        onClick={closeModal}>
        <X className="" />
      </Button>
      <img src={`/img/projects/${img}`} className=" mx-auto border-b-4 border-black" alt="" />
      <div className="p-5 text-black">
        <h2 className="text-3xl font-semibold font-TitleFonts">{title}</h2>
        <p className="mt-2 opacity-85">Описание</p>
        <p className="mb-3">{description}</p>
        <div className="flex">
          <h5 className="mb-1 font-semibold mr-2">Стек Фронта:</h5>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {backendStack && (
          <div className="flex mt-3">
            <h5 className="mb-1 font-semibold mr-2">Стек Бэкенда:</h5>
            <ul className="flex flex-wrap gap-2">
              {backendStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-3 my-5 underline-offset-4">
        <Button asChild className="hover:underline">
          <a href={gitLink}>Ссылка на Git</a>
        </Button>
        {backendGitLink && (
          <Button asChild className="hover:underline">
            <a href={backendGitLink}>Ссылка на Git Backend</a>
          </Button>
        )}
        <Button asChild className="hover:underline">
          <a href={link}>Посмотреть</a>
        </Button>
      </div>
    </div>
  );
};

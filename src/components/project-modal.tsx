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
      <button className="absolute top-1 right-3" onClick={closeModal}>
        <X />
      </button>
      <h2 className="text-xl text-center font-Roboto my-3">{title}</h2>
      <img src={`./public/img/projects/${img}`} className=" mx-auto" alt="" />
      <div className="p-3">
        <p className="text-center">{description}</p>
      </div>
      <h5 className="text-center mb-1">Стэк Фронта:</h5>
      <ul className="flex flex-wrap justify-center gap-2 mx-auto">
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {backendStack && (
        <>
          <h5 className="text-center mb-1 mt-5">Стэк Бэкенда:</h5>
          <ul className="flex flex-wrap justify-center gap-2 max-w-[400px] mx-auto">
            {backendStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      <div className="flex justify-center gap-3 my-5">
        <Button asChild>
          <a href={gitLink}>Ссылка на Git</a>
        </Button>
        {backendGitLink && (
          <Button asChild>
            <a href={backendGitLink}>Ссылка на Git Backend</a>
          </Button>
        )}
        <Button asChild>
          <a href={link}>Посмотреть</a>
        </Button>
      </div>
    </div>
  );
};

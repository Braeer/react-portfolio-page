import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react';
import Modal from 'react-modal';
import { ProjectModal } from '../project-modal';

type Props = {
  title: string;
  img: string;
  link: string;
  gitLink: string;
  description: string;
  stack: string[];
  backendGitLink?: string;
  backendStack?: string[];
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#475669',
    width: '90%',
    maxWidth: '800px',
    border: 'none',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

export const ProjectCard = ({
  title,
  img,
  description,
  stack,
  link,
  gitLink,
  backendGitLink,
  backendStack,
}: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Card className="relative flex flex-col items-center gap-2 max-w-[300px] min-h-[400px] bg-slate-600 border-none text-white">
        <CardContent className=" w-full p-0">
          {img ? (
            <img src={`./public/img/projects/${img}`} className="w-[300px] rounded-sm" alt="" />
          ) : (
            <div className="w-[300px] h-[200px] bg-gray-400 rounded-sm" />
          )}
          <CardTitle className="text-center p-2">{title}</CardTitle>
          <p className="p-2">{description}</p>
          <div className="absolute top-[82%]   w-full flex justify-between p-4">
            <Button asChild className="w-1/2">
              <a href={link}>Перейти на сайт</a>
            </Button>
            <Button onClick={openModal} className="">
              Подробнее
            </Button>
          </div>
        </CardContent>
      </Card>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        bodyOpenClassName={'overflow-hidden h-screen'}
        style={customStyles}>
        <ProjectModal
          title={title}
          img={img}
          description={description}
          stack={stack}
          link={link}
          backendGitLink={backendGitLink}
          backendStack={backendStack}
          gitLink={gitLink}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

import { Button } from '@/components/ui/button';
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
    backgroundColor: 'rgba(246, 247, 235, 1)',
    width: '80%',
    maxWidth: '905px',
    maxHeight: '90vh',
    border: 'none',
    borderRadius: '20px',
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
      <div className="flex flex-col items-center w-[385px] px-5 h-[403px] bg-[#FDFDFD] bg-opacity-[0.14] rounded-[15px] text-white ">
        <div className=" w-full p-0">
          {img ? (
            <img
              src={`/img/projects/${img}`}
              className="w-full mx-auto mt-4 max-h-[200px] rounded-[15px] overflow-hidden"
              alt=""
            />
          ) : (
            <div className="w-full h-[200px] bg-gray-400 rounded-[15px] mt-4" />
          )}
          <h1 className="font-semibold font-TitleFonts text-[#F6F7EB] text-2xl mt-1">{title}</h1>
          <p className="text-[#F6F7EB] text-base my-3 leading-5 h-[80px]">{description}</p>
          {/* <div className=" mt-8 pb-8"> */}
          <div className=" w-full flex justify-between">
            <Button asChild className="w-1/2">
              <a href={link}>Просмотреть</a>
            </Button>
            <Button onClick={openModal}>Подробнее</Button>
          </div>
          {/* </div> */}
        </div>
      </div>
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

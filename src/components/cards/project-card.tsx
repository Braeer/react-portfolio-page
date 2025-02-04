import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

export const ProjectCard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Card className="flex flex-col items-center gap-2 max-w-[400px] bg-slate-600 border-none text-white">
        <CardContent className="w-full p-0">
          <img src="./public/img/screen-one.png" className="w-full rounded-sm" alt="" />
          <CardTitle className="text-center p-2">Заголовок</CardTitle>
          <p className="p-2">Описание</p>
          <div className="flex justify-between p-4">
            <Button asChild>
              <a href="">Перейти на сайт</a>
            </Button>
            <Button onClick={openModal}>Подробнее</Button>
          </div>
        </CardContent>
      </Card>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        bodyOpenClassName={'overflow-hidden h-screen'}
        style={customStyles}></Modal>
    </>
  );
};

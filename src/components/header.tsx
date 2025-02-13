// import { ArrowDown } from 'lucide-react';
import { Button, Logo, Navbar, Shadow } from './';
import data from '@/assets/data.json';

export const Header = () => {
  return (
    <header className="relative bg-bg-header bg-cover bg-center text-white p-4 min-h-[100vh] w-full">
      <div className="flex justify-between mt-12 mx-10 flex-col md:flex-row items-center">
        <Logo />
        <Navbar />
      </div>
      <div className="absolute top-[20%] left-0 md:top-[30%] flex w-full items-center justify-between flex-col-reverse lg:flex-row px-4 md:px-10">
        <div className="items-center md:ml-9">
          <p className="text-2xl text-[#F6F7EB99] opacity-60 mb-5">Привет, я</p>
          <h1 className="text-5xl md:text-6xl text-wrap font-TitleFonts text-[#F6F7EB] font-semibold">
            Багаев Тимур
          </h1>
          <h2 className="text-3xl text-wrap font-TitleFonts my-5 text-[#F6F7EB]">
            Front-end разработчик
          </h2>
          <p className="text-[#F6F7EB] max-w-[490px] leading-6 text-2xl mb-[60px] font-normal">
            {data.headerText}
          </p>
          <Button className="text-sm px-8 py-3" asChild>
            <a href={data.links.telegram}>Сотрудничать</a>
          </Button>
        </div>
        <div className="mb-10">
          <img src="/img/hero.svg" alt="" />
        </div>
      </div>
      {/* <ArrowDown className="absolute bottom-24 left-16" size={50} /> */}
      <Shadow right />
      <Shadow />
    </header>
  );
};

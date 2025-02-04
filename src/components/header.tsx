import { ArrowDown } from 'lucide-react';
import { Navbar } from './navbar';

export const Header = () => {
  return (
    <header className="bg-bg-header bg-cover bg-center text-white p-4 min-h-[100vh] w-full ">
      <Navbar />
      <div className="absolute top-[40%] items-center ml-9">
        <h1 className="text-8xl font-Roboto font-bold">Багаев Тимур</h1>
        <h2 className="text-4xl font-Liter mt-5">Frontend разработчик</h2>
      </div>
      <ArrowDown className="absolute bottom-12 left-20" size={50} />
    </header>
  );
};

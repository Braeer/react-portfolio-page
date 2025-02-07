export const Navbar = () => {
  return (
    <nav className="justify-end flex py-5 md:p-5 md:mr-10">
      <ul className="flex gap-9 text-lg">
        <li>
          <a className="hover:underline" href="#projects">
            Проекты
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#contacts">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const Navbar = () => {
  return (
    <nav className="justify-end flex ">
      <ul className="flex gap-9 text-lg underline-offset-4">
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarMenu({ isMenuOpen, location, closeMenu }) {
  const [menuClosing, setMenuClosing] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setMenuClosing(true);
      const timer = setTimeout(() => setMenuClosing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/houses", name: "Houses" },
    { path: "/spells", name: "Spells" },
    { path: "/characters", name: "Characters" },
  ];

  return (
    <ul
      className={` ${
        isMenuOpen
          ? "block animate-fade-in"
          : menuClosing
          ? "block animate-fade-out"
          : "hidden"
      } absolute top-16 left-0 w-full bg-burgundy md:static md:flex md:space-x-8 md:justify-end md:w-auto md:px-4
         `}
    >
      {navItems.map((item) => (
        <li
          key={item.path}
          className={`hover:text-white ${
            item.path === location.pathName
              ? "bg-gold opacity-70 text-burgundy"
              : ""
          }`}
        >
          <Link to={`${item.path}`} onClick={closeMenu}>
            {" "}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarMenu;

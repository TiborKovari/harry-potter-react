import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#740001] text-gold text-2xl font-serif shadow-md py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-gold text-4xl font-harrypotter tracking-widest whitespace-nowrap">
          Wizarding World
        </h1>
        <button
          className="text-gold md:hidden flex flex-col space-y-1 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-4 h-0.5 bg-gold"></span>
          <span className="block w-4 h-0.5 bg-gold"></span>
          <span className="block w-4 h-0.5 bg-gold"></span>
        </button>
        <ul className={`${ isMenuOpen ? "block animate-fade-in" : "hidden" 
        } absolute top-16 left-0 w-full bg-burgundy md:static md:flex md:space-x-8 md:justify-end md:w-auto md:px-4
        `}>
            <li 
            className={`hover:text-white ${
              location.pathname === "/" ? "bg-gold opacity-70 text-burgundy" : ""
            }`}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={`hover:text-white ${
              location.pathname === "/houses" ? "bg-gold opacity-70 text-burgundy" : ""
            }`}>
              <Link to={"/houses"}>Houses</Link>
            </li>
            <li className={`hover:text-white ${
              location.pathname === "/spells" ? "bg-gold opacity-70 text-burgundy" : ""
            }`}>
              <Link to={"/spells"}>Spells</Link>
            </li>
            <li className={`hover:text-white ${
              location.pathname === "/characters" ? "bg-gold opacity-70 text-burgundy" : ""
            }`}>
              <Link to={"/characters"}>Characters</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

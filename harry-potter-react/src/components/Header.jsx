import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#740001] text-gold text-2xl font-serif shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-gold text-4xl font-harrypotter tracking-widest">
          Wizarding World
        </h1>
        <ul className="flex space-x-8">
          {location.pathname !== "/" && (
            <li className="hover:text-white">
              <Link to={"/"}>Home</Link>
            </li>
          )}
          {location.pathname !== "/characters" && (
            <li className="hover:text-white">
              <Link to={"/characters"}>Characters</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

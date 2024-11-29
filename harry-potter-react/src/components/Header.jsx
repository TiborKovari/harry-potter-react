import { useState } from "react";
import { useLocation } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import NavbarMenu from "./NavbarMenu";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#740001] text-gold text-2xl font-serif shadow-md py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-gold text-4xl font-harrypotter tracking-widest whitespace-nowrap">
          Wizarding World
        </h1>
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarMenu
          isMenuOpen={isMenuOpen}
          location={location}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
}

export default Header;

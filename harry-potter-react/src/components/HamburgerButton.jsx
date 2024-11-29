function HamburgerButton({ isMenuOpen, toggleMenu }) {
  return (
    <button
      className={`text-gold flex flex-col space-y-1 ml-auto md:hidden ${
        isMenuOpen ? "text-white" : ""
      }`}
      onClick={toggleMenu}
    >
      <span
        className={`block w-6 h-0.5 bg-gold transform transition-transform ${
          isMenuOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gold transform transition-transform ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gold transform transition-transform ${
          isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );
}

export default HamburgerButton;

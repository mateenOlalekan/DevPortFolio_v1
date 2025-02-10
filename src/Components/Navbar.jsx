import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-white shadow-lg">
      {/* Navbar Container */}
      <div className="mx-auto max-w-screen-2xl px-6 py-4 flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <a
          href="/"
          className="inline-flex items-center text-2xl font-bold text-black"
          aria-label="logo"
        >
          <span className="text-blue-500">Olale</span>
          <span className="text-black">kan</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="/"
            className="relative text-lg font-normal text-black hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-300"
          >
            Home
          </a>
          <a
            href="#project"
            className="relative text-lg font-normal text-black hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-300"
          >
            Project
          </a>
          <a
            href="#about"
            className="relative text-lg font-normal text-black hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="relative text-lg font-normal text-black hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-3px] after:left-0 after:transition-all after:duration-300"
          >
            Contact
          </a>
          <a
            href="/"
            className="border-2 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-blue-600 outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-48 h-screen bg-white transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <a
            onClick={toggleMenu}
            href="/"
            className="text-xl font-medium text-gray-800 hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            onClick={toggleMenu}
            href="#project"
            className="text-xl font-medium text-gray-800 hover:text-blue-500 transition-colors"
          >
            Project
          </a>
          <a
            onClick={toggleMenu}
            href="#about"
            className="text-xl font-medium text-gray-800 hover:text-blue-500 transition-colors"
          >
            About
          </a>
          <a
            onClick={toggleMenu}
            href="#contact"
            className="text-xl font-medium text-gray-800 hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
          <a
            href="/"
            onClick={toggleMenu}
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="absolute mt-10 max-lg:mt-5 top-0 left-0 w-full z-50"> {/* Absolute to overlay */}
      {/* Navbar Container */}
      <div className="mx-auto max-w-screen-2xl py-4 bg-white max-lg:bg-transparent px-4 md:px-8  rounded-full  border border-gray-200 max-lg:border-none">
        <header className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="inline-flex items-center text-2xl font-bold text-black"
            aria-label="logo"
          >
            <span className="text-blue-500">Olale</span>
            <span className="text-black">kan</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden gap-12 lg:flex justify-center items-center">
            <a
              href="/"
              className="relative text-lg font-normal text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#project"
              className="relative text-lg font-normal text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              Project
            </a>
            <a
              href="#about"
              className="relative text-lg font-normal text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#contact"
              className="relative text-lg font-normal text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              Contact
            </a>
            <a className="border-2 bg-blue-500 text-white rounded-full py-2 px-4 hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-1000 transition-all cursor-pointer">
              Download CV
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-3 text-3xl font-normal text-blue-600 outline-none transition duration-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-40 bg-white border flex justify-center items-center border-gray-300 shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-4 gap-5">
          <a
            onClick={toggleMenu}
            href="#home"
            className="relative text-lg font-normal text-black mb-4 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
          >
            Home
          </a>
          <a
            onClick={toggleMenu}
            href="#project"
            className="relative text-lg font-normal text-black mb-4 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
          >
            Project
          </a>
          <a
            onClick={toggleMenu}
            href="#about"
            className="relative text-lg font-normal text-black mb-4 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
          >
            About
          </a>
          <a
            onClick={toggleMenu}
            href="#contact"
            className="relative text-lg font-normal text-black mb-4 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-3px] after:left-0 after:transition-all after:duration-500 hover:after:w-full"
          >
            Contact
          </a>
          <a
            href="/"
            className="rounded-lg text-white text-lg w-fit text-center p-2 font-normal bg-blue-500 outline-none transition duration-100"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

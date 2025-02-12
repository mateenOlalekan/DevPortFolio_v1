import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-2 mt-10">
      <div className="mx-auto max-w-screen-2xl flex justify-between items-center bg-white lg:rounded-full lg:border lg:shadow-lg py-3 px-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-black">
          <span className="text-blue-500">Olale</span>kan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative text-lg font-normal text-black hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {name}
            </a>
          ))}
          <a
            href="/"
            className="border-2 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-3xl text-blue-600">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-md transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } z-40 flex flex-col items-center justify-center gap-6`}
      >
        {navLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={toggleMenu}
            className="relative text-lg font-normal text-black hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            {name}
          </a>
        ))}
        <a
          href="/"
          onClick={toggleMenu}
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition-all"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;

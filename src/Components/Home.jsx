import { useState, useEffect } from "react";
import "./home.css";
import marcusImage from "./marcus.jpg";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility for the button
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pb-6 sm:pb-8 lg:pb-12">
        {/* Hero Section */}
        <section
          className="flex items-center justify-between bg-white"
          style={{
            fontSize: "16px", // Set a consistent base font size
          }}
        >
          {/* Hero Image */}
          <div
            className="w-full lg:w-2/5 h-full max-lg:hidden lg:block"
            style={{
              backgroundImage: `url(${marcusImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          ></div>

          {/* Hero Content */}
          <div className="flex flex-col gap-6 max-lg:gap-2 items-start px-6 lg:px-12 max-lg:mt-36 py-10 lg:py-20 w-full lg:w-3/5">
            <p className="text-blue-600 text-lg font-medium">Hello, my name is</p>
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900">Abdul-Matin Olalekan.</h1>
            <h2 className="text-xl lg:text-4xl font-semibold text-gray-600">I create remarkable web experiences.</h2>
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed text-justify">
              I’m a passionate software engineer with expertise in building user-friendly, visually appealing, and accessible web
              applications. My focus is on crafting seamless digital solutions that combine functionality and creativity to solve
              real-world problems.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 mt-5 border-2 bg-blue-600 text-white text-sm lg:text-base font-medium rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-end gap-4 p-6 lg:p-12">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
              { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
              { href: "https://wa.me", icon: <FaWhatsapp />, label: "WhatsApp" },
              { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
              { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center text-xl bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Additional Sections */}
      <About />
      <Project />
      <Contact />

      {/* Floating Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
}

export default Home;

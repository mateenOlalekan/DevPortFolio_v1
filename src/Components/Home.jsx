import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks"; // Import SocialLinks component
import shock from "./Main/shock.jpg";

const Home = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      {/* Hero Section */}
      <section className="flex items-center justify-between bg-white max-lg:pt-40 max-lg:pb-20">
        {/* Hero Image */}
        <div
          className="max-lg:w-full lg:w-2/5 h-screen max-lg:hidden lg:block bg-cover bg-center"
          style={{ backgroundImage: `url(${shock})` }}
          data-aos="fade-right"
        ></div>

        {/* Hero Content */}
        <div
          className="max-lg:w-full lg:w-3/5 px-5 lg:px-10 flex lg:flex-row justify-between items-center gap-8 lg:gap-16 transition-all duration-1000"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div className="flex flex-col items-start w-full space-y-6 lg:space-y-8">
            <p className="text-blue-600 text-lg font-medium">Hello, my name is</p>
            <h1 className="text-3xl sm:text-2xl lg:text-5xl font-semibold text-gray-900">
              Abdul-Matin Olalekan.
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-600">
              I create remarkable web experiences.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
              I’m a passionate software engineer with expertise in building user-friendly, visually
              appealing, and accessible web applications. My focus is on crafting seamless digital
              solutions that combine functionality and creativity to solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full transition-transform duration-300 hover:bg-blue-700"
                data-aos="zoom-in"
              >
                Contact Me
              </a>
              <a
                href="#resume"
                className="flex items-center px-6 py-3 border-2 gap-2 border-blue-600 text-blue-500 text-sm sm:text-base font-medium rounded-full transition-transform duration-300 hover:bg-blue-600 hover:text-white"
                data-aos="zoom-in"
              >
                <span>My Resume</span> <FaDownload />
              </a>
            </div>
          </div>

          {/* Right Content - Social Icons */}
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default Home;

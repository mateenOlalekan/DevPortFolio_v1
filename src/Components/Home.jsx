import { FaFacebookF, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import shock from "./Main/shock.jpg";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import { useEffect } from "react";

function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        {/* Hero Section */}
        <section className="flex items-center justify-between bg-white max-lg:pt-40 max-lg:pb-20">
          {/* Hero Image */}
          <div
            className="max-lg:w-full lg:w-2/5 h-screen max-lg:hidden lg:block"
            style={{
              backgroundImage: `url(${shock})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-right"
          ></div>

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
              <p className="text-sm sm:text-base lg:text-lg text-j lg:w-full text-gray-500 leading-relaxed">
                I’m a passionate software engineer with expertise in building user-friendly, visually appealing, and accessible web applications. My focus is on crafting seamless digital solutions that combine functionality and creativity to solve real-world problems.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white text-sm max-sm:text-[12px] sm:text-base font-medium rounded-full transition-transform duration-300 hover:bg-blue-700"
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
            <div className="flex flex-col items-center gap-5" data-aos="fade-left">
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
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
                  title={social.label}
                  data-aos="flip-up"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

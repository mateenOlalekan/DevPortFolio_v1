import "./home.css";

// import About from "./About";
// import Project from "./Project";
// import Contact from "./Contact";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaWhatsapp,
//   FaGithub,
//   FaLinkedin,
//   FaArrowDown,
//   FaArrowRight,
// } from "react-icons/fa";

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="flex flex-col lg:flex-row items-center justify-center bg-gray-100">
//         {/* Image Section */}
//         <div
//           className="w-full lg:w-2/5 h-full hidden lg:block"
//           style={{
//             backgroundImage: `url(${marcusImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "100vh",
//           }}
//         ></div>

//         {/* Content Section */}
//         <div className="w-full lg:w-3/5 py-8 px-6  flex flex-col items-center justify-start gap-10">
//           <div className="w-3/4 flex gap-10 flex-col lg:flex-row">
//             {/* Text Section */}
//             <div className="flex flex-col gap-4">
//               <p className="text-blue-600 text-lg font-medium flex items-center gap-2">
//                 Hi, I am{" "}
//                 <FaArrowRight className="text-blue-600 animate-bounce" />
//               </p>
//               <h1 className="text-4xl lg:text-5xl font-bold text-black">
//                 Abdul-Matin Olalekan
//               </h1>
//               <h2 className="text-3xl font-semibold text-gray-700">
//                 I build things for the web.
//               </h2>
//               {/* Description */}
//               <p className="text-lg text-gray-800 leading-relaxed">
//                 I’m a front-end developer with a passion for crafting visually
//                 stunning, accessible, and user-friendly interfaces. I specialize in
//                 building pixel-perfect digital experiences that bring ideas to life
//                 with engaging, responsive, and detail-oriented solutions.
//               </p>

//               {/* Call-to-Action */}
//               <div className="flex gap-6">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center gap-3 bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                 >
//                   Get In Touch <FaArrowRight />
//                 </a>
//               </div>

//               {/* Scroll Indicator */}
//               <div className="flex justify-start items-center mt-6">
//                 <a
//                   href="#about"
//                   className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:shadow-lg transition-all"
//                 >
//                   <FaArrowDown className="text-xl" />
//                 </a>
//               </div>
//             </div>

//             {/* Social Media Section */}
//             <div className="flex flex-col justify-center items-center gap-4">
//               {[
//                 { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
//                 { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
//                 { href: "https://wa.me", icon: <FaWhatsapp />, label: "WhatsApp" },
//                 { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
//                 { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
//                   title={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}

//     </>
//   );
// };

// export default Home;

import "./home.css";
import marcusImage from "./marcus.jpg";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="pb-6 sm:pb-8 lg:pb-12">
        {/* Hero Section */}
        <section className="flex  items-center justify-between bg-white">
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
          <div className="flex flex-col gap-8 max-lg:gap-2 items-start px-6 lg:px-12 max-lg:mt-36 py-10 lg:py-20 w-full lg:w-3/5">
            <p className="text-blue-600 text-lg font-medium">
              Hello, my name is
            </p>
            <h1 className="max-lg:text-4xl lg:text-5xl font-semibold text-gray-900">
              Abdul-Matin Olalekan.
            </h1>
            <h2 className="text-xl lg:text-4xl font-semibold text-gray-600">
              I create remarkable web experiences.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed text-justify">
              I’m a passionate software engineer with expertise in building
              user-friendly, visually appealing, and accessible web
              applications. My focus is on crafting seamless digital solutions
              that combine functionality and creativity to solve real-world
              problems.
            </p>
            <a
              href="#contact"
              className="inline-block px-6  py-2 mt-5 border-2 bg-blue-600 text-white text-[15px] font-medium rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
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
                className="w-12 h-12 max-lg:w-10 max-lg:h-10 flex items-center justify-center text-xl max-lg:text-lg bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
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
    </>
  );
}

export default Home;

import React, { useEffect } from 'react';
import marcus from "../Image/rog.jpg";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiSass, SiNpm, SiJquery, SiGraphql,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 500, // Animation duration
        easing: "ease-in-out", // Animation easing
        once: true, // Whether animation should happen only once
      });
    }, []);
  
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl md:text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl md:text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl md:text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl md:text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl md:text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl md:text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl md:text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl md:text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl md:text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-3xl md:text-4xl" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400 text-3xl md:text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-3xl md:text-4xl" /> },
    { name: "npm", icon: <SiNpm className="text-red-500 text-3xl md:text-4xl" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600 text-3xl md:text-4xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-3xl md:text-4xl" /> },
  ];

  return (
    <div className="bg-white py-6 sm:py-10 lg:py-6 flex gap-4 flex-col" id="about">
      <div className="max-w-screen-2xl mx-auto  px-6 lg:px-36 flex flex-col items-center gap-10">
        {/* About Section */}
        <div className="flex flex-col-reverse lg:flex-row w-full gap-10 lg:gap-20 items-center">
          <div className="lg:w-3/4 flex flex-col gap-6 text-justify" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Hi, my name is Abdul-Matin Olalekan. I’m a frontend developer passionate about creating clean, responsive, and user-friendly web applications. My journey into development began with a strong curiosity for technology and how websites work, which led me to explore the exciting world of web development.
              Over the past year, I’ve gained hands-on experience in building web projects using technologies like HTML, CSS, JavaScript, and React. My focus has been on creating scalable, maintainable, and accessible interfaces while also learning best practices in responsive design and cross-browser compatibility. I enjoy solving problems and continuously refining my code to make it as efficient as possible.
            </p>
          </div>
          <div className="lg:w-1/4 flex justify-center items-center p-4" data-aos="fade-left">
            <img src={marcus} className="w-60 md:w-72 lg:w-full h-auto rounded-xl object-cover" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-start px-4 sm:px-8 md:px-16 lg:px-36">
  <div className="flex flex-col sm:items-start" data-aos="fade-up">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">My Toolkit</h3>
    <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 text-center sm:text-left">
      Here are some of the technologies and tools I’ve worked with recently:
    </p>
    <ul className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
      {technologies.map((tech, index) => (
        <li
          key={index}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span>{tech.icon}</span>
          <p className="text-xs sm:text-sm font-medium text-gray-700">{tech.name}</p>
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  );
}

export default About;



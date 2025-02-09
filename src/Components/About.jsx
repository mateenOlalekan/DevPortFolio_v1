import Img from "./marcus.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiSass,
  SiNpm,
  SiJquery,
  SiGraphql,
} from "react-icons/si";

function About() {
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-4xl" /> },
    { name: "npm", icon: <SiNpm className="text-red-500 text-4xl" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600 text-4xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="about">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* About Section */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-justify">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, my name is Abdul-Matin Olalekan. I’m a frontend developer
              passionate about creating clean, responsive, and user-friendly
              web applications. My journey into development began with a strong
              curiosity for technology and how websites work, which led me to
              explore the exciting world of web development.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Over the past year, I’ve gained hands-on experience in building
              web projects using technologies like HTML, CSS, JavaScript, and
              React. My focus has been on creating scalable, maintainable, and
              accessible interfaces while also learning best practices in
              responsive design and cross-browser compatibility. I enjoy
              solving problems and continuously refining my code to make it as
              efficient as possible.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Tech Stack
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            Here are some of the technologies and tools I’ve worked with
            recently:
          </p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span>{tech.icon}</span>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default About;

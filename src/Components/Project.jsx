import { useEffect } from "react";
import { FaEye, FaGithub, FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import Wander from "../Image/wander.png";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const projects = [
    { category: "E-Commerce", title: "WanderLust", img: Wander, languages: "HTML, CSS, JS, Bootstrap", liveLink: "https://thewanderlusttravels.com/", githubLink: "https://github.com/user/shopease" },
    { category: "Dashboard", title: "Personal Portfolio", img: "https://source.unsplash.com/600x700/?portfolio", languages: "React, Tailwind, Framer", liveLink: "https://portfolio-live.com", githubLink: "https://github.com/user/portfolio" },
    { category: "Blog Platform", title: "Tech Blog", img: "https://source.unsplash.com/600x700/?technology", languages: "Next.js, TypeScript, Tailwind", liveLink: "https://techblog-live.com", githubLink: "https://github.com/user/techblog" },
    { category: "Education", title: "Learnify", img: "https://source.unsplash.com/600x700/?education", languages: "Vue.js, SCSS, Firebase", liveLink: "https://learnify-live.com", githubLink: "https://github.com/user/learnify" },
    { category: "SaaS", title: "FlowDrif", img: "https://source.unsplash.com/600x700/?saas", languages: "React, Node.js, MongoDB", liveLink: "https://flowdrif.com", githubLink: "https://github.com/user/flowdrif" },
    { category: "HealthTech", title: "MediCare", img: "https://source.unsplash.com/600x700/?medical", languages: "Angular, TypeScript, SCSS", liveLink: "https://medicare.com", githubLink: "https://github.com/user/medicare" },
    { category: "Finance", title: "FinTrack", img: "https://source.unsplash.com/600x700/?finance", languages: "Vue, Tailwind, Firebase", liveLink: "https://fintrack.com", githubLink: "https://github.com/user/fintrack" },
    { category: "Entertainment", title: "MovieTime", img: "https://source.unsplash.com/600x700/?movies", languages: "React, Redux, Firebase", liveLink: "https://movietime.com", githubLink: "https://github.com/user/movietime" }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center px-6 lg:px-36 py-16" id="project">
      {/* Section Header */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <FaFolderOpen className="text-blue-500" /> Featured Projects
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          A curated collection of my best development projects, showcasing skills in modern, responsive, and user-focused solutions.
        </p>
        <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            data-aos={index < projects.length / 2 ? "fade-right" : "fade-left"}
          >
            {/* Project Image */}
            <img src={project.img} alt={project.title} className="w-full h-40 rounded-md object-cover mb-4" />

            {/* Project Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <div className="bg-blue-500 text-white p-2 rounded-full" title={project.category}>
                  <HiOutlineCode />
                </div>
              </div>
              <p className="text-sm text-gray-600">{project.languages}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex mt-4 justify-between">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                <FaEye className="text-lg" /> <span>Live Demo</span>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 text-sm">
                <FaGithub className="text-lg" /> <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-center w-fit items-center gap-1 px-6 text-blue-500 py-3 border-2 rounded-full border-blue-600 cursor-pointer hover:bg-blue-100 transition">
          <span>Show More</span> <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Project;

import { FaEye, FaGithub, FaFolderOpen ,FaArrowRight} from "react-icons/fa";
import { FaStar, FaHeart, FaCode } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cap from "../Image/Capture.png";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Only animate once
    });
  }, []);

  const projects = [
    {
      category: "E-Commerce",
      title: "ShopEase",
      img: Cap,
      alt: "ShopEase Project",
      languages: "React, Node.js, Tailwind CSS",
      liveLink: "https://shopease-live.com",
      githubLink: "https://github.com/user/shopease",
    },
    {
      category: "DashBoard",
      title: "Personal Portfolio",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Portfolio Project",
      languages: "HTML, CSS, JavaScript",
      liveLink: "https://portfolio-live.com",
      githubLink: "https://github.com/user/portfolio",
    },
    {
      category: "Blog Platform",
      title: "Tech Blog",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Tech Blog Project",
      languages: "Next.js, TypeScript, Tailwind",
      liveLink: "https://techblog-live.com",
      githubLink: "https://github.com/user/techblog",
    },
    {
      category: "Educational Platform",
      title: "Learnify",
      img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Learnify Project",
      languages: "Vue.js, SCSS, Firebase",
      liveLink: "https://learnify-live.com",
      githubLink: "https://github.com/user/learnify",
    },

  ];

  return (
    <div className="bg-white " id="project">
      <div className="max-w-screen-2xl mx-auto py-20 px-6 lg:px-36 gap-6 flex justify-center items-center flex-col ">
        {/* Section Header */}
        <div
  className="text-center mb-10"
  data-aos="fade-up"
>
  <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
    <FaFolderOpen className="text-blue-500" />
    Featured Projects
  </h2>
  <p className="text-gray-600 mt-2 max-w-md mx-auto">
    A curated collection of my best development projects, showcasing skills in creating modern, responsive, and user-focused solutions.
  </p>
  <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
</div>


        {/* Projects Grid */}
        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-aos="fade-up"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              data-aos="zoom-in"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-40 rounded-md object-cover mb-4"
              />

              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <div
                    className="bg-blue-500 text-white p-2 rounded-full"
                    title={project.category}
                  >
                    <HiOutlineCode />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{project.languages}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex mt-4 justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                  title="View Live Project"
                >
                  <FaEye className="text-lg" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-gray-900 text-sm"
                  title="View Source Code"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-4">
        <div className=" flex justify-center w-fit items-center gap-1 px-4 text-blue-500 py-3 border-2 rounded-full border-blue-600">
            <span>Show More</span> <FaArrowRight/>
        </div>
        </div>
      </div>

    </div>
  );
}

export default Project;

import { FaEye, FaGithub, FaFolderOpen } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import Cap from "../Image/Capture.png";

function Project() {
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
    {
      category: "Social Media",
      title: "Chatter",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Chatter Project",
      languages: "React, Redux, Node.js",
      liveLink: "https://chatter-live.com",
      githubLink: "https://github.com/user/chatter",
    },
    {
      category: "Task Management",
      title: "Taskly",
      img: "https://images.unsplash.com/photo-1593642533144-3d62f5e11341?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Taskly Project",
      languages: "Angular, NgRx, Material UI",
      liveLink: "https://taskly-live.com",
      githubLink: "https://github.com/user/taskly",
    },
    {
      category: "Finance",
      title: "Budget Tracker",
      img: "https://images.unsplash.com/photo-1543332164-6e96c123fd3b?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Budget Tracker Project",
      languages: "React, Express.js, MongoDB",
      liveLink: "https://budgettracker-live.com",
      githubLink: "https://github.com/user/budgettracker",
    },
    {
      category: "Weather App",
      title: "Weatherify",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&q=75&fit=crop&w=600&h=700",
      alt: "Weatherify Project",
      languages: "Vue.js, Tailwind CSS, OpenWeather API",
      liveLink: "https://weatherify-live.com",
      githubLink: "https://github.com/user/weatherify",
    },
  ];

  return (
    <div className="bg-gray-50 py-12" id="project">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <FaFolderOpen className="text-blue-500" />
            My Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Explore some of the projects I’ve worked on, showcasing my
            expertise in frontend and full-stack development.
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image Section */}
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.languages}</p>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  {/* Live Demo Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-sm"
                  >
                    <FaEye />
                    <span>Live Demo</span>
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-gray-900 text-sm"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

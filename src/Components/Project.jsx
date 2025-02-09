import { FaEye, FaGithub, FaFolderOpen } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import Cap from "../Image/Capture.png"

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
    <div className="bg-white py-6 sm:py-8 lg:py-6" id="project">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <FaFolderOpen className="text-blue-500" />
          My Projects
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          A showcase of my completed projects, including live demos and source code.
        </p>
        <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-40 rounded-md object-cover mb-4"
            />

            {/* Project Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                {/* Category Icon */}
                <div
                  className="bg-blue-500 text-white p-2 rounded-full"
                  title={project.category}
                >
                  <HiOutlineCode />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{project.languages}</p>
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
    </div>
    </div>

  );
}

export default Project;
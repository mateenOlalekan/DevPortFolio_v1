import { useEffect } from "react";
import ProjectCard from './ProjectCard';

import {Code, Layers, Monitor, Palette, Database, BarChart } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFolderOpen } from "react-icons/fa";

const projectsData = [
  {
    id: "1",
    title: "WanderLust",
    description:
      "A travel agency web app helps users book trips, explore destinations, and manage travel plans..",
    technologies: ["Html", "Css", "Javascript", "Bootstrap"],
    liveUrl: "https://thewanderlusttravels.com/",
    githubUrl: "https://github.com/example/taskmanager"
  },
  {
    id: "2",
    title: "Coach Africa",
    description:
      "A platform for educators to learn, explore, and master modern teaching technologies to enhance learning and engagement..",
    technologies: ["React", "Tailwind", "Firebase"],
    liveUrl: "coach-africa.vercel.app",
    githubUrl: "https://github.com/example/finance"
  },
  {
    id: "3",
    title: "Digital Wellness App",
    description:
      "A mindfulness and health tracking application with personalized recommendations and habit formation techniques.",
    technologies: ["React Native", "Redux", "Express", "PostgreSQL"],
    liveUrl: "https://example.com/wellness",
    githubUrl: "https://github.com/example/wellness"
  },
  {
    id: "4",
    title: "Creative Portfolio Platform",
    description:
      "A showcase platform for designers and artists with customizable layouts and integrated analytics for visitor engagement.",
    technologies: ["Next.js", "GraphQL", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    id: "5",
    title: "Smart Home Controller",
    description:
      "An IoT dashboard for managing connected home devices with automation sequences and energy consumption monitoring.",
    technologies: ["React", "Node.js", "MQTT", "WebSockets"],
    liveUrl: "https://example.com/smarthome",
    githubUrl: "https://github.com/example/smarthome"
  },
  {
    id: "6",
    title: "Learning Management System",
    description:
      "A comprehensive educational platform with course creation tools, student progress tracking, and interactive learning materials.",
    technologies: ["Angular", "Express", "MongoDB", "AWS"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  },

  {
    id: "7",
    title: "Learning Management System",
    description:
      "A comprehensive educational platform with course creation tools, student progress tracking, and interactive learning materials.",
    technologies: ["Angular", "Express", "MongoDB", "AWS"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  },
  {
    id: "8",
    title: "Learning Management System",
    description:
      "A comprehensive educational platform with course creation tools, student progress tracking, and interactive learning materials.",
    technologies: ["Angular", "Express", "MongoDB", "AWS"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  }
];

const iconElements = [
  <Code key="code" className="h-5 w-5 text-blue-500" />,
  <Monitor key="monitor" className="h-5 w-5 text-green-500" />,
  <Layers key="layers" className="h-5 w-5 text-purple-500" />,
  <Palette key="palette" className="h-5 w-5 text-amber-500" />,
  <Database key="database" className="h-5 w-5 text-red-500" />,
  <BarChart key="chart" className="h-5 w-5 text-indigo-500" />
];



function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);



  return (
    <div id="portfolio" className="bg-white py-5 flex flex-col justify-center items-center px-6 lg:px-36 " >
    <div className="text-center mb-10" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
      <FaFolderOpen className="text-blue-500" /> Featured Projects
    </h2>
    <p className="text-gray-600 mt-2 max-w-md mx-auto">
      A curated collection of my best development projects, showcasing skills in modern, responsive, and user-focused solutions.
    </p>
    <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
  </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="stagger-item"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>


  
    </div>
  );
}

export default Project;

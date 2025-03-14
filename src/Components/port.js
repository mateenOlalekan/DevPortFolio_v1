// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import profileImage from "../../public/Image/rog.jpg";
// import {
//   FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaBootstrap,
// } from "react-icons/fa";
// import {
//   SiTailwindcss, SiTypescript, SiRedux, SiSass, SiNpm, SiJquery, SiGraphql,
// } from "react-icons/si";

// const Portfolio = () => {
//   // Initialize AOS animation library
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   // Skills with icons from react-icons
//   const technologies = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
//     { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
//     { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
//     { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
//     { name: "Git", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
//     { name: "GitHub", icon: <FaGithub className="text-gray-800 text-2xl" /> },
//     { name: "Redux", icon: <SiRedux className="text-purple-500 text-2xl" /> },
//     { name: "SASS", icon: <SiSass className="text-pink-400 text-2xl" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-2xl" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl transform perspective-1000 rotate-1" data-aos="fade-up">


//         {/* Main Content */}
//         <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Column */}
//           <div className="space-y-8" data-aos="fade-right">
//             <div>
//               <h1 className="text-2xl font-bold mb-1">KAUSHIK KANNAN</h1>
//               <p className="text-sm mb-4">Freelance Graphic Designer / Web Developer / Editor</p>
//               <p className="text-sm text-gray-600 mb-4">
//                 I am currently an undergraduate pursuing a degree in
//                 graphics design.
//               </p>
//               <p className="text-sm text-gray-600">
//                 I enjoy building everything from small business sites to
//                 large interactive websites.
//               </p>
//             </div>

//             <div className="mt-8">
//               <h2 className="text-xl font-bold mb-4">SKILLS</h2>
//               <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
//                 {technologies.map((tech, index) => (
//                   <div key={index} className="flex flex-col items-center gap-1 p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
//                     {tech.icon}
//                     <p className="text-xs font-medium text-gray-700">{tech.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8" data-aos="fade-left">
//             <div className="flex flex-col lg:flex-row gap-6 items-center mb-6">
//               <div className="flex-grow">
//                 <p className="text-sm mb-4">
//                   If you are a business seeking a new product design, a web
//                   presence or an individual looking to hire,
//                   please get in touch.
//                 </p>

//                 <div className="flex space-x-4">
//                   <a href="#" className="px-4 py-2 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">MY RESUME</a>
//                   <a href="#" className="px-4 py-2 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">HIRE ME</a>
//                 </div>
//               </div>
//               <div className="lg:w-1/3 flex-shrink-0">
//                 <img src={profileImage} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200" />
//               </div>
//             </div>

//             <div className="mt-8" data-aos="fade-up">
//               <h2 className="text-xl font-bold mb-4">What Can I Do?</h2>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex items-start">
//                   <span className="mr-2 text-blue-500">▹</span>
//                   I can design your idea of how to expand your business using websites.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-2 text-blue-500">▹</span>
//                   I can provide you a brand new logo for your business and
//                   build awesome websites that will attract your customers.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-2 text-blue-500">▹</span>
//                   I create responsive designs that work on all devices and browsers.
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-2 text-blue-500">▹</span>
//                   I build interactive web applications using modern frameworks.
//                 </li>
//               </ul>
//             </div>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from "../../public/Image/rog.jpg";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaBootstrap,
  FaFigma, FaAws, FaDocker, FaJira, FaLinkedin, FaBehance, FaDribbble
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiSass, SiNpm, SiJquery, SiGraphql,
  SiNextdotjs, SiMongodb, SiFirebase, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator,
  SiVite, SiVercel, SiNetlify, SiJest, SiCypress, SiStorybook
} from "react-icons/si";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // Frontend Development skills with icons
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: 90 },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" />, level: 88 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" />, level: 85 },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: 92 },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" />, level: 80 },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-3xl" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" />, level: 95 },
    { name: "SASS", icon: <SiSass className="text-pink-400 text-3xl" />, level: 88 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-3xl" />, level: 90 },
    { name: "Jest", icon: <SiJest className="text-red-600 text-3xl" />, level: 75 },
    { name: "Storybook", icon: <SiStorybook className="text-pink-500 text-3xl" />, level: 80 },
  ];

  // Design skills with icons
  const designSkills = [
    { name: "Figma", icon: <FaFigma className="text-purple-600 text-3xl" />, level: 90 },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-700 text-3xl" />, level: 85 },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-800 text-3xl" />, level: 80 },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600 text-3xl" />, level: 78 },
  ];

  // Other skills with icons
  const otherSkills = [
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" />, level: 88 },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" />, level: 70 },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" />, level: 80 },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-3xl" />, level: 85 },
    { name: "Vercel", icon: <SiVercel className="text-black text-3xl" />, level: 85 },
    { name: "Netlify", icon: <SiNetlify className="text-teal-500 text-3xl" />, level: 82 },
    { name: "Jira", icon: <FaJira className="text-blue-500 text-3xl" />, level: 75 },
  ];

  // Sample Projects
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for online stores built with React, Redux, and Tailwind CSS. Features include real-time analytics, inventory management, and order processing.",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      image: "https://via.placeholder.com/400x250",
      link: "#",
      category: "frontend"
    },
    {
      title: "Restaurant Booking Platform",
      description: "A responsive web application that allows users to browse restaurants, check availability, and make reservations. Built with Next.js and integrated with a custom CMS.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
      image: "https://via.placeholder.com/400x250",
      link: "#",
      category: "fullstack"
    },
    {
      title: "Fitness Tracker Mobile App",
      description: "A React Native application with a web admin panel. Tracks workouts, nutrition, and provides personalized fitness plans.",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x250",
      link: "#",
      category: "mobile"
    },
    {
      title: "Corporate Brand Redesign",
      description: "Complete visual identity redesign for a tech startup, including logo, website UI/UX, and marketing materials.",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      image: "https://via.placeholder.com/400x250",
      link: "#",
      category: "design"
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" data-aos="fade-up">
        {/* Header/Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-8 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8" data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">KAUSHIK KANNAN</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Frontend Developer & UI/UX Designer</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl">
                Crafting innovative, responsive, and user-centric web experiences 
                with clean code and cutting-edge design principles.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg">Hire Me</a>
                <a href="#portfolio" className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-indigo-700 transition-all">View Portfolio</a>
                <a href="#" className="px-6 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-900 transition-all shadow-lg">Download Resume</a>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-50 transform scale-110"></div>
                <img 
                  src={profileImage} 
                  alt="Kaushik Kannan" 
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 md:h-24">
              <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,224C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-16">
          {/* About Section */}
          <section id="about" className="mb-24" data-aos="fade-up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-aos="fade-right" data-aos-delay="100">
                <p className="text-lg text-gray-700 mb-6">
                  I am a passionate Frontend Developer and UI/UX Designer with a bachelor's degree in Graphics Design, 
                  currently expanding my expertise through continuous learning and practical application.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With a keen eye for detail and a love for clean, efficient code, I specialize in building 
                  responsive, user-friendly web applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My approach combines technical proficiency with creative design thinking to solve complex 
                  problems and create intuitive interfaces that users love to interact with.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-y-4">
                  <div>
                    <span className="font-semibold text-gray-800">Name:</span>
                    <p className="text-gray-600">Kaushik Kannan</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Email:</span>
                    <p className="text-gray-600">kaushik@example.com</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Availability:</span>
                    <p className="text-gray-600">Full-time, Freelance</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Experience:</span>
                    <p className="text-gray-600">3+ Years</p>
                  </div>
                </div>
              </div>
              
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">What I Offer</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-indigo-700 mb-2">Frontend Development</h4>
                    <p className="text-gray-600">Building performant, accessible, and responsive websites and applications with modern JavaScript frameworks.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-indigo-700 mb-2">UI/UX Design</h4>
                    <p className="text-gray-600">Creating intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-indigo-700 mb-2">Branding & Identity</h4>
                    <p className="text-gray-600">Developing cohesive brand identities including logos, color schemes, and visual design systems.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-indigo-700 mb-2">Responsive Implementation</h4>
                    <p className="text-gray-600">Ensuring websites work flawlessly across all devices and screen sizes with mobile-first approach.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="mb-24" data-aos="fade-up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Frontend Skills */}
              <div data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-xl font-semibold mb-8 text-gray-800 flex items-center">
                  <FaReact className="text-blue-500 mr-2 text-2xl" />
                  Frontend Development
                </h3>
                <div className="space-y-6">
                  {frontendSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Other Skills */}
              <div data-aos="fade-left" data-aos-delay="200">
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-8 text-gray-800 flex items-center">
                    <FaFigma className="text-pink-500 mr-2 text-2xl" />
                    Design Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {designSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <span className="mr-2">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-8 text-gray-800 flex items-center">
                    <FaGitAlt className="text-gray-700 mr-2 text-2xl" />
                    Other Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {otherSkills.map((skill, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                        <div className="mb-2">{skill.icon}</div>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Portfolio Section */}
          <section id="portfolio" className="mb-24" data-aos="fade-up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">My Portfolio</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            {/* Project Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'all' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('frontend')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'frontend' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Frontend
              </button>
              <button 
                onClick={() => setActiveTab('fullstack')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'fullstack' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Full Stack
              </button>
              <button 
                onClick={() => setActiveTab('mobile')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'mobile' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mobile
              </button>
              <button 
                onClick={() => setActiveTab('design')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'design' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Design
              </button>
            </div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition-all"
              >
                View All Projects
              </a>
            </div>
          </section>
          
          {/* Services Section */}
          <section id="services" className="mb-24" data-aos="fade-up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Services</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-5xl text-blue-500 mb-6">
                  <FaReact />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend Development</h3>
                <p className="text-gray-600 mb-6">
                  I build performant, responsive, and accessible web applications using modern JavaScript 
                  frameworks like React, with a focus on clean code and best practices.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Single Page Applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Interactive UI Components
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Cross-browser Compatibility
                  </li>
                </ul>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-5xl text-purple-500 mb-6">
                  <SiAdobexd />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  I design intuitive user interfaces and seamless user experiences that look great and 
                  help users achieve their goals efficiently.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    User Flow Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    UI Component Systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Usability Testing
                  </li>
                </ul>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-5xl text-green-500 mb-6">
                  <SiAdobeillustrator />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Brand & Identity Design</h3>
                <p className="text-gray-600 mb-6">
                  I create cohesive visual identities that communicate your brand's values and 
                  establish a strong presence in the digital space.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Logo Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Brand Guidelines
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Marketing Materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Visual Design Systems
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" data-aos="fade-up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-indigo-600 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-indigo-600 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Email</h4>
                        <p className="text-gray-600">kaushik@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-indigo-600 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Location</h4>
                        <p className="text-gray-600">San Francisco, California</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-indigo-600 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Working Hours</h4>
                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                        <FaDribbble className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                        <FaBehance className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        <FaGithub className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">Availability Status</h4>
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                      <p className="text-indigo-700">Available for new projects</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Budget (Optional)
                      </label>
                      <select
                        id="budget"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select your budget range</option>
                        <option value="less-than-1000">Less than $1,000</option>
                        <option value="1000-3000">$1,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="more-than-10000">More than $10,000</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreement"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreement" className="ml-2 block text-sm text-gray-700">
                        I agree to the privacy policy and terms of service
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <span className="font-semibold">Quick Response:</span> I typically respond to all inquiries within 24 hours. For urgent matters, 
                      please contact me directly via phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Inquiry CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white shadow-xl" data-aos="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
                  <p className="opacity-90">Let's collaborate to bring your vision to life with cutting-edge web development.</p>
                </div>
                <a 
                  href="#" 
                  className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Kaushik Kannan</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Frontend Developer & UI/UX Designer specializing in creating exceptional 
                  digital experiences that combine aesthetic appeal with functional precision.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaDribbble className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaBehance className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                  </li>
                  <li>
                    <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">◆</span>
                    <span className="text-gray-400">San Francisco, CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">◆</span>
                    <span className="text-gray-400">kaushik@example.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">◆</span>
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Kaushik Kannan. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

<div className="lg:w-1/3 flex-shrink-0">
<img src={profileImage} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200" />
</div>
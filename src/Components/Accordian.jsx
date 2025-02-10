import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "My Education",
      content: (
        <>
          <p className="mb-2">
            <strong>Bachelor of Science in Computer Science</strong> – Federal
            University of Agriculture Abeokuta (2023).
          </p>
          <p className="mb-2">
            - Specialized in software development, algorithms, and data
            structures.
          </p>
          <p className="mb-2">
            <strong>National Diploma in Computer Science</strong> – Lagos State
            Polytechnic (2016).
          </p>
          <p>
            - Developed a foundation in programming, databases, and networking.
          </p>
        </>
      ),
    },
    {
      title: "Experience",
      content: (
        <>
          <p className="mb-4">
            <strong>Frontend Developer Freelancer</strong> (2020–2023)
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Built scalable and responsive web applications using React.js and
              Vue.js.
            </li>
            <li>
              Designed and implemented intuitive user interfaces to enhance
              client satisfaction.
            </li>
            <li>
              Optimized websites for performance and accessibility.
            </li>
          </ul>
          <p className="mt-6 mb-4">
            <strong>IT Support Intern</strong> – Lagos State University of
            Science and Technology (2021–2023)
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Assisted with troubleshooting and IT operations.</li>
            <li>
              Collaborated with the team on project development and
              implementation.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Languages and Skills",
      content: (
        <>
          <p className="mb-4">Here’s what I bring to the table:</p>
          <div className="grid grid-cols-2 gap-y-2">
            <p>- HTML5 & CSS3</p>
            <p>- JavaScript (ES6+)</p>
            <p>- React & Redux</p>
            <p>- Tailwind CSS & Bootstrap</p>
            <p>- Node.js & Express</p>
            <p>- TypeScript</p>
            <p>- Git & GitHub</p>
            <p>- REST APIs</p>
            <p>- Responsive Design</p>
            <p>- Cross-Browser Compatibility</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 lg:px-8">
        <div>
            <p>About Me</p>
        </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Introduction
      </h2>
      <div className="space-y-6">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-6 bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
              <span
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? (
                  <FaMinus className="text-blue-500" />
                ) : (
                  <FaPlus className="text-blue-500" />
                )}
              </span>
            </button>
            {/* Content */}
            {activeIndex === index && (
              <div className="p-6 bg-white text-gray-600">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

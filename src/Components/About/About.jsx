import "./About.css";
import { useState } from "react";

const About = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-wrap px-4 md:px-8 lg:px-32">
      <div className="w-full flex flex-col px-4 py-4 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <ul className="flex mb-4 md:mb-0 list-none gap-4" role="tablist">
            {["Profile", "Settings", "Options"].map((tab, index) => (
              <li key={index} className="-mb-px last:mr-0 flex-auto text-center">
                <button
                  className={`text-xs font-bold uppercase px-4 py-2 shadow-md rounded block leading-normal transition-colors duration-300 ${
                    openTab === index + 1 ? "text-white bg-black" : "text-black bg-white"
                  }`}
                  onClick={() => setOpenTab(index + 1)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="To"
            className="text-sm w-full md:w-1/4 py-2 font-light indent-4 border-b outline-none border-gray-300 focus:border-black transition duration-300"
          />
        </div>

        <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-5">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <p>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                <br />
                <br />
                Dramatically visualize customer-directed convergence without revolutionary ROI.
              </p>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <p>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
              </p>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <p>
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

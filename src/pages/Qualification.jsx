/* eslint-disable react/no-unescaped-entities */
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaFire,
    FaBootstrap,
    FaCss3Alt,
    FaJsSquare,
    
    FaCcStripe,
  } from "react-icons/fa";
  import { TiHtml5 } from "react-icons/ti";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { motion } from "framer-motion";
  import { useState } from "react";
  import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css"; // Import timeline styles
  import { MdOutlineMenuBook } from "react-icons/md";

  const Qualification = () => {
    const [activeTab, setActiveTab] = useState("skills");
  
    const skills = [
      {
        name: "HTML",
        icon: <TiHtml5 className="text-white" />,
        color: "#E44D26",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-white" />,
        color: "#1572B6",
      },
      {
        name: "Javascript",
        icon: <FaJsSquare className="text-white" />,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-white" />,
        color: "#38BDF8",
      },
      {
        name: "React",
        icon: <FaReact className="text-white" />,
        color: "#61DAFB",
      },
      {
        name: "Node JS",
        icon: <FaNodeJs className="text-white" />,
        color: "#8CC84B",
      },
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-white" />,
        color: "#47A248",
      },
      {
        name: "Firebase",
        icon: <FaFire className="text-white" />,
        color: "#FFCA28",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-white" />,
        color: "#563D7C",
      },
      {
        name: "Visa",
        icon: <FaCcStripe className="text-white" />        ,
        color: "#635BFF",
      },
    ];
  
    const qualifications = [
      {
        title: "SSC",
        institution: "Safiuddin Sarkar Academy and College ",
        year: "2017",
      },
      {
        title: "HSC",
        institution: "Govt. Edward College, Pabna",
        year: "2019",
      },
      {
        title: "Honours",
        institution: "Dept. Chemistry, Govt. Edward College, Pabna",
        year: "2029 - Present",
      },
    ];
  
    return (
      <div id="qualification" className="bg-gray-50 py-8 font-exo-2  md:py-16">
        <section className="p-6 sm:p-8 lg:p-12 bg-white text-gray-800 rounded-lg shadow-lg max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-8 mb-8">
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-3 px-6 font-semibold text-lg cursor-pointer ${
                activeTab === "skills" ? "text-[#FF014F] border-b-4 " : ""
              } hover:text-[#FF014F] transition duration-300`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("qualifications")}
              className={`py-3 px-6 font-semibold text-lg  cursor-pointer ${
                activeTab === "qualifications"
                  ? " text-[#FF014F] border-b-4  " : ""
              } hover:text-[#FF014F] transition duration-300`}
            >
              Educational Qualifications
            </button>
          </div>
  
          {/* Skills Tab */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:rotate-360 transition-transform duration-1500 ease-in-out"
                    style={{ backgroundColor: skill.color }}
                  >
                    <div className="text-4xl sm:text-5xl mb-4">{skill.icon}</div>
                    <p className="text-sm sm:text-lg font-semibold text-white">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
  
          {/* Educational Qualifications Tab */}
          {activeTab === "qualifications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <VerticalTimeline >

                {qualifications.map((qualification, index) => (
                  <VerticalTimelineElement 
                    key={index}
                    className="vertical-timeline-element--work"
                    // date={qualification.year}
                    
                    iconStyle={{
                      background: "#FF014F",
                      color: "#fff",
                    }}
                    icon={<MdOutlineMenuBook />} // You can use any icon here
                  >
                    <h3 className="vertical-timeline-element-title ">
                      {qualification.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {qualification.institution}
                    </h4>
                    <p>{qualification.year}</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </motion.div>
          )}
        </section>
      </div>
    );
  };
  
  export default Qualification;
  
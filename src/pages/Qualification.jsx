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
import "react-vertical-timeline-component/style.min.css";
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
      name: "Stripe",
      icon: <FaCcStripe className="text-white" />,
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
      year: "2020 - Present",
    },
  ];

  return (
    <div
      id="qualification"
      className="py-8 font-exo-2 md:py-16 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <section
        className="p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg max-w-6xl mx-auto theme-transition"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          boxShadow: '0 10px 40px var(--shadow-color)'
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span
            className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
            style={{ color: 'var(--color-primary)' }}
          >
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Skills & Education
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-8 mb-8">
          <button
            onClick={() => setActiveTab("skills")}
            className={`py-3 px-6 font-semibold text-lg cursor-pointer transition duration-300 border-b-4 ${
              activeTab === "skills" ? "border-[var(--color-primary)]" : "border-transparent"
            }`}
            style={{ color: activeTab === "skills" ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("qualifications")}
            className={`py-3 px-6 font-semibold text-lg cursor-pointer transition duration-300 border-b-4 ${
              activeTab === "qualifications" ? "border-[var(--color-primary)]" : "border-transparent"
            }`}
            style={{ color: activeTab === "qualifications" ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
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
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 4px 20px ${skill.color}40`
                  }}
                >
                  <div className="text-4xl sm:text-5xl mb-4">{skill.icon}</div>
                  <p className="text-sm sm:text-lg font-semibold text-white">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Educational Qualifications Tab */}
        {activeTab === "qualifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="qualification-timeline"
          >
            <VerticalTimeline lineColor="var(--color-primary)">
              {qualifications.map((qualification) => (
                <VerticalTimelineElement
                  key={qualification.title}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-primary)',
                    boxShadow: '0 4px 20px var(--shadow-color)',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                  contentArrowStyle={{ borderRight: '7px solid var(--color-bg-tertiary)' }}
                  iconStyle={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                  }}
                  icon={<MdOutlineMenuBook />}
                >
                  <h3
                    className="vertical-timeline-element-title font-bold text-xl"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {qualification.title}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle mt-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {qualification.institution}
                  </h4>
                  <p style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                    {qualification.year}
                  </p>
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

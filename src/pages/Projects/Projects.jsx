/* eslint-disable react/no-unescaped-entities */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dreamKey from "../../assets/images/projects/d1.png";
import skillTree from "../../assets/images/projects/skillttree1.png";
import blancos from "../../assets/images/projects/blancos1.png";

const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <DiMongodb className="text-green-700 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-2xl" />,
  Express: <SiExpress className="text-gray-600 text-2xl" />,
};

const projects = [
  {
    title: "DreamKey",
    image: dreamKey,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/project1-details",
  },
  {
    title: "SkillTree",
    image: skillTree,
    tech: ["React", "Express", "MongoDB", "CORS"],
    link: "/project2-details",
  },
  {
    title: "Blancos Sports",
    image: blancos,
    tech: ["React", "Express", "MongoDB", "CORS"],
    link: "/project3-details",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="bg-gray-50 py-16 ">
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#FF014F] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-xl text-center text-gray-600 mb-12 px-6 sm:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explore some of the innovative projects I've worked on, showcasing my skills in web development, design, and creativity.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial="initial"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
              <div className="flex gap-4 mb-6">
                {project.tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    title={tech}
                    whileHover={{ scale: 1.2 }}
                  >
                    {techIcons[tech] || <span>{tech}</span>}
                  </motion.div>
                ))}
              </div>
              <motion.button
                onClick={() => navigate(project.link)}
                className="inline-block bg-[#FF014F] cursor-pointer text-white py-3 px-6 rounded-xl shadow-md hover:bg-opacity-90 transition"
                whileHover={{ y: -5 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

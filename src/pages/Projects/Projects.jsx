import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Palette, ExternalLink, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TiKey } from 'react-icons/ti';

const techIcons = {
  React: <Code2 className="w-6 h-6 text-blue-500" />,
  "Node.js": <Server className="w-6 h-6 text-green-600" />,
  MongoDB: <Database className="w-6 h-6 text-green-700" />,
  "Tailwind CSS": <Palette className="w-6 h-6 text-teal-500" />,
  Express: <Server className="w-6 h-6 text-gray-700" />,
  CORS: <Code2 className="w-6 h-6 text-purple-500" />
};

const projects = [
  {
    title: "DreamKey",
    description: "A revolutionary dream journaling platform with AI-powered analysis",
    image: "https://github.com/inzamulhaque1/DreamKeys-client/raw/main/src/assets/d1.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/project1-details"
  },
  {
    title: "SkillTree",
    description: "Interactive learning path visualization and progress tracking system",
    image: "https://github.com/inzamulhaque1/skilltree-client/raw/main/src/assets/skillttree1.png",
    tech: ["React", "Express", "MongoDB", "CORS"],
    link: "/project2-details"
  },
  {
    title: "Blancos Sports",
    description: "Modern e-commerce platform for sports equipment and accessories",
    image: "https://github.com/inzamulhaque1/BlancosSports-Client/raw/main/src/assets/blancos1.png",
    tech: ["React", "Express", "MongoDB", "CORS"],
    link: "/project3-details"
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Removed type annotation
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Removed TypeScript type annotation (: string)
  const handleProjectClick = (link) => {
    // Navigate to project detail page
    navigate(link)
    console.log(`Navigating to ${link}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-6">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore my latest works that showcase innovation, creativity, and technical expertise in web development.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full"
                    >
                      {techIcons[tech]}
                      <span className="text-sm text-gray-700">{tech}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full gap-2 bg-[#FF014F] text-white py-3 px-6 rounded-xl font-medium transition-shadow duration-300 hover:shadow-lg"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                >
                  <TiKey className="w-5 h-5 text-pink-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
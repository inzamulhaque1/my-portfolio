import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const techIcons = {
  React: <FaReact className="text-lg text-blue-500" />,
  "Node.js": <FaNodeJs className="text-lg text-green-600" />,
  MongoDB: <FaDatabase className="text-lg text-green-700" />,
  "Tailwind CSS": <SiTailwindcss className="text-lg text-teal-500" />,
  Express: <SiExpress className="text-lg" style={{ color: 'var(--color-text-secondary)' }} />,
  CORS: <FaNodeJs className="text-lg text-purple-500" />
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
    tech: ["React", "Express", "MongoDB"],
    link: "/project2-details"
  },
  {
    title: "Blancos Sports",
    description: "Modern e-commerce platform for sports equipment and accessories",
    image: "https://github.com/inzamulhaque1/BlancosSports-Client/raw/main/src/assets/blancos1.png",
    tech: ["React", "Express", "MongoDB"],
    link: "/project3-details"
  },
];

const Projects = () => {
  const navigate = useNavigate();
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
    hidden: { opacity: 0, y: 50 },
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

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto theme-transition"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
          style={{ color: 'var(--color-primary)' }}
        >
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-exo-2 mb-6 theme-text">
          Featured Projects
        </h2>
        <div
          className="w-20 h-1 mx-auto rounded-full mb-6"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <p className="text-xl max-w-2xl mx-auto theme-text-secondary">
          Explore my latest works that showcase innovation, creativity, and technical expertise in web development.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group h-full"
          >
            <div
              className="h-full flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border theme-transition"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)'
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 theme-text">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 theme-text-secondary line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                    >
                      {techIcons[tech]}
                      <span className="theme-text-secondary">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Button - pushed to bottom */}
                <button
                  onClick={() => navigate(project.link)}
                  className="mt-auto flex items-center justify-center w-full gap-2 text-white py-3 px-6 rounded-xl font-medium cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  View Project
                  <FaExternalLinkAlt className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaHandshake, FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import projects, { techIcons, filterCategories } from '../../data/projectsData';

const INITIAL_COUNT = 6;

const Projects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : activeCategory === "Company"
        ? projects.filter((p) => p.type === "company")
        : activeCategory === "Client"
          ? projects.filter((p) => p.type === "client")
          : projects.filter((p) => p.type === "personal");

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  const hasMore = filteredProjects.length > INITIAL_COUNT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const getTypeBadge = (project) => {
    if (project.type === "company" && project.company) {
      return {
        label: project.company,
        color: project.company === "ShareTasking" ? "#3b82f6" : "#22c55e",
        icon: <FaBuilding className="text-xs" />,
      };
    }
    if (project.type === "client") {
      return { label: "Client Project", color: "#f59e0b", icon: null };
    }
    return null;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto theme-transition"
      ref={ref}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
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
        <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
          From company products to client websites and full-stack applications — explore projects
          showcasing real-time features, payment integration, 3D effects, and more.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filterCategories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : category === "Company"
                ? projects.filter((p) => p.type === "company").length
                : category === "Client"
                  ? projects.filter((p) => p.type === "client").length
                  : projects.filter((p) => p.type === "personal").length;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className="px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border"
              style={{
                backgroundColor:
                  activeCategory === category
                    ? 'var(--color-primary)'
                    : 'var(--color-bg-card)',
                color:
                  activeCategory === category
                    ? '#fff'
                    : 'var(--color-text-secondary)',
                borderColor:
                  activeCategory === category
                    ? 'var(--color-primary)'
                    : 'var(--color-border)',
                boxShadow:
                  activeCategory === category
                    ? '0 4px 15px var(--glow-color)'
                    : 'none',
              }}
            >
              {category}
              <span className="ml-1.5 text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + (showAll ? '-all' : '-limited')}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {displayedProjects.map((project) => {
            const badge = getTypeBadge(project);
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="group h-full"
              >
                <div
                  className="h-full flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border theme-transition relative"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Featured
                    </div>
                  )}

                  {/* Company/Type Badge */}
                  {badge && (
                    <div
                      className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{ backgroundColor: badge.color }}
                    >
                      {badge.icon}
                      {badge.label}
                    </div>
                  )}

                  {/* Live Badge for production sites */}
                  {project.liveUrl && (project.id === "ipckuwait" || project.id === "ipipasa") && (
                    <div
                      className="absolute z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500 shadow-lg"
                      style={{ top: badge ? '3rem' : '1rem', left: '1rem' }}
                    >
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Live Production
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    {(project.type === "company" && project.screenshots.length === 0) || project.screenshots.length === 0 ? (
                      <div
                        className="h-full w-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-125"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGlobe className="text-lg" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Tag */}
                    <span
                      className="text-xs font-semibold tracking-wider uppercase mb-2 inline-block"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold mb-1 theme-text">
                      {project.title}
                    </h3>
                    <p
                      className="text-xs font-medium mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {project.subtitle}
                    </p>
                    <p className="text-sm mb-4 theme-text-secondary line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                        >
                          {techIcons[tech]}
                          <span className="theme-text-secondary">{tech}</span>
                        </div>
                      ))}
                      {project.tech.length > 4 && (
                        <div
                          className="flex items-center px-2.5 py-1 rounded-full text-xs"
                          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                        >
                          <span className="theme-text-muted">
                            +{project.tech.length - 4}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="mt-auto flex items-center justify-center w-full gap-2 text-white py-3 px-6 rounded-xl font-medium cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      View Details
                      <FaExternalLinkAlt className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Show More / Show Less Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium cursor-pointer transition-all duration-300 border hover:shadow-lg active:scale-[0.98]"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              backgroundColor: 'transparent',
            }}
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="text-sm" />
              </>
            ) : (
              <>
                Show More ({filteredProjects.length - INITIAL_COUNT} more)
                <FaChevronDown className="text-sm" />
              </>
            )}
          </button>
        </motion.div>
      )}

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Projects Built", value: "15+" },
          { label: "Client Projects", value: "3+" },
          { label: "Technologies", value: "15+" },
          { label: "GitHub Repos", value: "50+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 rounded-xl border theme-transition"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div
              className="text-3xl font-bold font-exo-2 mb-1"
              style={{ color: 'var(--color-primary)' }}
            >
              {stat.value}
            </div>
            <div className="text-sm theme-text-secondary">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

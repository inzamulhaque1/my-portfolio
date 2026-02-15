import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import projects, { techIconsLarge } from '../../data/projectsData';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center theme-transition"
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 theme-text">Project Not Found</h1>
          <p className="theme-text-secondary mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-8 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link to="/#projects">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 mb-8 font-medium cursor-pointer transition-colors"
            style={{ color: 'var(--color-primary)' }}
          >
            <FaArrowLeft /> Back to Projects
          </motion.button>
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden shadow-2xl mb-10 relative"
        >
          {project.screenshots.length === 0 ? (
            <div
              className="w-full h-64 md:h-80 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <img src={project.image} alt={project.title} className="w-32 h-32 object-contain" />
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full" />
          )}
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {project.featured && (
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Featured
              </span>
            )}
            {project.type === "company" && project.company && (
              <span
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg"
                style={{ backgroundColor: project.company === "ShareTasking" ? "#3b82f6" : "#22c55e" }}
              >
                {project.company}
              </span>
            )}
            {project.type === "client" && (
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-white bg-amber-500 shadow-lg">
                Client Project
              </span>
            )}
            {project.liveUrl && (project.id === "ipckuwait" || project.id === "ipipasa") && (
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-white bg-green-500 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live Production
              </span>
            )}
          </div>
          <div
            className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-border)',
            }}
          >
            {project.category}
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span
                className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
                style={{ color: 'var(--color-primary)' }}
              >
                {project.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 theme-text font-exo-2">
                {project.title}
              </h1>
              <p className="text-lg leading-relaxed mb-8 theme-text-secondary">
                {project.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-5 theme-text font-exo-2">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl transition-colors"
                    style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm theme-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <h3 className="font-bold mb-4 theme-text font-exo-2">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium cursor-pointer transition-all hover:opacity-90 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors border hover:shadow-md"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    <FaGithub /> View Source Code
                  </a>
                )}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <h3 className="font-bold mb-4 theme-text font-exo-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                  >
                    {techIconsLarge[tech]}
                    <span className="text-sm theme-text-secondary">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <h3 className="font-bold mb-4 theme-text font-exo-2">Project Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="theme-text-muted">Category</span>
                  <span className="theme-text font-medium">{project.category}</span>
                </div>
                <div
                  className="border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                />
                <div className="flex justify-between">
                  <span className="theme-text-muted">Type</span>
                  <span className="theme-text font-medium">
                    {project.type === "company"
                      ? `Company — ${project.company}`
                      : project.type === "client"
                        ? "Client Project"
                        : "Personal Project"}
                  </span>
                </div>
                <div
                  className="border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                />
                <div className="flex justify-between">
                  <span className="theme-text-muted">Status</span>
                  <span className="flex items-center gap-1.5 font-medium" style={{ color: 'var(--color-primary)' }}>
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Completed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 theme-text font-exo-2">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-lg cursor-pointer relative group"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="w-full h-48 object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {screenshot.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation between projects */}
        <div
          className="border-t pt-8 flex items-center justify-between"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {prevProject ? (
            <button
              onClick={() => navigate(`/project/${prevProject.id}`)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <FaChevronLeft
                className="transition-transform group-hover:-translate-x-1"
                style={{ color: 'var(--color-primary)' }}
              />
              <div className="text-left">
                <span className="text-xs theme-text-muted block">Previous</span>
                <span className="text-sm font-medium theme-text">{prevProject.title}</span>
              </div>
            </button>
          ) : (
            <div />
          )}

          <Link
            to="/#projects"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors hover:shadow-md"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            All Projects
          </Link>

          {nextProject ? (
            <button
              onClick={() => navigate(`/project/${nextProject.id}`)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="text-right">
                <span className="text-xs theme-text-muted block">Next</span>
                <span className="text-sm font-medium theme-text">{nextProject.title}</span>
              </div>
              <FaChevronRight
                className="transition-transform group-hover:translate-x-1"
                style={{ color: 'var(--color-primary)' }}
              />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-70 transition-opacity"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;

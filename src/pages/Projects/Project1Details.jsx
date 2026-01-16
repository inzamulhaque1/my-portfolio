import { motion } from "framer-motion";
import dreamKeyHero from "../../assets/images/projects/d1.png";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import screenshoot1 from "../../assets/images/projects/d2.png";
import screenshoot2 from "../../assets/images/projects/d3.png";
import screenshoot3 from "../../assets/images/projects/d4.png";
import screenshoot4 from "../../assets/images/projects/d5.png";
import screenshoot5 from "../../assets/images/projects/d6.png";
import screenshoot6 from "../../assets/images/projects/d7.png";
import screenshoot7 from "../../assets/images/projects/d8.png";
import { Link } from "react-router-dom";

const techStack = [
  { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-2xl text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl text-teal-400" /> },
  { name: "Express", icon: <SiExpress className="text-2xl" /> },
];

const screenshots = [
  { url: screenshoot1, alt: "Dream Tracker" },
  { url: screenshoot2, alt: "Progress Monitoring" },
  { url: screenshoot3, alt: "Dashboard" },
  { url: screenshoot4, alt: "Analytics" },
  { url: screenshoot5, alt: "Settings" },
  { url: screenshoot6, alt: "Profile" },
  { url: screenshoot7, alt: "Reports" },
];

const features = [
  "Secure login and registration system for user privacy",
  "Add, edit, and track your dreams with descriptions and due dates",
  "Visual charts and statistics to monitor progress",
  "Customizable user profiles for a personalized experience",
  "Notifications for deadlines and milestones",
];

const Project1Details = () => {
  return (
    <div
      className="min-h-screen py-8 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 mb-8 font-medium cursor-pointer transition-colors"
            style={{ color: 'var(--color-primary)' }}
          >
            <FaArrowLeft /> Back to Home
          </motion.button>
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden shadow-2xl mb-10"
        >
          <img src={dreamKeyHero} alt="DreamKey" className="w-full" />
        </motion.div>

        {/* Project Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4 theme-text"
            >
              DreamKey
            </motion.h1>
            <p className="text-lg leading-relaxed mb-6 theme-text-secondary">
              DreamKey is an innovative platform designed to help users unlock their
              dreams and track their goals effectively. With a user-friendly interface
              and powerful features, DreamKey ensures that users can visualize and
              achieve their aspirations.
            </p>

            {/* Features */}
            <h2 className="text-2xl font-bold mb-4 theme-text">Features</h2>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 theme-text-secondary">
                  <span style={{ color: 'var(--color-primary)' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Links */}
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <h3 className="font-bold mb-4 theme-text">Project Links</h3>
              <div className="space-y-3">
                <a
                  href="https://dreamkeys-bef14.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href="https://github.com/inzamulhaque1/DreamKeys-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors border"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <h3 className="font-bold mb-4 theme-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                  >
                    {tech.icon}
                    <span className="text-sm theme-text-secondary">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 theme-text">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1Details;

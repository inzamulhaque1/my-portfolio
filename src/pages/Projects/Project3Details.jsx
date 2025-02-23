import { motion } from "framer-motion";
import projectHero from "../../assets/images/projects/blancos1.png";
import { FaReact, FaNodeJs, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import screenshot1 from "../../assets/images/projects/blancos2.png";
import screenshot2 from "../../assets/images/projects/blancos3.png";
import screenshot3 from "../../assets/images/projects/blancos4.png";
import screenshot4 from "../../assets/images/projects/blancos5.png";
import { Link } from "react-router-dom";

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-green-700 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-600 text-2xl" /> },
];

const screenshots = [
  { url: screenshot1, alt: "Project 3 Screenshot 1" },
  { url: screenshot2, alt: "Project 3 Screenshot 2" },
  { url: screenshot3, alt: "Project 3 Screenshot 3" },
  { url: screenshot4, alt: "Project 3 Screenshot 4" },
];

const Project3Details = () => {
  return (
    <div id="project3-details" className="mt-5 px-6 max-w-7xl mx-auto font-exo-2 ">
      <Link to={'/'}>
        <button className="btn py-1 px-3 bg-[#FF014F] cursor-pointer rounded-2xl text-white font-bold my-3 flex justify-center items-center gap-2 fixed z-10">
          <FaArrowLeft /> BACK
        </button>
      </Link>

      {/* Hero Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={projectHero}
          alt="Project 3 Hero"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Live Demo</h3>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://blancos-sports.firebaseapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex justify-center items-center gap-2 hover:text-blue-400"
          >
            <FaLink /> Live Site
          </a>
          <div>
            <a
              href="https://github.com/inzamulhaque1/BlancosSports-Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <motion.h2
        className="text-3xl font-bold text-[#FF014F] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Project 3
      </motion.h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Project 3 is a dynamic and interactive platform that empowers users to
        achieve their goals through innovative tools and seamless user
        experiences.
      </p>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Tech Stack</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              {tech.icon}
              <span className="text-sm text-gray-600 mt-1">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Features</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>🔧 Feature 1: Interactive dashboards for better insights</li>
          <li>📊 Feature 2: Real-time updates and analytics</li>
          <li>💡 Feature 3: User-friendly design with responsive layouts</li>
        </ul>
      </div>

      {/* Screenshots Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Screenshots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.url}
              alt={screenshot.alt}
              className="w-full border-2 border-[#FF014F] rounded-lg shadow hover:scale-125 transition-all duration-200"
            />
          ))}
        </div>
      </div>

      {/* Installation Instructions */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Getting Started</h3>
        <p className="text-gray-700 mb-4">
          Follow these steps to run the Project 3 locally:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="whitespace-pre-line">
            {`# Clone the repository
git clone https://github.com/inzamulhaque1/BlancosSports-Client

# Navigate to the project directory
cd project3

# Install frontend dependencies
npm install

# Start the client
npm run dev`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Project3Details;

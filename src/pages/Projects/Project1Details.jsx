import { motion } from "framer-motion";
import dreamKeyHero from "../../assets/images/projects/d1.png";
import { FaReact, FaNodeJs, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
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

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-green-700 text-2xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-2xl" />,
  },
  { name: "Express", icon: <SiExpress className="text-gray-600 text-2xl" /> },
];

const screenshots = [
  { url: screenshoot1, alt: "Dream Tracker" },
  { url: screenshoot2, alt: "Progress Monitoring" },
  { url: screenshoot3, alt: "More Insights" },
  { url: screenshoot4, alt: "More Insights" },
  { url: screenshoot5, alt: "More Insights" },
  { url: screenshoot6, alt: "More Insights" },
  { url: screenshoot7, alt: "More Insights" },
];

const Project1Details = () => {
  return (
    <div id="project1-details" className="mt-5 px-6 max-w-7xl mx-auto">
      {/* Back Button */}
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
          src={dreamKeyHero}
          alt="DreamKey Hero"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Live Demo</h3>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://dreamkeys-bef14.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex justify-center items-center gap-2 hover:text-blue-400"
          >
            <FaLink /> Link 1
          </a>
          <a
            href="https://dreamkeys-bef14.firebaseapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex justify-center items-center gap-2 hover:text-blue-400"
          >
            <FaLink /> Link 2
          </a>
          <a
            href="https://github.com/inzamulhaque1/DreamKeys-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <motion.h2
        className="text-3xl font-bold text-[#FF014F] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        DreamKey
      </motion.h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        DreamKey is an innovative platform designed to help users unlock their
        dreams and track their goals effectively. With a user-friendly interface
        and powerful features, DreamKey ensures that users can visualize and
        achieve their aspirations.
      </p>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Tech Stack</h3>
        <div className="flex gap-4 justify-center flex-wrap">
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
          <li>🔒 Secure login and registration system for user privacy</li>
          <li>
            📅 Add, edit, and track your dreams with descriptions and due dates
          </li>
          <li>📊 Visual charts and statistics to monitor progress</li>
          <li>🎨 Customizable user profiles for a personalized experience</li>
          <li>🔔 Notifications for deadlines and milestones</li>
        </ul>
      </div>

      {/* Screenshots Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Screenshots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.url}
              alt={screenshot.alt}
              className="w-full border-2 border-[#FF014F] rounded-lg shadow hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Installation Instructions */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF014F]">Getting Started</h3>
        <p className="text-gray-700 mb-4">
          Follow these steps to run the DreamKey project locally:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="whitespace-pre-line">
            {`# Clone the repository
git clone https://github.com/your-username/DreamKey.git

# Navigate to the project directory
cd DreamKey

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd server
npm install

# Start the backend server
npm start

# Start the frontend client
cd client
npm start`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Project1Details;

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import myImage from "../assets/images/banner/my-img.png";

const Banner = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-[80px] md:pt-16 pb-12"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute hidden md:block top-10 right-10 w-64 h-64 bg-[#FF014F] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{ pointerEvents: "none" }}  // Prevent pointer events on background
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <br />
              <span className="text-[#FF014F] font-exo-2">
                Inzamul Haque Joy
              </span>
              <br />
              <span className="text-3xl font-playfair md:text-5xl">
                MERN Stack Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting Next-Level Web Experiences for a World That Never Stands
              Still.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/inzamulhaque1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-[#FF014F] rounded-full flex items-center justify-center hover:bg-[#FF014F] hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/inzamul1002/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-[#FF014F] rounded-full flex items-center justify-center hover:bg-[#FF014F] hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/au.inzamul/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-[#FF014F] rounded-full flex items-center justify-center hover:bg-[#FF014F] hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hidden md:flex items-center gap-2 text-gray-400"
            >
              <BiDownArrow className="w-4 h-4" />
              <span className="text-sm">Scroll Down</span>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={myImage}
                alt="Profile"
                className="w-full max-w-lg mx-auto rounded-full shadow-2xl"
              />

              {/* Image Overlay Effects */}
              <motion.div
                className="absolute -inset-4 bg-[#FF014F] opacity-10 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

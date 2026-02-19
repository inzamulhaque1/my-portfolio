/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { BiDownArrow } from "react-icons/bi";
import myImage from "../assets/images/banner/my-img.png";
import TypeWriter from "../components/TypeWriter";
import { useTheme } from "../context/ThemeContext";

const Banner = () => {
  const { isDark } = useTheme();

  const roles = [
    "Full-Stack Web Developer",
    "Next.js & React Specialist",
    "SaaS Platform Builder",
    "Frontend Engineer",
  ];

  const socialLinks = [
    { href: "https://github.com/inzamulhaque1", icon: FaGithub, label: "Visit my GitHub profile" },
    { href: "https://www.linkedin.com/in/inzamulhaque1002/", icon: FaLinkedin, label: "Connect with me on LinkedIn" },
    { href: "https://www.facebook.com/au.inzamul/", icon: FaFacebook, label: "Follow me on Facebook" },
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[80px] md:pt-16 pb-12 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Animated background elements - only visible in dark themes */}
      {isDark && (
        <>
          <motion.div
            className="absolute hidden md:block top-10 right-10 w-64 h-64 rounded-full filter blur-xl opacity-30"
            style={{ backgroundColor: 'var(--color-primary)' }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute hidden md:block bottom-20 left-10 w-48 h-48 rounded-full filter blur-xl opacity-20"
            style={{ backgroundColor: 'var(--color-secondary)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span
                className="text-lg font-semibold tracking-wider uppercase"
                style={{ color: 'var(--color-primary)' }}
              >
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight theme-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <br />
              <span className="font-exo-2" style={{ color: 'var(--color-primary)' }}>
                Inzamul Haque Joy
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl font-playfair theme-text-secondary">
                <TypeWriter words={roles} />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg max-w-xl theme-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting Next-Level Web Experiences for a World That Never Stands Still.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 text-white hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-label="Download Resume PDF"
              >
                Download Resume
              </a>
              <a
                href="https://www.fiverr.com/inzamul1002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 text-white hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: '#1dbf73' }}
                aria-label="Hire me on Fiverr"
              >
                <SiFiverr className="text-lg" /> Hire Me on Fiverr
              </a>
            </div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    color: 'var(--color-primary)',
                    boxShadow: '0 4px 15px var(--shadow-color)'
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hidden md:flex items-center gap-2 theme-text-muted"
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

              {/* Image Overlay Effects - only in dark themes */}
              {isDark && (
                <motion.div
                  className="absolute -inset-4 opacity-15 blur-2xl rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

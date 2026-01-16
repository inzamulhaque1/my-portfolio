import { motion } from "framer-motion";
import logo from "../assets/images/logo/logo-inz-wm.png";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaCode,
  FaServer,
  FaMobile
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "About", icon: <FaUser /> },
    { href: "#projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const services = [
    { label: "Frontend Development", icon: <FaCode /> },
    { label: "Backend Development", icon: <FaServer /> },
    { label: "Responsive Design", icon: <FaMobile /> },
  ];

  const socialLinks = [
    { href: "https://facebook.com/au.inzamul", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://x.com/inzamul12725", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://github.com/inzamulhaque1", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/inzamulhaque1002/", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <footer
      className="text-white font-exo-2 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-footer)' }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Passionate MERN Stack Developer crafting modern web experiences.
              Lets build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300"
                  style={{ '--hover-bg': 'var(--color-primary)' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span
                className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 group"
                  >
                    <span
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span
                className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <span className="flex items-center gap-3 text-gray-400">
                    <span style={{ color: 'var(--color-primary)' }}>{service.icon}</span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <span
                className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="mailto:inzamulhaque1002@gmail.com"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  inzamulhaque1002@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801728005274"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  +880 1728 005274
                </a>
              </li>
              <li>
                Pabna, Rajshahi, Bangladesh
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Md. Inzamul Haque Joy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <FaHeart style={{ color: 'var(--color-primary)' }} className="animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

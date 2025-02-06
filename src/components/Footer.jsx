/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/images/logo/logo-inz-wm.png";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaGithub } from "react-icons/fa"; // React Icons for menu links
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // React Icons for social links

const Footer = () => {
  const links = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "About", icon: <FaUser /> },
    { href: "#projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { href: "https://facebook.com/inzamulhaque1", icon: <FaFacebook /> },
    { href: "https://x.com/inzamul12725", icon: <FaTwitter /> },
    { href: "https://github.com/inzamulhaque1", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/inzamul1002/", icon: <FaLinkedin /> },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Flex Layout for Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 max-w-xs">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering innovation through technology and creativity. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF014F] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with Icons */}
          <div className="space-y-4">
            
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-gray-400 hover:text-[#FF014F] transition-colors duration-200"
                >
                  <span className="mr-2 text-[#FF014F]">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} By Inzamul Haque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
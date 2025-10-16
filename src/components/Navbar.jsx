/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import logo from "../assets/images/logo/logo-inz-wm.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Track active link

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#qualification", label: "Qualification" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update active link based on scroll position
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Single instance for all screen sizes */}
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-200 hover:text-sky-500 hover:underline hover:underline-offset-8 
    ${
      activeLink === link.href
        ? "text-[#FF014F] underline underline-offset-8"
        : "text-black"
    }`} // Apply active style
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor link behavior
                  setActiveLink(link.href); // Set active link
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block ">
            <a
              href="/resume.pdf"
              download
              className="bg-[#FF014F] text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-500 border border-[#FF014F] hover:border-sky-700 font-bold transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Navigation-- Controls */}
          <div className="flex items-center md:hidden">
            <a
              href="/email.pdf"
              download
              className="bg-[#FF014F] text-white px-3 py-1.5 rounded-lg text-sm mr-4 hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${
                  isOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${
                  isOpen ? "opacity-0" : "mb-1.5"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${
                  isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out transform ${
            isOpen
              ? "translate-y-0 opacity-100 max-h-64 py-4"
              : "-translate-y-20 opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-center transition-colors duration-200 hover:underline hover:underline-offset-8 
                  ${
                    activeLink === link.href ? "text-[#FF014F]" : "text-black"
                  }`} // Apply active style
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false); // Close the menu after clicking
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

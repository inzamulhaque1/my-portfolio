import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import logo from "../assets/images/logo/logo-inz-wm.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef(new Map());
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const links = useMemo(() => [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ], []);

  // Cache section elements on mount
  useEffect(() => {
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        sectionsRef.current.set(link.href, section);
      }
    });
  }, [links]);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location, isHomePage]);

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 20);

    sectionsRef.current.forEach((section, href) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        setActiveLink(href);
      }
    });
  }, []);

  // Scroll event listener with debouncing
  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 10);
    handleScroll();
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 theme-transition backdrop-blur-md
        ${scrolled ? 'shadow-lg' : ''}
      `}
      style={{
        backgroundColor: 'var(--color-bg-navbar)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  font-semibold transition-all duration-200
                  hover:text-[var(--color-primary)] hover:underline hover:underline-offset-8
                  ${activeLink === link.href
                    ? "text-[var(--color-primary)] underline underline-offset-8"
                    : "theme-text"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.href);
                  if (isHomePage) {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/" + link.href);
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitcher />
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 text-white hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
              aria-label="Download Resume PDF"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeSwitcher />
            <a
              href="/resume.pdf"
              download
              className="px-3 py-1.5 rounded-lg text-sm text-white hover:opacity-90 transition-colors"
              style={{ backgroundColor: 'var(--color-primary)' }}
              aria-label="Download Resume PDF"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg theme-transition"
              style={{ backgroundColor: isOpen ? 'var(--color-bg-tertiary)' : 'transparent' }}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 theme-transition ${
                  isOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
                style={{ backgroundColor: 'var(--color-text-primary)' }}
              />
              <div
                className={`w-6 h-0.5 theme-transition ${
                  isOpen ? "opacity-0" : "mb-1.5"
                }`}
                style={{ backgroundColor: 'var(--color-text-primary)' }}
              />
              <div
                className={`w-6 h-0.5 theme-transition ${
                  isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
                style={{ backgroundColor: 'var(--color-text-primary)' }}
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
                className={`
                  font-semibold text-center transition-colors duration-200
                  hover:underline hover:underline-offset-8
                  ${activeLink === link.href
                    ? "text-[var(--color-primary)]"
                    : "theme-text"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.href);
                  setIsOpen(false);
                  if (isHomePage) {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/" + link.href);
                  }
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

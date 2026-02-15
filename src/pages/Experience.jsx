import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaBuilding,
} from 'react-icons/fa';
import { MdWork, MdArrowForward } from 'react-icons/md';

const experiences = [
  {
    role: "Jr. Full-Stack Web Developer",
    company: "ShareTasking",
    companyDescription: "Virtual Assistant & Tech Solutions Company",
    location: "Remote — Port St. Lucie, Florida, USA",
    period: "Nov 2025 - Present",
    current: true,
    color: "#3b82f6",
    description:
      "Building production-grade full-stack web applications for ShareTasking's tech products. Working with Next.js, TypeScript, Prisma ORM, Redis caching, and the modern React ecosystem to deliver high-performance SaaS platforms and design systems.",
    achievements: [
      "Built Bruskee SaaS platform with Prisma ORM database layer, Redis caching, and real-time dashboard",
      "Implemented type-safe database operations and migrations with Prisma",
      "Set up Redis caching layer for high-performance data access and session management",
      "Developed theme switching system with dark/light mode and system preference detection",
      "Built Launchier — a premium Next.js UI kit with Prisma backend, sold on UI8 marketplace",
      "Implemented responsive layouts, 3D visual components, and AI-inspired design patterns",
      "Integrated NextAuth.js authentication, PostHog analytics, and React Query data fetching",
    ],
    projects: [
      { name: "Bruskee", url: "https://www.bruskee.com", desc: "AI Task Management SaaS" },
      { name: "Launchier", url: "https://launchier.com", desc: "Premium Next.js UI Kit" },
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Redis", "Tailwind CSS", "React Query", "Framer Motion", "NextAuth"],
  },
  {
    role: "Frontend Developer",
    company: "Dizition",
    companyDescription: "Web Development Agency",
    location: "On-site",
    period: "2024 - Oct 2025",
    current: false,
    color: "#22c55e",
    description:
      "Developed multiple client-facing web applications across diverse industries including education, healthcare, tourism, and religious organizations. Delivered production websites with modern UI/UX, animations, and full-stack functionality.",
    achievements: [
      "Built IPC Kuwait — a live production website for Indian Pentecostal Church of God with Three.js 3D effects",
      "Developed MAPHS CTG — a 22+ page school management system with Chart.js analytics dashboard",
      "Created AIG Hospital website with 5 department pages and triple animation library integration (GSAP + Framer + React Spring)",
      "Built Bangladesh Eco Tours — a 15-page eco-tourism platform with Swiper carousels",
      "Delivered CTG Dairy Food — a professional dairy business website",
      "Developed SuccessIn — a newsletter and AI startup platform with Firebase auth",
    ],
    projects: [
      { name: "IPC Kuwait", url: "https://ipckuwait.com", desc: "Church Community Platform" },
      { name: "MAPHS CTG", desc: "School Management System" },
      { name: "AIG Hospital", desc: "Hospital Website" },
      { name: "Bangladesh Eco Tours", desc: "Tourism Platform" },
      { name: "CTG Dairy Food", desc: "Dairy Business Website" },
      { name: "SuccessIn", desc: "Newsletter & AI Platform" },
    ],
    tech: ["React", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion", "Firebase", "Chart.js"],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id="experience"
      className="py-16 md:py-20 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
            style={{ color: 'var(--color-primary)' }}
          >
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Professional Experience
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-4"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p className="mt-4 max-w-2xl mx-auto theme-text-secondary">
            Building production web applications for real companies and clients,
            from SaaS platforms to enterprise solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 hidden sm:block"
            style={{ backgroundColor: 'var(--color-border)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-3 md:left-5 top-8 w-7 h-7 rounded-full border-4 z-10 hidden sm:flex items-center justify-center"
                  style={{
                    backgroundColor: exp.color,
                    borderColor: 'var(--color-bg-primary)',
                    boxShadow: `0 0 0 3px ${exp.color}40`,
                  }}
                >
                  <MdWork className="text-white text-xs" />
                </div>

                {/* Experience Card */}
                <div
                  className="rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-xl theme-transition"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    borderColor: 'var(--color-border)',
                    borderTop: `3px solid ${exp.color}`,
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: exp.color }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-exo-2 theme-text">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <FaBuilding style={{ color: exp.color }} className="text-sm" />
                        <span
                          className="font-semibold text-base"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </span>
                        <span className="theme-text-muted text-sm">
                          — {exp.companyDescription}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm shrink-0">
                      <span className="flex items-center gap-1.5 theme-text-secondary font-medium">
                        <FaCalendarAlt style={{ color: exp.color }} className="text-xs" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 theme-text-muted text-xs">
                        <FaMapMarkerAlt className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="theme-text-secondary text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <h4 className="text-sm font-bold theme-text mb-3 flex items-center gap-2">
                      <FaBriefcase style={{ color: exp.color }} className="text-xs" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                          <MdArrowForward
                            className="text-sm mt-0.5 shrink-0"
                            style={{ color: exp.color }}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects Delivered */}
                  <div className="mb-5">
                    <h4 className="text-sm font-bold theme-text mb-3">
                      Projects Delivered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <div
                          key={project.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors"
                          style={{
                            borderColor: `${exp.color}40`,
                            backgroundColor: `${exp.color}10`,
                          }}
                        >
                          <span style={{ color: exp.color }}>{project.name}</span>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-70 transition-opacity"
                              style={{ color: exp.color }}
                            >
                              <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "2+", label: "Companies" },
            { value: "8+", label: "Company Projects" },
            { value: "3+", label: "Client Projects" },
            { value: "15+", label: "Total Projects" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-xl border theme-transition"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold font-exo-2 mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm theme-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaQuoteLeft,
  FaGlobe,
  FaBuilding,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';

const clientWork = [
  {
    company: "ShareTasking",
    role: "Jr. Full-Stack Web Developer",
    period: "Nov 2025 - Present",
    type: "Company",
    color: "#3b82f6",
    quote: "Building production SaaS platforms with Next.js, TypeScript, Prisma, and Redis for a US-based tech company.",
    projects: ["Bruskee", "Launchier"],
  },
  {
    company: "Dizition",
    role: "Frontend Developer",
    period: "2024 - Oct 2025",
    type: "Company",
    color: "#22c55e",
    quote: "Delivered 6 client-facing web applications across healthcare, education, tourism, and religious sectors.",
    projects: ["IPC Kuwait", "MAPHS CTG", "AIG Hospital", "Bangladesh Eco Tours", "CTG Dairy", "SuccessIn"],
  },
  {
    company: "iPipasa",
    role: "Freelance Developer",
    period: "Client Project",
    type: "Client",
    color: "#f59e0b",
    quote: "Built a full Islamic e-commerce platform with cart, order tracking, pre-orders, and blog — now live in production.",
    projects: ["iPipasa E-Commerce"],
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
            style={{ color: 'var(--color-primary)' }}
          >
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Companies & Clients
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p className="mt-4 max-w-2xl mx-auto theme-text-secondary">
            Real companies I've worked with, real projects I've shipped, and real clients I've served.
          </p>
        </motion.div>

        {/* Client Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {clientWork.map((client, index) => (
            <motion.div
              key={client.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl p-7 border transition-all duration-300 hover:shadow-xl theme-transition"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
                borderTop: `3px solid ${client.color}`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: client.color }}
                >
                  {client.type}
                </span>
                <span className="text-xs theme-text-muted">{client.period}</span>
              </div>

              <h3 className="text-xl font-bold font-exo-2 mb-1 theme-text">
                {client.company}
              </h3>
              <p className="text-sm mb-4" style={{ color: client.color }}>
                {client.role}
              </p>

              <FaQuoteLeft
                className="text-lg opacity-20 mb-2"
                style={{ color: client.color }}
              />
              <p className="text-sm theme-text-secondary leading-relaxed mb-5">
                {client.quote}
              </p>

              <div
                className="pt-4 border-t"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p className="text-xs font-semibold theme-text-muted mb-2">Projects Delivered:</p>
                <div className="flex flex-wrap gap-1.5">
                  {client.projects.map((project) => (
                    <span
                      key={project}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${client.color}15`,
                        color: client.color,
                      }}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg theme-text-secondary mb-6">
            Want to be the next success story? Let's build something great together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold font-exo-2 transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <FaHandshake className="text-lg" />
            Start a Project
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

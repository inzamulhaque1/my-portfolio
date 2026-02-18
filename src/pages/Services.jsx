import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGlobe,
  FaLayerGroup,
  FaShoppingCart,
  FaChartLine,
  FaCubes,
  FaSearch,
  FaCheckCircle,
  FaHandshake,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';
import { SiNextdotjs, SiReact } from 'react-icons/si';

const services = [
  {
    icon: <FaGlobe className="text-4xl" />,
    title: 'Custom Website Development',
    description:
      'Professional, responsive websites for businesses and organizations. From landing pages to full-featured platforms with animations, 3D effects, and modern design.',
    highlights: ['Business & Organization Sites', 'Landing Pages', 'Portfolio Websites'],
    proof: 'Built ipckuwait.com & ipipasa.com — live production sites for real clients',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaLayerGroup className="text-4xl" />,
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end web applications with user authentication, database management, real-time features, and payment integration using the MERN stack.',
    highlights: ['User Auth & Dashboards', 'Real-time (WebSocket)', 'Payment Integration'],
    proof: 'Delivered TaskPilot with real-time Socket.IO & DreamKeys with Stripe payments',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <SiNextdotjs className="text-4xl" />,
    title: 'Next.js Development',
    description:
      'Server-side rendered, SEO-optimized web applications built with Next.js and TypeScript. Fast, scalable, and search-engine friendly.',
    highlights: ['Server-Side Rendering', 'SEO Optimization', 'TypeScript'],
    proof: 'Built Game365Hub with 4,500+ pages & contributed to Bruskee SaaS platform',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: <FaShoppingCart className="text-4xl" />,
    title: 'E-Commerce Solutions',
    description:
      'Online stores with product management, shopping carts, secure checkout, and payment gateway integration. Ready to sell from day one.',
    highlights: ['Product Catalogs', 'Cart & Checkout', 'Stripe/Payment Gateway'],
    proof: 'Built iPipasa Islamic bookstore, Blancos Sports e-commerce & Stripe in DreamKeys',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: 'SaaS & Dashboard Development',
    description:
      'Admin panels, analytics dashboards, and SaaS platforms with data visualization, user management, and subscription systems.',
    highlights: ['Admin Dashboards', 'Data Visualization', 'Subscription Systems'],
    proof: 'Built Bruskee SaaS with Prisma + Redis & Launchier design system at ShareTasking',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaSearch className="text-4xl" />,
    title: 'SEO & Performance',
    description:
      'Speed optimization, SEO best practices, and content platform architecture to help your website rank higher and load faster.',
    highlights: ['Core Web Vitals', 'SEO Architecture', 'Edge Computing'],
    proof: 'Game365Hub optimized for search with SSR, Cloudflare edge, and structured data',
    color: 'from-indigo-500 to-purple-500',
  },
];

const trustStats = [
  { icon: <FaProjectDiagram />, value: '14+', label: 'Projects Shipped' },
  { icon: <FaUsers />, value: '2', label: 'Companies Worked' },
  { icon: <FaHandshake />, value: '3+', label: 'Clients Served' },
  { icon: <FaCheckCircle />, value: '100%', label: 'Completion Rate' },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-16 md:py-20 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
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
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Services I Provide
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p className="mt-4 max-w-2xl mx-auto theme-text-secondary">
            I build production-ready web applications that solve real problems.
            Every service is backed by projects I've shipped and clients I've served.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border theme-transition flex flex-col"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold font-exo-2 mb-3 transition-colors duration-300 theme-text group-hover:text-[var(--color-primary)]">
                {service.title}
              </h3>

              <p className="leading-relaxed theme-text-secondary text-sm mb-4">
                {service.description}
              </p>

              {/* What's Included */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Proof */}
              <div
                className="mt-auto pt-4 border-t text-xs leading-relaxed"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                  Proven:
                </span>{' '}
                {service.proof}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border theme-transition"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className="text-2xl mb-2 flex justify-center"
                style={{ color: 'var(--color-primary)' }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl font-bold font-exo-2 mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm theme-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-lg theme-text-secondary mb-6">
            Have a project in mind? Let's discuss how I can help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold font-exo-2 transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <FaHandshake className="text-lg" />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

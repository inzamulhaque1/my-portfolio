import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaDatabase, FaPaintBrush, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaServer className="text-4xl" />,
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and RESTful API design.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FaDatabase className="text-4xl" />,
    title: 'Database Design',
    description: 'Designing and managing MongoDB databases with efficient schemas and queries.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaMobile className="text-4xl" />,
    title: 'Responsive Design',
    description: 'Ensuring your website looks perfect on all devices from mobile to desktop.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <FaPaintBrush className="text-4xl" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences that engage visitors.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <FaRocket className="text-4xl" />,
    title: 'Performance Optimization',
    description: 'Optimizing website speed and performance for better user experience and SEO.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            My Services
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p className="mt-4 max-w-2xl mx-auto theme-text-secondary">
            I offer a wide range of web development services to help bring your ideas to life.
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
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border theme-transition"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>

              <h3
                className="text-xl font-bold font-exo-2 mb-3 transition-colors duration-300 theme-text group-hover:text-[var(--color-primary)]"
              >
                {service.title}
              </h3>

              <p className="leading-relaxed theme-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

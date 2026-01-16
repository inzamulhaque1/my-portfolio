import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaProjectDiagram, FaCode, FaUsers, FaCoffee } from 'react-icons/fa';

const stats = [
  {
    id: 'stat-projects',
    icon: <FaProjectDiagram className="text-4xl" />,
    value: 15,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    id: 'stat-tech',
    icon: <FaCode className="text-4xl" />,
    value: 10,
    suffix: '+',
    label: 'Technologies',
  },
  {
    id: 'stat-clients',
    icon: <FaUsers className="text-4xl" />,
    value: 20,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    id: 'stat-coffee',
    icon: <FaCoffee className="text-4xl" />,
    value: 500,
    suffix: '+',
    label: 'Cups of Coffee',
  },
];

const CountUp = ({ end, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      className="py-16 theme-transition"
      style={{ backgroundColor: 'var(--color-primary)' }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4 opacity-90">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold font-exo-2 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
              </h3>
              <p className="text-white/80 font-montserrat">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

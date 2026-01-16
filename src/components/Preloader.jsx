import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="text-center">
        {/* Animated Logo/Name */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-exo-2 theme-text">
            <span style={{ color: 'var(--color-primary)' }}>I</span>nzamul
          </h1>
        </motion.div>

        {/* Loading Bar */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden mx-auto"
          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            }}
            className="h-full w-1/2"
            style={{
              background: `linear-gradient(to right, transparent, var(--color-primary), transparent)`
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm theme-text-secondary"
        >
          Loading awesome things...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;

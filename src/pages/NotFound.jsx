import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="mb-8"
        >
          <FaExclamationTriangle
            className="text-8xl mx-auto mb-4"
            style={{ color: 'var(--color-primary)' }}
          />
          <h1 className="text-9xl font-bold font-exo-2 theme-text">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4 font-montserrat theme-text">
            Oops! Page Not Found
          </h2>
          <p className="mb-8 max-w-md mx-auto theme-text-secondary">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <FaHome /> Go Back Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: 'var(--color-primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: 'var(--color-secondary)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;

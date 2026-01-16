import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { themeConfig, cycleTheme } = useTheme();
  const IconComponent = themeConfig.icon;

  return (
    <motion.button
      onClick={cycleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: 'var(--color-bg-tertiary)',
      }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={themeConfig.name}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent
          className="text-xl"
          style={{ color: 'var(--color-primary)' }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher;

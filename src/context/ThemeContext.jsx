import { createContext, useContext, useState, useEffect } from 'react';
import { FaSun, FaMoon, FaRobot, FaWater, FaCloudSun, FaTree } from 'react-icons/fa';

// Available themes with React Icons
export const themes = {
  light: {
    name: 'Light',
    icon: FaSun,
    class: 'theme-light',
  },
  dark: {
    name: 'Dark',
    icon: FaMoon,
    class: 'theme-dark',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    icon: FaRobot,
    class: 'theme-cyberpunk',
  },
  ocean: {
    name: 'Ocean',
    icon: FaWater,
    class: 'theme-ocean',
  },
  sunset: {
    name: 'Sunset',
    icon: FaCloudSun,
    class: 'theme-sunset',
  },
  forest: {
    name: 'Forest',
    icon: FaTree,
    class: 'theme-forest',
  },
};

export const themeOrder = ['light', 'dark', 'cyberpunk', 'ocean', 'sunset', 'forest'];

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved && themes[saved]) {
      return saved;
    }
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error);
  }
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }

    // Remove all theme classes
    const root = document.documentElement;
    themeOrder.forEach((t) => {
      root.classList.remove(themes[t].class);
    });
    root.classList.remove('dark');

    // Add current theme class
    root.classList.add(themes[theme].class);

    // Add 'dark' class for dark-based themes (for Tailwind dark: variants)
    if (['dark', 'cyberpunk', 'forest'].includes(theme)) {
      root.classList.add('dark');
    }
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const selectTheme = (themeName) => {
    if (themes[themeName]) {
      setTheme(themeName);
    }
  };

  const value = {
    theme,
    themeConfig: themes[theme],
    themes,
    themeOrder,
    cycleTheme,
    selectTheme,
    isDark: ['dark', 'cyberpunk', 'forest'].includes(theme),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

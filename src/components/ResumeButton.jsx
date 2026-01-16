import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResumeButton = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  showIcon = true
}) => {
  const baseStyles = "font-bold transition-colors inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-[#FF014F] text-white hover:bg-sky-500 border border-[#FF014F] hover:border-sky-700",
    secondary: "border-2 border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white",
    navbar: "bg-[#FF014F] text-white hover:bg-opacity-90",
  };

  const sizes = {
    small: "px-3 py-1.5 rounded-lg text-sm",
    medium: "px-4 py-2 rounded-lg text-sm",
    large: "px-8 py-4 rounded-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="/resume.pdf"
      download
      className={combinedClassName}
      aria-label="Download Resume PDF"
    >
      {showIcon && <FaDownload className="text-lg" />}
      <span>{size === 'small' ? 'Resume' : 'Download Resume'}</span>
    </motion.a>
  );
};

export default ResumeButton;

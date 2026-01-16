/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { FaDownload, FaUser } from 'react-icons/fa';
import myimg from '../assets/images/about/myimg2.jpeg';
import GitHubStats from '../components/GitHubStats';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 overflow-hidden relative theme-transition"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute -right-20 top-20 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <div
          className="absolute -left-20 bottom-20 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block"
            style={{ color: 'var(--color-primary)' }}
          >
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Know Me More
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative mb-8 md:mb-0"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10"
              >
                <img
                  src={myimg}
                  alt="Md. Inzamul Haque Joy"
                  className="w-full rounded-2xl shadow-xl"
                />
              </motion.div>
              <div
                className="absolute -inset-4 opacity-20 blur-xl rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-xl rounded-full"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold theme-text">
                Hi, I'm{' '}
                <span className="font-josefin-sans" style={{ color: 'var(--color-primary)' }}>
                  Md. Inzamul Haque Joy
                </span>
              </h3>
              <p className="text-xl font-montserrat theme-text-secondary">
                MERN Stack Developer
              </p>

              <div className="prose prose-lg font-exo-2 theme-text-secondary space-y-4">
                <p>
                  My journey in web development began with a curiosity about how computers work and how websites are built. From an early age, I was drawn to programming, learning HTML and CSS to design simple static websites. Over time, my skills evolved, and I immersed myself in JavaScript, diving deep into frontend technologies and later exploring full-stack development with the MERN stack.
                </p>
                <p>
                  Throughout my development journey, I have worked on several real-world projects, enhancing my skills in frontend development, database management, and server-side programming. With a passion for learning, I constantly strive to stay updated with the latest trends in web technologies. My goal is to contribute to impactful projects and create meaningful digital experiences.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex font-exo-2 items-center gap-2 px-8 py-4 rounded-lg transition-colors shadow-lg w-full sm:w-auto justify-center text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-label="Download Resume PDF"
              >
                <FaDownload className="text-lg" /> Get Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex font-exo-2 items-center gap-2 border-2 px-8 py-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
                aria-label="Go to contact section"
              >
                <FaUser className="text-lg" /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <GitHubStats username="inzamulhaque1" />
      </div>
    </section>
  );
};

export default About;

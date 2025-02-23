/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { FaDownload, FaUser } from 'react-icons/fa';
import myimg from '../assets/images/about/myimg2.jpeg';

const About = () => {

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-20 top-20 w-72 h-72 bg-[#FF014F] rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FF014F] text-sm font-bold tracking-wider uppercase font-josefin-sans mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  font-exo-2 mb-4">
            Know Me More
          </h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto rounded-full" />
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
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-[#FF014F] opacity-20 blur-xl rounded-full" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-xl rounded-full" />
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
              <h3 className="text-2xl md:text-3xl font-bold">
                Hi, I'm <span className="text-[#FF014F] font-josefin-sans">Md. Inzamul Haque Joy</span>
              </h3>
              <p className="text-xl text-gray-600 font-montserrat ">MERN Stack Developer</p>

              <div className="prose prose-lg font-exo-2 text-gray-600">
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
                href="/email.pdf"
                download
                className="flex font-exo-2 items-center gap-2 bg-[#FF014F] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg w-full sm:w-auto text-center"
              >
                <FaDownload className="text-lg  " /> Get Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex font-exo-2 items-center gap-2 border-2 border-[#FF014F] text-[#FF014F] px-8 py-4 rounded-lg hover:bg-[#FF014F] hover:text-white transition-colors w-full sm:w-auto text-center"
              >
                <FaUser className="text-lg" /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

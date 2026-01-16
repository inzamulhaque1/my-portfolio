import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'John Smith',
    role: 'CEO, TechStart',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Inzamul delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a success.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Johnson',
    role: 'Product Manager, InnovateCo',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Working with Inzamul was a pleasure. He understood our requirements perfectly and delivered a responsive, user-friendly website on time.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Michael Chen',
    role: 'Founder, DevSolutions',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    content: 'Inzamul is a talented developer who brings creativity and professionalism to every project. I highly recommend his services.',
    rating: 5,
  },
];

// Avatar component with fallback
const Avatar = ({ src, name }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center border-4"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          borderColor: 'var(--color-primary)',
          opacity: 0.2
        }}
      >
        <FaUser className="text-2xl" style={{ color: 'var(--color-text-secondary)' }} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-16 h-16 rounded-full object-cover border-4"
      style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            What Clients Say
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl shadow-xl p-8 md:p-12 theme-transition"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  boxShadow: '0 10px 40px var(--shadow-color)'
                }}
              >
                <FaQuoteLeft
                  className="text-4xl opacity-20 mb-6"
                  style={{ color: 'var(--color-primary)' }}
                />

                <p className="text-lg md:text-xl leading-relaxed mb-8 font-montserrat theme-text-secondary">
                  {testimonials[currentIndex].content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={`star-${i}`} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar
                    src={testimonials[currentIndex].image}
                    name={testimonials[currentIndex].name}
                  />
                  <div>
                    <h4 className="font-bold text-lg font-exo-2 theme-text">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="theme-text-secondary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  color: 'var(--color-text-primary)'
                }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setCurrentIndex(index)}
                    className="w-3 h-3 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: index === currentIndex
                        ? 'var(--color-primary)'
                        : 'var(--color-border)'
                    }}
                    aria-label={`Go to testimonial from ${testimonial.name}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  color: 'var(--color-text-primary)'
                }}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

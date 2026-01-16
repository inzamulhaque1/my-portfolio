import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";
import emailjs from "emailjs-com";

// InputField component moved OUTSIDE to prevent re-creation on every render
const InputField = ({ type = "text", name, placeholder, value, rows, onChange, onBlur, error, touched }) => {
  const hasError = error && touched;
  const errorId = `${name}-error`;
  const baseClassName = `w-full p-4 border-2 rounded-xl focus:outline-none transition duration-300 theme-transition cursor-text ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'focus:ring-2 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20'
  }`;
  const baseStyle = {
    backgroundColor: 'var(--color-bg-tertiary)',
    borderColor: hasError ? undefined : 'var(--color-border)',
    color: 'var(--color-text-primary)',
  };

  return (
    <div className="relative">
      {rows ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          className={`${baseClassName} resize-none`}
          style={baseStyle}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={baseClassName}
          style={baseStyle}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
        />
      )}
      <AnimatePresence>
        {hasError && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      let error = "";
      if (name === "name") error = validateName(value);
      if (name === "email") error = validateEmail(value);
      if (name === "message") error = validateMessage(value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "message") error = validateMessage(value);
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setModalType('success');
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});

      setTimeout(() => setShowModal(false), 4000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setModalType('error');
      setShowModal(true);
      setTimeout(() => setShowModal(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  const Modal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="p-8 rounded-2xl shadow-2xl text-center max-w-md w-full"
        style={{ backgroundColor: 'var(--color-bg-card)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {modalType === 'success' ? (
          <>
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 theme-text">Message Sent!</h2>
            <p className="theme-text-secondary">Thank you for reaching out. I will get back to you soon.</p>
          </>
        ) : (
          <>
            <FaTimesCircle className="text-6xl text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 theme-text">Failed to Send</h2>
            <p className="theme-text-secondary">Something went wrong. Please try again or contact me directly.</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );

  const socialLinks = [
    { href: "https://wa.me/+8801728005274", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "https://github.com/inzamulhaque1", icon: FaGithub, label: "GitHub" },
    { href: "https://x.com/inzamul12725", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/inzamulhaque1002/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/au.inzamul", icon: FaFacebook, label: "Facebook" },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 theme-transition"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="container mx-auto px-4">
        <AnimatePresence>
          {showModal && <Modal />}
        </AnimatePresence>

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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-exo-2 mb-4 theme-text">
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p className="mt-4 max-w-2xl mx-auto theme-text-secondary">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-xl"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <h3 className="text-2xl font-bold font-exo-2 mb-6 theme-text">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                />
                <InputField
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  rows={5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98] ${
                    isLoading ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={{ backgroundColor: isLoading ? undefined : 'var(--color-primary)' }}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div
                className="p-8 rounded-2xl shadow-xl"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <h3 className="text-2xl font-bold font-exo-2 mb-6 theme-text">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}
                    >
                      <AiOutlineMail style={{ color: 'var(--color-primary)' }} className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold theme-text">Email</p>
                      <a
                        href="mailto:inzamulhaque1002@gmail.com"
                        className="theme-text-secondary hover:text-[var(--color-primary)] transition-colors"
                      >
                        inzamulhaque1002@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}
                    >
                      <AiOutlinePhone style={{ color: 'var(--color-primary)' }} className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold theme-text">Phone</p>
                      <a
                        href="tel:+8801728005274"
                        className="theme-text-secondary hover:text-[var(--color-primary)] transition-colors"
                      >
                        +880 1728 005274
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}
                    >
                      <AiOutlineHome style={{ color: 'var(--color-primary)' }} className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold theme-text">Address</p>
                      <p className="theme-text-secondary">
                        Nurpur, Pabna Sadar, Pabna 6600<br />
                        Rajshahi, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="p-8 rounded-2xl shadow-xl"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <h3 className="text-2xl font-bold font-exo-2 mb-6 theme-text">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        color: 'var(--color-text-secondary)'
                      }}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

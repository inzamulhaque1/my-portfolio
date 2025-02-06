import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com"; // Correct import statement

const Contact = () => {
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      "service_cp1hja4", // Replace with your service ID
      "template_7hwgjii", // Replace with your template ID
      formData, // Send the form data
      "hV7wR8Bg0jWZ7-c_T" // Replace with your user ID
    )
    .then(
      (response) => {
        console.log("Success!", response.status, response.text);
        setShowModal(true); // Show success modal

        // Hide the modal after 3 seconds
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      },
      (error) => {
        console.error("Failed...", error);
        // Optionally show an error message to the user
      }
    );

    // Optionally reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const SuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg text-[#FF014F] font-semibold">Email Sent Successfully!</h2>
        <p>Your message has been sent. I will get back to you soon.</p>
      </div>
    </motion.div>
  );
  

  return (
    <div id="contact" className="w-9/12 m-11 mx-auto p-8 bg-white rounded-lg shadow-lg">
         {/* Success Modal */}
    {showModal && <SuccessModal />}
      {/* Overall Section Heading and Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-[#FF014F]">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Feel free to reach out for any inquiries or collaborations!
        </p>
      </div>

      {/* Flex Container for Form and Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left side - Contact Form */}
        <div className="w-full md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF014F] transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF014F] transition duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF014F] transition duration-300"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#FF014F] text-white py-3 rounded-md hover:bg-[#e0003d] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Contact Info with Icons */}
        <div className="w-full md:w-1/2 p-4 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <AiOutlineMail className="text-[#FF014F] text-3xl" />
            <div>
              <p className="text-lg font-semibold">Email:</p>
              <p>inzamulhaque1002@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center space-x-4"
          >
            <AiOutlinePhone className="text-[#FF014F] text-3xl" />
            <div>
              <p className="text-lg font-semibold">Phone:</p>
              <p>+8801728005274</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex items-center space-x-4"
          >
            <AiOutlineHome className="text-[#FF014F] text-3xl" />
            <div>
              <p className="text-lg font-semibold">Address:</p>
              <p>Nurpur, Pabna Sadar, Pabna 6600, Rajshahi, Bangladesh</p>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://wa.me/+8801728005274"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[#FF014F] text-3xl" />
            </a>
            <a
              href="https://github.com/inzamulhaque1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#FF014F] text-3xl" />
            </a>
            <a
              href="https://x.com/inzamul12725"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#FF014F] text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/inzamul1002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#FF014F] text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/au.inzamul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#FF014F] text-3xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

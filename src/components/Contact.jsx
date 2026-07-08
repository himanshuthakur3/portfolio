import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Empty validation
  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    alert("Please fill all fields.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/contact/",
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.log(error.response?.data);
    alert("Something went wrong!");
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Let's Build{" "}
          <span className="text-blue-500">
            Something Amazing
          </span>
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Have a project idea? Let's discuss and create something impactful.
        </p>
      </motion.div>

      {/* Contact Container */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Left Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            rounded-3xl
            p-8
            shadow-xl
          "
        >
          <h3 className="text-3xl font-bold mb-5">
            Himanshu Thakur
          </h3>

          <p className="text-gray-400 mb-8">
            Full Stack Developer passionate about building
            modern web applications.
          </p>

          <div className="space-y-5">

            <p className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400"/>
              himanshurana16306@gmail.com
            </p>

            <p className="flex items-center gap-4">
              <FaPhone className="text-green-400"/>
              +91 7015843399
            </p>

            <p className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400"/>
              India
            </p>

          </div>

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/himanshuthakur3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            rounded-3xl
            p-8
            space-y-5
          "
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-xl
              px-5
              py-3
              outline-none
              focus:border-blue-500
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-xl
              px-5
              py-3
              outline-none
              focus:border-blue-500
            "
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-xl
              px-5
              py-3
              outline-none
              focus:border-blue-500
            "
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-xl
              px-5
              py-3
              outline-none
              focus:border-blue-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              py-3
              rounded-xl
              font-semibold
              text-lg
              transition
              hover:scale-105
            "
          >
            Send Message 🚀
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;
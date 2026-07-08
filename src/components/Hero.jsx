import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpeg";
import resume from "../assets/resume/HIM2.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white  pt-24 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 text-xl mb-2">Hello 👋 I'm</p>

          <h1 className="text-6xl font-bold mb-4">
            Himanshu <span className="text-blue-500">Thakur</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Python Developer",
              2000,
              "Django Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-gray-300 font-semibold"
          />

          <p className="mt-6 text-gray-400 leading-8">
            Passionate Web Developer skilled in React, Tailwind CSS,
            JavaScript, Python Django, MYSQL .
            I love building beautiful and responsive websites.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 px-7 py-3 rounded-lg hover:bg-blue-700"
            >
              Hire Me
            </a>

            <a
              href={resume}
              download
              className="border border-blue-500 px-7 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a href="https://github.com/himanshuthakur3">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/himanshu-thakur">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/himanshu_thakur_8178/?__pwa=1">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="profile"
            className="w-[400px] rounded-full border-8 border-blue-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
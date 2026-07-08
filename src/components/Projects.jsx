import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import creamora from "../assets/images/projects/creamora.png";
import portfolio from "../assets/images/projects/portfolio.png";

const projects = [
  {
    title: "Creamora Django WebApp",
    image: creamora,
    description:
      "A modern ice cream ordering website built using Django with user authentication, shopping cart, Razorpay payment integration, and order management.",

    tech: ["Django", "Python", "SQLite", "Tailwind CSS"],

    github: "https://github.com/himanshuthakur3/Creamora-Django-WebApp",

    demo: "https://hello-django-h0s4.onrender.com/",
  },

  {
    title: "Personal Portfolio",
    image: portfolio,

    description:
      "A premium responsive portfolio website built using React, Tailwind CSS and Framer Motion showcasing my skills, projects and contact information.",

    tech: ["React", "Tailwind CSS", "Framer Motion"],

    github: "https://github.com/himanshuthakur3/portfolio",

    demo: "https://YOUR-PORTFOLIO-LIVE-LINK.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#020617] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Here are some of the projects I have built.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#0f172a] rounded-3xl overflow-hidden shadow-xl border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-xl hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl hover:bg-cyan-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
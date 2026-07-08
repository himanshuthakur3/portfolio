import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-indigo-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies that I use every day.
          </p>
        </motion.div>

        {skillCategories.map((category, index) => (

          <div key={index} className="mb-14">

            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
              {category.title}
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

              {category.skills.map((skill, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  transition={{ duration: .3 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-xl"
                >

                  <div className="text-6xl flex justify-center mb-5">
                    {skill.icon}
                  </div>

                  <h4 className="text-xl font-semibold">
                    {skill.name}
                  </h4>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Currently Learning
          </h3>

          <div className="flex flex-wrap gap-5">

            <div className="bg-green-500/20 px-6 py-4 rounded-full flex items-center gap-3">
              <SiNodedotjs className="text-green-400 text-2xl" />
              Node.js
            </div>

            <div className="bg-green-500/20 px-6 py-4 rounded-full flex items-center gap-3">
              <SiExpress className="text-white text-2xl" />
              Express.js
            </div>

            <div className="bg-green-500/20 px-6 py-4 rounded-full flex items-center gap-3">
              <SiMongodb className="text-green-500 text-2xl" />
              MongoDB
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
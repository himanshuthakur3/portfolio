import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpeg";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Get to know me better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="profile"
              className="w-80 rounded-3xl border-4 border-cyan-500 shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold mb-6">
              I'm Himanshu Thakur
            </h3>

            <h4 className="text-cyan-400 text-xl mb-6">
              Full Stack Web Developer
            </h4>

            <p className="text-gray-300 leading-8 mb-8">
              I am passionate about creating responsive,
              user-friendly and modern web applications.
              I enjoy solving problems through code and
              continuously learning new technologies.
              My current tech stack includes React,
              Tailwind CSS, JavaScript, Python and Django.
            </p>

            {/* Personal Info */}

            <div className="grid sm:grid-cols-2 gap-6">

              <div>
                <p><span className="text-cyan-400">Name :</span> Himanshu Thakur</p>
                <p><span className="text-cyan-400">Email :</span> ht4384110@gmail.com</p>
                <p><span className="text-cyan-400">Location :</span> Haryana, India</p>
              </div>

              <div>
                <p><span className="text-cyan-400">Experience :</span> Fresher</p>
                <p><span className="text-cyan-400">Freelance :</span> Available</p>
                <p><span className="text-cyan-400">Languages :</span> Hindi, English</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
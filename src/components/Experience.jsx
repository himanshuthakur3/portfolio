import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function Experience() {
    return (
        <section
            id="experience"
            className="bg-[#020617] text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold">
                        Experience &{" "}
                        <span className="text-cyan-400">Education</span>
                    </h2>

                    <p className="text-gray-400 mt-4">
                        My learning journey and professional experience.
                    </p>
                </motion.div>


                <VerticalTimeline lineColor="#06b6d4">

                    {/* Internship */}

                    <VerticalTimelineElement
                        date="2025"
                        icon={<FaBriefcase />}
                        iconStyle={{
                            background: "#06b6d4",
                            color: "#fff",
                        }}
                        contentStyle={{
                            background: "#0f172a",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid #0f172a",
                        }}
                    >
                        <h3 className="text-2xl font-bold">
                            Web Development Intern
                        </h3>

                        <h4 className="text-cyan-400 mt-2">
                            Pisoft Informatics Pvt. Ltd.
                        </h4>

                        <p className="mt-4 text-gray-300">
                            Worked on responsive websites using
                            HTML, CSS, JavaScript and Django.
                        </p>

                    </VerticalTimelineElement>

                    {/* Education */}
                    <VerticalTimelineElement
                        date="2021 - 2024"
                        icon={<FaGraduationCap />}
                        iconStyle={{
                            background: "#06b6d4",
                            color: "#fff",
                        }}
                        contentStyle={{
                            background: "#0f172a",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid #0f172a",
                        }}
                    >
                        <h3 className="text-2xl font-bold">
                            Diploma in Computer Engineering
                        </h3>

                        <h4 className="text-cyan-400 mt-2">
                            Government Polytechnic College, Morni
                        </h4>

                        <p className="mt-4 text-gray-300">
                            Studied Programming, Data Structures,
                            Database Management System, Operating System,
                            Computer Networks and Software Development.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2023 - Present"
                        icon={<FaGraduationCap />}
                        iconStyle={{
                            background: "#06b6d4",
                            color: "#fff",
                        }}
                        contentStyle={{
                            background: "#0f172a",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid #0f172a",
                        }}
                    >
                        <h3 className="text-2xl font-bold">
                            Bachelor Degree
                        </h3>

                        <h4 className="text-cyan-400 mt-2">
                            State institute of Engineering & Technology , Panchkula<br />
                            (computer science and engineering)
                        </h4>

                        <p className="mt-4 text-gray-300">
                            Learning Data Structures,
                            React, Python,
                            Django and Full Stack Development.
                        </p>

                    </VerticalTimelineElement>

                    {/* Learning */}

                    <VerticalTimelineElement
                        date="2025 - Present"
                        icon={<FaLaptopCode />}
                        iconStyle={{
                            background: "#06b6d4",
                            color: "#fff",
                        }}
                        contentStyle={{
                            background: "#0f172a",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid #0f172a",
                        }}
                    >
                        <h3 className="text-2xl font-bold">
                            Full Stack Development
                        </h3>

                        <h4 className="text-cyan-400 mt-2">
                            Self Learning
                        </h4>

                        <p className="mt-4 text-gray-300">
                            Building projects using React,
                            Tailwind CSS,
                            Bootstrap, Javascript,
                            Python,
                            Django,
                            MySQL,
                            Git and GitHub.
                        </p>

                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>
        </section>
    );
}

export default Experience;
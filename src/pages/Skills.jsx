import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import "./pagesStyles.css";

const SkillCard = ({ skill }) => (
  <motion.div
    className="col-md-3 mb-3"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="skill-card">
      <div className="card-body">
        <h6 className="skill-title mb-2">{skill.title}</h6>
        <div className="logo-container">{skill.logo}</div>
        <p className="skill-text small mt-2">{skill.description}</p>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = [
    {
      title: "React",
      logo: <FaReact className="skill-logo react-logo" />,
      description: "A JavaScript library for building user interfaces.",
    },
    {
      title: "Express",
      logo: <SiExpress className="skill-logo express-logo" />,
      description: "A minimal and flexible Node.js web application framework.",
    },
    {
      title: "MongoDB",
      logo: <SiMongodb className="skill-logo mongodb-logo" />,
      description: "A document-based NoSQL database for modern applications.",
    },
    {
      title: "Node.js",
      logo: <FaNodeJs className="skill-logo nodejs-logo" />,
      description: "A JavaScript runtime built on Chrome's V8 engine.",
    },
    {
      title: "GitHub",
      logo: <FaGithub className="skill-logo github-logo" />,
      description: "A version control and collaboration platform for coders.",
    },
    {
      title: "Bootstrap",
      logo: <FaBootstrap className="skill-logo bootstrap-logo" />,
      description: "A front-end toolkit for building responsive UIs.",
    },
    {
      title: "Firebase",
      logo: <SiFirebase className="skill-logo firebase-logo" />,
      description: "A platform for building mobile and web applications.",
    },
    {
      title: "HTML5",
      logo: <FaHtml5 className="skill-logo html5-logo" />,
      description: "The standard markup language for web development.",
    },
  ];

  return (
    <Layout>
      <div className="container py-4">
        <motion.div
          className="row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Skills;

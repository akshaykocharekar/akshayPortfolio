import React from "react";
import Layout from "../components/Layout/Layout";
import "./HomeStyles.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="about">
          {/* Title */}
          <h1 className="title">
            <TypeAnimation
              sequence={[
                "Hi, I’m a second-year BCA student passionate about web development and technology",
                1000,
              ]}
              speed={50}
              repeat={1}
            />
          </h1>

          {/* Description */}
          <motion.p
            className="description full-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            My journey started with curiosity and grew into a strong passion for
            building web applications and solving real-world problems. What
            excites me the most is the ability to turn ideas into functional,
            interactive, and user-friendly digital solutions. Every project I
            take on challenges me to think critically, solve complex issues, and
            continuously refine my skills. I thrive in environments that push me
            to innovate, experiment, and stay ahead of evolving technologies.
            <br />
            <br />
            Through hands-on experience, I have developed projects like an
            Employee Management System (EMS) and an e-commerce platform, both of
            which have deepened my expertise in database management, user
            authentication, and frontend-backend integration. Working on these
            projects has allowed me to implement efficient data handling, ensure
            secure authentication flows, and enhance overall application
            performance. I enjoy tackling challenges such as scalability,
            security, and optimization, all while focusing on delivering
            seamless user experiences.
            <br /> <br />
            I believe in writing clean, maintainable, and scalable code that not
            only ensures efficiency but also enhances user engagement and
            accessibility. My approach to development involves a strong
            attention to detail, performance optimization, and industry best
            practices. I actively work on personal projects and contribute to
            open-source communities, collaborating with developers worldwide to
            build impactful digital solutions that solve real-world problems.
            <br /> <br />
            <strong>
              {" "}
              Want to know more? <br /> <br />
              Explore the rest of my portfolio!
            </strong>
            <br /> <br />
          </motion.p>

          <motion.p
            className="description short-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            My journey started with curiosity and grew into a strong passion for
            building web applications and solving real-world problems. What
            excites me the most is the ability to turn ideas into functional,
            interactive, and user-friendly digital solutions. Every project I
            take on challenges me to think critically, solve complex issues, and
            continuously refine my skills. I thrive in environments that push me
            to innovate, experiment, and stay ahead of evolving technologies.
          </motion.p>

          <motion.p
            className="description short-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.p>

          <motion.div
            className="links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="https://www.linkedin.com/in/akshay-kocharekar-859829321/"
              target="_blank"
              className="btn linkedin"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/akshaykocharekar/akshaykocharekar"
              target="_blank"
              className="btn github"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://www.instagram.com/akshay.45__/"
              target="_blank"
              className="btn instagram"
            >
              <FaInstagram className="icon" /> Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

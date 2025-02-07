import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import styled from "styled-components"; // Import styled-components

// Styled components for headings
const Heading2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Heading3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
`;

const About = () => {
  return (
    <>
      <Layout>
        <div className="main-div">
          {/* Top container occupying full space */}
          <div className="top-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="content"
            >
              {/* Use the styled Heading2 component */}
              <Heading2>My Journey ...</Heading2>
              <p>
                As a BCA student, I’ve immersed myself in a range of
                technologies, starting with HTML, CSS, and Bootstrap for
                responsive web design. Over time, I explored Tailwind CSS for
                faster development, and React for dynamic front-end development.
                I ventured into the MERN stack (MongoDB, Express, Node.js) for
                back-end development, enhancing my skills in full-stack
                applications. My journey has been a mix of learning,
                experimenting, and building real-world projects, with a goal of
                securing an internship to further hone my skills and gain
                practical experience.
              </p>
            </motion.div>
          </div>

          {/* Single container for all the content */}
          <div className="content-container">
            <div className="bottom-section">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="left-container"
              >
                {/* Use the styled Heading3 component */}
                <Heading3>A Bit About Me</Heading3>
                <p>
                  Hey! I’m someone who’s always up for a game of cricket,
                  whether it’s a casual backyard match or watching the pros on
                  TV. When I’m not on the field, you’ll probably catch me with
                  some good music playing in the background. Music is like my
                  escape—it just hits differently, you know?
                </p>
                <p>
                  As for my personality, I’d say I’m pretty chill but determined
                  when it comes to things I care about. I’m always looking to
                  learn new stuff and improve, whether it’s in tech, life, or
                  just picking up a new hobby. My friends would probably say I’m
                  loyal, easy-going, and love to have fun. If you’re into deep
                  convos or random adventures, I’m your person!
                </p>
                <p>
                  Strengths? I guess I’m pretty adaptable and never back down
                  from a challenge. I like to think outside the box and don’t
                  mind getting my hands dirty if it means getting things done.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="right-container"
              >
                {/* Use the styled Heading3 component */}
                <Heading3>Education</Heading3>
                <div className="education-details">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    className="content"
                  >
                    <h6>High School</h6>
                    <p>Sacred Heart of Jesus High School</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="content"
                  >
                    <h6>Higher Secondary (Science)</h6>
                    <p>Mount Mary Higher Secondary School(2021-2023)</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="content"
                  >
                    <h6>Undergraduate</h6>
                    <p>Bachelor's in Computer Applications (2023-Present)</p>
                    <p>Shree Damodar College of Commerce and Economics</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

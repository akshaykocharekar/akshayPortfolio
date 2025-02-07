import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Import icons

import "../../pages/pagesStyles.css";

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "0ea31ae9-d62d-4e97-b7ed-4e15fd309510");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundPosition: "100% 0",
      transition: { type: "spring", stiffness: 200 },
    },
    tap: { scale: 0.95, transition: { type: "spring", stiffness: 200 } },
  };

  const inputVariants = {
    focus: {
      borderColor: "#4caf50",
      boxShadow: "0 0 8px rgba(76, 175, 80, 0.5)",
    },
    blur: { borderColor: "#ddd", boxShadow: "none" },
  };

  return (
    <motion.div
      className="contact-form"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <TypeAnimation
          sequence={["Contact Me", 500]}
          speed={40}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </motion.h2>

      <motion.form
        onSubmit={onSubmit}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="input-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <label htmlFor="name">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <label htmlFor="email">Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <label htmlFor="message">Message</label>
          <motion.textarea
            id="message"
            name="message"
            required
            placeholder="Write your message here"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          ></motion.textarea>
        </motion.div>

        <motion.button
          type="submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a
          href="https://www.instagram.com/akshay.45__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-kocharekar-859829321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/akshaykocharekar/akshaykocharekar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>

      {result && (
        <motion.span
          className="result-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {result}
        </motion.span>
      )}
    </motion.div>
  );
}

import React from "react";
import "./section1.css";
import illustration from "../../Assets/projects/budgetwise/Codetyping-bro.png";
import AnimatedLetters from "./AnimatedLetters";
import { motion } from "framer-motion";

// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaRobot,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.4 + 0.8, ease: "easeOut" }, // shifted delay
  }),
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.4 + 1, ease: "easeOut" }, // intro later
  }),
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.4 + 0.6, ease: "easeOut" }, // illustration first
  }),
};
const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.3 + 1.2, ease: "easeOut" },
  }),
};

export default function Section1() {
  return (
    <div className="section1">
      <div className="Section1Container">
        {/* Header */}
        <motion.div
          className="nameHeader"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ amount: 0.3 }}
        >
          ONWUASOR MARY-JANE CHIMNECHEREM
        </motion.div>

        <div className="sect1Content">
          <div className="aboutme">
            {/* Intro */}
            <motion.div
              className="intro"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ amount: 0.3 }}
            >
              <AnimatedLetters text="Full Stack Developer | UI/UX Enthusiast" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="description"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ amount: 0.3 }}
            >
              Hi, I'm Mary-Jane! <br /> I build responsive, user-focused
              applications with React, JavaScript, and PHP. I’m passionate about
              blending clean code with creative design to craft engaging digital
              experiences. I’m always eager to explore new technologies and push
              the boundaries of what I can create.
            </motion.p>

            {/* Currently Learning */}
            <motion.div
              className="learning"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <motion.h4 variants={fadeInUp} custom={3}>
                Currently Learning
              </motion.h4>
              <ul>
                <motion.li variants={fadeInUp} custom={3}>
                  <FaPython className="learnIcon python" /> Python
                </motion.li>
                <motion.li variants={fadeInUp} custom={4}>
                  <FaRobot className="learnIcon ai" /> AI/ML
                </motion.li>
                <motion.li variants={fadeInUp} custom={5}>
                  <SiNextdotjs className="learnIcon nextjs" /> Next.js
                </motion.li>
              </ul>
            </motion.div>

            {/* CV Buttons */}
            <motion.div
              className="cv-buttons"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <motion.a
                href="/MaryJaneCV.pdf"
                target="_blank"
                className="btnView"
                variants={popIn}
                custom={6}
              >
                View CV
              </motion.a>
              <motion.a
                href="/MaryJaneCV.pdf"
                download
                className="btnDownload"
                variants={popIn}
                custom={7}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="firstSocials"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                variants={popIn}
                custom={8}
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub className="socialIcon" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                variants={popIn}
                custom={9}
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin className="socialIcon" />
              </motion.a>
              <motion.a
                href="mailto:yourmail@gmail.com"
                variants={popIn}
                custom={10}
                whileHover={{ scale: 1.2 }}
              >
                <MdEmail className="socialIcon" />
              </motion.a>
              <motion.a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                variants={popIn}
                custom={11}
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram className="socialIcon" />
              </motion.a>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            className="illustration"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ amount: 0.3 }}
          >
            <img src={illustration} alt="Coding illustration" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import "./skills.css";
import { motion } from "framer-motion";

const slideInStack = {
  hidden: { opacity: 0, x: 50 }, // start slightly from the right
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <div className="skills">
      <motion.h2
        variants={slideInStack}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ amount: 0.3 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skillbar"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <ul>
          <motion.li variants={slideInStack} custom={1}>
            HTML
          </motion.li>
          <motion.li variants={slideInStack} custom={2}>
            CSS
          </motion.li>
          <motion.li variants={slideInStack} custom={3}>
            JavaScript
          </motion.li>
          <motion.li variants={slideInStack} custom={4}>
            React.js
          </motion.li>
          <motion.li variants={slideInStack} custom={5}>
            PHP
          </motion.li>
          <motion.li variants={slideInStack} custom={6}>
            SQL
          </motion.li>
          <motion.li variants={slideInStack} custom={7}>
            Git
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}

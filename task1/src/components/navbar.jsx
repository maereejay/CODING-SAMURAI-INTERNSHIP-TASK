import "./navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="Name">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          ONWUASOR MARYJANE CHIMNECHEREM
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Software Engineer
        </motion.span>
      </div>

      <motion.div
        className="navlinks"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <ul>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Projects
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Contact
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

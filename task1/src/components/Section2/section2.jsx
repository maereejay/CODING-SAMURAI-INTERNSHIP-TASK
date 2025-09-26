import { useContext } from "react";
import { MyContext } from "../../context/ContextProvider"; // adjust path if needed
import ProjectView from "./projectView";
import "./section2.css";
import { motion, AnimatePresence } from "framer-motion";

const slideInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function Section2() {
  const { projects, selectedProject, setSelectedProject } =
    useContext(MyContext);

  return (
    <div id="projects" className="section2">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Projects
      </motion.h2>

      <div className="projectsContainer">
        <div className="projects">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project"
              onClick={() => setSelectedProject(project)}
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <div className="image">
                <img src={project.images[0]} alt={project.name} />
              </div>
              <h3>{project.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            className="projectviewSection"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ProjectView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

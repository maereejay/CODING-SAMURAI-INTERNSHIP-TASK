import "./section3.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Section3() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o0goemg",
        "template_25kmdtr", // 🔑 from EmailJS
        formRef.current,
        "IISgd1ovlw4xvYTa-" // 🔑 from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); // clears form
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="section3">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Contact Me
      </motion.h2>

      <div className="contactContainer">
        <div className="section3Content">
          <motion.div
            className="form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <motion.label
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: 0.3 }}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              />

              <motion.label
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ amount: 0.3 }}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ amount: 0.3 }}
              />

              <motion.label
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ amount: 0.3 }}
              >
                Subject
              </motion.label>
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ amount: 0.3 }}
              />

              <motion.label
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ amount: 0.3 }}
              >
                Message
              </motion.label>
              <motion.textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ amount: 0.3 }}
              ></motion.textarea>

              <motion.div
                className="submitbutton"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ amount: 0.3 }}
              >
                <button type="submit">Submit</button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="infoplate"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              ONWUASOR MARY-JANE
            </motion.h3>

            <motion.div
              className="info"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ amount: 0.3 }}
            >
              <p>
                Interested in working together on a web project or discussing
                frontend development? I’m always open to collaborations,
                freelance opportunities, or just a chat about React, UI/UX, and
                building great user experiences. Drop me a message and I’ll get
                back to you soon — I’d love to connect and hear about your
                ideas. Let’s create something impactful together!
              </p>
            </motion.div>

            <motion.div
              className="socials"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ amount: 0.3 }}
            >
              <motion.div
                className="socialItem"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <FaGithub className="iconItem" />
                <a
                  href="https://github.com/maereejay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </motion.div>

              <motion.div
                className="socialItem"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <FaLinkedin className="iconItem" />
                <a
                  href="https://linkedin.com/in/onwuasor-mary-jane-289465248"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </motion.div>

              <motion.div
                className="socialItem"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <MdEmail className="iconItem" />
                <a
                  href="mailto:maryjaneonwuasor@gmail.com?subject=Hello, I would like to work with you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="attribution"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              <a
                href="https://storyset.com/work"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work illustrations by Storyset
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import profile from "../../assets/profile.jpeg";
import personalData from "../../data/personalData";

import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaGlobe,
  FaDownload,
} from "react-icons/fa6";

import { FaCalendarAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">👋 Hello, I'm</span>

          <h1>{personalData.name}</h1>

          <h2>{personalData.title}</h2>

          <p>{personalData.bio}</p>

          <div className="hero-buttons">
            <a
              href={personalData.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <FaCalendarAlt />
              Book a Call
            </a>

            <a
              href="/resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="hero-social">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalData.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href={personalData.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href={personalData.website}
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} alt={personalData.name} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
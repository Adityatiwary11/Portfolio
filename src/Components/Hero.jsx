import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* TEXT */}
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Aditya Tiwary</span>
        </h1>

        <h2>Frontend Developer | AI Enthusiast | Developer</h2>

        <p>
          Engineering student passionate about building modern web applications
          and exploring Artificial Intelligence. Quick learner, highly motivated,
          and eager to solve real-world problems.
        </p>

        <div className="hero-info">
          📍 Patna, Bihar, India <br />
          📧 123adityatiwary@gmail.com
        </div>

        {/* ACTION BUTTONS */}
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn primary">
            View Projects
          </a>

          <a href="#contact" className="hero-btn secondary">
            Contact Me
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hero-icons">
          <a
            href="https://github.com/Adityatiwary11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-tiwary-4a9578282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* PHOTO */}
      <div className="hero-photo">
        <img src="/Portfolio/profile.jpg" alt="profile" />
      </div>
    </motion.section>
  );
};

export default Hero;

import "./Skills.css";
import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiApache,
  SiGnubash,
} from "react-icons/si";


const skills = [
  // Programming Languages
  { name: "C", icon: <SiCplusplus />, level: "Intermediate" },
  { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
  { name: "JavaScript", icon: <FaJsSquare />, level: "Intermediate" },
  { name: "Python", icon: <SiPython />, level: "Basic" },
  { name: "Bash", icon: <SiGnubash />, level: "Beginner" },

  // Web Technologies
  { name: "HTML", icon: <FaHtml5 />, level: "Intermediate" },
  { name: "CSS", icon: <FaCss3Alt />, level: "Intermediate" },
  { name: "React", icon: <FaReact />, level: "Intermediate" },
  { name: "Responsive Design", icon: <FaHtml5 />, level: "Intermediate" },
  { name: "Apache Server", icon: <SiApache />, level: "Basic" },

  // Tools & Systems
  { name: "Git", icon: <FaGitAlt />, level: "Intermediate" },
  { name: "Linux (Kali)", icon: <FaLinux />, level: "Beginner" },
  { name: "Networking", icon: <FaNetworkWired />, level: "Basic" },

  // Database
  { name: "SQL", icon: <FaDatabase />, level: "Basic" },
];


function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="bubble-container">
        {skills.map((skill, index) => {
          const randomDelay = Math.random() * 3;
          const randomDuration = 3 + Math.random() * 3;

          return (
            <div
              className="skill-bubble"
              key={index}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform =
                  `rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0) rotateY(0) scale(1)";
              }}
              onClick={() => setActiveSkill(skill)}
            >
              {/* FLOATING WRAPPER */}
              <div
                className="skill-bubble-inner"
                style={{
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`,
                }}
              >
                <div className="bubble-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {activeSkill && (
        <div className="modal-overlay" onClick={() => setActiveSkill(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{activeSkill.name}</h3>
            <p>
              Proficiency: <strong>{activeSkill.level}</strong>
            </p>
            <button onClick={() => setActiveSkill(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;

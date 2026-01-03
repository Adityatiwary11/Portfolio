import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            A responsive personal portfolio website to showcase my skills,
            projects, and contact information with a clean and modern UI.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Adityatiwary11/Adityatiwary11.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://adityatiwary11.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
            >
              Live
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Multi-Client Chat Server</h3>
          <p>
            A multi-client chat server built in C using socket programming,
            allowing multiple clients to communicate concurrently.
          </p>

          <div className="tech-stack">
            <span>C</span>
            <span>TCP/IP</span>
            <span>Linux</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Adityatiwary11/Multi-client-chat-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Smart Nearby Places Recommender</h3>
          <p>
            A smart recommendation system that suggests nearby places based on
            user preferences and location.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <span className="ongoing">In Progress</span>
          </div>
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="projects-cta">
        <a href="#contact" className="projects-btn">
          Interested in my work? Contact Me
        </a>
      </div>
    </section>
  );
}

export default Projects;

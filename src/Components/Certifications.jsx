import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 className="cert-title">Certifications</h2>

      <div className="cert-container">
        <div className="cert-card">
          <h3>Advanced System Security Topics</h3>
          <p>Coursera</p>
        </div>

        <div className="cert-card">
          <h3>Getting Started with Cybersecurity</h3>
          <p>IBM SkillsBuild</p>
        </div>

        <div className="cert-card">
          <h3>Information Theory</h3>
          <p>Coursera</p>
        </div>

        <div className="cert-card">
          <h3>Introduction to Networking</h3>
          <p>NVIDIA (Coursera)</p>
        </div>

        <div className="cert-card">
          <h3>Oracle Cloud Infrastructure 2025 AI Foundations</h3>
          <p>Oracle</p>
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="cert-cta">
        <a href="#contact" className="cert-btn">
          Want to verify or collaborate? Contact Me
        </a>
      </div>
    </section>
  );
}

export default Certifications;

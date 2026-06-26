import { useState, useEffect } from "react";
import { personalInfo } from "../../assets/data/portfolioData";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === current) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Background grid */}
      <div className="hero-grid-bg"></div>

      {/* Glow orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Available for work</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="hero-name-highlight">{personalInfo.name}</span>
          </h1>

          <div className="hero-role">
            <span className="hero-role-prefix">// </span>
            <span className="hero-role-text">{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-intro">{personalInfo.intro}</p>

          <div className="hero-actions">
            <a href={personalInfo.resumeUrl} className="btn btn-primary" download>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me →
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-label">Years exp.</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">30+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">15+</span>
              <span className="hero-stat-label">Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar-container">
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar">
              <div className="hero-avatar-inner">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-avatar-svg">
                  <circle cx="100" cy="80" r="35" fill="var(--accent-primary)" fillOpacity="0.3"/>
                  <circle cx="100" cy="80" r="25" fill="var(--accent-primary)" fillOpacity="0.6"/>
                  <ellipse cx="100" cy="155" rx="55" ry="30" fill="var(--accent-primary)" fillOpacity="0.3"/>
                </svg>
                <div className="hero-avatar-code">
                  <span className="code-line"><span className="code-key">const</span> <span className="code-var">dev</span> = {'{'}</span>
                  <span className="code-line code-indent"><span className="code-key">name</span>: <span className="code-str">"Nithya Reddy"</span>,</span>
                  <span className="code-line code-indent"><span className="code-key">skills</span>: <span className="code-str">["React", "Node"]</span>,</span>
                  <span className="code-line code-indent"><span className="code-key">status</span>: <span className="code-str">"available"</span></span>
                  <span className="code-line">{'}'}</span>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="hero-badge-float badge-react">⚛ React</div>
            <div className="hero-badge-float badge-node">🟢 Node.js</div>
            <div className="hero-badge-float badge-mongo">🍃 MongoDB</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useState, useEffect, useRef } from "react";
import { skillsData } from "../../assets/data/portfolioData";
import "./Skills.css";

const categories = [
  { key: "frontend", label: "Frontend", icon: "⚡", color: "#00d4ff" },
  { key: "backend", label: "Backend", icon: "⚙️", color: "#7c3aed" },
  { key: "database", label: "Database", icon: "🗄️", color: "#10b981" },
  { key: "tools", label: "Tools", icon: "🔧", color: "#f59e0b" },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            boxShadow: `0 0 10px ${color}40`,
          }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  const [active, setActive] = useState("frontend");
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [active]);

  const activeCategory = categories.find((c) => c.key === active);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-subtitle">
            Technologies and frameworks I work with daily to build production-grade applications.
          </p>
        </div>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`skill-tab ${active === cat.key ? "active" : ""}`}
              onClick={() => setActive(cat.key)}
              style={{ "--tab-color": cat.color }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel">
          <div className="skills-panel-header">
            <span className="skills-panel-title">
              {activeCategory.icon} {activeCategory.label} Development
            </span>
            <span className="skills-panel-count">
              {skillsData[active].length} skills
            </span>
          </div>
          <div className="skills-list">
            {skillsData[active].map((skill, i) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={activeCategory.color}
                animate={animate}
              />
            ))}
          </div>
        </div>

        {/* Tech icons grid */}
        <div className="tech-icons">
          {[
            { name: "React", emoji: "⚛" },
            { name: "Node.js", emoji: "🟢" },
            { name: "MongoDB", emoji: "🍃" },
            { name: "TypeScript", emoji: "🔷" },
            { name: "Docker", emoji: "🐳" },
            { name: "AWS", emoji: "☁️" },
            { name: "Git", emoji: "📝" },
            { name: "Python", emoji: "🐍" },
          ].map((tech) => (
            <div key={tech.name} className="tech-icon-item">
              <span className="tech-icon-emoji">{tech.emoji}</span>
              <span className="tech-icon-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

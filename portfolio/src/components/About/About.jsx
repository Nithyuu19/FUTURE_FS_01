import { aboutData, personalInfo } from "../../assets/data/portfolioData";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">The person behind the code</h2>
        </div>

        <div className="about-grid">
          {/* Left: summary */}
          <div className="about-info">
            <div className="about-summary card">
              <p className="about-summary-text">{aboutData.summary}</p>
              <p className="about-summary-text" style={{ marginTop: "1rem" }}>
                {aboutData.objective}
              </p>
              <div className="about-details">
                <div className="about-detail">
                  <span className="about-detail-label">// Location</span>
                  <span className="about-detail-value">{personalInfo.location}</span>
                </div>
                <div className="about-detail">
                  <span className="about-detail-label">// Email</span>
                  <span className="about-detail-value">{personalInfo.email}</span>
                </div>
                <div className="about-detail">
                  <span className="about-detail-label">// Status</span>
                  <span className="about-detail-value available">Available for work ✓</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="about-edu card">
              <h3 className="about-card-title">Education</h3>
              {aboutData.education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-icon">🎓</div>
                  <div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-institution">{edu.institution}</div>
                    <div className="edu-meta">
                      <span>{edu.year}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="about-timeline">
            <h3 className="about-card-title">Experience</h3>
            <div className="timeline">
              {aboutData.experience.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {i < aboutData.experience.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-content card">
                    <div className="timeline-header">
                      <div>
                        <div className="timeline-role">{exp.role}</div>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

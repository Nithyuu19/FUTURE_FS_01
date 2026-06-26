import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">My background at a glance</h2>
        </div>

        <div className="resume-wrapper">
          <div className="resume-preview">
            {/* Simulated resume preview */}
            <div className="resume-doc">
              <div className="resume-doc-header">
                <div className="resume-doc-name">Nithya Reddy</div>
                <div className="resume-doc-title">Full Stack Developer</div>
                <div className="resume-doc-contact">
                  Nithya Reddy@example.com · San Francisco, CA · github.com/Nithya Reddy
                </div>
              </div>
              <div className="resume-doc-divider"></div>
              {[
                { title: "EXPERIENCE", items: [
                  { label: "Senior Frontend Developer — Stripe", sub: "2023–Present" },
                  { label: "Full Stack Developer — Vercel", sub: "2022–2023" },
                  { label: "Junior Developer — Startup Hub", sub: "2020–2022" },
                ]},
                { title: "EDUCATION", items: [
                  { label: "B.S. Computer Science — UC Berkeley", sub: "2018–2022 · GPA 3.8" },
                ]},
                { title: "SKILLS", items: [
                  { label: "React, Next.js, TypeScript, Node.js, MongoDB", sub: "" },
                  { label: "AWS, Docker, Git, PostgreSQL, GraphQL", sub: "" },
                ]},
              ].map((section) => (
                <div key={section.title} className="resume-doc-section">
                  <div className="resume-doc-section-title">{section.title}</div>
                  {section.items.map((item, i) => (
                    <div key={i} className="resume-doc-item">
                      <span>{item.label}</span>
                      {item.sub && <span className="resume-doc-sub">{item.sub}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="resume-actions-panel">
            <h3 className="resume-panel-title">Download Resume</h3>
            <p className="resume-panel-desc">
              Get a complete overview of my experience, skills, and achievements in PDF format.
            </p>

            <a href="/resume.pdf" download className="btn btn-primary resume-download-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download PDF
            </a>

            <div className="resume-meta">
              <div className="resume-meta-item">
                <span className="resume-meta-icon">📄</span>
                <div>
                  <div className="resume-meta-label">Format</div>
                  <div className="resume-meta-value">PDF Document</div>
                </div>
              </div>
              <div className="resume-meta-item">
                <span className="resume-meta-icon">📅</span>
                <div>
                  <div className="resume-meta-label">Last Updated</div>
                  <div className="resume-meta-value">June 2025</div>
                </div>
              </div>
              <div className="resume-meta-item">
                <span className="resume-meta-icon">📏</span>
                <div>
                  <div className="resume-meta-label">Pages</div>
                  <div className="resume-meta-value">2 pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

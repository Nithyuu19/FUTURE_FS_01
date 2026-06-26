import { certificationsData, achievementsData } from "../../assets/data/portfolioData";
import "./Certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Certifications & Achievements</h2>
        </div>

        <div className="certs-layout">
          {/* Certificates */}
          <div>
            <h3 className="certs-group-title">Certificates</h3>
            <div className="certs-grid">
              {certificationsData.map((cert) => (
                <a key={cert.id} href={cert.url} className="cert-card" target="_blank" rel="noreferrer"
                  style={{ "--cert-color": cert.color }}>
                  <div className="cert-icon" style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}>
                    <div className="cert-icon-badge" style={{ color: cert.color }}>✓</div>
                  </div>
                  <div className="cert-info">
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-date">{cert.date}</div>
                  </div>
                  <div className="cert-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

          {/* Achievements timeline */}
          <div>
            <h3 className="certs-group-title">Achievements</h3>
            <div className="achievements-list">
              {achievementsData.map((item, i) => (
                <div key={i} className="achievement-item">
                  <div className="achievement-year-col">
                    <span className="achievement-year">{item.year}</span>
                  </div>
                  <div className="achievement-connector">
                    <div className="achievement-node">{item.icon}</div>
                    {i < achievementsData.length - 1 && <div className="achievement-line"></div>}
                  </div>
                  <div className="achievement-content card">
                    <div className="achievement-title">{item.title}</div>
                    <div className="achievement-desc">{item.description}</div>
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

export default Certifications;

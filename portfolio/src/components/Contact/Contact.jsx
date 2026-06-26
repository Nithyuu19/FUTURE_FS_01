import { useState } from "react";
import { personalInfo } from "../../assets/data/portfolioData";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };
const initialErrors = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = { ...initialErrors };
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  if (!form.subject.trim()) errors.subject = "Subject is required";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      // Demo: simulate success without backend
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's build something together</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Send me a message and let's talk.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info panel */}
          <div className="contact-info">
            <div className="contact-info-card card">
              <h3 className="contact-info-title">Get in touch</h3>
              <p className="contact-info-desc">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open.
              </p>

              <div className="contact-channels">
                {[
                  { icon: "✉️", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: "📍", label: "Location", value: personalInfo.location, href: "#" },
                  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/alexmorgan", href: personalInfo.social.linkedin },
                  { icon: "🐙", label: "GitHub", value: "github.com/alexmorgan", href: personalInfo.social.github },
                ].map((ch) => (
                  <a key={ch.label} href={ch.href} className="contact-channel" target="_blank" rel="noreferrer">
                    <span className="contact-channel-icon">{ch.icon}</span>
                    <div>
                      <div className="contact-channel-label">{ch.label}</div>
                      <div className="contact-channel-value">{ch.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-availability card">
              <div className="avail-dot"></div>
              <div>
                <div className="avail-title">Available for freelance & full-time</div>
                <div className="avail-sub">Response time: usually within 24h</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {status === "success" ? (
              <div className="contact-success card">
                <div className="success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <h3 className="contact-form-title">Send a message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input
                      className={`form-input ${errors.name ? "error" : ""}`}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      className={`form-input ${errors.email ? "error" : ""}`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    className={`form-input ${errors.subject ? "error" : ""}`}
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <><span className="btn-spinner"></span> Sending...</>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>

                {status === "error" && (
                  <div className="form-error-banner">
                    Something went wrong. Please try emailing directly.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

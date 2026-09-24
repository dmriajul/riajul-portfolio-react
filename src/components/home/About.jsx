import personalData from "../../data/personalData";

import { FaDownload } from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  const handleConsultationClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("prefill-consultation"));
    }
  };

  return (
    <section className="about" id="about">
      <div className="container about-container">
        {/* Left Side: Live GA4 Dashboard Card
            (Replaces the duplicate profile photo — the hero already shows it) */}
        <div className="about-image">
          <div className="about-dashboard-card">
            <img
              src="/projects/riajultech-ga4-dashboard.jpg"
              alt="Live Google Analytics 4 (GA4) and server-side attribution dashboard built by Khandokar Riajul Islam"
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
            />
            <div className="about-dashboard-caption">
              <FaChartLine /> Real GA4 & CAPI Attribution Dashboard
            </div>
          </div>

          <div className="about-trust-tag">
            <FaShieldAlt /> 100% Data-Driven &amp; Attribution-Verified
          </div>

          {/* Live Authority Backlink Bar */}
          <div className="about-backlinks">
            <span className="about-backlinks-label">
              Live Authority Backlinks
            </span>
            <div className="about-backlinks-row">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                title="Verified LinkedIn Profile"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                title="Verified GitHub Profile"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={personalData.website}
                target="_blank"
                rel="noreferrer"
                title="Official Website"
              >
                <FaGlobe /> riajultech.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-content">
          <span className="section-tag">About Me</span>

          <h2>Your Strategic Growth Partner for Scalable Customer Acquisition</h2>

          {/* Quick Summary */}
          <div className="aeo-quick-summary">
            <strong>Professional Summary:</strong> Khandokar Riajul Islam is a certified Performance Marketing Specialist and Social Media Manager with 5+ years of verified experience in Meta Ads, Google Ads, Full-Funnel Social Media Management, and GA4/GTM server-side tracking.
          </div>

          <p>{personalData.about}</p>

          {/* Skills Badges */}
          <div className="about-skills">
            {personalData.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                <FaCheckCircle /> {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="about-buttons">
            <button
              onClick={handleConsultationClick}
              className="btn-primary"
            >
              <FaRocket />
              <span>Claim Free Consultation</span>
            </button>

            <a
              href={personalData.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FaCalendarAlt />
              <span>Book a 30-Min Call</span>
            </a>

            <a
              href={personalData.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-text-link"
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {personalData.highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <h3>{item.number}</h3>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* Professional Information */}
          <div className="about-info">
            {personalData.contactInfo.map((item) => (
              <div className="info-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

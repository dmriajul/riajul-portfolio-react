import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

import personalData from "../../data/personalData";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId, e) => {
    if (e) e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>{personalData.name}</h3>
          <span className="footer-role">Performance Marketing Specialist & Social Media Manager</span>

          <p className="footer-bio">
            Helping ambitious founders, clinics, and businesses across Australia, the UAE, and worldwide turn qualified attention into predictable, high-ROAS revenue through empathetic human psychology and transparent data.
          </p>

          <div className="footer-contact-inline">
            <a href="mailto:service@riajultech.com" className="footer-email-link">
              service@riajultech.com
            </a>
            <span className="footer-dot">•</span>
            <a href="tel:+8801954447017" className="footer-phone-link">
              +880 1954 447017
            </a>
          </div>
        </div>

        {/* Navigation Links - Human-centered without robotic 'Quick Links' heading */}
        <div className="footer-links">
          <a href="/#hero" onClick={(e) => handleNavClick("hero", e)}>
            Home
          </a>

          <a href="/#about" onClick={(e) => handleNavClick("about", e)}>
            About
          </a>

          <a href="/#skills" onClick={(e) => handleNavClick("skills", e)}>
            Skills
          </a>

          <a href="/#projects" onClick={(e) => handleNavClick("projects", e)}>
            Projects
          </a>

          <a href="/#services" onClick={(e) => handleNavClick("services", e)}>
            Services
          </a>

          <a href="/#experience" onClick={(e) => handleNavClick("experience", e)}>
            Experience
          </a>

          <a href="/#contact" onClick={(e) => handleNavClick("contact", e)}>
            Contact
          </a>
        </div>

        {/* Social / Connect */}
        <div className="footer-social">
          <h4>Let's Connect</h4>
          <p className="footer-social-note">Open for strategic partnerships and consultations.</p>
          <div className="social-icons">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalData.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Profile"
              title="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href={personalData.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter) Profile"
              title="X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href={personalData.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Personal Website"
              title="Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {personalData.name}. All Rights Reserved. Built with care for sustainable client growth.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";

import personalData from "../../data/personalData";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h3>
            {personalData.name}
          </h3>

          <p>
            Performance Marketing Specialist helping businesses grow
            through Meta Ads, Google Ads, SEO, GA4, GTM, analytics,
            and conversion-focused marketing.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#hero">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

        </div>

        {/* Social */}

        <div className="footer-social">

<h4>Social Media</h4>
          <div className="social-icons">

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalData.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href={personalData.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href={personalData.website}
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
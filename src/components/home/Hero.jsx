import { motion } from "framer-motion";
import profile from "../../assets/profile.jpeg";
import personalData from "../../data/personalData";

import {
  FaLinkedin,
  FaFacebook,
  FaGlobe,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  const handleConsultationClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("prefill-consultation"));
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* Left Side: Headline & Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status Badge: Available for Global Remote Work */}
          <div className="hero-status-pill">
            <span className="status-pulse-dot"></span>
            <span>AVAILABLE FOR GLOBAL REMOTE & CONTRACT ROLES</span>
          </div>

          {/* Primary H1 Headline */}
          <h1 className="hero-h1">
            Performance Marketing Specialist &{" "}
            <span className="highlight">Social Media Manager</span>
          </h1>

          {/* Subheading / H2 - Human & Solution-Focused */}
          <h2 className="hero-h2">
            Clear Strategy, Honest Data, and Sustainable Revenue Growth for Your Business
          </h2>

          {/* Human, Empathetic Description */}
          <p className="hero-p">
            Hi, I'm <strong>Riajul</strong>. I partner remotely with ambitious founders and business owners across the <strong>USA, UK, Canada, Singapore, Australia, and the UAE</strong>. Whether scaling e-commerce & B2B brands with high-ROAS Meta & Google Ads, or helping Australian and UAE practices dominate Google Maps 3-Pack and 5-star online reputation—I build honest, data-driven systems that genuinely grow your revenue.
          </p>

          {/* Conversion Action Buttons */}
          <div className="hero-buttons">
            <button
              onClick={handleConsultationClick}
              className="btn-primary hero-btn-consultation"
            >
              <span>Claim Free Consultation →</span>
            </button>

            <div className="hero-secondary-buttons">
              <a
                href={personalData.calendly}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary hero-btn-cal"
              >
                <FaCalendarAlt />
                <span>Book a 30-Min Call</span>
              </a>

              <a
                href={`https://wa.me/${personalData.phoneClean}?text=Hi%20Riajul,%20I'm%20interested%20in%20your%20Performance%20Marketing%20and%20Social%20Media%20Manager%20services.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-pill"
              >
                <FaWhatsapp />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="hero-social">
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
              aria-label="X Twitter Profile"
              title="X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href={personalData.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Official Website"
              title="Official Website"
            >
              <FaGlobe />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual Image Card with Floating Badges */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-image-frame">
            {/* Top-Left Floating Metric Badge */}
            <div className="floating-metric-badge float-top-left">
              <strong>5.88% CTR</strong>
              <span>Multi-channel program</span>
            </div>

            <img
              src={profile}
              alt="Khandokar Riajul Islam — Performance Marketing Specialist & Social Media Manager"
            />

            {/* Bottom-Right Floating Metric Badge */}
            <div className="floating-metric-badge float-bottom-right">
              <strong>174K impressions</strong>
              <span>Organic search growth</span>
            </div>

            {/* Bottom-Left Name Overlay Badge */}
            <div className="hero-photo-tag">
              <span className="photo-tag-name">Riajul</span>
              <span className="photo-tag-role">PERFORMANCE MARKETER</span>
            </div>
          </div>

          {/* Mobile Stats Row - Shown under photo on <= 992px */}
          <div className="hero-mobile-stats-row">
            <div className="hero-mobile-stat-chip">
              <strong>5.88% CTR</strong>
              <span>Multi-channel program</span>
            </div>
            <div className="hero-mobile-stat-chip">
              <strong>174K impressions</strong>
              <span>Organic search growth</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4-Column Bottom Stats Counter Bar */}
      <div className="container hero-stats-container">
        <div className="hero-stats-row">
          <div className="hero-stat-block">
            <span className="stat-number">72+</span>
            <span className="stat-label">Campaigns launched</span>
          </div>
          <div className="hero-stat-block">
            <span className="stat-number">214K</span>
            <span className="stat-label">Reach for a single brand</span>
          </div>
          <div className="hero-stat-block">
            <span className="stat-number">5.88%</span>
            <span className="stat-label">Best account-level CTR</span>
          </div>
          <div className="hero-stat-block">
            <span className="stat-number">344</span>
            <span className="stat-label">Sales in a 7-day launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

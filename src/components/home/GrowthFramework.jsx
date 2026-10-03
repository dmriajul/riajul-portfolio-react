import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";

function GrowthFramework() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stages = [
    {
      num: "01",
      icon: <FaUsers />,
      title: "Multi-Channel Traffic Discovery",
      desc: "Capturing high-intent buyers through coordinated Meta Ads (Facebook & Instagram), Google Search intent, and Google Maps 3-Pack visibility.",
      highlight: "Meta Ads & Maps 3-Pack",
    },
    {
      num: "02",
      icon: <FaShieldAlt />,
      title: "5-Star Social Proof & Reputation (ORM)",
      desc: "Building consistent brand trust through structured review funnels on Google, TrueLocal, and 2GIS to reduce pre-purchase hesitation.",
      highlight: "5-Star Reviews & Trust",
    },
    {
      num: "03",
      icon: <FaRocket />,
      title: "High-Converting CRO & Lead Funnel",
      desc: "Directing high-intent traffic into landing pages and booking flows with less friction, so more qualified visitors take the next step.",
      highlight: "Lower-Friction Booking",
    },
    {
      num: "04",
      icon: <FaChartLine />,
      title: "GA4 Attribution & Continuous Scaling",
      desc: "Using server-side tracking and multi-touch attribution to see which channels actually return revenue, then shifting budget toward what works.",
      highlight: "Transparent CAC & ROAS",
    },
  ];

  return (
    <section className="growth-framework-section" id="growth-framework">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Practical 4-Stage Problem-Solving System</span>
          <h2>Full-Funnel Performance Growth System</h2>
          <p>
            Growth rarely fails for one dramatic reason. It usually leaks in small, fixable places —
            weak offers, inconsistent content, unclear tracking, or pages that don't convert.
            This is the four-stage system I use to find and fix those leaks in order, then scale
            what is already working for businesses across the USA, UK, Canada, Singapore, Australia, and the UAE.
          </p>
        </motion.div>

        {/* Main Framework Showcase Container */}
        <div className="framework-showcase-wrapper">
          {/* Visual Infographic Card */}
          <motion.div
            className="framework-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="framework-image-glass">
              <img
                src="/images/growth-ecosystem.png"
                alt="Full-Funnel Performance Growth System infographic diagram"
                className="framework-infographic-img"
                loading="lazy"
              />
              <div className="framework-image-badge">
                <span className="badge-pulse"></span>
                <span>Live Acquisition Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* 4 Connected Stages Grid */}
          <div className="framework-stages-grid">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.num}
                className="framework-stage-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="stage-card-header">
                  <div className="stage-header-top">
                    <span className="stage-num">STAGE {stage.num}</span>
                    <div className="stage-icon">{stage.icon}</div>
                  </div>
                  <div className="stage-header-bottom">
                    <span className="stage-highlight">{stage.highlight}</span>
                  </div>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Conversion Action Bar */}
        <motion.div
          className="framework-cta-bar"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-bar-text">
            <h4>Want this system applied to your business?</h4>
            <p>I'll review your ad accounts, funnel, and tracking, then map out a practical 90-day plan for your market.</p>
          </div>
          <a href="#contact" onClick={handleScrollToContact} className="btn-primary">
            Request a Free Strategy Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GrowthFramework;

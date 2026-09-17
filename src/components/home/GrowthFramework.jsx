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
      desc: "Capturing high-intent buyers through synchronized Meta Ads (Facebook & Instagram), Google Search intent, and Google Maps 3-Pack dominance.",
      highlight: "Meta Ads & Maps 3-Pack",
    },
    {
      num: "02",
      icon: <FaShieldAlt />,
      title: "5-Star Social Proof & Reputation (ORM)",
      desc: "Building unbreakable brand trust via automated review funnels on Google, TrueLocal, and 2GIS to remove pre-purchase hesitation.",
      highlight: "5-Star Reviews & Trust",
    },
    {
      num: "03",
      icon: <FaRocket />,
      title: "High-Converting CRO & Lead Funnel",
      desc: "Directing high-intent traffic into frictionless landing pages and booking systems engineered for maximum qualified consultations.",
      highlight: "Frictionless Booking",
    },
    {
      num: "04",
      icon: <FaChartLine />,
      title: "GA4 Attribution & Continuous Scaling",
      desc: "Leveraging server-side tracking and multi-touch attribution to systematically slash Customer Acquisition Cost (CAC) while scaling ROAS.",
      highlight: "+340% ROAS & -42% CAC",
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
          <span className="section-tag">The Proven Methodology</span>
          <h2>The Full-Funnel Performance Marketing Growth Engine</h2>
          <p>
            High-ticket clients across the USA, UK, Canada, Singapore, Australia, and the UAE do not convert through isolated ads alone.
            Here is the complete, systematic 4-stage operating framework that turns cold visitors into high-ticket clients.
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
                alt="Full-Funnel Performance Marketing Growth Engine Infographic Diagram"
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
            <h4>Ready to install this growth engine in your business?</h4>
            <p>Get a comprehensive full-funnel audit and a 90-day growth roadmap tailored to your target market.</p>
          </div>
          <a href="#contact" onClick={handleScrollToContact} className="btn-primary">
            Claim Your Free Strategy Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GrowthFramework;

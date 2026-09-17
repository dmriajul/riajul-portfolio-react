import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import servicesDetailData from "../data/servicesDetailData";
import personalData from "../data/personalData";

import {
  FaCalendarAlt,
  FaWhatsapp,
  FaArrowLeft,
  FaCheck,
  FaPlus,
  FaMinus,
  FaShareAlt,
  FaRocket,
} from "react-icons/fa";

// Service keys list for quick navigation
const serviceNavList = [
  { slug: "smm", name: "Social Media Manager" },
  { slug: "meta-ads", name: "Meta Ads" },
  { slug: "google-ads", name: "Google Ads" },
  { slug: "local-seo-orm", name: "Local SEO & ORM" },
  { slug: "seo", name: "SEO" },
  { slug: "analytics", name: "Analytics & GA4" },
  { slug: "cro", name: "Conversion (CRO)" },
];

function ServiceDetail() {
  const { serviceId } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  // Normalize slug / handle aliases like social-media-marketing or social-media-manager -> smm
  let currentKey = serviceId || "smm";
  if (currentKey === "social-media-marketing" || currentKey === "social-media-manager") {
    currentKey = "smm";
  }
  if (
    currentKey === "local-seo" ||
    currentKey === "orm" ||
    currentKey === "reputation-management" ||
    currentKey === "google-business-profile" ||
    currentKey === "local-seo-orm"
  ) {
    currentKey = "local-seo-orm";
  }

  const service = servicesDetailData[currentKey];

  // Fallback if an invalid service slug is entered
  if (!service) {
    return (
      <div className="service-detail-page">
        <Navbar />
        <div className="container" style={{ padding: "160px 20px 100px", textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Service Not Found</h1>
          <p style={{ color: "#d1d5db", marginBottom: "30px" }}>
            The requested service page does not exist or has moved.
          </p>
          <Link to="/#services" className="btn-primary" style={{ display: "inline-flex" }}>
            <FaArrowLeft /> View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isSMM = currentKey === "smm";

  const handleConsultationClick = (e) => {
    e.preventDefault();
    window.location.href = "/#contact";
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("prefill-consultation"));
    }, 300);
  };

  return (
    <div className="service-detail-page">
      <Navbar />

      <div className="service-detail-content">
        {/* ==========================================
            BREADCRUMB & BACK BUTTON
        ========================================== */}
        <section className="service-breadcrumb-bar">
          <div className="container breadcrumb-container">
            <div className="breadcrumb-links">
              <Link to="/#hero">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link to="/#services">Services</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{service.title}</span>
            </div>

            <Link to="/#services" className="back-to-services-btn">
              <FaArrowLeft /> Back to All Services
            </Link>
          </div>
        </section>

        {/* ==========================================
            HERO SECTION
        ========================================== */}
        <section className="service-hero-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="service-hero-badge">
                {service.badge}
              </span>

              <h1 className="service-hero-title">
                {service.title}: <span className="highlight">{service.heroTitle}</span>
              </h1>

              <p className="service-hero-tagline">{service.tagline}</p>

              <p className="service-hero-desc">{service.description}</p>

              <div className="service-hero-actions">
                <button
                  onClick={handleConsultationClick}
                  className="btn-primary"
                  style={{ cursor: "pointer", border: "none" }}
                >
                  <FaRocket /> Claim Free Strategy Consultation
                </button>

                <a
                  href={personalData.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaCalendarAlt /> Book a 30-Min Call
                </a>

                <a
                  href={`https://wa.me/${personalData.phoneClean}?text=Hi%20Riajul,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ color: "#25d366", borderColor: "rgba(37, 211, 102, 0.4)" }}
                >
                  <FaWhatsapp /> WhatsApp Direct
                </a>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            {service.stats && (
              <motion.div
                className="service-stats-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.stats.map((stat) => (
                  <div key={stat.label} className="service-stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* ==========================================
            TWO PILLARS: DUAL ENGINE ARCHITECTURE
        ========================================== */}
        {service.twoPillars && (
          <section className="two-pillars-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">{service.twoPillars.tag || "The Complete Ecosystem"}</span>
                <h2>{service.twoPillars.headline || "The Complete Dual Growth Engine"}</h2>
                <p>
                  {service.twoPillars.description ||
                    "High-converting brands do not rely solely on ads, nor do they wait endlessly for organic reach. Here is how both engines synchronize to build compounding audience loyalty and scalable revenue."}
                </p>
              </motion.div>

              <div className="pillars-grid">
                {/* Pillar 01 */}
                <motion.div
                  className="pillar-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="pillar-badge">
                    {service.twoPillars.organic.title?.includes("Pillar")
                      ? service.twoPillars.organic.title
                      : "Pillar 01 • Organic Growth"}
                  </span>
                  <div className="pillar-header">
                    <h3>{service.twoPillars.organic.title}</h3>
                    <p>{service.twoPillars.organic.subtitle}</p>
                  </div>
                  <ul className="pillar-list">
                    {service.twoPillars.organic.points.map((pt, i) => (
                      <li key={i}>
                        <FaCheck className="pillar-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Pillar 02 */}
                <motion.div
                  className="pillar-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="pillar-badge">
                    {service.twoPillars.paid.title?.includes("Pillar")
                      ? service.twoPillars.paid.title
                      : "Pillar 02 • Paid & Reputation"}
                  </span>
                  <div className="pillar-header">
                    <h3>{service.twoPillars.paid.title}</h3>
                    <p>{service.twoPillars.paid.subtitle}</p>
                  </div>
                  <ul className="pillar-list">
                    {service.twoPillars.paid.points.map((pt, i) => (
                      <li key={i}>
                        <FaCheck className="pillar-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Compounding Synergy Banner */}
              <motion.div
                className="synergy-banner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="synergy-icon">
                  <FaShareAlt />
                </div>
                <div className="synergy-content">
                  <h4>{isSMM ? "The Organic + Paid Synergy Advantage" : "The Maps + 5-Star Reputation Flywheel"}</h4>
                  <p>
                    {isSMM
                      ? "Organic content acts as our rapid testing ground to uncover high-resonance angles, hooks, and content pillars without ad spend. Once an angle proves its engagement organically, we immediately inject it into our Meta Ads engine to scale qualified leads and sales with maximum ROAS and lower customer acquisition costs (CAC)."
                      : "Higher Google Maps rankings generate more high-ticket local customer interactions. Automated review funnels convert those happy customers into authentic 5-star reviews on Google and regional directories. As review velocity and positive sentiment surge, Google's algorithm rewards your business with wider geo-radius visibility across surrounding suburbs and commercial districts, outranking competitors permanently."}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ==========================================
            FULL CAPABILITIES GRID
        ========================================== */}
        <section className="capabilities-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag">Capabilities</span>
              <h2>Detailed Scope of Work & Capabilities</h2>
              <p>
                From strategy formulation to creative execution and cross-platform analytics,
                every component is handled with data-driven precision.
              </p>
            </motion.div>

            <div className="capabilities-grid">
              {service.capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="capability-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <div className="capability-icon-wrap">{cap.icon}</div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <div className="capability-tags">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="capability-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            REAL CONFIRMED CLIENT CASE STUDIES
        ========================================== */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <section className="case-studies-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Proven Results</span>
                <h2>Real Campaign Metrics & Case Studies</h2>
                <p>
                  Verified campaign performance figures across e-commerce, lead generation,
                  and brand awareness projects.
                </p>
              </motion.div>

              <div className="case-studies-grid">
                {service.caseStudies.map((cs, idx) => (
                  <motion.div
                    key={cs.client}
                    className="case-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  >
                    <div className="case-card-header">
                      <span className="case-client-badge">{cs.category}</span>
                      <h3>{cs.client}</h3>
                      <div className="case-platforms">
                        {cs.platforms.map((p) => (
                          <span key={p} className="platform-pill">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="case-metrics-grid">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="metric-item">
                          <div className="metric-val">{m.value}</div>
                          <div className="metric-lbl">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <p>{cs.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            SAMPLE CONTENT CALENDAR WORKFLOW (FOR SMM)
        ========================================== */}
        {isSMM && (
          <section className="calendar-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Content Architecture</span>
                <h2>Monthly Content Calendar & Cadence Preview</h2>
                <p>
                  Every piece of content is engineered with a specific psychological hook,
                  content pillar, and commercial objective. Here is a sample weekly rhythm:
                </p>
              </motion.div>

              <div className="calendar-preview-card">
                <div className="calendar-days-grid">
                  <div className="calendar-day-col">
                    <div className="day-header">
                      <span className="day-name">Monday</span>
                      <span className="day-badge">Carousel</span>
                    </div>
                    <span className="day-pillar">Authority & Education</span>
                    <div className="day-title">"5 Costly Meta Ads Mistakes Burning Your Budget"</div>
                    <p className="day-goal">Goal: High saves, shares, and establishing industry authority.</p>
                  </div>

                  <div className="calendar-day-col">
                    <div className="day-header">
                      <span className="day-name">Wednesday</span>
                      <span className="day-badge">Static / Proof</span>
                    </div>
                    <span className="day-pillar">Social Proof & Results</span>
                    <div className="day-title">"How We Achieved $0.05 Per Lead for ZR Fashion"</div>
                    <p className="day-goal">Goal: Client case study breakdown driving trust & DM inquiries.</p>
                  </div>

                  <div className="calendar-day-col">
                    <div className="day-header">
                      <span className="day-name">Friday</span>
                      <span className="day-badge">Reel / Video</span>
                    </div>
                    <span className="day-pillar">Relatable & Viral Reach</span>
                    <div className="day-title">"3-Second Hook Formulas Top Creators Use"</div>
                    <p className="day-goal">Goal: Algorithm reach, new follower discovery, and engagement.</p>
                  </div>

                  <div className="calendar-day-col">
                    <div className="day-header">
                      <span className="day-name">Sunday</span>
                      <span className="day-badge">Story + CTA</span>
                    </div>
                    <span className="day-pillar">Direct Offer / Conversion</span>
                    <div className="day-title">"Exclusive Audit Week: Booking 3 Strategy Slots"</div>
                    <p className="day-goal">Goal: Direct conversion to WhatsApp or Calendly booking call.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            4-STEP EXECUTION PROCESS
        ========================================== */}
        {service.process && (
          <section className="process-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">How It Works</span>
                <h2>A Structured, Data-Driven Execution Framework</h2>
                <p>
                  From onboarding to continuous optimization, this transparent 4-stage process
                  ensures consistent momentum and measurable ROI.
                </p>
              </motion.div>

              <div className="process-grid">
                {service.process.map((step) => (
                  <motion.div
                    key={step.step}
                    className="process-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="process-step-num">{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            DELIVERABLES SECTION
        ========================================== */}
        {service.deliverables && (
          <section className="deliverables-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Deliverables</span>
                <h2>What You Receive Every Month</h2>
                <p>
                  Clear, tangible assets and reports designed to keep your marketing engine
                  running seamlessly with zero friction.
                </p>
              </motion.div>

              <div className="deliverables-grid">
                {service.deliverables.map((item) => (
                  <motion.div
                    key={item.title}
                    className="deliverable-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaCheck className="deliverable-icon" />
                    <div className="deliverable-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            TOOLS & TECH STACK
        ========================================== */}
        {service.tools && (
          <section className="tools-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Tech Stack</span>
                <h2>Tools & Platforms I Specialize In</h2>
                <p>
                  Leveraging modern industry-standard platforms for campaign management,
                  creative production, attribution, and reporting.
                </p>
              </motion.div>

              <div className="tools-grid">
                {service.tools.map((t) => (
                  <div key={t.name} className="tool-chip">
                    <span className="tool-name">{t.name}</span>
                    <span className="tool-category">• {t.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            FAQ SECTION
        ========================================== */}
        {service.faqs && (
          <section className="faq-section">
            <div className="container">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Questions</span>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about collaboration, workflow, tracking, and campaign scaling.</p>
              </motion.div>

              <div className="faq-list">
                {service.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={faq.q}
                      className={`faq-item ${isOpen ? "active" : ""}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      >
                        <span>{faq.q}</span>
                        <span className="faq-toggle-icon">
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="faq-answer">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            CONVERSION CTA SECTION
        ========================================== */}
        <section className="service-cta-section">
          <div className="container">
            <motion.div
              className="service-cta-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Ready to Elevate Your {service.title}?</h2>
              <p>
                Whether you need a dedicated Social Media Specialist to scale your organic presence
                or a Performance Marketer to optimize high-converting Meta Ads, let's discuss your targets.
              </p>

              <div className="service-cta-buttons">
                <button
                  onClick={handleConsultationClick}
                  className="btn-primary"
                  style={{ cursor: "pointer", border: "none" }}
                >
                  <FaRocket /> Claim Free Strategy Consultation →
                </button>

                <a
                  href={personalData.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaCalendarAlt /> Book a 30-Min Call
                </a>

                <a
                  href={`https://wa.me/${personalData.phoneClean}?text=Hi%20Riajul,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ color: "#25d366", borderColor: "rgba(37, 211, 102, 0.4)" }}
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>

              <div className="cta-direct-info">
                <span>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </span>
                <span>
                  <strong>Call & WhatsApp:</strong>{" "}
                  <a href={`https://wa.me/${personalData.phoneClean}`}>
                    {personalData.phone}
                  </a>
                </span>
                <span>
                  <strong>Location:</strong> {personalData.location}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            OTHER SERVICES NAVIGATION STRIP
        ========================================== */}
        <section className="other-services-strip">
          <div className="container">
            <h4>Explore Other Specializations</h4>
            <div className="other-services-nav">
              {serviceNavList.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className={`other-service-pill ${item.slug === currentKey ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ServiceDetail;

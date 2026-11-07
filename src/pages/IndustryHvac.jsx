import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HvacInquiryForm from "../components/hvac/HvacInquiryForm";
import personalData from "../data/personalData";
import useSeo, { SITE_URL } from "../hooks/useSeo";
import {
  hvacMeta,
  hvacHero,
  hvacSummary,
  hvacCapabilities,
  hvacGoogleAds,
  hvacMetaAds,
  hvacTracking,
  hvacCro,
  hvacProcess,
  hvacDeliverables,
  hvacMetrics,
  hvacAbout,
  hvacFaqs,
  hvacRelatedLinks,
} from "../data/industryHvacData";

import {
  FaCalendarAlt,
  FaWhatsapp,
  FaArrowLeft,
  FaPlus,
  FaMinus,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
  FaQuestionCircle,
} from "react-icons/fa";

const CANONICAL = `${SITE_URL}${hvacMeta.path}`;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing for Residential HVAC Contractors",
  serviceType: "Performance marketing for residential HVAC contractors",
  description: hvacMeta.description,
  url: CANONICAL,
  mainEntityOfPage: { "@id": CANONICAL },
  dateModified: hvacMeta.lastUpdatedISO,
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Residential HVAC contractors",
  },
  provider: {
    "@type": "Person",
    name: personalData.name,
    jobTitle: "Performance Marketing Specialist",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Residential HVAC Marketing",
      item: CANONICAL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hvacFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const scopeIcon = {
  included: <FaCheck />,
  needs: <FaExclamationTriangle />,
  unverifiable: <FaQuestionCircle />,
};

function IndustryHvac() {
  const [openFaq, setOpenFaq] = useState(0);

  useSeo({
    title: hvacMeta.title,
    description: hvacMeta.description,
    canonical: CANONICAL,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = `https://wa.me/${personalData.phoneClean}?text=${encodeURIComponent(
    "Hi Riajul, I run a residential HVAC company and I would like to discuss paid ads and tracking."
  )}`;

  return (
    <div className="service-detail-page industry-page">
      <Navbar />

      <main id="main-content" className="service-detail-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* ==========================================
            BREADCRUMB
        ========================================== */}
        <section className="service-breadcrumb-bar">
          <div className="container breadcrumb-container">
            <div className="breadcrumb-links">
              <Link to="/#hero">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Residential HVAC Marketing</span>
            </div>

            <Link to="/#services" className="back-to-services-btn">
              <FaArrowLeft /> Back to Services
            </Link>
          </div>
        </section>

        {/* ==========================================
            HERO
        ========================================== */}
        <section className="service-hero-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="service-hero-badge">{hvacHero.badge}</span>

              <h1 className="service-hero-title">
                Performance Marketing for Residential{" "}
                <span className="highlight">HVAC Contractors</span>
              </h1>

              <p className="service-hero-tagline">{hvacHero.tagline}</p>

              <div className="industry-hero-intro">
                {hvacHero.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="service-hero-actions">
                <a
                  href={personalData.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaCalendarAlt /> Book a 30-Min Call
                </a>

                <a href="#hvac-inquiry" className="btn-secondary">
                  <FaPaperPlane /> Send an HVAC Inquiry
                </a>
              </div>

              <p className="industry-tertiary">
                Prefer WhatsApp?{" "}
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <FaWhatsapp /> Message on WhatsApp
                </a>
              </p>

              <div className="service-stats-grid">
                {hvacHero.stats.map((stat) => (
                  <div className="service-stat-card" key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            WHAT THIS SERVICE COVERS
        ========================================== */}
        <section className="industry-section">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Scope</span>
              <h2>{hvacSummary.heading}</h2>

              {hvacSummary.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <div className="industry-fit-grid">
              <motion.div className="industry-fit-card" {...fadeUp}>
                <h3>{hvacSummary.audienceHeading}</h3>
                <ul>
                  {hvacSummary.audience.map((item) => (
                    <li key={item}>
                      <FaCheck /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="industry-fit-card is-muted" {...fadeUp}>
                <h3>{hvacSummary.notForHeading}</h3>
                <p>{hvacSummary.notFor}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            CAPABILITIES
        ========================================== */}
        <section className="capabilities-section" id="capabilities">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Services Provided</span>
              <h2>What I Build and Manage</h2>
              <p>
                Six workstreams that make up the service. Tracking and landing pages are part of
                the scope, not an afterthought.
              </p>
            </motion.div>

            <div className="capabilities-grid">
              {hvacCapabilities.map((item) => (
                <motion.div className="capability-card" key={item.title} {...fadeUp}>
                  <div className="capability-icon-wrap">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="capability-tags">
                    {item.tags.map((tag) => (
                      <span className="capability-tag" key={tag}>
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
            GOOGLE ADS
        ========================================== */}
        <section className="industry-section industry-section-alt">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Google Ads</span>
              <h2>{hvacGoogleAds.heading}</h2>
              <p>{hvacGoogleAds.intro}</p>
            </motion.div>

            <div className="industry-points">
              {hvacGoogleAds.points.map((point) => (
                <motion.div className="industry-point" key={point.title} {...fadeUp}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            META ADS
        ========================================== */}
        <section className="industry-section">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Meta Ads</span>
              <h2>{hvacMetaAds.heading}</h2>
              <p>{hvacMetaAds.intro}</p>
            </motion.div>

            <div className="industry-points">
              {hvacMetaAds.points.map((point) => (
                <motion.div className="industry-point" key={point.title} {...fadeUp}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            TRACKING / MEASUREMENT SCOPE
        ========================================== */}
        <section className="industry-section industry-section-alt" id="tracking">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Tracking &amp; Measurement</span>
              <h2>{hvacTracking.heading}</h2>
              <p>{hvacTracking.intro}</p>
            </motion.div>

            <div className="scope-grid">
              {hvacTracking.columns.map((column) => (
                <motion.div
                  className={`scope-card is-${column.variant}`}
                  key={column.heading}
                  {...fadeUp}
                >
                  <div className="scope-card-header">
                    <span className="scope-card-icon">{scopeIcon[column.variant]}</span>
                    <h3>{column.heading}</h3>
                  </div>
                  <p className="scope-card-note">{column.note}</p>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div className="industry-callout" {...fadeUp}>
              <p>{hvacTracking.disclaimer}</p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            LANDING PAGES / CRO
        ========================================== */}
        <section className="industry-section">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Landing Pages &amp; CRO</span>
              <h2>{hvacCro.heading}</h2>
              <p>{hvacCro.intro}</p>
            </motion.div>

            <div className="industry-points">
              {hvacCro.points.map((point) => (
                <motion.div className="industry-point" key={point.title} {...fadeUp}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            PROCESS
        ========================================== */}
        <section className="process-section" id="process">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Process</span>
              <h2>How the Work Runs</h2>
              <p>
                Four stages, in this order. Measurement comes before spend, which is why the first
                two weeks are usually quiet on the reporting side.
              </p>
            </motion.div>

            <div className="process-grid">
              {hvacProcess.map((step) => (
                <motion.div className="process-card" key={step.step} {...fadeUp}>
                  <span className="process-step-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            DELIVERABLES
        ========================================== */}
        <section className="deliverables-section" id="deliverables">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Deliverables</span>
              <h2>What You Receive</h2>
              <p>
                Work products, not activity reports. Every item below is something you keep at the
                end of the month.
              </p>
            </motion.div>

            <div className="deliverables-grid">
              {hvacDeliverables.map((item) => (
                <motion.div className="deliverable-card" key={item.title} {...fadeUp}>
                  <div className="deliverable-icon">
                    <FaCheck />
                  </div>
                  <div className="deliverable-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            HOW PERFORMANCE IS MEASURED
        ========================================== */}
        <section className="industry-section industry-section-alt" id="measurement">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Reporting</span>
              <h2>{hvacMetrics.heading}</h2>
              <p>{hvacMetrics.intro}</p>
            </motion.div>

            <div className="metric-scope-grid">
              <motion.div className="metric-scope-card" {...fadeUp}>
                <h3>Reported every month</h3>
                <ul>
                  {hvacMetrics.measurable.map((item) => (
                    <li key={item}>
                      <FaCheck /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="metric-scope-card is-limited" {...fadeUp}>
                <h3>Where the numbers stop</h3>
                <p>{hvacMetrics.notMeasurable}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            WHO YOU WOULD WORK WITH
        ========================================== */}
        <section className="industry-section" id="about">
          <div className="container">
            <motion.div className="industry-about" {...fadeUp}>
              <span className="section-tag">Experience</span>
              <h2>{hvacAbout.headingWho}</h2>

              {hvacAbout.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="industry-about-links">
                {hvacAbout.links.map((link) => (
                  <Link to={link.to} key={link.to} className="other-service-pill">
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="industry-meta">Last updated: {hvacMeta.lastUpdated}</p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            HVAC INQUIRY FORM
        ========================================== */}
        <section className="industry-section industry-section-alt" id="hvac-inquiry">
          <div className="container">
            <div className="hvac-inquiry-layout">
              <motion.div className="hvac-inquiry-copy" {...fadeUp}>
                <span className="section-tag">Secondary Option</span>
                <h2>Send an HVAC Inquiry</h2>
                <p>
                  Use this form if you would rather get a written reply first. Tell me the service
                  area and what you sell, and I will reply with how I would approach the account.
                </p>

                <div className="hvac-inquiry-cta">
                  <p className="hvac-inquiry-cta-label">
                    Booking a call is faster. It is also the best way to see whether this is a fit
                    before either of us spends time on proposals.
                  </p>
                  <a
                    href={personalData.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <FaCalendarAlt /> Book a 30-Min Call
                  </a>
                </div>

                <ul className="hvac-inquiry-points">
                  <li>
                    <FaCheck /> Replies within one business day
                  </li>
                  <li>
                    <FaCheck /> No sales sequence, no newsletter
                  </li>
                  <li>
                    <FaCheck /> Calendly shows open times in your timezone
                  </li>
                </ul>
              </motion.div>

              <motion.div className="hvac-inquiry-form-wrap" {...fadeUp}>
                <HvacInquiryForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            FAQ
        ========================================== */}
        <section className="faq-section" id="faq">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Questions</span>
              <h2>HVAC Marketing Questions</h2>
              <p>
                The questions contractors ask before starting, including the ones about what this
                service does not include.
              </p>
            </motion.div>

            <div className="faq-list">
              {hvacFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const btnId = `hvac-faq-btn-${index}`;
                const panelId = `hvac-faq-panel-${index}`;

                return (
                  <div className={`faq-item ${isOpen ? "active" : ""}`} key={faq.q}>
                    <button
                      id={btnId}
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    {/* Answers stay in the DOM at all times so the full text is
                        available to search engines, answer engines, and screen
                        readers even while the panel is collapsed. */}
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            RELATED SERVICES
        ========================================== */}
        <section className="other-services-strip">
          <div className="container">
            <h2 className="industry-related-heading">Related Services</h2>
            <div className="other-services-nav">
              {hvacRelatedLinks.map((link) => (
                <Link to={link.to} key={link.to} className="other-service-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            FINAL CTA
        ========================================== */}
        <section className="service-cta-section">
          <div className="container">
            <motion.div className="service-cta-card" {...fadeUp}>
              <h2>Start With the Accounts You Already Have</h2>
              <p>
                Thirty minutes on a call to look at what is measurable today, what is missing, and
                what I would fix first. If your account is fine as it is, I will say that too.
              </p>

              <div className="service-cta-buttons">
                <a
                  href={personalData.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaCalendarAlt /> Book a 30-Min Call
                </a>

                <a href="#hvac-inquiry" className="btn-secondary">
                  <FaPaperPlane /> Send an HVAC Inquiry
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary industry-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <div className="cta-direct-info">
                <span>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </span>
                <span>
                  <strong>WhatsApp:</strong>{" "}
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    {personalData.whatsapp}
                  </a>
                </span>
                <span>
                  <strong>Location:</strong> {personalData.location}
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default IndustryHvac;

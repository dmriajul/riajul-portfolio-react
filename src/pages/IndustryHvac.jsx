import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HvacInquiryForm from "../components/hvac/HvacInquiryForm";
import {
  SystemFlow,
  ChannelWorkflow,
  TrackingArchitecture,
  OptimizationCycle,
  ReportPreview,
} from "../components/hvac/HvacVisuals";
import personalData from "../data/personalData";
import useSeo, { SITE_URL } from "../hooks/useSeo";
import {
  hvacMeta,
  hvacHero,
  hvacHeroFlow,
  hvacSummary,
  hvacChallenges,
  hvacApproach,
  hvacCapabilities,
  hvacGoogleAds,
  hvacMetaAds,
  hvacTracking,
  hvacCro,
  hvacInvestment,
  hvacProof,
  hvacWhyMe,
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

/* One playbook block per channel: heading, intro, and the existing points. */
function Playbook({ index, heading, intro, points }) {
  return (
    <motion.div className="hvac-playbook" {...fadeUp}>
      <div className="hvac-playbook-head">
        <span className="hvac-playbook-index" aria-hidden="true">
          {index}
        </span>
        <div>
          <h3>{heading}</h3>
          <p>{intro}</p>
        </div>
      </div>

      <div className="industry-points hvac-playbook-points">
        {points.map((point) => (
          <div className="industry-point" key={point.title}>
            <h4>{point.title}</h4>
            <p>{point.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

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
            1. HERO AND VALUE PROPOSITION
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

              <SystemFlow flow={hvacHeroFlow} />
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            2. THE PROBLEM: WHAT USUALLY BREAKS
        ========================================== */}
        <section className="industry-section industry-section-alt" id="challenges">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">The problem</span>
              <h2>{hvacChallenges.heading}</h2>
              <p>{hvacChallenges.intro}</p>
            </motion.div>

            <div className="hvac-challenge-grid">
              {hvacChallenges.items.map((item, index) => (
                <motion.article className="hvac-challenge-card" key={item.title} {...fadeUp}>
                  <span className="hvac-challenge-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <p className="hvac-challenge-signal">
                    <span>Usually looks like</span> {item.signal}
                  </p>
                </motion.article>
              ))}
            </div>

            <p className="hvac-fit-intro">{hvacSummary.fitIntro}</p>

            <div className="industry-fit-grid hvac-fit-grid">
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
            3. THE APPROACH: PROBLEM TO RESPONSE
        ========================================== */}
        <section className="industry-section" id="approach">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">The approach</span>
              <h2>{hvacApproach.heading}</h2>
              <p>{hvacApproach.intro}</p>
            </motion.div>

            <div className="hvac-approach-map">
              {hvacApproach.rows.map((row) => (
                <motion.div className="hvac-approach-row" key={row.problem} {...fadeUp}>
                  <div className="hvac-approach-side is-problem">
                    <span className="hvac-approach-label">The problem</span>
                    <h3>{row.problem}</h3>
                  </div>

                  <span className="hvac-approach-arrow" aria-hidden="true" />

                  <div className="hvac-approach-side is-response">
                    <span className="hvac-approach-stage">{row.stage}</span>
                    <p>{row.response}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="hvac-principles" {...fadeUp}>
              <h3>{hvacApproach.principleHeading}</h3>
              <div className="hvac-principles-grid">
                {hvacApproach.principles.map((principle, index) => (
                  <div className="hvac-principle" key={principle.title}>
                    <span className="hvac-principle-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4>{principle.title}</h4>
                    <p>{principle.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <ChannelWorkflow />
          </div>
        </section>

        {/* ==========================================
            4. SERVICES AND CAPABILITIES
        ========================================== */}
        <section className="capabilities-section" id="capabilities">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Services provided</span>
              <h2>What I Build and Manage</h2>
              <p>
                Six workstreams that make up the service. Tracking and landing pages are part of the
                scope, not an afterthought. The sections below show how each channel is run, what the
                investment covers, and what it does not.
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
            5. CHANNEL PLAYBOOKS
        ========================================== */}
        <section className="industry-section industry-section-alt" id="playbooks">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Channel playbooks</span>
              <h2>How each channel is actually run</h2>
              <p>
                The detail behind the six workstreams, channel by channel. Everything here is inside
                the service; the investment section sets out what sits outside it.
              </p>
            </motion.div>

            <Playbook
              index="01"
              heading={hvacGoogleAds.heading}
              intro={hvacGoogleAds.intro}
              points={hvacGoogleAds.points}
            />

            <Playbook
              index="02"
              heading={hvacMetaAds.heading}
              intro={hvacMetaAds.intro}
              points={hvacMetaAds.points}
            />

            <Playbook
              index="03"
              heading={hvacCro.heading}
              intro={hvacCro.intro}
              points={hvacCro.points}
            />

            <motion.div className="industry-callout" {...fadeUp}>
              <p>
                What this service covers, in one line: paid search and paid social built for
                residential HVAC, with the tracking and landing pages that make the results
                accountable. Everything in the three playbooks above is inside the service. The
                investment section below shows what is not.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            6. TRACKING AND MEASUREMENT
        ========================================== */}
        <section className="industry-section" id="tracking">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Tracking &amp; measurement</span>
              <h2>{hvacTracking.heading}</h2>
              <p>{hvacTracking.intro}</p>
            </motion.div>

            <TrackingArchitecture />

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
            7. WHAT THE INVESTMENT COVERS
        ========================================== */}
        <section className="industry-section industry-section-alt" id="investment">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Investment</span>
              <h2>{hvacInvestment.heading}</h2>
              <p>{hvacInvestment.intro}</p>
            </motion.div>

            <div className="hvac-investment-grid">
              {hvacInvestment.includes.map((item, index) => (
                <motion.div className="hvac-investment-item" key={item.title} {...fadeUp}>
                  <span className="hvac-investment-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="hvac-exclusions" {...fadeUp}>
              <h3>{hvacInvestment.notIncludedHeading}</h3>
              <div className="hvac-exclusions-grid">
                {hvacInvestment.notIncluded.map((item) => (
                  <div className="hvac-exclusion" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="hvac-guarantee" {...fadeUp}>
              <h3>{hvacInvestment.guaranteeHeading}</h3>
              <p>{hvacInvestment.guarantee}</p>
            </motion.div>

            <motion.div className="hvac-factors" {...fadeUp}>
              <h3>{hvacInvestment.factorsHeading}</h3>
              <ul>
                {hvacInvestment.factors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
              <p className="hvac-pricing-note">{hvacInvestment.pricingNote}</p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            8. DOCUMENTED EXPERIENCE AND PROOF
        ========================================== */}
        <section className="industry-section" id="proof">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Documented experience</span>
              <h2>{hvacProof.heading}</h2>
              <p>{hvacProof.intro}</p>
            </motion.div>

            <div className="hvac-proof-label">
              <span>{hvacProof.label}</span>
            </div>

            <div className="hvac-proof-grid">
              {hvacProof.studies.map((study) => (
                <motion.article className="hvac-proof-card" key={study.client} {...fadeUp}>
                  <div className="hvac-proof-head">
                    <h3>{study.client}</h3>
                    <span className="hvac-proof-category">{study.category}</span>
                  </div>

                  <dl className="hvac-proof-figures">
                    {study.figures.map((figure) => (
                      <div key={figure.label}>
                        <dt>{figure.label}</dt>
                        <dd>{figure.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="hvac-proof-note">{study.note}</p>

                  <Link to={study.to} className="hvac-proof-link">
                    {study.linkLabel}
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div className="industry-callout" {...fadeUp}>
              <p>{hvacProof.disclaimer}</p>
            </motion.div>

            <motion.div className="hvac-limits" {...fadeUp}>
              <h3>{hvacProof.limitsHeading}</h3>
              <ul>
                {hvacProof.limits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            9. WHY WORK WITH ME
        ========================================== */}
        <section className="industry-section industry-section-alt" id="why-me">
          <div className="container">
            <motion.div className="industry-summary" {...fadeUp}>
              <span className="section-tag">Why me</span>
              <h2>{hvacWhyMe.heading}</h2>
              <p>{hvacWhyMe.intro}</p>
            </motion.div>

            <div className="hvac-why-grid">
              {hvacWhyMe.reasons.map((reason) => (
                <motion.article className="hvac-why-card" key={reason.title} {...fadeUp}>
                  <span className="hvac-why-check" aria-hidden="true">
                    <FaCheck />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div className="hvac-credentials" {...fadeUp}>
              <span className="hvac-credentials-label">Certifications</span>
              <ul>
                {hvacWhyMe.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
              <p>{hvacWhyMe.credentialsNote}</p>
            </motion.div>

            <motion.div className="industry-callout hvac-positioning" {...fadeUp}>
              <p>{hvacWhyMe.positioning}</p>
            </motion.div>

            <motion.div className="industry-about" id="about" {...fadeUp}>
              <h3 className="hvac-about-heading">{hvacAbout.headingWho}</h3>

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
            10. PROCESS AND DELIVERABLES
        ========================================== */}
        <section className="process-section" id="process">
          <div className="container">
            <motion.div className="section-header" {...fadeUp}>
              <span className="section-tag">Process</span>
              <h2>What Happens After You Get In Touch</h2>
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

            <OptimizationCycle />
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
            REPORTING: HOW PERFORMANCE IS MEASURED
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

            <ReportPreview />
          </div>
        </section>

        {/* ==========================================
            FAQ AND LIMITATIONS
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
            SECONDARY CTA: HVAC INQUIRY FORM
        ========================================== */}
        <section className="industry-section industry-section-alt" id="hvac-inquiry">
          <div className="container">
            <div className="hvac-inquiry-layout">
              <motion.div className="hvac-inquiry-copy" {...fadeUp}>
                <span className="section-tag">Secondary option</span>
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
            PRIMARY CTA
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

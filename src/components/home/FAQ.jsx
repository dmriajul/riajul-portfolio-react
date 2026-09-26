import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaLightbulb, FaCheckCircle } from "react-icons/fa";

const homeFaqData = [
  {
    q: "How do you ensure positive ROI and avoid burning my marketing budget?",
    a: "Every dollar spent is guarded by data. Before scaling any budget, we run controlled low-budget creative and audience split-tests to identify winning hooks, low CAC (Customer Acquisition Cost), and high ROAS. We also implement server-side tracking (Meta CAPI & GA4) to guarantee zero wasted spend on duplicate or unverified clicks.",
  },
  {
    q: "What is included in the Free 30-Min Strategy Consultation?",
    a: "A 100% complimentary, zero-pressure audit of your existing Meta Ads, Google Ads, or social media channels. I will review your targeting, creative fatigue, landing page drop-offs, and tracking leaks, delivering a clear 3-step action plan you can implement immediately.",
  },
  {
    q: "Do I need both Organic Social Media and Paid Meta Ads?",
    a: "Yes. Organic social builds brand credibility, trust, and community retention—without it, ad traffic often doesn't convert. Paid ads provide predictable reach, fast lead flow, and scalable revenue. Together, organic content tests your messaging for free, while paid campaigns scale your winners to ready-to-buy audiences.",
  },
  {
    q: "Can you help my business or clinic dominate Google Maps in Australia or the UAE?",
    a: "Yes. For practices and businesses in Australia (Sydney, Melbourne, Brisbane) and the UAE (Dubai, Abu Dhabi), I specialize in dominant Google Maps 3-Pack Local SEO and automated 5-star review acquisition (ORM). From Local Falcon geo-grid tracking to regional directory citations (TrueLocal, HiPages, 2GIS, Yello.ae), I turn local searches into booked phone calls and consultations. I also deliver the same Local SEO & reputation services for clients in North America and worldwide.",
  },
  {
    q: "How do you overcome iOS14/17 tracking loss and verify attribution?",
    a: "I deploy Meta Conversions API (CAPI) server-side tracking directly via Google Tag Manager (GTM) alongside Google Analytics 4 (GA4). This bypasses ad-blockers and browser cookie restrictions, achieving top-tier Event Match Quality (EMQ) and giving you transparent, verifiable data on every lead and purchase.",
  },
  {
    q: "Which international markets do you work with remotely?",
    a: "I partner remotely with clients across the USA, UK, Canada, Singapore, Australia, and the UAE. For North American and Singaporean brands, the core focus is high-ROAS Meta Ads, Google Ads, and full-funnel Social Media Management. For Australian and UAE clients, the primary focus is Local SEO (Maps 3-Pack) and Online Reputation (ORM), with full capability to scale paid ads whenever needed. Time zones are smoothly handled with flexible meeting slots, async WhatsApp/Loom updates, and live 24/7 Looker Studio dashboards.",
  },
  {
    q: "How quickly can we launch campaigns after onboarding?",
    a: "Upon completing our discovery session and receiving ad account / channel access, I complete the initial audit, audience research, and first 30-day content calendar or ad campaign structure within 4 to 7 business days.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleConsultationClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("prefill-consultation"));
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="faq-section-home" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Frequently Asked Questions</span>

          <h2>Questions About Working Together</h2>

          <p>
            Clear answers regarding campaign strategy, budget requirements,
            tracking accuracy, and how we achieve scalable results for your business.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="faq-container">
          <div className="faq-accordion-list">
            {homeFaqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const btnId = `faq-btn-${index}`;
              const answerId = `faq-answer-${index}`;
              return (
                <motion.div
                  key={faq.q}
                  className={`home-faq-card ${isOpen ? "active" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    id={btnId}
                    className="home-faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>{faq.q}</span>
                    <span className="home-faq-icon">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={btnId}
                        className="home-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Consultation Callout Box */}
          <motion.div
            className="faq-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="faq-cta-badge">
              <FaLightbulb /> Zero-Risk Consultation
            </div>

            <h3>Have a Specific Question About Your Accounts?</h3>

            <p>
              I offer a free 30-minute growth audit for businesses ready to scale.
              No generic sales pitches—just raw data, insights, and actionable fixes.
            </p>

            <ul className="faq-cta-checklist">
              <li>
                <FaCheckCircle /> Ad account & pixel tracking audit
              </li>
              <li>
                <FaCheckCircle /> Creative fatigue & hook breakdown
              </li>
              <li>
                <FaCheckCircle /> Custom 3-step growth action plan
              </li>
            </ul>

            <button
              onClick={handleConsultationClick}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Claim Free Strategy Consultation →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

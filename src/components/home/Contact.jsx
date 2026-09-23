import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGift,
  FaCheckCircle,
} from "react-icons/fa";

import personalData from "../../data/personalData";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isConsultation, setIsConsultation] = useState(false);
  const [subject, setSubject] = useState("");

  // Listen to external consultation triggers (e.g. from Hero, FAQ, or Service pages)
  useEffect(() => {
    const handleConsultationTrigger = () => {
      setIsConsultation(true);
      setSubject("Free Strategy Consultation Request (Audit & 3-Step Growth Plan)");
      const nameEl = document.getElementById("contact-name");
      if (nameEl) {
        nameEl.focus();
      }
    };

    window.addEventListener("prefill-consultation", handleConsultationTrigger);
    return () => {
      window.removeEventListener("prefill-consultation", handleConsultationTrigger);
    };
  }, []);

  const toggleConsultationMode = (mode) => {
    setIsConsultation(mode);
    if (mode) {
      setSubject("Free Strategy Consultation Request (Audit & 3-Step Growth Plan)");
    } else {
      setSubject("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("Sending message...");

    const formData = new FormData(event.target);

    // If consultation mode is active, append consultation tag
    if (isConsultation) {
      formData.set("subject", "🎯 FREE CONSULTATION: " + (subject || "Strategy Request"));
    }

    formData.append(
      "access_key",
      "cb93d925-55e6-4c5f-a580-094dffaf02cf"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setResult(
          isConsultation
            ? "✅ Consultation request sent! I will review your business & ad accounts within 24 hours."
            : "✅ Message sent successfully! I will reply to you shortly."
        );
        event.target.reset();
        setSubject("");
      } else {
        console.error(data);
        setResult(
          data.message || "❌ Failed to send message. Please reach out via WhatsApp or email directly."
        );
      }
    } catch (error) {
      console.error(error);
      setResult(
        "❌ Something went wrong. Please connect with me directly on WhatsApp (+880 1954 447017)."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            {isConsultation ? "Free Strategy Consultation" : "Get In Touch"}
          </span>

          <h2>
            {isConsultation
              ? "Claim Your Free 30-Min Strategy Consultation"
              : "Ready to Scale Your Conversions? Let's Talk."}
          </h2>

          <p>
            Whether you want a complete audit of your Meta & Google ad accounts,
            an end-to-end social media growth plan, or a custom marketing strategy,
            send a message below or reach out directly.
          </p>
        </motion.div>

        <div className="contact-container">
          {/* Contact Information (Unified Phone, WhatsApp & Business Email) */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Business Email — whole card clickable */}
            <a
              className="info-card"
              href={`mailto:${personalData.email}`}
              aria-label={`Email ${personalData.email}`}
            >
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Business Email</h3>
                <span>{personalData.email}</span>
              </div>
            </a>

            {/* Direct Call (Single Unified Number) — whole card clickable */}
            <a
              className="info-card"
              href={`tel:+${personalData.phoneClean}`}
              aria-label={`Call ${personalData.phone}`}
            >
              <FaPhoneAlt className="info-icon" />
              <div>
                <h3>Direct Phone</h3>
                <span>{personalData.phone}</span>
              </div>
            </a>

            {/* WhatsApp — whole card clickable */}
            <a
              className="info-card"
              href={`https://wa.me/${personalData.phoneClean}?text=Hi%20Riajul,%20I'm%20interested%20in%20your%20Performance%20Marketing%20and%20Social%20Media%20services.`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Chat on WhatsApp ${personalData.phone}`}
            >
              <FaWhatsapp className="info-icon" />
              <div>
                <h3>WhatsApp (Instant Response)</h3>
                <span>{personalData.phone}</span>
              </div>
            </a>

            {/* Location & Global Remote Availability — whole card clickable */}
            <a
              className="info-card"
              href="https://www.google.com/maps/search/?api=1&query=Khulna%2C%20Bangladesh"
              target="_blank"
              rel="noreferrer"
              aria-label={`Location: ${personalData.location}`}
            >
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location & Availability</h3>
                <span>{personalData.location}</span>
              </div>
            </a>

            {/* Official Website — whole card clickable */}
            <a
              className="info-card"
              href={personalData.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${personalData.website}`}
            >
              <FaGlobe className="info-icon" />
              <div>
                <h3>Official Domain</h3>
                <span>{personalData.website}</span>
              </div>
            </a>
          </motion.div>

          {/* Contact Form with Consultation Pre-fill Feature */}
          <motion.form
            className={`contact-form ${isConsultation ? "consultation-highlight" : ""}`}
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Consultation Mode Selector */}
            <div className="form-mode-tabs">
              <button
                type="button"
                className={`mode-tab ${isConsultation ? "active" : ""}`}
                onClick={() => toggleConsultationMode(true)}
              >
                <FaGift /> Free Strategy Consultation (Audit)
              </button>
              <button
                type="button"
                className={`mode-tab ${!isConsultation ? "active" : ""}`}
                onClick={() => toggleConsultationMode(false)}
              >
                General Inquiry
              </button>
            </div>

            {/* Banner when Consultation is Selected */}
            {isConsultation && (
              <div className="consultation-banner">
                <FaCheckCircle />
                <div>
                  <strong>Free 30-Min Strategy Consultation Active:</strong>
                  <p>
                    Includes ad account audit, tracking leakage check, and a 3-step growth plan.
                    Zero obligation.
                  </p>
                </div>
              </div>
            )}

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Full Name *"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Business Email *"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject / Project Focus *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder={
                isConsultation
                  ? "Tell me about your business, current monthly ad spend (if any), and your primary goal (e.g., more leads, higher ROAS, organic growth)..."
                  : "Tell me about your project, goals, or what challenges you're currently facing..."
              }
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: "100%", justifyContent: "center" }}
            >
              <FaPaperPlane />
              {loading
                ? "Sending..."
                : isConsultation
                ? "Submit Free Consultation Request →"
                : "Send Message →"}
            </button>

            {result && (
              <p
                style={{
                  marginTop: "16px",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "10px",
                  background: result.includes("✅")
                    ? "rgba(34, 197, 94, 0.15)"
                    : "rgba(239, 68, 68, 0.15)",
                  color: result.includes("✅") ? "#22c55e" : "#ef4444",
                  border: `1px solid ${result.includes("✅") ? "#22c55e" : "#ef4444"}`,
                }}
              >
                {result}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

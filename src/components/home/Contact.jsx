import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import personalData from "../../data/personalData";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("Sending message...");

    const formData = new FormData(event.target);

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

      console.log("Web3Forms Response:", data);

      if (response.ok && data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        console.error(data);
        setResult(
          data.message || "❌ Failed to send message."
        );
      }
    } catch (error) {
      console.error(error);

      setResult(
        "❌ Something went wrong. Please try again."
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            Contact
          </span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            Have a project in mind or need help with
            Meta Ads, Google Ads, SEO,
            Analytics, or Conversion Optimization?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-container">

          {/* Contact Information */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="info-card">
              <FaEnvelope className="info-icon" />

              <div>
                <h4>Email</h4>

                <a href={`mailto:${personalData.email}`}>
                  {personalData.email}
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="info-icon" />

              <div>
                <h4>Phone</h4>

                <a href={`tel:${personalData.phone}`}>
                  {personalData.phone}
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaWhatsapp className="info-icon" />

              <div>
                <h4>WhatsApp</h4>

                <a
                  href={`https://wa.me/${personalData.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {personalData.whatsapp}
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaGlobe className="info-icon" />

              <div>
                <h4>Website</h4>

                <a
                  href={personalData.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {personalData.website}
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />

              <div>
                <h4>Location</h4>

                <span>{personalData.location}</span>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p
                style={{
                  marginTop: "18px",
                  fontWeight: "600",
                  transition: "0.3s",
                  color:
                    result.includes("successfully")
                      ? "#22c55e"
                      : result.includes("Sending")
                      ? "#c9a84c"
                      : "#ef4444",
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
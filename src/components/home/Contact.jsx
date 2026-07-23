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
            Have a project in mind or need help with digital marketing,
            SEO, Google Ads, Meta Ads, or analytics? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="contact-container">

          {/* Left Side */}

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
                  href={`https://wa.me/${personalData.whatsapp.replace(
                    "+",
                    ""
                  )}`}
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

          {/* Right Side */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
            >
              <FaPaperPlane />

              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
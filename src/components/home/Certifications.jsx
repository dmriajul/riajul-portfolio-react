import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import certificationsData from "../../data/certificationsData";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
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
            Certifications & Credentials
          </span>

          <h2>
            Certified Competence Across Leading Marketing Platforms
          </h2>

          <p>
            Formally certified across Google, Meta, HubSpot, and SEMrush platforms,
            ensuring your campaigns are built with proven best practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="certifications-grid">
          {certificationsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="certification-logo">
                <img
                  src={item.logo}
                  alt={item.provider}
                />
              </div>

              <h3>
                {item.provider}
              </h3>

              <p>
                {item.description}
              </p>

              <ul className="certification-skills">
                {item.skills.map((skill) => (
                  <li key={skill}>
                    <FaCheckCircle />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

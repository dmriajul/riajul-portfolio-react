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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            Professional Learning
          </span>

          <h2>
            Certifications & Learning Journey
          </h2>

          <p>
            Continuously expanding my expertise through industry-recognized
            certifications, online courses, and hands-on experience in
            performance marketing, analytics, SEO, and digital growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="certifications-grid">

          {certificationsData.map((item, index) => (

            <motion.div
              key={item.id}
              className="certification-card"
              initial={{ opacity: 0, y: 40 }}
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
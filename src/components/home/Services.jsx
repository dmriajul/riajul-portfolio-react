import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

function Services() {
  return (
    <section className="services" id="services">
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
            Services
          </span>

          <h2>
            What I Can Help You With
          </h2>

          <p>
            I provide data-driven digital marketing solutions that help
            businesses increase traffic, generate quality leads, improve
            conversions, and achieve sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="service-btn"
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
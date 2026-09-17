import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Revenue Growth Services</span>

          <h2>Data-Driven Solutions Built to Scale Your Business</h2>

          <p>
            Every solution integrates precision audience targeting, psychological buyer-intent copy,
            systematic creative testing, and transparent GA4 server-side attribution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.featured ? "featured-service" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                {service.badge && (
                  <span className="service-badge">{service.badge}</span>
                )}
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              {/* CTA Link to Dedicated Service Detail Page */}
              <Link
                to={`/services/${service.slug}`}
                className="service-btn"
              >
                Explore Solution →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

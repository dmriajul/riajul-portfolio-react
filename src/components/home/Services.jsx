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

          <h2>Marketing Services Built Around Real Business Problems</h2>

          <p>
            Each service is structured the same way: the problem it solves, what I actually do
            about it, and the business outcome you can expect from the work.
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

                <div className="service-flow">
                  <div className="service-flow-row">
                    <span className="service-flow-label">Problem</span>
                    <p>{service.problem}</p>
                  </div>

                  <div className="service-flow-row">
                    <span className="service-flow-label">What I Do</span>
                    <p>{service.action}</p>
                  </div>

                  <div className="service-flow-row">
                    <span className="service-flow-label">Business Outcome</span>
                    <p>{service.outcome}</p>
                  </div>
                </div>
              </div>

              {/* CTA Link to Dedicated Service Detail Page */}
              <Link
                to={`/services/${service.slug}`}
                className="service-btn"
                aria-label={`Explore ${service.title} solution`}
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

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import testimonials from "../../data/testimonialsData";

function Testimonials() {
  return (
    <section
      className="testimonials"
      id="testimonials"
    >
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
            Client Testimonials
          </span>

          <h2>
            Trusted by Clients Across the United States & Bangladesh
          </h2>

          <p>
            I'm grateful to have worked with business owners,
            organizations, and brands across multiple industries.
            Here are a few words from clients who trusted me
            with digital marketing, Meta Ads, lead generation,
            and business growth projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              {/* Header */}

              <div className="testimonial-top">

                <div className="testimonial-avatar">
                  {item.initials}
                </div>

                <div className="testimonial-user">

                  <h3>
                    {item.name}
                  </h3>

                  <span>
                    {item.position}
                  </span>

                  <p>
                    {item.company} {item.country}
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="testimonial-rating">

                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              {/* Review */}

              <p className="testimonial-review">
                "{item.review}"
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import testimonials from "../../data/testimonialsData";

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          {item.initials}
        </div>

        <div className="testimonial-user">
          <h3>{item.name}</h3>
          <span>{item.position}</span>
          <small>
            {item.company} • {item.country}
          </small>
        </div>
      </div>

      <div className="testimonial-stars">
        {[...Array(item.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="testimonial-review">
        "{item.review}"
      </p>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = "32s" }) {
  return (
    <div className={`marquee-row ${reverse ? "row-reverse" : "row-forward"}`}>
      <div
        className={`marquee-content ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}
        style={{ animationDuration: speed }}
      >
        {items.map((item, index) => (
          <TestimonialCard key={`g1-${item.id}-${index}`} item={item} />
        ))}
      </div>
      <div
        className={`marquee-content ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}
        aria-hidden="true"
        style={{ animationDuration: speed }}
      >
        {items.map((item, index) => (
          <TestimonialCard key={`g2-${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const topRow = testimonials.slice(0, 4);
  // Blend items so bottom row is full and balanced
  const bottomRow = [...testimonials.slice(4), testimonials[0], testimonials[1]];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
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
            Endorsed by Founders & Business Owners Worldwide
          </h2>

          <p>
            Real feedback from business owners, agency leads, and founders
            I have partnered with across Australia, the UAE, the United States, Europe, and Bangladesh.
          </p>
        </motion.div>
      </div>

      {/* Full-width edge-to-edge continuous scrolling train marquee */}
      <div className="testimonials-marquee-wrapper">
        <MarqueeRow items={topRow} reverse={false} speed="32s" />
        <div className="marquee-gap"></div>
        <MarqueeRow items={bottomRow} reverse={true} speed="34s" />
      </div>
    </section>
  );
}

export default Testimonials;

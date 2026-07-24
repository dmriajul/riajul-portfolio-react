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
            {item.company} {item.country}
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

function MarqueeRow({

  items,
  reverse = false,

}) {

  const cards = [...items, ...items, ...items, ...items];

  return (

    <div
      className={`marquee-row ${
        reverse ? "reverse" : ""
      }`}
    >

      <div className="marquee-track">

        {cards.map((item, index) => (

          <TestimonialCard
            key={`${item.id}-${index}`}
            item={item}
          />

        ))}

      </div>

    </div>

  );

}

function Testimonials() {

  const topRow = testimonials.slice(0, 4);

  const bottomRow = testimonials.slice(4);

  return (

    <section
      id="testimonials"
      className="testimonials"
    >

      <div className="container">

        <motion.div

          className="section-header"

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: .6,
          }}

        >

          <span className="section-tag">

            Client Testimonials

          </span>

          <h2>

            Trusted By Clients Worldwide

          </h2>

          <p>

            Real feedback from business owners,
            founders and organizations I've worked
            with across the United States and
            Bangladesh.

          </p>

        </motion.div>

        <MarqueeRow

          items={topRow}

        />

        <div className="marquee-gap"></div>

        <MarqueeRow

          items={bottomRow}

          reverse

        />

      </div>

    </section>

  );

}

export default Testimonials;
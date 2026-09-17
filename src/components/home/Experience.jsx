import { motion } from "framer-motion";
import experienceData from "../../data/experienceData";

function Experience() {
  return (
    <section className="experience" id="experience">
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
            Work Experience
          </span>

          <h2>
            5+ Years of Hands-on Performance & Growth Marketing
          </h2>

          <p>
            A consistent history of launching, managing, and scaling high-impact marketing systems,
            delivering measurable ROAS, qualified leads, and organic search compounding.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Card */}
              <div className="timeline-card">
                <span className="timeline-duration">
                  {item.duration}
                </span>

                <h3>
                  {item.position}
                </h3>

                <h4>
                  {item.company}
                </h4>

                <span className="timeline-location">
                  📍 {item.location}
                </span>

                <p>
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="timeline-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="timeline-achievements">
                  {item.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="achievement-item"
                    >
                      ✓ {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

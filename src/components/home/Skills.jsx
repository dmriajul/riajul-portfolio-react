import { motion } from "framer-motion";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section className="skills" id="skills">
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
            Skills & Capabilities
          </span>

          <h2>
            Proven Skills Built for Predictable Business Growth
          </h2>

          <p>
            A balanced mix of technical tool mastery, analytical thinking,
            creative direction, and disciplined execution to drive measurable marketing results.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-category-badge">
                  {skill.category}
                </span>
              </div>

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.description}
              </p>

              <div className="skill-technologies">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

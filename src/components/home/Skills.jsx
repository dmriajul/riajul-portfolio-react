import { motion } from "framer-motion";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section className="skills" id="skills">
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
            Skills & Expertise
          </span>

          <h2>
            My Professional Skills
          </h2>

          <p>
            I specialize in performance marketing, paid advertising,
            SEO, analytics, conversion optimization, and modern AI-powered
            digital marketing solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
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
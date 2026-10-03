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
            Primary Focus, Backed by Supporting Capabilities
          </h2>

          <p>
            At the top of the list: the work I deliver day to day — social media management,
            Meta Ads, and Google Ads. Beneath it, the supporting capabilities that make those
            channels measurable: SEO, Local SEO &amp; ORM, GA4/GTM tracking, and CRO.
          </p>
        </motion.div>

        {/* Skills Groups: Primary Focus → Supporting Capabilities */}
        <div className="skills-groups">
          {skillsData.map((group) => (
            <div className="skills-group" key={group.tier}>
              <div className="skills-group-header">
                <h3 className="skills-group-title">{group.tier}</h3>
                <p className="skills-group-note">{group.note}</p>
              </div>

              <div
                className={`skills-grid ${
                  group.tier === "Primary Focus"
                    ? "skills-grid-primary"
                    : "skills-grid-supporting"
                }`}
              >
                {group.skills.map((skill, index) => (
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

                    <h4>
                      {skill.title}
                    </h4>

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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

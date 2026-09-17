import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCheck,
} from "react-icons/fa";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section className="projects" id="projects">
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
            Featured Projects
          </span>

          <h2>
            Proven Campaign Results & Projects
          </h2>

          <p>
            A selection of performance marketing, SEO, analytics,
            and website projects focused on measurable business growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                {project.featured && (
                  <span className="featured-badge">
                    Featured Case Study
                  </span>
                )}
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results with verified tick */}
                <div className="project-results">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="result-item"
                    >
                      <FaCheck style={{ color: "#c9a84c", marginRight: "6px" }} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      <FaGithub />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section className="projects" id="projects">
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
            Portfolio
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            A selection of digital marketing, SEO, analytics,
            and website projects focused on measurable business
            growth and performance.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <div className="projects-grid">

          {projectsData.map((project, index) => (

            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
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
                    Featured
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

                {/* Results */}

                <div className="project-results">

                  {project.results.map((result) => (

                    <div
                      key={result}
                      className="result-item"
                    >
                      ✓ {result}
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
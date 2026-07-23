import profile from "../../assets/profile.jpeg";
import personalData from "../../data/personalData";

import { FaDownload } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        {/* Left Side */}
        <div className="about-image">
          <img src={profile} alt={personalData.name} />
        </div>

        {/* Right Side */}
        <div className="about-content">
          <span className="section-tag">About Me</span>

          <h2>{personalData.title}</h2>

          <p>{personalData.about}</p>

          {/* Skills */}
          <div className="about-skills">
            {personalData.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a
              href={personalData.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>

            <a
              href={personalData.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FaCalendarAlt />
              <span>Book a Call</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {personalData.highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <h3>{item.number}</h3>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* Professional Information */}
          <div className="about-info">
            {personalData.contactInfo.map((item) => (
              <div className="info-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
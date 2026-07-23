import profile from "../../assets/profile.jpeg";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={profile} alt="Khandokar Riajul Islam" />
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          className="book-btn"
          href="https://calendly.com/khandokarriajulislam/30min"
          target="_blank"
          rel="noreferrer"
        >
          <FaCalendarAlt />
          Book a Call
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
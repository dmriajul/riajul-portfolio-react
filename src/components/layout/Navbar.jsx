import { useState, useEffect } from "react";
import profile from "../../assets/profile.jpeg";

import {
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="container">

        {/* Logo */}

        <a
          href="#hero"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={profile}
            alt="Khandokar Riajul Islam"
          />
        </a>

        {/* Desktop Navigation */}

        <ul className="nav-links">

          <li>
            <a href="#hero">
              Home
            </a>
          </li>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#services">
              Services
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}

        <a
          className="book-btn"
          href="https://calendly.com/khandokarriajulislam/30min"
          target="_blank"
          rel="noreferrer"
        >
          <FaCalendarAlt />
          <span>Book a Call</span>
        </a>

        {/* Hamburger */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <a
          href="#hero"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#experience"
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#testimonials"
          onClick={closeMenu}
        >
          Testimonials
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          className="mobile-book-btn"
          href="https://calendly.com/khandokarriajulislam/30min"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <FaCalendarAlt />
          Book a Call
        </a>

      </div>

    </nav>
  );
}

export default Navbar;
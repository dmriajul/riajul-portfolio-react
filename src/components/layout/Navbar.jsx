import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpeg";
import ThemeToggle from "../common/ThemeToggle";

import {
  FaCalendarAlt,
  FaBars,
  FaTimes,
  FaRocket,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (sectionId, e) => {
    if (e) e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleFreeConsultation = (e) => {
    if (e) e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.dispatchEvent(new CustomEvent("prefill-consultation"));
      }
    } else {
      navigate("/#contact");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefill-consultation"));
      }, 300);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <a
          href="/#hero"
          className="logo"
          onClick={(e) => handleNavClick("hero", e)}
        >
          <img
            src={profile}
            alt="Khandokar Riajul Islam"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <a href="/#hero" onClick={(e) => handleNavClick("hero", e)}>
              Home
            </a>
          </li>

          <li>
            <a href="/#about" onClick={(e) => handleNavClick("about", e)}>
              About
            </a>
          </li>

          <li>
            <a href="/#skills" onClick={(e) => handleNavClick("skills", e)}>
              Skills
            </a>
          </li>

          <li>
            <a href="/#projects" onClick={(e) => handleNavClick("projects", e)}>
              Projects
            </a>
          </li>

          <li>
            <a href="/#services" onClick={(e) => handleNavClick("services", e)}>
              Services
            </a>
          </li>

          <li>
            <a href="/#contact" onClick={(e) => handleNavClick("contact", e)}>
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <ThemeToggle />

          <button
            className="consultation-nav-btn"
            onClick={handleFreeConsultation}
            title="Claim Free Strategy Consultation"
          >
            <FaRocket />
            <span>Free Consultation</span>
          </button>

          <a
            className="book-btn"
            href="https://calendly.com/khandokarriajulislam/30min"
            target="_blank"
            rel="noreferrer"
          >
            <FaCalendarAlt />
            <span>Book a Call</span>
          </a>
        </div>

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
          href="/#hero"
          onClick={(e) => handleNavClick("hero", e)}
        >
          Home
        </a>

        <a
          href="/#about"
          onClick={(e) => handleNavClick("about", e)}
        >
          About
        </a>

        <a
          href="/#skills"
          onClick={(e) => handleNavClick("skills", e)}
        >
          Skills
        </a>

        <a
          href="/#projects"
          onClick={(e) => handleNavClick("projects", e)}
        >
          Projects
        </a>

        <a
          href="/#services"
          onClick={(e) => handleNavClick("services", e)}
        >
          Services
        </a>

        <a
          href="/#experience"
          onClick={(e) => handleNavClick("experience", e)}
        >
          Experience
        </a>

        <a
          href="/#testimonials"
          onClick={(e) => handleNavClick("testimonials", e)}
        >
          Testimonials
        </a>

        <a
          href="/#contact"
          onClick={(e) => handleNavClick("contact", e)}
        >
          Contact
        </a>

        <button
          className="mobile-consultation-btn"
          onClick={handleFreeConsultation}
        >
          <FaRocket />
          Claim Free Consultation
        </button>

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

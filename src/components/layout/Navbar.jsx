import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.webp";
import ThemeToggle from "../common/ThemeToggle";
import { industryNavLinks } from "../../data/industryNavData";

import {
  FaCalendarAlt,
  FaBars,
  FaTimes,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Industry dropdown: one open state for desktop, one for the mobile drawer.
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const progressBarRef = useRef(null);
  const industryRef = useRef(null);
  const industryTriggerRef = useRef(null);
  const industryMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // A page inside /industries/* marks the nav item as current.
  const isIndustryRoute = location.pathname.startsWith("/industries");

  useEffect(() => {
    let ticking = false;
    let rafId = null;

    const update = () => {
      rafId = null;
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Golden Scroll Progress Bar — fills 0% to 100% as the page is scrolled
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        scrollHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
          : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
        progressBarRef.current.setAttribute(
          "aria-valuenow",
          String(Math.round(progress))
        );
      }

      ticking = false;
    };

    // requestAnimationFrame-throttled handler to avoid layout thrash on scroll
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Click outside, or Escape anywhere, closes the desktop drop-down.
  useEffect(() => {
    if (!industryOpen) return;

    const handlePointerDown = (event) => {
      if (industryRef.current && !industryRef.current.contains(event.target)) {
        setIndustryOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIndustryOpen(false);
        if (industryTriggerRef.current) industryTriggerRef.current.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [industryOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileIndustryOpen(false);
  };

  // ArrowDown on the trigger opens the menu and moves focus into it.
  const handleIndustryTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "Down") {
      event.preventDefault();
      setIndustryOpen(true);
      window.requestAnimationFrame(() => {
        const firstLink = industryMenuRef.current?.querySelector("a");
        if (firstLink) firstLink.focus();
      });
    }
  };

  // Arrow keys move between items; Escape closes and returns focus to the trigger.
  const handleIndustryMenuKeyDown = (event) => {
    const links = Array.from(industryMenuRef.current?.querySelectorAll("a") || []);
    if (!links.length) return;

    const index = links.indexOf(document.activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      setIndustryOpen(false);
      if (industryTriggerRef.current) industryTriggerRef.current.focus();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "Down") {
      event.preventDefault();
      links[(index + 1) % links.length].focus();
    } else if (event.key === "ArrowUp" || event.key === "Up") {
      event.preventDefault();
      links[(index - 1 + links.length) % links.length].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      links[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      links[links.length - 1].focus();
    }
  };

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

          <li
            className={`nav-dropdown${industryOpen ? " is-open" : ""}${
              isIndustryRoute ? " is-active" : ""
            }`}
            ref={industryRef}
          >
            <button
              type="button"
              ref={industryTriggerRef}
              className="nav-dropdown-trigger"
              aria-expanded={industryOpen}
              aria-controls="industries-dropdown"
              aria-haspopup="true"
              onClick={() => setIndustryOpen((open) => !open)}
              onKeyDown={handleIndustryTriggerKeyDown}
            >
              <span>Industry Services</span>
              <FaChevronDown className="nav-dropdown-caret" aria-hidden="true" />
            </button>

            <ul
              id="industries-dropdown"
              ref={industryMenuRef}
              className="nav-dropdown-menu"
              onKeyDown={handleIndustryMenuKeyDown}
            >
              {industryNavLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-dropdown-link${
                      location.pathname === link.to ? " is-current" : ""
                    }`}
                    aria-current={location.pathname === link.to ? "page" : undefined}
                    onClick={() => setIndustryOpen(false)}
                  >
                    <span className="nav-dropdown-link-label">{link.label}</span>
                    {link.description && (
                      <span className="nav-dropdown-link-desc">{link.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
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
        aria-hidden={!menuOpen}
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

        <div
          className={`mobile-industries${
            isIndustryRoute ? " is-active" : ""
          }`}
        >
          <button
            type="button"
            className="mobile-industries-toggle"
            aria-expanded={mobileIndustryOpen}
            aria-controls="mobile-industries-menu"
            onClick={() => setMobileIndustryOpen((open) => !open)}
          >
            <span>Industry Services</span>
            <FaChevronDown className="nav-dropdown-caret" aria-hidden="true" />
          </button>

          <div
            id="mobile-industries-menu"
            className="mobile-industries-submenu"
            hidden={!mobileIndustryOpen}
          >
            {industryNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={
                  location.pathname === link.to ? "mobile-industries-link is-current" : "mobile-industries-link"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

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

      {/* Golden Scroll Progress Bar (Stripe & Bloomberg style) */}
      <div
        className="nav-scroll-progress"
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
      >
        <div ref={progressBarRef} className="nav-scroll-progress-bar" />
      </div>
    </nav>
  );
}

export default Navbar;

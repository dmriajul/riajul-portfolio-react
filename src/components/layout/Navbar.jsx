import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.webp";
import ThemeToggle from "../common/ThemeToggle";
import {
  serviceNavLinks,
  industryNavLinks,
  servicesMenu,
} from "../../data/navMenuData";

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
  // Services dropdown: one open state for desktop, one for the mobile drawer.
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const progressBarRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesTriggerRef = useRef(null);
  const servicesMenuRef = useRef(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // A service page or an industry page keeps the Services item marked as current.
  const isServicesRoute =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/industries");

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

  // Clear a pending close timer if the navbar unmounts mid-transition.
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Click outside, or Escape anywhere, closes the desktop dropdown.
  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        if (servicesTriggerRef.current) servicesTriggerRef.current.focus();
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
  }, [servicesOpen]);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openServices = () => {
    cancelScheduledClose();
    setServicesOpen(true);
  };

  const closeServices = () => {
    cancelScheduledClose();
    setServicesOpen(false);
  };

  // Hover close is delayed so the pointer can cross the gap into the panel.
  const scheduleServicesClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setServicesOpen(false);
    }, 180);
  };

  const handleServicesPointerEnter = (event) => {
    if (event.pointerType === "touch") return;
    openServices();
  };

  const handleServicesPointerLeave = (event) => {
    if (event.pointerType === "touch") return;
    scheduleServicesClose();
  };

  // Click works on its own, so the menu never depends on hover.
  const handleServicesToggle = () => {
    cancelScheduledClose();
    setServicesOpen((open) => !open);
  };

  // Keyboard focus leaving the item closes the panel.
  const handleServicesBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeServices();
    }
  };

  // ArrowDown / ArrowUp on the trigger open the panel and move focus into it.
  const handleServicesTriggerKeyDown = (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    event.preventDefault();
    openServices();
    const moveToLast = event.key === "ArrowUp";

    window.requestAnimationFrame(() => {
      const links = Array.from(
        servicesMenuRef.current?.querySelectorAll("a") || []
      );
      if (!links.length) return;
      (moveToLast ? links[links.length - 1] : links[0]).focus();
    });
  };

  // Arrow keys move between items; Escape closes and returns focus to the trigger.
  const handleServicesMenuKeyDown = (event) => {
    const links = Array.from(
      servicesMenuRef.current?.querySelectorAll("a") || []
    );
    if (!links.length) return;

    const index = links.indexOf(document.activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      closeServices();
      if (servicesTriggerRef.current) servicesTriggerRef.current.focus();
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

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
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

  const linkClass = (to, base) =>
    location.pathname === to ? `${base} is-current` : base;

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

          <li
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}${
              isServicesRoute ? " is-active" : ""
            }`}
            ref={servicesRef}
            onPointerEnter={handleServicesPointerEnter}
            onPointerLeave={handleServicesPointerLeave}
            onBlur={handleServicesBlur}
          >
            <button
              type="button"
              ref={servicesTriggerRef}
              className="nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              aria-haspopup="true"
              onClick={handleServicesToggle}
              onKeyDown={handleServicesTriggerKeyDown}
            >
              <span>{servicesMenu.trigger}</span>
              <FaChevronDown className="nav-dropdown-caret" aria-hidden="true" />
            </button>

            <div
              id="services-dropdown"
              ref={servicesMenuRef}
              className="nav-dropdown-menu"
              onKeyDown={handleServicesMenuKeyDown}
            >
              <div className="nav-dropdown-groups">
                <div className="nav-dropdown-group">
                  <p
                    className="nav-dropdown-group-title"
                    id="nav-marketing-group"
                  >
                    {servicesMenu.marketingTitle}
                  </p>
                  <ul aria-labelledby="nav-marketing-group">
                    {serviceNavLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className={linkClass(link.to, "nav-dropdown-link")}
                          aria-current={
                            location.pathname === link.to ? "page" : undefined
                          }
                          onClick={closeServices}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="nav-dropdown-group is-industry">
                  <p className="nav-dropdown-group-title" id="nav-industry-group">
                    {servicesMenu.industryTitle}
                  </p>
                  <ul aria-labelledby="nav-industry-group">
                    {industryNavLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className={linkClass(link.to, "nav-dropdown-link")}
                          aria-current={
                            location.pathname === link.to ? "page" : undefined
                          }
                          onClick={closeServices}
                        >
                          <span className="nav-dropdown-link-label">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="nav-dropdown-link-desc">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="nav-dropdown-group-note">
                    {servicesMenu.industryNote}
                  </p>
                </div>
              </div>

              <div className="nav-dropdown-foot">
                <a
                  href="/#services"
                  className="nav-dropdown-foot-link"
                  onClick={(e) => handleNavClick("services", e)}
                >
                  {servicesMenu.allServicesLabel}
                </a>
              </div>
            </div>
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

        <div
          className={`mobile-services${
            isServicesRoute ? " is-active" : ""
          }`}
        >
          <button
            type="button"
            className="mobile-services-toggle"
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-menu"
            onClick={() => setMobileServicesOpen((open) => !open)}
          >
            <span>{servicesMenu.trigger}</span>
            <FaChevronDown className="nav-dropdown-caret" aria-hidden="true" />
          </button>

          <div
            id="mobile-services-menu"
            className="mobile-services-submenu"
            hidden={!mobileServicesOpen}
          >
            <div
              className="mobile-services-group"
              role="group"
              aria-labelledby="mobile-services-marketing"
            >
              <p
                className="mobile-services-group-title"
                id="mobile-services-marketing"
              >
                {servicesMenu.marketingTitle}
              </p>

              <ul>
                {serviceNavLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      aria-current={
                        location.pathname === link.to ? "page" : undefined
                      }
                      className={linkClass(link.to, "mobile-services-link")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mobile-services-group is-industry"
              role="group"
              aria-labelledby="mobile-services-industries"
            >
              <p
                className="mobile-services-group-title"
                id="mobile-services-industries"
              >
                {servicesMenu.industryTitle}
              </p>

              <ul>
                {industryNavLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      aria-current={
                        location.pathname === link.to ? "page" : undefined
                      }
                      className={linkClass(link.to, "mobile-services-link")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/#services"
              className="mobile-services-link is-foot"
              onClick={(e) => handleNavClick("services", e)}
            >
              {servicesMenu.allServicesLabel}
            </a>
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

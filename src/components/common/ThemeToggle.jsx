import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-switch-btn ${isDark ? "is-dark" : "is-light"} ${className}`}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Click for Light Mode" : "Click for Dark Mode"}
    >
      <span className="theme-switch-track">
        {/* Sun on left */}
        <span className="theme-track-icon track-sun" aria-hidden="true">
          <FaSun />
        </span>
        {/* Moon on right */}
        <span className="theme-track-icon track-moon" aria-hidden="true">
          <FaMoon />
        </span>
        {/* Sliding Thumb Knob */}
        <span className="theme-switch-thumb">
          {isDark ? <FaMoon className="thumb-icon" /> : <FaSun className="thumb-icon" />}
        </span>
      </span>

      <span className="theme-switch-text">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeToggle;

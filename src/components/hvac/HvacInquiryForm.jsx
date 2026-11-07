import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

import { submitLead } from "../../lib/web3forms";
import { tagHvacInquiry } from "../../lib/hvacInquiry";

/**
 * HVAC-specific inquiry form.
 *
 * This is a separate form from the general contact form on the homepage. It
 * posts through the same shared Web3Forms helper (`src/lib/web3forms.js`), so
 * the submission path, endpoint and styling stay consistent, but it collects
 * the details that matter for an HVAC account and tags the submission so the
 * inbox can separate it from general inquiries.
 *
 * No credentials live in this component.
 */

const BUDGET_OPTIONS = [
  "Not running ads yet",
  "Under $1,500 per month",
  "$1,500 to $3,000 per month",
  "$3,000 to $6,000 per month",
  "$6,000 or more per month",
  "Not sure yet",
];

function HvacInquiryForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [loading, setLoading] = useState(false);
  const submittingRef = useRef(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.target;

    // Native validation normally blocks this, but a submit can also be fired
    // programmatically. Guarding here keeps an incomplete inquiry from being
    // emailed as a lead with fallback values in the subject.
    if (!form.checkValidity()) {
      if (typeof form.reportValidity === "function") form.reportValidity();
      return;
    }

    submittingRef.current = true;

    // Source tags and a predictable subject so HVAC inquiries are easy to
    // separate from general contact form messages.
    const formData = tagHvacInquiry(new FormData(form));

    setLoading(true);
    setStatus("sending");
    setResult("Sending your inquiry...");

    try {
      const outcome = await submitLead(formData);

      if (outcome.ok) {
        setStatus("success");
        setResult(
          "Thanks. Your inquiry was sent and I will reply within one business day. If you would rather talk sooner, book a call with the button above."
        );
        form.reset();
      } else if (outcome.reason === "api") {
        setStatus("error");
        setResult(
          outcome.message ||
            "The form could not send your inquiry. Please try again, or book a call with the button above."
        );
      } else {
        setStatus("error");
        setResult(
          "A network error stopped the form. Please try again, or book a call with the button above."
        );
      }
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <form
      className="contact-form hvac-form"
      onSubmit={onSubmit}
      aria-busy={loading}
      aria-label="HVAC inquiry form"
    >
      {/* Anti-spam honeypot (Web3Forms "botcheck"): hidden from users and assistive tech */}
      <input
        type="checkbox"
        name="botcheck"
        id="hvac-botcheck"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <input type="hidden" name="page_source" value="hvac" />
      <input type="hidden" name="inquiry_type" value="hvac_landing_page" />

      <div className="hvac-form-grid">
        <div className="hvac-field">
          <label htmlFor="hvac-name">Full name</label>
          <input
            id="hvac-name"
            type="text"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="hvac-field">
          <label htmlFor="hvac-company">Company</label>
          <input
            id="hvac-company"
            type="text"
            name="company"
            placeholder="Heating and cooling company"
            autoComplete="organization"
            required
          />
        </div>

        <div className="hvac-field">
          <label htmlFor="hvac-email">Work email</label>
          <input
            id="hvac-email"
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="hvac-field">
          <label htmlFor="hvac-phone">Phone</label>
          <input
            id="hvac-phone"
            type="tel"
            name="phone"
            placeholder="(555) 123 4567"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </div>

        <div className="hvac-field">
          <label htmlFor="hvac-area">Service area</label>
          <input
            id="hvac-area"
            type="text"
            name="service_area"
            placeholder="City and state you serve"
            required
          />
        </div>

        <div className="hvac-field">
          <label htmlFor="hvac-budget">Monthly ad budget (optional)</label>
          <select id="hvac-budget" name="monthly_budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hvac-field">
        <label htmlFor="hvac-message">What do you want help with?</label>
        <textarea
          id="hvac-message"
          name="message"
          rows="4"
          placeholder="Example: we run Google Ads for AC repair and replacement, but we cannot tell which campaigns produce real jobs."
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary hvac-submit"
        disabled={loading}
        style={{ width: "100%", justifyContent: "center" }}
      >
        <FaPaperPlane />
        {loading ? "Sending..." : "Send HVAC Inquiry"}
      </button>

      <p className="hvac-form-note">
        Your details are used only to reply to this inquiry. No newsletter, no resale.
      </p>

      {/* The live region is always mounted so assistive technology registers it
          before the first status change. It is empty until something happens. */}
      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`hvac-form-status ${status === "success" ? "is-success" : ""} ${
          status === "error" ? "is-error" : ""
        }`}
      >
        {result}
      </p>
    </form>
  );
}

export default HvacInquiryForm;

/**
 * Payload helpers for the HVAC inquiry form.
 *
 * Kept separate from the component so the tagging rules can be tested without
 * rendering React, and so the inbox always receives the same subject format
 * regardless of future UI changes.
 *
 * These helpers do not touch credentials or the submission transport; that
 * stays in src/lib/web3forms.js.
 */

export const HVAC_PAGE_SOURCE = "hvac";
export const HVAC_INQUIRY_TYPE = "hvac_landing_page";

/**
 * Builds the email subject so HVAC inquiries are easy to separate from
 * general contact form messages.
 *
 * @param {{ company?: string, area?: string }} fields
 * @returns {string}
 */
export function buildHvacSubject({ company, area } = {}) {
  const cleanCompany = (company || "").toString().trim() || "Contractor";
  const cleanArea = (area || "").toString().trim() || "US";
  return `HVAC LEAD: ${cleanCompany} (${cleanArea})`;
}

/**
 * Adds the source tags and subject to an existing FormData instance.
 * Mutates and returns the same instance.
 *
 * @param {FormData} formData
 * @returns {FormData}
 */
export function tagHvacInquiry(formData) {
  if (!formData.get("page_source")) {
    formData.set("page_source", HVAC_PAGE_SOURCE);
  }
  formData.set("inquiry_type", HVAC_INQUIRY_TYPE);
  formData.set(
    "subject",
    buildHvacSubject({
      company: formData.get("company"),
      area: formData.get("service_area"),
    })
  );
  return formData;
}

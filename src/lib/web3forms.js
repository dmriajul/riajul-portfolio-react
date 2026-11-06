/**
 * Single Web3Forms submission path.
 *
 * Behaviour is deliberately identical to the previous inline implementation in
 * Contact.jsx: same endpoint, same access key, same consultation subject
 * override, same success/failure signalling so existing copy and email
 * delivery are unchanged.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3FORMS_ACCESS_KEY = "cb93d925-55e6-4c5f-a580-094dffaf02cf";

export const CONSULTATION_SUBJECT =
  "Free Strategy Consultation Request (Audit & 3-Step Growth Plan)";

/**
 * @param {FormData} formData
 * @param {{ isConsultation?: boolean }} [options]
 * @returns {Promise<{ ok: true } | { ok: false, reason: "api" | "network", message?: string }>}
 */
export async function submitLead(formData, { isConsultation = false } = {}) {
  if (isConsultation) {
    formData.set(
      "subject",
      `🎯 FREE CONSULTATION: ${formData.get("subject") || "Strategy Request"}`
    );
  }

  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return { ok: true };
    }

    console.error(data);
    return { ok: false, reason: "api", message: data.message || "" };
  } catch (error) {
    console.error(error);
    return { ok: false, reason: "network" };
  }
}

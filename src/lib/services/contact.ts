import { companyInfo } from "@/lib/data/company";

// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel to send form submissions through Formspree.
// Without it, the form falls back to opening the visitor's email app.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  usedMailto?: boolean;
  error?: string;
}

const ERROR_MESSAGES = {
  RATE_LIMIT: `Our contact form has reached its limit. Please email us directly at ${companyInfo.email}`,
  GENERIC: `Something went wrong. Please try again or email us directly at ${companyInfo.email}`,
};

function buildMailto(data: ContactFormData): string {
  const subject = `Enquiry: ${data.service || "General"}${data.company ? ` (${data.company})` : ""}`;
  const body = `${data.message}\n\n${data.name}\n${data.email}${data.company ? `\n${data.company}` : ""}`;
  return `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Submits contact form data to Formspree, or opens a pre-filled email if no endpoint is configured
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  if (!FORMSPREE_ENDPOINT) {
    window.location.href = buildMailto(data);
    return { success: true, usedMailto: true };
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    }

    if (response.status === 429) {
      return { success: false, error: ERROR_MESSAGES.RATE_LIMIT };
    }

    return { success: false, error: ERROR_MESSAGES.GENERIC };
  } catch {
    return { success: false, error: ERROR_MESSAGES.GENERIC };
  }
}

export function getEmptyFormData(): ContactFormData {
  return {
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  };
}

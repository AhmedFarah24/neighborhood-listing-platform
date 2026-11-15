export type ValidationResult =
  | { success: true; url: string }
  | { success: false; error: { code: "INVALID_SPONSOR_URL"; message: string } };
export function validateSponsorUrl(input: string): ValidationResult {
  const error: ValidationResult = {
    success: false,
    error: {
      code: "INVALID_SPONSOR_URL",
      message: "Sponsor URL must be a valid HTTPS website domain."
    }
  };
  try {
    const url = new URL(input);
    // HTTPS only. Reject credentials, custom ports, raw IPv4/IPv6 addresses
    // and suspicious hostname syntax.
    if (url.protocol !== "https:" || url.username || url.password ||
        url.port || !/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(url.hostname) ||
        url.hostname.split(".").some(label => label.startsWith("-") || label.endsWith("-")) ||
        /^\d+$/.test(url.hostname.replace(/\./g, ""))) {
      return error;
    }
    return { success: true, url: url.toString() };
  } catch {
    return error;
  }
}

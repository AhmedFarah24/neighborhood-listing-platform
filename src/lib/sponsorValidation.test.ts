import test from "node:test";
import assert from "node:assert/strict";
import { validateSponsorUrl } from "./sponsorValidation";
test("valid https URL passes", () => {
  assert.deepEqual(validateSponsorUrl("https://example.com"), {
    success: true, url: "https://example.com/"
  });
});
test("javascript URL rejected with exact error object", () => {
  assert.deepEqual(validateSponsorUrl("javascript:alert(1)"), {
    success: false,
    error: {
      code: "INVALID_SPONSOR_URL",
      message: "Sponsor URL must be a valid HTTPS website domain."
    }
  });
});
test("raw IP and incomplete http URL rejected", () => {
  assert.equal(validateSponsorUrl("https://127.0.0.1").success, false);
  assert.equal(validateSponsorUrl("http://").success, false);
});

import test from "node:test";
import assert from "node:assert/strict";
import { selectSponsor, type Sponsor } from "./sponsors";
const base = {
  startDate: "2026-01-01", endDate: "2026-12-31",
  zipCode: "90032", destinationUrl: "https://example.com"
};
const fixture: Sponsor[] = [
  { ...base, sponsorId: "A", name: "Sponsor A", tier: "Silver", distanceMiles: 0.4, impressions: 120, status: "APPROVED" },
  { ...base, sponsorId: "B", name: "Sponsor B", tier: "Gold", distanceMiles: 1.2, impressions: 45, status: "APPROVED" },
  { ...base, sponsorId: "C", name: "Sponsor C", tier: "Gold", distanceMiles: 0.8, impressions: 90, status: "APPROVED" },
  { ...base, sponsorId: "D", name: "Sponsor D", tier: "Platinum", distanceMiles: 0.2, impressions: 10, status: "PENDING" }
];
test("Sponsor C wins, D excluded because pending", () => {
  assert.equal(selectSponsor(fixture, "90032", "2026-10-24")?.sponsorId, "C");
});
test("no eligible sponsors returns null", () => {
  assert.equal(selectSponsor(fixture, "99999", "2026-10-24"), null);
});
test("impression count and sponsor ID resolve remaining ties", () => {
  const b = {...fixture[2], sponsorId: "B2", impressions: 20};
  assert.equal(selectSponsor([fixture[2], b], "90032", "2026-10-24")?.sponsorId, "B2");
  const c = {...b, sponsorId: "A2"};
  assert.equal(selectSponsor([b, c], "90032", "2026-10-24")?.sponsorId, "A2");
});
test("expired sponsors excluded", () => {
  assert.equal(selectSponsor(fixture, "90032", "2027-01-01"), null);
});

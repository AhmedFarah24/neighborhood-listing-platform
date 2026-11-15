export type Tier = "Silver" | "Gold" | "Platinum";
export type SponsorStatus = "APPROVED" | "PENDING" | "REJECTED";
export interface Sponsor {
  sponsorId: string;
  name: string;
  tier: Tier;
  distanceMiles: number;
  impressions: number;
  status: SponsorStatus;
  startDate: string; // YYYY-MM-DD
  endDate: string;
  zipCode: string;
  destinationUrl: string;
}
const tierRank: Record<Tier, number> = { Silver: 1, Gold: 2, Platinum: 3 };
/** This deterministic in-memory implementation mirrors sql/sponsors.sql. */
export function selectSponsor(
  sponsors: Sponsor[], propertyZip: string, today: string
): Sponsor | null {
  const eligible = sponsors.filter(s =>
    s.status === "APPROVED" &&
    s.startDate <= today &&
    today <= s.endDate &&
    s.zipCode === propertyZip
  );
  eligible.sort((a, b) =>
    tierRank[b.tier] - tierRank[a.tier] ||
    a.distanceMiles - b.distanceMiles ||
    a.impressions - b.impressions ||
    a.sponsorId.localeCompare(b.sponsorId)
  );
  return eligible[0] ?? null; // No sponsor means no card.
}

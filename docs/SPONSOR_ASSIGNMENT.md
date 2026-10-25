# Sponsor selection, URL safety, and disclosure audit
This is an implementation prepared for the course exercise. It does **not** claim a deployed or connected database. The SQL is a PostgreSQL example to run when a database is configured.

## 1. SQL
See [sql/sponsors.sql](../sql/sponsors.sql). The property is found by a **bound parameter** `$1`. Only sponsors with `status = 'APPROVED'`, whose dates include `CURRENT_DATE`, and whose sponsor ZIP equals the property's ZIP are eligible. Tie-break order: tier descending (Platinum > Gold > Silver), distance ascending, impressions ascending, sponsor ID ascending. If none are eligible, return no card.

## 2. Deterministic selection trace for 90032
Assume every row has ZIP 90032 and active dates:
- A: Silver, 0.4 mi, 120 impressions, approved: eligible.
- B: Gold, 1.2 mi, 45 impressions, approved: eligible.
- C: Gold, 0.8 mi, 90 impressions, approved: eligible.
- D: Platinum, 0.2 mi, 10 impressions, pending: **ineligible** before ordering.
Within eligible A/B/C, Gold outranks Silver. C and B are tied on Gold, so **C wins** by shorter distance (0.8 < 1.2 miles); impressions do not decide this match. Test: [src/lib/sponsors.test.ts](../src/lib/sponsors.test.ts).

## 3. URL validation
See [src/lib/sponsorValidation.ts](../src/lib/sponsorValidation.ts) and [its tests](../src/lib/sponsorValidation.test.ts).
- Accepted input: `https://example.com` -> `{"success":true,"url":"https://example.com/"}`.
- Rejected input: `javascript:alert(1)` -> `{"success":false,"error":{"code":"INVALID_SPONSOR_URL","message":"Sponsor URL must be a valid HTTPS website domain."}}`.
These are function return values; an API would have to send the error to clients. Further network-layer safeguards are needed if a backend ever fetches provided URLs.

## 4. Disclosure & accessibility
See [src/components/SponsorCard.tsx](../src/components/SponsorCard.tsx). The card includes **visible** `Sponsored Partner` disclosure; both `article aria-label` and link `aria-label` name it as sponsored, and the link uses `rel="sponsored noopener noreferrer"`. Unsafe URLs render no sponsor card.

## How to run the TypeScript tests
`npx --yes tsx --test src/lib/*.test.ts`
Run and capture real output rather than presenting expected output as executed evidence. No database integration or browser screen-reader audit has been run by adding these files.

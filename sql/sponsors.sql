-- PostgreSQL example schema and parameterized sponsor selection.
-- Run this against a configured PostgreSQL database (not yet provisioned).
CREATE TABLE IF NOT EXISTS properties (
  property_id TEXT PRIMARY KEY,
  zip_code CHAR(5) NOT NULL
);
CREATE TABLE IF NOT EXISTS sponsors (
  sponsor_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  destination_url TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('APPROVED','PENDING','REJECTED')),
  tier TEXT NOT NULL CHECK (tier IN ('Silver','Gold','Platinum')),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  zip_code CHAR(5) NOT NULL,
  distance_miles NUMERIC(8,2) NOT NULL CHECK (distance_miles >= 0),
  impressions INTEGER NOT NULL DEFAULT 0 CHECK (impressions >= 0),
  CHECK (end_date >= start_date)
);
-- $1 is a bound property ID; do not concatenate user input into SQL.
-- Status -> dates -> property ZIP, then tier -> distance -> impressions -> ID.
SELECT s.*
FROM sponsors AS s
JOIN properties AS p ON s.zip_code = p.zip_code
WHERE p.property_id = $1
  AND s.status = 'APPROVED'                           -- administrative status
  AND CURRENT_DATE BETWEEN s.start_date AND s.end_date -- active dates (inclusive)
  AND s.zip_code = p.zip_code                         -- ZIP scope
ORDER BY
  CASE s.tier WHEN 'Platinum' THEN 3 WHEN 'Gold' THEN 2
              WHEN 'Silver' THEN 1 ELSE 0 END DESC,
  s.distance_miles ASC,
  s.impressions ASC,
  s.sponsor_id ASC
LIMIT 1;
-- No rows means no sponsored placement (do not show an unapproved fallback).

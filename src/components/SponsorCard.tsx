import { validateSponsorUrl } from "../lib/sponsorValidation";
type SponsorCardProps = { name: string; destinationUrl: string };
/** Advertisement disclosure stays visible; accessible name says 'Sponsored Partner'. */
export default function SponsorCard({ name, destinationUrl }: SponsorCardProps) {
  const parsed = validateSponsorUrl(destinationUrl);
  if (!parsed.success) return null; // Never render an unsafe destination.
  return (
    <article aria-label={`Sponsored Partner: ${name}`} className="rounded-lg border p-4">
      <p className="text-sm font-semibold">Sponsored Partner</p>
      <h2 className="mt-2 text-lg font-bold">{name}</h2>
      <a
        href={parsed.url}
        aria-label={`Sponsored Partner: Visit ${name} website`}
        rel="noopener noreferrer sponsored"
        target="_blank"
        className="underline"
      >Visit Website</a>
    </article>
  );
}

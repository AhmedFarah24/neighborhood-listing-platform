export default function Home() {
  return (
    <main>
      <h1>Neighborhood Listing Platform</h1>
      <p>Helping neighbors discover useful local information in one simple place.</p>

      <section className="cards" aria-label="Main features">
        <article>
          <h2>Listings</h2>
          <p>Browse neighborhood places, services, and community resources.</p>
        </article>
        <article>
          <h2>Neighborhood Sponsors</h2>
          <p>Highlight local businesses and organizations that support the community.</p>
        </article>
        <article>
          <h2>Voice Help</h2>
          <p>Make the site easier to use with simple voice-based assistance.</p>
        </article>
      </section>
    </main>
  );
}

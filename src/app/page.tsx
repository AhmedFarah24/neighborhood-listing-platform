const features = [
  {
    title: "Local Listings",
    description: "Find useful services, events, and small businesses near you.",
  },
  {
    title: "Neighborhood Sponsors",
    description: "Meet the local organizations that support the community.",
  },
  {
    title: "Voice Help",
    description: "Use simple voice guidance to search and navigate the platform.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
          Built for neighbors
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Discover Your Local Neighborhood
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A simple place for residents to discover trusted local resources and
          connect with their community.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

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

const photos = [
  {
    title: "Featured Property",
    subtitle: "Example property listing photo",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern two-story house with large windows and a landscaped yard",
    source: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Neighborhood Business Spotlight",
    subtitle: "Example cafe photo — not an approved paid advertisement",
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=80",
    alt: "Cozy coffee shop with wooden tables, pendant lights, and plants",
    source: "https://unsplash.com/photos",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
          Built for neighbors
        </p>
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 h-12 w-12 shrink-0"
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="64" height="64" rx="14" fill="#2563eb" />
            <path d="M14 31 32 16l18 15v19H37V38H27v12H14Z" fill="white" />
          </svg>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Your Local Neighborhood
          </h1>
        </div>
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

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Featured images">
          {photos.map((photo) => (
            <article
              key={photo.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold">{photo.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{photo.subtitle}</p>
              </div>
            </article>
          ))}
        </section>
        <p className="mt-4 text-xs text-slate-500">
          Demo images from Unsplash. No real property listing or business endorsement is implied.
        </p>
      </section>
    </main>
  );
}

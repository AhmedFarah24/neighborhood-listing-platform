import Image from "next/image";

const listings = [
  {
    title: "Modern Family Home",
    neighborhood: "Sample residential listing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern two-story home with large windows and landscaping",
  },
  {
    title: "Neighborhood Coffee Shop",
    neighborhood: "Sample local business spotlight",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm coffee shop interior with tables and hanging lights",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3 font-extrabold tracking-tight text-slate-900">
            <svg viewBox="0 0 64 64" className="h-10 w-10" role="img" aria-label="Neighborhood home logo">
              <rect width="64" height="64" rx="14" fill="#2563eb" />
              <path d="M14 31 32 16l18 15v19H37V38H27v12H14Z" fill="white" />
            </svg>
            <span>Neighborly</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm font-semibold text-slate-600 sm:gap-8">
            <a href="#listings" className="hover:text-blue-700">Listings</a>
            <a href="#partners" className="hover:text-blue-700">Local Partners</a>
          </nav>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Built for neighbors</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Find your place. Get to know your neighborhood.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-blue-100">
              Explore local spaces and discover the small businesses that make a community feel like home.
            </p>
            <a href="#listings" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-blue-900 shadow-lg hover:bg-blue-50">
              Explore listings
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Exterior view of a modern home with a landscaped front yard"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <p className="font-bold uppercase tracking-widest text-blue-700">Explore nearby</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Discover local highlights</h2>
        <p className="mt-3 max-w-2xl text-slate-600">A preview of the properties and neighborhood businesses you can discover on the platform.</p>

        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {listings.map((listing) => (
            <article key={listing.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={listing.image}
                alt={listing.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{listing.neighborhood}</p>
                <h3 className="mt-2 text-xl font-bold">{listing.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-bold uppercase tracking-widest text-blue-700">Neighborhood partners</p>
          <h2 className="mt-2 text-3xl font-extrabold">Support the places around you</h2>
          <div className="mt-7 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=80"
              alt="Coffee shop seating area with warm lighting and wooden tables"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[3/2] h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-8">
              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">DEMO BUSINESS SPOTLIGHT</span>
              <h3 className="mt-4 text-2xl font-bold">A coffee stop close to home</h3>
              <p className="mt-3 leading-7 text-slate-600">This sample spotlight shows how local businesses could be featured here. It is not a paid or approved advertisement.</p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Demonstration photos sourced from Unsplash. Listings are illustrative only; permission and administrative approval for real partner ads must be verified separately.
          </p>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        Neighborhood Listing Platform · Demo homepage
      </footer>
    </main>
  );
}

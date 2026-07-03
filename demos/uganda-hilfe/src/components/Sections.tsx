import Link from "next/link";
import { GALLERY, NEWS, PROJECTS, TRIPS } from "@/lib/site";

export function ProjectCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PROJECTS.map((project) => (
        <Link
          key={project.title}
          href={project.href}
          className="uhu-card uhu-photo-shadow block overflow-hidden transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#14532d]">
              {project.tag}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-extrabold text-[#14532d]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#52796f]">{project.summary}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-[#40916c]">Mehr erfahren →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function NewsCards({ limit }: { limit?: number }) {
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="uhu-card uhu-photo-shadow block overflow-hidden transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c]"
        >
          <div className="grid gap-0 sm:grid-cols-[140px_1fr]">
            <div className="relative min-h-[140px] sm:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <time className="text-xs font-bold uppercase tracking-wide text-[#40916c]">{item.date}</time>
              <h3 className="mt-2 text-lg font-extrabold text-[#14532d]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#52796f]">{item.excerpt}</p>
              <span className="mt-3 inline-flex text-sm font-bold text-[#40916c]">Weiterlesen →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Timeline() {
  return (
    <ol className="relative space-y-0 border-l-2 border-[#52b788]/40 pl-8">
      {TRIPS.map((trip, index) => (
        <li key={trip.year} className={`relative pb-10 ${index === TRIPS.length - 1 ? "pb-0" : ""}`}>
          <span className="absolute -left-[calc(1rem+5px)] top-1 flex h-4 w-4 rounded-full border-4 border-white bg-[#40916c] shadow" aria-hidden />
          <p className="text-sm font-bold uppercase tracking-wider text-[#40916c]">{trip.year}</p>
          <h3 className="mt-1 text-xl font-extrabold text-[#14532d]">
            <Link href={trip.href} className="hover:text-[#40916c] hover:underline">
              {trip.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#52796f]">{trip.text}</p>
          <Link href={trip.href} className="mt-2 inline-flex text-sm font-bold text-[#40916c] hover:underline">
            Mehr erfahren →
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function GalleryGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {GALLERY.map((item, index) => (
        <Link
          key={item.src}
          href={item.href}
          className={`uhu-photo-shadow group relative block overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? "aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-[420px]" : "aspect-[4/3]"}`}
            loading="lazy"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f3d22]/85 to-transparent p-4 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
            {item.alt} →
          </span>
        </Link>
      ))}
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[#14532d] py-16 text-white md:py-20">
      <div className="uhu-container">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}

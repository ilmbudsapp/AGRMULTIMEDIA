import { Link } from "wouter";
import { LayoutGrid, Palette, Clapperboard, Sparkles, AppWindow, ArrowRight } from "lucide-react";

const SERVICE_CARDS = [
  {
    title: "Graphic Design Services",
    description: "Branding systems, logos, and marketing design assets for small businesses.",
    href: "/graphic-design",
    Icon: Palette,
  },
  {
    title: "Video Editing Services",
    description: "Professional edits for social media, ads, websites, and product communication.",
    href: "/video-production",
    Icon: Clapperboard,
  },
  {
    title: "AI Content Creation Services",
    description: "AI images, AI product visuals, and AI video assets for business marketing.",
    href: "/ai-content-creation",
    Icon: Sparkles,
  },
  {
    title: "Web Design and SEO Services",
    description: "Mobile-friendly websites with on-page SEO and clear structure optimization.",
    href: "/web-design",
    Icon: LayoutGrid,
  },
  {
    title: "Application Design and Development Services",
    description: "Custom app concepts, useful business tools, and prototype interfaces.",
    href: "/application-design-development",
    Icon: AppWindow,
  },
] as const;

export default function HomeServices() {
  return (
    <section id="services-preview" className="scroll-mt-24 border-t border-neutral-200 bg-[#f8f7f4] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Clear service structure for small business growth
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Choose the exact service you need. Each area has a dedicated page with clear scope, deliverables, tools, and a direct consultation path.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map(({ title, description, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-[220px] flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                View service details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Graphic Design Services for Small Businesses",
    description: "Logo systems, brand direction, and communication design that makes your business look consistent and trustworthy.",
    href: "/graphic-design",
  },
  {
    title: "Professional Video Editing Services",
    description: "Business-focused editing for short-form content, advertising clips, product promos, and website visuals.",
    href: "/video-production",
  },
  {
    title: "AI Content Creation for Business Marketing",
    description: "AI image generation, AI product visuals, and AI video content built for practical campaign output.",
    href: "/ai-content-creation",
  },
  {
    title: "Web Design and SEO for Small Businesses",
    description: "Mobile-first websites with on-page SEO, optimized structure, and fast loading setup for better visibility.",
    href: "/web-design",
  },
  {
    title: "Custom Application Design for Businesses",
    description: "App concepts, prototype interfaces, and useful custom digital tools for internal and client-facing workflows.",
    href: "/application-design-development",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f5f4f2]">
      <Navigation />
      <main className="pb-20 pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Professional Creative and Digital Services for Small Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            This page is your direct entry point to each service area. No portfolio noise here - just clear service scope, deliverables, tools, and a direct contact path.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article key={service.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950"
                >
                  Open service page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

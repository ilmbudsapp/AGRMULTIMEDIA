import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type ServiceCard = { title: string; description: string; href: string };

const servicesByLang: Record<ServiceLang, ServiceCard[]> = {
  en: [
    {
      title: "Graphic Design Services for Small Businesses",
      description:
        "Logo systems, brand direction, and communication design that makes your business look consistent and trustworthy.",
      href: "/graphic-design",
    },
    {
      title: "AI Content Creation for Business Marketing",
      description:
        "AI image generation, AI product visuals, and AI video content built for practical campaign output.",
      href: "/ai-content-creation",
    },
    {
      title: "Web Design and SEO for Small Businesses",
      description:
        "Mobile-first websites with on-page SEO, optimized structure, and fast loading setup for better visibility.",
      href: "/web-design",
    },
    {
      title: "Custom Application Design for Businesses",
      description:
        "App concepts, prototype interfaces, and useful custom digital tools for internal and client-facing workflows.",
      href: "/application-design-development",
    },
  ],
  de: [
    {
      title: "Grafikdesign für kleine Unternehmen",
      description:
        "Logo-Systeme, Markenrichtung und Kommunikationsdesign für ein konsistentes, vertrauenswürdiges Auftreten.",
      href: "/graphic-design",
    },
    {
      title: "KI-Inhalte fürs Business-Marketing",
      description:
        "KI-generierte Bilder, Produktvisuals und KI-Videos für kampagnentaugliche Ergebnisse im Alltag.",
      href: "/ai-content-creation",
    },
    {
      title: "Webdesign und SEO für kleine Unternehmen",
      description:
        "Mobile-first-Websites mit On-Page-SEO, klarer Struktur und schnellen Ladezeiten für bessere Sichtbarkeit.",
      href: "/web-design",
    },
    {
      title: "Individuelle App-Entwicklung für Unternehmen",
      description:
        "App-Konzepte, Prototyp-Oberflächen und nützliche digitale Werkzeuge für interne und kundenorientierte Abläufe.",
      href: "/application-design-development",
    },
  ],
  it: [
    {
      title: "Grafica per piccole imprese",
      description:
        "Sistemi di logo, direzione del brand e design della comunicazione per un’immagine coerente e affidabile.",
      href: "/graphic-design",
    },
    {
      title: "Contenuti con intelligenza artificiale per il marketing",
      description:
        "Immagini generate con IA, visual di prodotto e video IA pensati per output concreti in campagna.",
      href: "/ai-content-creation",
    },
    {
      title: "Web design e SEO per piccole imprese",
      description:
        "Siti mobile-first con SEO on-page, struttura ottimizzata e caricamento veloce per maggiore visibilità.",
      href: "/web-design",
    },
    {
      title: "Applicazioni su misura per le imprese",
      description:
        "Concept di app, prototipi di interfaccia e strumenti digitali utili per flussi interni e verso il cliente.",
      href: "/application-design-development",
    },
  ],
  sr: [
    {
      title: "Grafički dizajn za mala preduzeća",
      description:
        "Sistemi logotipa, smer brenda i komunikacioni dizajn za dosledan i poverljiv vizuelni utisak.",
      href: "/graphic-design",
    },
    {
      title: "AI sadržaji za poslovni marketing",
      description:
        "AI generisane slike, vizueli proizvoda i AI video sadržaj za praktične kampanjske rezultate.",
      href: "/ai-content-creation",
    },
    {
      title: "Veb dizajn i SEO za mala preduzeća",
      description:
        "Sajtovi mobile-first sa on-page SEO, optimizovanom strukturom i brzim učitavanjem radi bolje vidljivosti.",
      href: "/web-design",
    },
    {
      title: "Prilagođene aplikacije za preduzeća",
      description:
        "Koncepti aplikacija, prototipi interfejsa i korisni digitalni alati za interne i klijentske tokove rada.",
      href: "/application-design-development",
    },
  ],
  al: [
    {
      title: "Dizajn grafik për biznese të vogla",
      description:
        "Sisteme logosh, drejtim brandi dhe dizajn komunikimi për një pamje të qëndrueshme dhe të besueshme.",
      href: "/graphic-design",
    },
    {
      title: "Përmbajtje me IA për marketing biznesi",
      description:
        "Imazhe të gjeneruara me IA, pamje produkti dhe video me IA për rezultate praktike në fushata.",
      href: "/ai-content-creation",
    },
    {
      title: "Dizajn ueb-i dhe SEO për biznese të vogla",
      description:
        "Faqe mobile-first me SEO në faqe, strukturë të optimizuar dhe ngarkim të shpejtë për dukshmëri më të mirë.",
      href: "/web-design",
    },
    {
      title: "Aplikacione të personalizuara për bizneset",
      description:
        "Koncepte aplikacionesh, prototipe ndërfaqe dhe mjete digjitale për rrjedha të brendshme dhe me klientët.",
      href: "/application-design-development",
    },
  ],
};

const copyByLang: Record<ServiceLang, { eyebrow: string; h1: string; intro: string; open: string }> = {
  en: {
    eyebrow: "Services",
    h1: "Professional Creative and Digital Services for Small Businesses",
    intro:
      "This page is your direct entry point to each service area. No portfolio noise here - just clear service scope, deliverables, tools, and a direct contact path.",
    open: "Open service page",
  },
  de: {
    eyebrow: "Leistungen",
    h1: "Professionelle kreative und digitale Services für kleine Unternehmen",
    intro:
      "Diese Seite ist Ihr direkter Einstieg in jeden Leistungsbereich. Kein Portfolio-Overload, sondern klarer Leistungsumfang, konkrete Ergebnisse, eingesetzte Tools und ein direkter Kontaktweg.",
    open: "Service-Seite öffnen",
  },
  it: {
    eyebrow: "Servizi",
    h1: "Servizi creativi e digitali professionali per piccole imprese",
    intro:
      "Questa pagina è il punto di ingresso diretto a ogni area di servizio. Niente rumore da portfolio: solo ambito chiaro, consegne previste, strumenti e un percorso di contatto diretto.",
    open: "Apri pagina servizio",
  },
  sr: {
    eyebrow: "Usluge",
    h1: "Profesionalne kreativne i digitalne usluge za mala preduzeća",
    intro:
      "Ova stranica je direktan ulaz u svaku oblast usluga. Bez portfolio šuma — samo jasan obim usluge, šta se isporučuje, koji se alati koriste i direktan put do kontakta.",
    open: "Otvori stranicu usluge",
  },
  al: {
    eyebrow: "Shërbime",
    h1: "Shërbime kreative dhe digjitale profesionale për biznese të vogla",
    intro:
      "Kjo faqe është hyrja direkte për çdo fushë shërbimi. Pa zhurmë portfolio — vetëm shtrirje e qartë e shërbimit, çfarë dorëzohet, mjetet e përdorura dhe një rrugë e drejtpërdrejtë kontakti.",
    open: "Hap faqen e shërbimit",
  },
};

export default function ServicesPage() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = copyByLang[lang];
  const services = servicesByLang[lang];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f5f4f2]">
      <Navigation />
      <main className="pb-20 pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">{copy.intro}</p>
        </section>

        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950"
                >
                  {copy.open}
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

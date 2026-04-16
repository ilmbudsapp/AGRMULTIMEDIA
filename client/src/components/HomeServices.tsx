import { Link } from "wouter";
import { LayoutGrid, Palette, Sparkles, AppWindow, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

const SERVICE_CARDS = [
  {
    title: "Graphic Design Services",
    description: "Branding systems, logos, and marketing design assets for small businesses.",
    href: "/graphic-design",
    Icon: Palette,
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

const cardTextByLang: Record<ServiceLang, { title: string; description: string }[]> = {
  en: [
    { title: "Graphic design", description: "Branding systems, logos, and marketing design assets for small businesses." },
    { title: "AI content creation", description: "AI-generated images, product visuals, and video assets for campaigns." },
    { title: "Web design & SEO", description: "Mobile-friendly sites with on-page SEO and a clear, optimized structure." },
    { title: "Apps & development", description: "Custom app concepts, internal tools, and prototype interfaces." },
  ],
  de: [
    { title: "Grafikdesign", description: "Branding-Systeme, Logos und Marketing-Design für kleine Unternehmen." },
    { title: "KI-Inhaltserstellung", description: "KI-Bilder, Produktvisuals und KI-Videos für kampagnentaugliche Ergebnisse." },
    { title: "Webdesign & SEO", description: "Mobile-first-Websites mit On-Page-SEO und klar optimierter Struktur." },
    { title: "Apps & Entwicklung", description: "Individuelle App-Konzepte, interne Tools und Prototyp-Oberflächen." },
  ],
  it: [
    { title: "Grafica", description: "Sistemi di brand, logotipi e materiali di comunicazione per piccole imprese." },
    { title: "Contenuti con IA", description: "Immagini, visual di prodotto e video generati con intelligenza artificiale per le campagne." },
    { title: "Web e SEO", description: "Siti ottimizzati per mobile, SEO on-page e struttura chiara." },
    { title: "App e sviluppo", description: "Concept di app, strumenti interni e prototipi di interfaccia." },
  ],
  sr: [
    { title: "Grafički dizajn", description: "Brending sistemi, logotipi i marketinški materijali za mala preduzeća." },
    { title: "AI sadržaj", description: "AI generisane slike, vizueli proizvoda i video materijal za kampanje." },
    { title: "Veb dizajn i SEO", description: "Sajtovi prilagođeni mobilnim uređajima, on-page SEO i jasna struktura." },
    { title: "Aplikacije i razvoj", description: "Koncepti aplikacija, interni alati i prototipi interfejsa." },
  ],
  al: [
    { title: "Dizajn grafik", description: "Sisteme brandi, logo dhe materiale komunikimi për biznese të vogla." },
    { title: "Përmbajtje me IA", description: "Imazhe, pamje produkti dhe video të gjeneruara me IA për fushata." },
    { title: "Ueb-i dhe SEO", description: "Faqe miqësore për celular, SEO në faqe dhe strukturë e optimizuar." },
    { title: "Aplikacione dhe zhvillim", description: "Koncepte aplikacionesh, mjete të brendshme dhe prototipe ndërfaqeje." },
  ],
};

const copyByLang: Record<ServiceLang, { eyebrow: string; title: string; subtitle: string; details: string }> = {
  en: {
    eyebrow: "Services",
    title: "Clear service structure for small business growth",
    subtitle:
      "Choose the exact service you need. Each area has a dedicated page with clear scope, deliverables, tools, and a direct consultation path.",
    details: "View service details",
  },
  de: {
    eyebrow: "Leistungen",
    title: "Klare Service-Struktur für Wachstum kleiner Unternehmen",
    subtitle:
      "Wählen Sie genau die Leistung, die Sie brauchen. Jeder Bereich hat eine eigene Seite mit klarem Umfang, Deliverables, Tools und direktem Beratungsweg.",
    details: "Service-Details ansehen",
  },
  it: {
    eyebrow: "Servizi",
    title: "Struttura servizi chiara per la crescita delle piccole imprese",
    subtitle:
      "Scegli il servizio giusto per te. Ogni area ha una pagina dedicata con scope chiaro, deliverable, tools e percorso di consulenza diretto.",
    details: "Vedi dettagli servizio",
  },
  sr: {
    eyebrow: "Usluge",
    title: "Jasna struktura usluga za rast malih biznisa",
    subtitle:
      "Izaberite tačno uslugu koja vam treba. Svaka oblast ima posebnu stranicu sa jasnim obimom, isporukom, alatima i direktnim putem do konsultacije.",
    details: "Pogledaj detalje usluge",
  },
  al: {
    eyebrow: "Shërbime",
    title: "Strukturë e qartë shërbimesh për rritjen e bizneseve të vogla",
    subtitle:
      "Zgjidh shërbimin që të duhet. Çdo fushë ka faqe të dedikuar me shtrirje të qartë, çfarë dorëzohet, mjetet e përdorura dhe një rrugë të drejtpërdrejtë konsultimi.",
    details: "Shiko detajet e shërbimit",
  },
};

export default function HomeServices() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = copyByLang[lang];
  const cards = cardTextByLang[lang];

  return (
    <section id="services-preview" className="scroll-mt-24 border-t border-neutral-200 bg-[#f8f7f4] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{copy.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">{copy.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map(({ href, Icon }, index) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-[220px] flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{cards[index].title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{cards[index].description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                {copy.details}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

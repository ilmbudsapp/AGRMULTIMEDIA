import { Link } from "wouter";
import { LayoutGrid, Palette, Clapperboard, Sparkles, AppWindow, ArrowRight } from "lucide-react";
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

const cardTextByLang: Record<ServiceLang, { title: string; description: string }[]> = {
  en: [
    { title: "Graphic Design Services", description: "Branding systems, logos, and marketing design assets for small businesses." },
    { title: "Video Editing Services", description: "Professional edits for social media, ads, websites, and product communication." },
    { title: "AI Content Creation Services", description: "AI images, AI product visuals, and AI video assets for business marketing." },
    { title: "Web Design and SEO Services", description: "Mobile-friendly websites with on-page SEO and clear structure optimization." },
    { title: "Application Design and Development Services", description: "Custom app concepts, useful business tools, and prototype interfaces." },
  ],
  de: [
    { title: "Graphic Design Services", description: "Branding-Systeme, Logos und Marketing-Design-Assets für kleine Unternehmen." },
    { title: "Video Editing Services", description: "Professionelles Editing für Social Media, Ads, Websites und Produktkommunikation." },
    { title: "AI Content Creation Services", description: "AI-Bilder, AI-Produktvisuals und AI-Video-Assets für Business-Marketing." },
    { title: "Web Design und SEO Services", description: "Mobile-freundliche Websites mit On-page SEO und klarer Struktur-Optimierung." },
    { title: "Application Design und Development Services", description: "Custom App-Konzepte, nützliche Business-Tools und Prototyp-Interfaces." },
  ],
  it: [
    { title: "Servizi Graphic Design", description: "Sistemi branding, logo e asset di design marketing per piccole imprese." },
    { title: "Servizi Video Editing", description: "Editing professionale per social media, ads, siti web e comunicazione prodotto." },
    { title: "Servizi AI Content Creation", description: "Immagini AI, visual prodotto AI e asset video AI per marketing business." },
    { title: "Servizi Web Design e SEO", description: "Siti mobile-friendly con SEO on-page e ottimizzazione struttura chiara." },
    { title: "Servizi Application Design e Development", description: "Concetti app custom, strumenti business utili e interfacce prototipo." },
  ],
  sr: [
    { title: "Graphic Design usluge", description: "Brending sistemi, logo dizajn i marketinški dizajn materijali za mala preduzeća." },
    { title: "Video Editing usluge", description: "Profesionalni editing za društvene mreže, oglase, sajtove i komunikaciju proizvoda." },
    { title: "AI Content Creation usluge", description: "AI slike, AI product visuals i AI video materijali za poslovni marketing." },
    { title: "Web Design i SEO usluge", description: "Mobile-friendly sajtovi sa on-page SEO i jasnom optimizacijom strukture." },
    { title: "Application Design i Development usluge", description: "Custom app koncepti, korisni business alati i prototip interfejsi." },
  ],
  al: [
    { title: "Shërbime Graphic Design", description: "Sisteme branding, logo dhe materiale dizajni marketingu për biznese të vogla." },
    { title: "Shërbime Video Editing", description: "Editing profesional për social media, ads, faqe web dhe komunikim produkti." },
    { title: "Shërbime AI Content Creation", description: "Imazhe AI, AI product visuals dhe materiale video AI për marketing biznesi." },
    { title: "Shërbime Web Design dhe SEO", description: "Faqe mobile-friendly me SEO on-page dhe optimizim të qartë strukture." },
    { title: "Shërbime Application Design dhe Development", description: "Koncepte app custom, mjete business të dobishme dhe interface prototip." },
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
      "Zgjidh shërbimin që të duhet. Çdo fushë ka faqe të dedikuar me scope të qartë, deliverable, tools dhe rrugë direkte për konsultim.",
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

import { Link } from "wouter";
import { LayoutGrid, Palette, Sparkles, AppWindow, ArrowRight, Film } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

const SERVICE_CARDS = [
  {
    title: "Graphic Design Services",
    description: "Branding systems, logos, and marketing design assets for small businesses.",
    href: "/graphic-design",
    Icon: Palette,
  },
  { title: "AI Content Creation Services", description: "", href: "/ai-content-creation", Icon: Sparkles },
  { title: "Web Design and SEO Services", description: "", href: "/webdesign-seo", Icon: LayoutGrid },
  { title: "Application Design and Development Services", description: "", href: "/application-design-development", Icon: AppWindow },
] as const;

export default function HomeServices() {
  const { currentLanguage, tSpec } = useLanguage();
  const lang = toServiceLang(currentLanguage);

  const serviceLinesByLang: Record<
    ServiceLang,
    { eyebrow: string; heading: string; subtitle: string; details: string }
  > = {
    en: {
      eyebrow: "Services",
      heading: "Our services",
      subtitle:
        "Choose the exact service you need. Each area has a dedicated page with clear scope, deliverables, tools, and a direct consultation path.",
      details: "View service details",
    },
    de: {
      eyebrow: "Leistungen",
      heading: "Unsere Leistungen",
      subtitle:
        "Wahlen Sie die Leistung, die Sie brauchen. Jeder Bereich hat eine eigene Seite mit klarem Umfang, Ergebnissen und direktem Beratungsweg.",
      details: "Service-Details ansehen",
    },
    it: {
      eyebrow: "Servizi",
      heading: "I nostri servizi",
      subtitle:
        "Scegli il servizio giusto. Ogni area ha una pagina dedicata con ambito chiaro, consegne e percorso diretto di consulenza.",
      details: "Vedi dettagli servizio",
    },
    sr: {
      eyebrow: "Usluge",
      heading: "Naše usluge",
      subtitle:
        "Izaberi tačno uslugu koja ti treba. Svaka oblast ima posebnu stranicu sa jasnim obimom, isporukom i direktnim putem do konsultacije.",
      details: "Pogledaj detalje usluge",
    },
    al: {
      eyebrow: "Sherbime",
      heading: "Sherbimet tona",
      subtitle:
        "Zgjidh sherbimin qe te duhet. Cdo fushe ka faqe te dedikuar me shtrirje te qarte dhe rruge direkte konsultimi.",
      details: "Shiko detajet e sherbimit",
    },
  };

  const copy = serviceLinesByLang[lang];
  const cards = [
    { ...SERVICE_CARDS[0], title: tSpec.servicesPreview.graphicBranding.title, description: tSpec.servicesPreview.graphicBranding.description },
    { ...SERVICE_CARDS[1], title: tSpec.servicesPreview.aiContent.title, description: tSpec.servicesPreview.aiContent.description },
    { ...SERVICE_CARDS[2], title: tSpec.servicesPreview.webUi.title, description: tSpec.servicesPreview.webUi.description },
    {
      title: tSpec.servicesVideoEditing.cardTitle,
      description: tSpec.servicesVideoEditing.cardDescription,
      href: "/video-production",
      Icon: Film,
    },
    {
      ...SERVICE_CARDS[3],
      title:
        lang === "de"
          ? "Apps & Entwicklung"
          : lang === "it"
            ? "App e sviluppo"
            : lang === "sr"
              ? "Aplikacije i razvoj"
              : lang === "al"
                ? "Aplikacione dhe zhvillim"
                : "Apps & Development",
      description:
        lang === "de"
          ? "Individuelle App-Konzepte, nutzliche Business-Tools und Prototyp-Oberflachen."
          : lang === "it"
            ? "Concept app personalizzati, strumenti utili per il business e prototipi di interfaccia."
            : lang === "sr"
              ? "Prilagodjeni koncepti aplikacija, korisni poslovni alati i prototipi interfejsa."
              : lang === "al"
                ? "Koncepte aplikacionesh te personalizuara, mjete biznesi dhe prototipe nderfaqesh."
                : "Custom app concepts, useful business tools, and prototype interfaces.",
    },
  ];

  return (
    <section id="services-preview" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">{copy.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{copy.subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="premium-card premium-card-hover group flex min-h-[220px] flex-col p-6"
                aria-label={`${item.title}: ${copy.details}`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#333333] text-blue-200">
                  <ItemIcon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 group-hover:text-white">
                  {copy.details}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

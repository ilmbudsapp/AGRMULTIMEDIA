import { Award, CheckCircle2, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type PricingCopy = {
  heading: string;
  supporting: string;
  priceLabel: string;
  basicDescription: string;
  points: string[];
  aGradeTitle: string;
  aGradeText: string;
  maintenanceTitle: string;
  maintenanceText: string;
  cta: string;
  note: string;
};

const COPY: Record<string, PricingCopy> = {
  en: {
    heading: "Transparent Website Pricing",
    supporting: "One clear starting price — with optional premium SEO and flexible monthly updates.",
    priceLabel: "From €500.00",
    basicDescription: "Basic website including basic SEO optimization.",
    points: [
      "Custom website design",
      "Mobile-responsive layout",
      "Foundational on-page SEO setup",
      "Domain registered separately",
    ],
    aGradeTitle: "A GRADE — full SEO, AEO & GEO",
    aGradeText:
      "For complete SEO, AEO, and GEO optimization — to bring your website to true A GRADE level — pricing is by individual quote (tailored proposal).",
    maintenanceTitle: "Monthly updates & maintenance",
    maintenanceText:
      "Monthly updates: 2 small updates for €30.00/month. If you need more than two updates, pricing is adjusted flexibly based on effort and the number of changes you request.",
    cta: "ORDER YOUR WEBSITE",
    note: "Hosting, extra features, and custom extensions can be discussed individually if needed.",
  },
  de: {
    heading: "Transparente Website-Preise",
    supporting: "Ein klares Startangebot — mit optionaler Premium-SEO und flexiblen monatlichen Updates.",
    priceLabel: "Ab 500,00 €",
    basicDescription: "Basis-Webseite inklusive grundlegender SEO-Optimierung.",
    points: [
      "Individuelles Webdesign",
      "Mobile-optimiertes Layout",
      "Grundlegendes On-Page-SEO-Setup",
      "Domain wird separat bezahlt",
    ],
    aGradeTitle: "A GRADE — SEO, AEO & GEO",
    aGradeText:
      "Für eine vollständige SEO-, AEO- und GEO-Optimierung – um Ihre Webseite auf das absolute „A GRADE“ Level zu bringen – erfolgt der Preis nach Vereinbarung (individuelles Angebot).",
    maintenanceTitle: "Monatliche Aktualisierungen",
    maintenanceText:
      "Monatliche Aktualisierungen: 2 kleine Updates für 30,00 €/Monat. Wenn Sie mehr als zwei Aktualisierungen benötigen, wird der Preis je nach Aufwand und Anzahl der gewünschten Änderungen flexibel angepasst.",
    cta: "WEBSITE JETZT BEAUFTRAGEN",
    note: "Hosting, Zusatzfunktionen und individuelle Erweiterungen können bei Bedarf separat abgestimmt werden.",
  },
  it: {
    heading: "Prezzi trasparenti per il sito web",
    supporting: "Un prezzo iniziale chiaro — con SEO premium opzionale e aggiornamenti mensili flessibili.",
    priceLabel: "Da 500,00 €",
    basicDescription: "Sito web di base con ottimizzazione SEO fondamentale.",
    points: [
      "Design sito personalizzato",
      "Layout responsive per mobile",
      "Setup SEO on-page di base",
      "Dominio pagato separatamente",
    ],
    aGradeTitle: "A GRADE — SEO, AEO e GEO",
    aGradeText:
      "Per un’ottimizzazione completa SEO, AEO e GEO — per portare il sito al livello „A GRADE“ — il prezzo è su preventivo individuale (offerta su misura).",
    maintenanceTitle: "Aggiornamenti mensili",
    maintenanceText:
      "Aggiornamenti mensili: 2 piccoli aggiornamenti a 30,00 €/mese. Se servono più di due aggiornamenti, il prezzo viene adattato in base all’impegno e al numero di modifiche richieste.",
    cta: "ORDINA IL TUO SITO WEB",
    note: "Hosting, funzionalità extra ed estensioni personalizzate possono essere concordati in base alle esigenze.",
  },
  sr: {
    heading: "Transparentne cene web sajta",
    supporting: "Jedna jasna početna cena — sa opcionim premium SEO-om i fleksibilnim mesečnim ažuriranjima.",
    priceLabel: "Od 500,00 €",
    basicDescription: "Osnovni sajt sa osnovnom SEO optimizacijom.",
    points: [
      "Prilagođen dizajn web sajta",
      "Mobile responsive raspored",
      "Osnovni on-page SEO setup",
      "Domen se plaća odvojeno",
    ],
    aGradeTitle: "A GRADE — SEO, AEO i GEO",
    aGradeText:
      "Za celokupnu SEO, AEO i GEO optimizaciju, to jest da vam web stranicu dovedemo do „A GRADE“ nivoa, cena je po dogovoru.",
    maintenanceTitle: "Mesečno ažuriranje",
    maintenanceText:
      "Mesečno ažuriranje: 2 mala mesečna ažuriranja iznose 30,00 €. Ako vam je potrebno više od dva ažuriranja, cena će biti malo veća u zavisnosti od toga koliko ažuriranja želite.",
    cta: "NARUČITE SVOJ WEB SAJT",
    note: "Hosting, dodatne funkcije i prilagođena proširenja mogu se dogovoriti individualno po potrebi.",
  },
  al: {
    heading: "Çmime transparente për faqen web",
    supporting: "Një çmim fillestar i qartë — me SEO premium opsional dhe përditësime mujore fleksibile.",
    priceLabel: "Nga 500,00 €",
    basicDescription: "Faqe web bazike me optimizim SEO themelor.",
    points: [
      "Dizajn i personalizuar i faqes",
      "Strukturë responsive për mobile",
      "SEO on-page themelor",
      "Domeni paguhet veçmas",
    ],
    aGradeTitle: "A GRADE — SEO, AEO dhe GEO",
    aGradeText:
      "Për optimizim të plotë SEO, AEO dhe GEO — për ta çuar faqen në nivelin „A GRADE“ — çmimi është sipas marrëveshjes (ofertë individuale).",
    maintenanceTitle: "Përditësime mujore",
    maintenanceText:
      "Përditësime mujore: 2 përditësime të vogla për 30,00 €/muaj. Nëse ju duhen më shumë se dy përditësime, çmimi rregullohet fleksibilisht sipas përpjekjes dhe numrit të ndryshimeve që kërkoni.",
    cta: "POROSIT FAQEN TUAJ WEB",
    note: "Hosting-u, funksionet shtesë dhe zgjerimet e personalizuara mund të diskutohen veçmas sipas nevojës.",
  },
};

export default function PricingModels() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;

  return (
    <section
      id="pricing-models"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24"
      aria-labelledby="pricing-models-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="pricing-models-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{copy.supporting}</p>
        </header>

        <article className="premium-card mx-auto mt-10 max-w-2xl rounded-2xl p-6 md:p-10">
          <p className="text-4xl font-bold tracking-tight text-blue-200 md:text-5xl">{copy.priceLabel}</p>
          <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">{copy.basicDescription}</p>

          <ul className="mt-6 space-y-2.5">
            {copy.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-blue-300" aria-hidden />
                <span className="text-sm text-white/85 md:text-[0.95rem]">{point}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-8 rounded-xl border border-blue-400/35 bg-blue-500/10 p-5 md:p-6"
            role="note"
              aria-labelledby="pricing-a-grade-title"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <Award className="mt-0.5 h-6 w-6 shrink-0 text-blue-300 md:h-7 md:w-7" aria-hidden />
                <div className="min-w-0">
                  <h3
                    id="pricing-a-grade-title"
                    className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200 md:text-base"
                  >
                    {copy.aGradeTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-[0.95rem]">{copy.aGradeText}</p>
                </div>
              </div>
            </div>

            <div
              className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              role="region"
              aria-labelledby="pricing-maintenance-title"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-white/60 md:h-6 md:w-6" aria-hidden />
                <div className="min-w-0">
                  <h3 id="pricing-maintenance-title" className="text-sm font-semibold text-white md:text-base">
                    {copy.maintenanceTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-[0.95rem]">{copy.maintenanceText}</p>
                </div>
              </div>
            </div>
        </article>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="premium-button inline-flex px-8 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-200 hover:scale-[1.03] md:text-base"
          >
            {copy.cta}
          </a>
          <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-white/65 md:text-sm">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}

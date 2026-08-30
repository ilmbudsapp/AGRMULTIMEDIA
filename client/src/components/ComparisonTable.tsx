import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { Check, X } from "lucide-react";

interface TableCopy {
  title: string;
  subtitle: string;
  columnHeaders: [string, string, string];
  rows: Array<{
    criterion: string;
    baukasten: { text: string; positive: boolean };
    individual: { text: string; positive: boolean };
  }>;
}

const TABLE_COPY: Record<Language, TableCopy> = {
  de: {
    title: "Baukasten vs. Individuelle Website",
    subtitle: "Ehrlicher Vergleich für KMU in der Region:",
    columnHeaders: ["Kriterium", "Baukasten", "Individuelle Website (AGR)"],
    rows: [
      {
        criterion: "Startzeit",
        baukasten: { text: "Schnell online", positive: true },
        individual: { text: "Planung + maßgeschneiderte Umsetzung", positive: true },
      },
      {
        criterion: "SEO / GEO",
        baukasten: { text: "Begrenzt anpassbar", positive: false },
        individual: { text: "Struktur, Schema, AEO/GEO von Anfang an", positive: true },
      },
      {
        criterion: "Performance",
        baukasten: { text: "Abhängig vom Template", positive: false },
        individual: { text: "Optimiert für Core Web Vitals", positive: true },
      },
      {
        criterion: "Design & Vertrauen",
        baukasten: { text: "Standard-Look", positive: false },
        individual: { text: "Individuelles Branding, Referenzen, E-E-A-T", positive: true },
      },
      {
        criterion: "KI-Sichtbarkeit",
        baukasten: { text: "Selten optimiert", positive: false },
        individual: { text: "FAQ, Definitionen, Quellen, klare Antworten", positive: true },
      },
      {
        criterion: "Support",
        baukasten: { text: "Community / Ticket-System", positive: false },
        individual: { text: "Persönlicher Ansprechpartner", positive: true },
      },
    ],
  },
  en: {
    title: "Website Builder vs. Custom Website",
    subtitle: "Honest comparison for SMEs in the region:",
    columnHeaders: ["Criterion", "Builder", "Custom Website (AGR)"],
    rows: [
      {
        criterion: "Time to Launch",
        baukasten: { text: "Quick online", positive: true },
        individual: { text: "Planning + tailored implementation", positive: true },
      },
      {
        criterion: "SEO / GEO",
        baukasten: { text: "Limited customization", positive: false },
        individual: { text: "Structure, Schema, AEO/GEO from start", positive: true },
      },
      {
        criterion: "Performance",
        baukasten: { text: "Template-dependent", positive: false },
        individual: { text: "Optimized for Core Web Vitals", positive: true },
      },
      {
        criterion: "Design & Trust",
        baukasten: { text: "Standard look", positive: false },
        individual: { text: "Individual branding, references, E-E-A-T", positive: true },
      },
      {
        criterion: "AI Visibility",
        baukasten: { text: "Rarely optimized", positive: false },
        individual: { text: "FAQ, definitions, sources, clear answers", positive: true },
      },
      {
        criterion: "Support",
        baukasten: { text: "Community / ticket system", positive: false },
        individual: { text: "Personal contact person", positive: true },
      },
    ],
  },
  "sr-Latn": {
    title: "Builder vs. Individualni Sajt",
    subtitle: "Iskreno poređenje za mala preduzeća u regionu:",
    columnHeaders: ["Kriterijum", "Builder", "Individualni sajt (AGR)"],
    rows: [
      {
        criterion: "Vreme pokretanja",
        baukasten: { text: "Brzo online", positive: true },
        individual: { text: "Planiranje + prilagođena realizacija", positive: true },
      },
      {
        criterion: "SEO / GEO",
        baukasten: { text: "Ograničeno prilagodljiv", positive: false },
        individual: { text: "Struktura, Schema, AEO/GEO od početka", positive: true },
      },
      {
        criterion: "Performanse",
        baukasten: { text: "Zavisi od template-a", positive: false },
        individual: { text: "Optimizovano za Core Web Vitals", positive: true },
      },
      {
        criterion: "Dizajn i poverenje",
        baukasten: { text: "Standardni izgled", positive: false },
        individual: { text: "Individualni brending, reference, E-E-A-T", positive: true },
      },
      {
        criterion: "AI vidljivost",
        baukasten: { text: "Retko optimizovano", positive: false },
        individual: { text: "FAQ, definicije, izvori, jasni odgovori", positive: true },
      },
      {
        criterion: "Podrška",
        baukasten: { text: "Zajednica / sistem tiketa", positive: false },
        individual: { text: "Lična kontakt osoba", positive: true },
      },
    ],
  },
  it: {
    title: "Builder vs. Sito Personalizzato",
    subtitle: "Confronto onesto per PMI nella regione:",
    columnHeaders: ["Criterio", "Builder", "Sito personalizzato (AGR)"],
    rows: [
      {
        criterion: "Tempo di lancio",
        baukasten: { text: "Veloce online", positive: true },
        individual: { text: "Pianificazione + realizzazione su misura", positive: true },
      },
      {
        criterion: "SEO / GEO",
        baukasten: { text: "Personalizzazione limitata", positive: false },
        individual: { text: "Struttura, Schema, AEO/GEO dall'inizio", positive: true },
      },
      {
        criterion: "Prestazioni",
        baukasten: { text: "Dipendente dal template", positive: false },
        individual: { text: "Ottimizzato per Core Web Vitals", positive: true },
      },
      {
        criterion: "Design e fiducia",
        baukasten: { text: "Aspetto standard", positive: false },
        individual: { text: "Branding individuale, referenze, E-E-A-T", positive: true },
      },
      {
        criterion: "Visibilità AI",
        baukasten: { text: "Raramente ottimizzato", positive: false },
        individual: { text: "FAQ, definizioni, fonti, risposte chiare", positive: true },
      },
      {
        criterion: "Supporto",
        baukasten: { text: "Community / sistema ticket", positive: false },
        individual: { text: "Persona di contatto personale", positive: true },
      },
    ],
  },
  sq: {
    title: "Builder vs. Sajt i Personalizuar",
    subtitle: "Krahasim i sinqertë për NVM në rajon:",
    columnHeaders: ["Kriteri", "Builder", "Sajt i personalizuar (AGR)"],
    rows: [
      {
        criterion: "Koha e lancimit",
        baukasten: { text: "Shpejt online", positive: true },
        individual: { text: "Planifikim + zbatim i përshtatur", positive: true },
      },
      {
        criterion: "SEO / GEO",
        baukasten: { text: "Personalizim i kufizuar", positive: false },
        individual: { text: "Strukturë, Schema, AEO/GEO nga fillimi", positive: true },
      },
      {
        criterion: "Performanca",
        baukasten: { text: "Varet nga template", positive: false },
        individual: { text: "Optimizuar për Core Web Vitals", positive: true },
      },
      {
        criterion: "Dizajn dhe besim",
        baukasten: { text: "Pamje standarde", positive: false },
        individual: { text: "Branding individual, referenca, E-E-A-T", positive: true },
      },
      {
        criterion: "Dukshmëria AI",
        baukasten: { text: "Rrallë optimizuar", positive: false },
        individual: { text: "FAQ, përkufizime, burime, përgjigje të qarta", positive: true },
      },
      {
        criterion: "Mbështetje",
        baukasten: { text: "Komuniteti / sistemi i biletave", positive: false },
        individual: { text: "Person kontakti personal", positive: true },
      },
    ],
  },
};

export default function ComparisonTable() {
  const { currentLanguage } = useLanguage();
  const copy = TABLE_COPY[currentLanguage];

  return (
    <section className="border-t border-[#2a2a30] bg-[#0c0c10] py-16 md:py-20" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="comparison-heading"
            className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65 md:text-base">{copy.subtitle}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#2a2a30]">
                {copy.columnHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={`p-4 text-left font-semibold text-white ${
                      index === 0 ? "w-1/3" : "w-1/3 bg-[#111116]"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.rows.map((row, index) => (
                <tr key={index} className="border-b border-[#2a2a30]/50">
                  <td className="p-4 font-medium text-white/90">{row.criterion}</td>
                  <td className="bg-[#111116] p-4">
                    <div className="flex items-start gap-2">
                      {row.baukasten.positive ? (
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                      ) : (
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      )}
                      <span className="text-white/75">{row.baukasten.text}</span>
                    </div>
                  </td>
                  <td className="bg-[#111116] p-4">
                    <div className="flex items-start gap-2">
                      {row.individual.positive ? (
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                      ) : (
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      )}
                      <span className="text-white/75">{row.individual.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

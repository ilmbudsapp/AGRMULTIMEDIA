import { useLanguage } from "@/contexts/LanguageContext";

const TRUST_COPY: Record<
  string,
  {
    h2: string;
    body: string;
  }
> = {
  en: {
    h2: "Helping small businesses grow with modern, fast websites",
    body:
      "We focus on clarity before decoration: structure, performance, and messaging that fits your audience. However, a polished layout alone does not guarantee enquiries—for example, if your calls-to-action are vague, visitors leave. Therefore we align page maps with real goals (calls, forms, bookings). In short: better UX, clearer offers, and technical SEO foundations that support discovery. We personally sanity-check priorities with you before any major design gate.",
  },
  de: {
    h2: "Ich helfe kleinen Unternehmen mit modernen, schnellen Websites zu wachsen",
    body:
      "Zuerst Klarheit, dann Oberfläche: Informationsarchitektur, Performance und Botschaften passend zur Zielgruppe. Allerdings reicht ein schönes Layout allein nicht aus—wenn zum Beispiel CTAs unklar sind, springen Nutzer ab. Deshalb verknüpfen wir Seitenstruktur mit messbaren Zielen (Anruf, Formular, Buchung). Kurz gesagt: bessere UX, klarere Angebote und technische SEO-Basics für Auffindbarkeit.",
  },
  it: {
    h2: "Aiuto le piccole imprese a crescere con siti moderni e veloci",
    body:
      "Mettiamo la chiarezza prima della forma: architettura dell’informazione, performance e messaggi coerenti con il pubblico. Tuttavia, un layout curato da solo non basta—se, ad esempio, le call-to-action sono ambigue, gli utenti escono. Per questo allineiamo la mappa delle pagine a obiettivi reali (chiamate, moduli, prenotazioni). In breve: UX migliore, offerta più chiara e basi SEO tecniche per essere trovati.",
  },
  sr: {
    h2: "Pomažem malim biznisima da rastu uz moderne i brze web stranice",
    body:
      "Prvo jasnoća, pa tek vizuelni šmek: struktura stranica, performanse i poruke prilagođene publici. Međutim, sam „lep” dizajn ne donosi upite ako su pozivi na akciju nejasni—na primer, posetilac ne zna da li da pozove, pošalje formu ili rezerviše. Zato usklađujemo mapu sadržaja sa stvarnim ciljevima (poziv, forma, zakazivanje). Drugim rečima: bolji UX, jasnija ponuda i tehnički SEO temelji koji pomažu da vas klijenti pronađu. Mi lično proveravamo prioritete sa vama pre većih dizajn koraka.",
  },
  al: {
    h2: "Ndihmoj bizneset e vogla të rriten me faqe moderne dhe të shpejta",
    body:
      "Fillojmë nga qartësia para estetikës: arkitektura e informacionit, performanca dhe mesazhet për audiencën. Megjithatë, vetëm një pamje e bukur nuk mjafton—për shembull, nëse thirrjet për veprim janë të paqarta, vizitorët largohen. Prandaj përputhim hartën e faqeve me objektiva të matshëm (telefon, formular, rezervim). Me pak fjalë: UX më i mirë, ofertë më e qartë dhe baza SEO teknike për u gjetur në kërkim.",
  },
};

export default function TrustIntro() {
  const { currentLanguage } = useLanguage();
  const copy = TRUST_COPY[currentLanguage] ?? TRUST_COPY.en;

  return (
    <section id="trust-intro" className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold leading-snug text-white/90 md:text-xl">{copy.h2}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">{copy.body}</p>
      </div>
    </section>
  );
}

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
      "We focus on clarity before decoration: structure, performance, and messaging that fits your audience. However, a polished layout alone does not guarantee enquiries. For example, vague calls-to-action still fail. Therefore we align page maps with real goals like calls, forms, or bookings. In short: better UX, clearer offers, and technical SEO that supports discovery. I believe my experience in brand and site speed gives you an edge. In addition, we keep written clarity on deadlines. We personally sanity-check priorities with you before any major design gate. I trust this mix of craft and data more than style-only work. We also shape pages for AEO (answer-ready excerpts) and GEO (citable claims with sources) alongside Core Web Vitals.",
  },
  de: {
    h2: "Ich helfe kleinen Unternehmen mit modernen, schnellen Websites zu wachsen",
    body:
      "Zuerst Klarheit, dann Oberfläche: Informationsarchitektur, Performance und passende Botschaften. Allerdings reicht schönes Layout allein nicht. Wenn CTAs unklar sind, springen Nutzer ab. Deshalb verbinden wir Seitenstruktur mit messbaren Zielen. Zum Beispiel Anruf, Formular oder Buchung. Kurz: bessere UX, klarere Angebote und technisches SEO. Mein Erfahrungswert in Marke und Performance unterstützt genau das. Zudem halten wir Fristen schriftlich fest. Zusammen prüfen wir Prioritäten vor großen Designschritten. Ich vertraue auf diesen Mix. Zusätzlich strukturieren wir Inhalte für AEO (zitierfähige Antworten) und GEO (belegbare Aussagen) neben Core Web Vitals.",
  },
  it: {
    h2: "Aiuto le piccole imprese a crescere con siti moderni e veloci",
    body:
      "Mettiamo la chiarezza prima della forma: architettura, performance e messaggi coerenti. Tuttavia, un layout curato da solo non basta. Se le call-to-action sono ambigue, l’utente esce. Per questo allineiamo la mappa delle pagine a obiettivi reali. Ad esempio chiamate, moduli o prenotazioni. In breve: UX migliore, offerta più chiara e SEO tecnico. La mia esperienza su brand e velocità aiuta qui. Inoltre garantiamo chiarezza scritta sulle scadenze. Controlliamo insieme le priorità prima delle prove più grandi. Io credo in questo equilibrio. Strutturiamo anche i testi per AEO (estratti pronti alle risposte) e GEO (affermazioni verificabili con fonti) insieme ai Core Web Vitals.",
  },
  sr: {
    h2: "Pomažem malim biznisima da rastu uz moderne i brze web stranice",
    body:
      "Prvo dolazi jasnoća, pa tek lepa pozadina. Struktura stranica, performanse i poruke prate vašu publiku. Međutim, sam „lep” dizajn ne donosi upite ako pozivi na akciju nisu jasni. Na primer, posetilac ne zna da li da pozove, pošalje formu ili rezerviše. Zato usklađujemo mapu sadržaja sa jasnim ciljevima. Ti ciljevi su poziv, forma ili zakazivanje. Drugim rečima: bolji UX i tehnički SEO koji pomažu da vas pronađu. Mi lično proveravamo prioritete sa vama pre većih dizajn koraka. Ja verujem da moje iskustvo u brendu i brzini sajta daje prednost. Pored toga, mi garantujemo jasnu komunikaciju o rokovima u pisanom obliku. Stoga spajamo estetiku i merljivost, a ne samo lep ekran. Dodatno gradimo stranice i za AEO (izvodljivi citati) i za GEO (tvrdnje sa izvorima) uz Core Web Vitals.",
  },
  al: {
    h2: "Ndihmoj bizneset e vogla të rriten me faqe moderne dhe të shpejta",
    body:
      "Fillojmë nga qartësia para estetikës: arkitektura e informacionit, performanca dhe mesazhet e përshtatshme. Megjithatë, një pamje e bukur nuk mjafton vetëm. Nëse thirrjet për veprim janë të paqarta, vizitorët largohen. Prandaj përputhim hartën e faqeve me objektiva të matshëm. Për shembull, telefon, formular ose rezervim. Me pak fjalë: UX më i mirë, ofertë më e qartë dhe SEO teknike. Unë besoj se eksperienca ime në markë dhe shpejtësi ndihmon. Për më tepër, ne garantojmë qartësi me shkrim mbi afatet. Së bashku verifikojmë prioritetet para hapave të mëdhenj. Strukturojmë edhe për AEO (citime të nxjerrshme) dhe GEO (pretitime me burime) së bashku me Core Web Vitals.",
  },
};

export default function TrustIntro() {
  const { currentLanguage } = useLanguage();
  const copy = TRUST_COPY[currentLanguage] ?? TRUST_COPY.en;

  return (
    <section id="trust-intro" className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold leading-snug text-white/90 md:text-xl">{copy.h2}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white md:text-base">{copy.body}</p>
      </div>
    </section>
  );
}

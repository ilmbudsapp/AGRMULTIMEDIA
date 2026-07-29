import type { Language } from "@/lib/i18n";

type LangKey = "sr" | "en" | "de" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

export type HomeConclusionCopy = {
  takeawaysTitle: string;
  takeaways: string[];
  conclusionTitle: string;
  conclusion: string;
  actionTitle: string;
  actions: string[];
  whoTitle: string;
  whoFor: string;
  whatTitle: string;
  whatWeDo: string;
};

const en: HomeConclusionCopy = {
  takeawaysTitle: "Key takeaways",
  takeaways: [
    "We combine web design, graphics, and AI workflows with technical SEO, AEO, and GEO.",
    "You get answer-first structure, sourced claims where it matters, and human QA before launch.",
    "We usually reply within 24 hours on business days with a clear written scope.",
  ],
  conclusionTitle: "Conclusion",
  conclusion:
    "In short, we help SMEs in Germany and the EU look credible online and get found by both search engines and AI systems. Therefore the next step is simple: tell us your goal and we propose a realistic path — no obligation.",
  actionTitle: "What you should do next",
  actions: [
    "Send one message with your goal (calls, forms, bookings) and your deadline.",
    "Share two or three reference sites and any logo or photo files you already have.",
    "Book a free consultation — we align structure before visual design.",
  ],
  whoTitle: "Who this is for",
  whoFor:
    "Small businesses, local services, crafts, retail, and founders who want a professional site without agency overhead. If your goal is only a placeholder page, we will say so honestly.",
  whatTitle: "What we do",
  whatWeDo:
    "Service: web design · Focus: SEO, AEO, GEO · Ideal for: SMEs in DE/EU · Location: Geislingen an der Steige · Languages: sr, en, de, it, sq.",
};

const sr: HomeConclusionCopy = {
  takeawaysTitle: "Ključne poruke",
  takeaways: [
    "Mi spajamo web dizajn, grafiku i AI tokove sa tehničkim SEO, AEO i GEO.",
    "Dobijate strukturu „odgovor prvo“, tvrdnje sa izvorima gde je važno i ljudsku QA pre objave.",
    "Na upit obično odgovaramo u roku od 24 sata radnim danima, sa jasnim pisanim obimom.",
  ],
  conclusionTitle: "Zaključak",
  conclusion:
    "Ukratko, pomažemo malim preduzećima u Nemačkoj i EU da online izgledaju pouzdano i da ih pronađu i pretraživači i AI sistemi. Stoga je sledeći korak jednostavan: napišite cilj i mi predlažemo realan put — bez obaveze.",
  actionTitle: "Šta da uradite sledeće",
  actions: [
    "Pošaljite jednu poruku sa ciljem (pozivi, forme, rezervacije) i rokom.",
    "Podelite dva-tri referentna sajta i logo ili fotografije koje već imate.",
    "Zakažite besplatnu konsultaciju — strukturu usklađujemo pre finalnog dizajna.",
  ],
  whoTitle: "Za koga je ovo",
  whoFor:
    "Mala preduzeća, lokalne usluge, zanatlije, maloprodaja i osnivači koji žele profesionalan sajt bez agencijskog overhead-a. Ako vam treba samo placeholder, reći ćemo iskreno.",
  whatTitle: "Šta radimo",
  whatWeDo:
    "Usluga: web dizajn · Fokus: SEO, AEO, GEO · Idealno za: SME u DE/EU · Lokacija: Geislingen an der Steige · Jezici: sr, en, de, it, sq.",
};

const de: HomeConclusionCopy = {
  takeawaysTitle: "Kernaussagen",
  takeaways: [
    "Wir verbinden Webdesign, Grafik und KI-Workflows mit technischem SEO, AEO und GEO.",
    "Sie erhalten Antwort-zuerst-Struktur, belegte Aussagen wo nötig und menschliche QA vor dem Launch.",
    "Auf Anfragen antworten wir werktags meist innerhalb von 24 Stunden mit klarem schriftlichem Umfang.",
  ],
  conclusionTitle: "Fazit",
  conclusion:
    "Kurz: Wir helfen KMU in Deutschland und der EU, online glaubwürdig zu wirken und von Suchmaschinen und KI gefunden zu werden. Der nächste Schritt: Ziel nennen — wir schlagen einen realistischen Weg vor, unverbindlich.",
  actionTitle: "Ihre nächsten Schritte",
  actions: [
    "Eine Nachricht mit Ziel (Anrufe, Formulare, Buchungen) und Termin senden.",
    "Zwei bis drei Referenzsites plus vorhandene Logos oder Fotos teilen.",
    "Kostenlose Beratung buchen — Struktur vor Visual Design.",
  ],
  whoTitle: "Für wen",
  whoFor:
    "Kleine Unternehmen, lokale Dienste, Handwerk, Einzelhandel und Gründer ohne Agentur-Overhead. Brauchen Sie nur eine Platzhalter-Seite, sagen wir das ehrlich.",
  whatTitle: "Was wir tun",
  whatWeDo:
    "Leistung: Webdesign · Fokus: SEO, AEO, GEO · Ideal für: KMU in DE/EU · Standort: Geislingen an der Steige · Sprachen: sr, en, de, it, sq.",
};

const it: HomeConclusionCopy = {
  takeawaysTitle: "Takeaway chiave",
  takeaways: [
    "Uniamo web design, grafica e workflow AI con SEO tecnico, AEO e GEO.",
    "Ricevete struttura answer-first, affermazioni con fonte dove serve e QA umana prima del go-live.",
    "Di solito rispondiamo entro 24 ore nei giorni lavorativi con scope scritto chiaro.",
  ],
  conclusionTitle: "Conclusione",
  conclusion:
    "In breve, aiutiamo le PMI in Germania e UE a essere credibili online e trovabili da motori di ricerca e AI. Il passo successivo: indicate l’obiettivo — proponiamo un percorso realistico, senza obbligo.",
  actionTitle: "Cosa fare ora",
  actions: [
    "Inviate un messaggio con obiettivo (chiamate, moduli, prenotazioni) e scadenza.",
    "Condividete due-tre siti di riferimento e file logo o foto esistenti.",
    "Prenotate una consulenza gratuita — struttura prima del design visivo.",
  ],
  whoTitle: "Per chi",
  whoFor:
    "Piccole imprese, servizi locali, artigiani, retail e founder che vogliono un sito professionale senza overhead da agenzia.",
  whatTitle: "Cosa facciamo",
  whatWeDo:
    "Servizio: web design · Focus: SEO, AEO, GEO · Ideale per: PMI in DE/UE · Sede: Geislingen an der Steige · Lingue: sr, en, de, it, sq.",
};

const al: HomeConclusionCopy = {
  takeawaysTitle: "Mesazhe kyçe",
  takeaways: [
    "Ne lidhim web design, grafikë dhe rrjedha AI me SEO teknik, AEO dhe GEO.",
    "Merrni strukturë përgjigje-së-pari, pretendime me burim ku duhet dhe QA njerëzore para publikimit.",
    "Zakonisht përgjigjemi brenda 24 orëve në ditët e punës me fushëveprim të qartë me shkrim.",
  ],
  conclusionTitle: "Përfundim",
  conclusion:
    "Shkurt, ndihmojmë SME në Gjermani dhe BE të duken besueshëm online dhe të gjenden nga motorët e kërkimit dhe AI. Hapi tjetër: tregoni qëllimin — propozojmë rrugë realiste, pa detyrim.",
  actionTitle: "Çfarë të bëni tani",
  actions: [
    "Dërgoni një mesazh me qëllim (thirrje, forma, rezervime) dhe afat.",
    "Ndani dy-tre sajte referencë dhe logo ose foto ekzistuese.",
    "Rezervoni konsultë falas — strukturën e rregullojmë para dizajnit vizual.",
  ],
  whoTitle: "Për kë",
  whoFor:
    "Biznese të vogla, shërbime lokale, zejtari, retail dhe themelues që duan sajt profesional pa overhead agjencie.",
  whatTitle: "Çfarë bëjmë",
  whatWeDo:
    "Shërbim: web design · Fokus: SEO, AEO, GEO · Ideal për: SME në DE/BE · Vendndodhja: Geislingen an der Steige · Gjuhët: sr, en, de, it, sq.",
};

const BY_LANG: Record<LangKey, HomeConclusionCopy> = { en, de, sr, it, al };

export function getHomeConclusionCopy(lang: Language): HomeConclusionCopy {
  return BY_LANG[langKey(lang)] ?? en;
}

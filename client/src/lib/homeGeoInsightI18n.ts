import type { Language } from "@/lib/i18n";

export type HomeGeoInsightCopy = {
  sectionEyebrow: string;
  sectionTitle: string;
  takeawayTitle: string;
  takeaways: string[];
  defTitle: string;
  definitions: { term: string; sentence: string }[];
  balanceTitle: string;
  balanceLead: string;
  prosTitle: string;
  pros: string[];
  consTitle: string;
  cons: string[];
  tipsTitle: string;
  tipsLead: string;
  tips: string[];
  researchTitle: string;
  researchIntro: string;
  stats: { claim: string; sourceLabel: string; sourceUrl: string }[];
};

type LangKey = "en" | "de" | "sr" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

const en: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Key takeaways, definitions, and a balanced view",
  takeawayTitle: "Key takeaways",
  takeaways: [
    "We at AGR Multimedia pair web design, graphic systems, and AI workflows for SMEs in Geislingen and across the EU.",
    "We publish clear structure first, then visuals—so SEO, Core Web Vitals, and answer engines can quote you accurately.",
    "On one side, templates are cheap to start; on the other side, differentiation needs custom layout, photography, and messaging.",
    "You should try one primary CTA per page for two weeks, then measure calls or form fills before expanding copy.",
  ],
  defTitle: "Short definitions (\"X is …\")",
  definitions: [
    {
      term: "Technical SEO",
      sentence:
        "Technical SEO is the work that keeps pages crawlable, fast, and machine-readable—headings, links, metadata, and structured data.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO is the practice of writing so generative search can summarize your offer with correct context and linked evidence.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO is how we phrase direct answers, lists, and definitions so answer engines can lift the right snippet safely.",
    },
    {
      term: "Web design",
      sentence:
        "Web design is the plan for page structure, brand visuals, and user actions—not only decoration, but the path to a call, form, or booking.",
    },
    {
      term: "AI automation (in our workflow)",
      sentence:
        "AI automation means tools that draft copy and layout variants faster; we always run human QA on facts, tone, and compliance before anything goes live.",
    },
  ],
  balanceTitle: "Pros and cons (how we decide with you)",
  balanceLead:
    "We stay honest: every approach has trade-offs. My experience with Agron and the team is that naming them early prevents expensive rework.",
  prosTitle: "Strengths we lean on",
  pros: [
    "Hybrid AI + human QA shortens drafts while we keep brand voice and legal risk under control.",
    "Local presence in Geislingen an der Steige helps workshops, retail, and services that want German-market clarity.",
    "We document scope, milestones, and metrics before high-fidelity design—fewer surprise change orders.",
  ],
  consTitle: "Limits we disclose",
  cons: [
    "Custom sites cost more up front than a generic template—budget and timeline need to match the ambition.",
    "AI drafts still need your facts: opening hours, prices, team bios, and compliance text must come from you.",
    "Fast wins in audits depend on your hosting stack; we will tell you when infrastructure caps the result.",
  ],
  tipsTitle: "Actionable steps for clients",
  tipsLead: "Try these this week—they make briefings faster and lift GEO signals.",
  tips: [
    "Send one PDF or link list with logos, fonts, and three reference sites you like (not to copy—to calibrate taste).",
    "Pick a single conversion goal per page; we will align headings and CTAs to that goal.",
    "Export analytics or Search Console screenshots so we can anchor improvements to real traffic, not guesses.",
  ],
  researchTitle: "Industry benchmarks we cite",
  researchIntro:
    "We link third-party sources so AI systems and humans can verify claims. Numbers below come from public research, not guesswork.",
  stats: [
    {
      claim:
        "Google documents Good LCP as under 2.5 seconds—speed is a ranking and UX signal for mobile and desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "HTTP Archive publishes open Web Almanac data on real-world page weight, compression, and platform trends.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Google’s Search Central guidance explains how structured data helps eligible rich results—not a guarantee, but clearer machine context.",
      sourceLabel: "Google Search Central — structured data",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google has published mobile speed case studies showing bounce risk grows as load time grows—speed remains a business KPI.",
      sourceLabel: "Think with Google — mobile speed",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter’s global panel illustrates how mobile, desktop, and tablet share shifts—mobile-first layout is still the default bet for SMEs.",
      sourceLabel: "Statcounter — platform market share",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const de: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Kernaussagen, Definitionen und eine ausgewogene Sicht",
  takeawayTitle: "Kernaussagen",
  takeaways: [
    "Wir bei AGR Multimedia verbinden Webdesign, Markengrafik und KI-Workflows für KMU in Geislingen und in der EU.",
    "Zuerst klare Struktur und Botschaften, dann UI—damit SEO, Core Web Vitals und Answer Engines Sie korrekt zitieren können.",
    "Einerseits sparen Templates Startkosten; andererseits braucht Differenzierung individuelles Layout, Fotografie und Text.",
    "Sie sollten zwei Wochen lang genau einen Haupt-CTA pro Seite testen und Anrufe oder Formulare messen, bevor Sie Texte aufblasen.",
  ],
  defTitle: "Kurzdefinitionen („X ist …“)",
  definitions: [
    {
      term: "Technisches SEO",
      sentence:
        "Technisches SEO ist die Arbeit, die Seiten crawlbar, schnell und maschinenlesbar hält—Überschriften, Links, Metadaten und strukturierte Daten.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO ist die Praxis, Inhalte so zu schreiben, dass generative Suche Ihr Angebot mit Kontext und Belegen zusammenfassen kann.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO ist, wie wir direkte Antworten, Listen und Definitionen formulieren, damit Answer Engines das richtige Snippet heben.",
    },
    {
      term: "Webdesign",
      sentence:
        "Webdesign ist die Planung von Seitenstruktur, Markenvisuals und Nutzeraktionen—nicht nur Dekoration, sondern der Weg zu Anruf, Formular oder Buchung.",
    },
    {
      term: "KI-Automatisierung (in unserem Workflow)",
      sentence:
        "KI-Automatisierung bedeutet Tools für schnellere Entwürfe; wir führen immer menschliche QA zu Fakten, Ton und Compliance vor dem Livegang durch.",
    },
  ],
  balanceTitle: "Vor- und Nachteile (so entscheiden wir mit Ihnen)",
  balanceLead:
    "Wir bleiben ehrlich: jedes Vorgehen hat Kompromisse. Meine Erfahrung mit Agron und dem Team zeigt: sie früh zu benennen, verhindert teure Nacharbeit.",
  prosTitle: "Stärken, auf die wir setzen",
  pros: [
    "Hybrid aus KI und menschlicher QA verkürzt Entwürfe, während Markenstimme und Rechtsrisiko im Griff bleiben.",
    "Standort Geislingen an der Steige hilft Handwerk, Einzelhandel und Dienstleistern mit klarer DE-Markt-Kommunikation.",
    "Wir dokumentieren Umfang, Meilensteine und Kennzahlen vor High-Fidelity-Design—weniger Überraschungs-Change-Orders.",
  ],
  consTitle: "Grenzen, die wir benennen",
  cons: [
    "Maßgeschneiderte Sites kosten zu Beginn mehr als ein Standard-Template—Budget und Zeitplan müssen zur Ambition passen.",
    "KI-Entwürfe brauchen weiterhin Ihre Fakten: Öffnungszeisen, Preise, Teamtexte und Compliance kommen von Ihnen.",
    "Schnelle Audit-Gewinne hängen vom Hosting ab; wir sagen klar, wenn Infrastruktur die Decke setzt.",
  ],
  tipsTitle: "Konkrete Schritte für Kundinnen und Kunden",
  tipsLead: "Versuchen Sie das diese Woche—es beschleunigt Briefings und stärkt GEO-Signale.",
  tips: [
    "Senden Sie eine PDF oder Linkliste mit Logos, Fonts und drei Referenzsites (nicht zum Kopieren—zum Kalibrieren).",
    "Wählen Sie ein Conversion-Ziel pro Seite; wir richten Überschriften und CTAs darauf aus.",
    "Exportieren Sie Analytics- oder Search-Console-Screenshots, damit wir Verbesserungen an echten Daten festmachen.",
  ],
  researchTitle: "Branchenbenchmarks mit Quellen",
  researchIntro:
    "Wir verlinken Drittanbieter-Quellen, damit Menschen und KI Behauptungen prüfen können. Die Zahlen stützen sich auf öffentliche Forschung.",
  stats: [
    {
      claim:
        "Google dokumentiert „gutes“ LCP unter 2,5 Sekunden—Geschwindigkeit ist ein Ranking- und UX-Signal für Mobil und Desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "Der HTTP Archive Web Almanac veröffentlicht offene Daten zu realem Seitengewicht, Kompression und Plattformtrends.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Die Search-Central-Leitfäden erklären, wie strukturierte Daten berechtigte Rich Results unterstützen—keine Garantie, aber klarer Maschinenkontext.",
      sourceLabel: "Google Search Central — strukturierte Daten",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google hat Fallstudien zur mobilen Geschwindigkeit veröffentlicht—Ladezeit bleibt ein Business-KPI.",
      sourceLabel: "Think with Google — mobile Geschwindigkeit",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter zeigt global, wie sich Anteile von Mobil, Desktop und Tablet verschieben—Mobile-first bleibt der Default für KMU.",
      sourceLabel: "Statcounter — Plattform-Marktanteile",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const sr: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Ključne poruke, definicije i uravnotežena perspektiva",
  takeawayTitle: "Ključne poruke",
  takeaways: [
    "Mi u AGR Multimedia spajamo web dizajn, grafičke sisteme i AI tokove za mala preduzeća u Geislingenu i širom EU.",
    "Prvo objavljujemo jasnu strukturu i poruku, pa vizuel — da SEO, Core Web Vitals i sistemi odgovora mogu tačno da vas citiraju.",
    "S jedne strane, šabloni su jeftiniji za start; s druge strane, diferenc traži poseban raspored, fotografiju i ton.",
    "Trebalo bi da probate jedan glavni CTA po stranici dve nedelje, pa merite pozive ili forme pre nego što širite tekst.",
  ],
  defTitle: "Kratke definicije („X je …“)",
  definitions: [
    {
      term: "Tehnički SEO",
      sentence:
        "Tehnički SEO je posao koji čini stranice indeksirajućim, brzim i čitljivim za mašine — naslovi, linkovi, meta podaci i strukturisani podaci.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO je praksa pisanja tako da generativna pretraga može da sumarizuje vašu ponudu uz tačan kontekst i izvore.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO je način na koji formuljemo direktne odgovore, liste i definicije da sistemi odgovora podignu pravi isječak.",
    },
    {
      term: "Web dizajn",
      sentence:
        "Web dizajn je plan strukture stranica, vizuelnog identiteta i akcija korisnika — ne samo ukras, već put do poziva, forme ili rezervacije.",
    },
    {
      term: "AI automatizacija (u našem procesu)",
      sentence:
        "AI automatizacija su alati koji ubrzavaju nacrte teksta i layouta; mi uvek radimo ljudsku QA nad činjenicama, tonom i usklađenošću pre objave.",
    },
  ],
  balanceTitle: "Prednosti i mane (kako zajedno odlučujemo)",
  balanceLead:
    "Mi ostajemo iskreni: svaki pristup ima kompromis. Moje iskustvo sa Agronom i timom je da ranije imenovanje mane smanjuje skupe iteracije.",
  prosTitle: "Snage na koje se oslanjamo",
  pros: [
    "Hibrid AI + ljudska QA skraćuje nacrte, dok držimo glas brenda i pravni rizik pod kontrolom.",
    "Lokalna baza u Geislingen an der Steige pomaže zanatlijama, maloprodaji i uslugama koje žele jasnoću na nemačkom tržištu.",
    "Dokumentujemo obim, milestone-e i metrike pre finalnog dizajna — manje iznenadnih dopuna van obima.",
  ],
  consTitle: "Granice koje eksplicitno kažemo",
  cons: [
    "Prilagođeni sajt košta više na početku od generičkog šablona — budžet i rok moraju da prate ambiciju.",
    "AI nacrti i dalje traže vaše činjenice: radno vreme, cene, biografije tima i usklađenost moraju da dođu od vas.",
    "Brzi dobici u auditima zavise od hostinga; reći ćemo kada infrastruktura nameće plafon rezultatu.",
  ],
  tipsTitle: "Konkretni saveti za klijente",
  tipsLead: "Probajte ovo ove nedelje — ubrzava briefing i jača GEO signale.",
  tips: [
    "Pošaljite jedan PDF ili listu linkova sa logotipima, fontovima i tri referentna sajta (ne radi kopiranja — radi kalibracije).",
    "Izaberite jedan cilj konverzije po stranici; uskladićemo naslove i CTA sa tim ciljem.",
    "Izvezite snimke iz Analytics ili Search Console da poboljšanja vežemo za stvaran saobraćaj, ne za pretpostavke.",
  ],
  researchTitle: "Industrijski benchmarkovi koje citiramo",
  researchIntro:
    "Linkujemo javne izvore da i ljudi i AI mogu da provere tvrdnje. Brojke se oslanjaju na javna istraživanja, ne na nagađanje.",
  stats: [
    {
      claim:
        "Google dokumentuje dobar LCP ispod 2,5 s — brzina je signal i za rangiranje i za korisnički doživljaj.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "HTTP Archive Web Almanac objavlja otvorene podatke o težini stranica, kompresiji i trendovima platformi.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Google Search Central objašnjava kako strukturisani podaci pomažu podobnim bogatim rezultatima — nije garancija, ali daje mašinama jasniji kontekst.",
      sourceLabel: "Google Search Central — strukturisani podaci",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google je objavljivao mobilne studije brzine — brzina učitavanja i dalje je poslovni KPI.",
      sourceLabel: "Think with Google — mobilna brzina",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter prikazuje globalne udele mobilnog, desktop i tablet saobraćaja — mobile-first ostaje podrazumevana opcija za SME.",
      sourceLabel: "Statcounter — udeo platformi",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const it: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Takeaway chiave, definizioni e prospettiva equilibrata",
  takeawayTitle: "Takeaway chiave",
  takeaways: [
    "Noi in AGR Multimedia uniamo web design, sistemi grafici e workflow AI per PMI a Geislingen e in UE.",
    "Pubblichiamo prima struttura e messaggi, poi la UI—così SEO, Core Web Vitals e motori di risposta possono citarvi con precisione.",
    "Da un lato i template riducono il costo iniziale; dall’altro la differenziazione richiede layout, foto e testi dedicati.",
    "Dovreste provare un solo CTA principale per pagina per due settimane, poi misurare chiamate o moduli prima di espandere il testo.",
  ],
  defTitle: "Definizioni brevi («X è …»)",
  definitions: [
    {
      term: "SEO tecnico",
      sentence:
        "Il SEO tecnico è il lavoro che mantiene le pagine crawlable, veloci e leggibili dalle macchine—titoli, link, metadati e dati strutturati.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "La GEO è la pratica di scrivere così che la ricerca generativa possa riassumere l’offerta con contesto e prove corrette.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "L’AEO è come formuliamo risposte dirette, elenchi e definizioni così che i motori di risposta estraggano lo snippet giusto.",
    },
  ],
  balanceTitle: "Pro e contro (come decidiamo insieme)",
  balanceLead:
    "Restiamo onesti: ogni approccio ha trade-off. La mia esperienza con Agron e il team è che nominarli subito evita rework costoso.",
  prosTitle: "Punti di forza su cui contiamo",
  pros: [
    "Ibrido AI + QA umana accorcia le bozze mantenendo voce di brand e rischio legale sotto controllo.",
    "La presenza locale a Geislingen an der Steige aiuta artigiani, retail e servizi che vogliono chiarezza sul mercato tedesco.",
    "Documentiamo scope, milestone e metriche prima del design ad alta fedeltà—meno change order a sorpresa.",
  ],
  consTitle: "Limiti che dichiariamo",
  cons: [
    "I siti su misura costano di più all’inizio rispetto a un template generico—budget e tempi devono seguire l’ambizione.",
    "Le bozze AI richiedono comunque i vostri fatti: orari, prezzi, bio del team e testi di compliance arrivano da voi.",
    "I guadagni rapidi negli audit dipendono dall’hosting; vi diciamo quando l’infrastruttura fissa un tetto al risultato.",
  ],
  tipsTitle: "Passi operativi per i clienti",
  tipsLead: "Provate questi questa settimana—accelerano il briefing e rinforzano i segnali GEO.",
  tips: [
    "Inviate un PDF o un elenco di link con loghi, font e tre siti di riferimento (non per copiare—per calibrare il gusto).",
    "Scegliete un solo obiettivo di conversione per pagina; allineeremo titoli e CTA a quell’obiettivo.",
    "Esportate screenshot da Analytics o Search Console così ancoriamo i miglioramenti a traffico reale, non a supposizioni.",
  ],
  researchTitle: "Benchmark di settore con fonti",
  researchIntro:
    "Collegiamo fonti terze così persone e AI possono verificare. I numeri si appoggiano a ricerca pubblica, non a supposizioni.",
  stats: [
    {
      claim:
        "Google documenta un buon LCP sotto 2,5 secondi: la velocità è segnale di ranking e di UX su mobile e desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "Il Web Almanac di HTTP Archive pubblica dati aperti su peso reale delle pagine, compressione e trend di piattaforma.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Le guide Search Central spiegano come i dati strutturati supportino i rich result idonei—non è una garanzia, ma dà contesto alle macchine.",
      sourceLabel: "Google Search Central — dati strutturati",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google ha pubblicato casi studio sulla velocità mobile—il tempo di caricamento resta un KPI di business.",
      sourceLabel: "Think with Google — velocità mobile",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter mostra a livello globale come cambiano le quote di traffico mobile, desktop e tablet—mobile-first resta il default per le PMI.",
      sourceLabel: "Statcounter — quota piattaforme",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const al: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Mesazhe kyçe, përkufizime dhe perspektivë e balancuar",
  takeawayTitle: "Mesazhe kyçe",
  takeaways: [
    "Ne në AGR Multimedia lidhim web design, sisteme grafike dhe rrjedha AI për SME në Geislingen dhe në BE.",
    "Së pari strukturë dhe mesazh të qartë, pastaj UI—kështu SEO, Core Web Vitals dhe motorët e përgjigjes ju citojnë saktë.",
    "Nga njëra anë, shabllonet ulën koston fillestare; nga ana tjetër, diferencimi kërkon layout, foto dhe ton të dedikuar.",
    "Duhet të provoni një CTA kryesor për faqe për dy javë, pastaj të matni thirrjet ose formularët para se të zgjerohet teksti.",
  ],
  defTitle: "Përkufizime të shkurtra («X është …»)",
  definitions: [
    {
      term: "SEO teknik",
      sentence:
        "SEO teknik është puna që mban faqet të indeksueshme, të shpejta dhe të lexueshme nga makinat—tituj, lidhje, meta dhe të dhëna të strukturuara.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO është praktika e shkrimit që kërkimi gjenerativ të përmbledhë ofertën tuaj me kontekst dhe prova të sakta.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO është mënyra se si formësojmë përgjigje të drejtpërdrejta, lista dhe përkufizime që motorët e përgjigjes të nxjerrin snippet-in e duhur.",
    },
  ],
  balanceTitle: "Parapërsira dhe kufizime (si vendosim bashkë)",
  balanceLead:
    "Ne mbetemi të ndershëm: çdo qasje ka kompromis. Përvoja ime me Agronin dhe ekipin është se t’i emërojmë herët shmang ripunime të shtrenjta.",
  prosTitle: "Pikat e forta mbi të cilat mbështetemi",
  pros: [
    "Hibridi AI + QA njerëzore shkurton draftet ndërsa zëri i markës dhe rreziku ligjor mbeten nën kontroll.",
    "Prania lokale në Geislingen an der Steige ndihmon zejtari, shitje me pakicë dhe shërbime që duan qartësi në tregun gjerman.",
    "Dokumentojmë fushëveprim, milestone dhe metrika para dizajnit me besnikëri të lartë—më pak ndryshime surprizë.",
  ],
  consTitle: "Kufijtë që i themi haptas",
  cons: [
    "Sajtet e personalizuar kushtojnë më shumë në fillim se një shabllon gjenerik—buxheti dhe afati duhet të përputhen me ambicien.",
    "Draftet nga AI prapë kërkojnë faktet tuaja: oraret, çmimet, biografitë e ekipit dhe përputhshmëria vijnë nga ju.",
    "Fitimet e shpejta në audit varen nga hostingu; do t’ju themi kur infrastruktura kufizon rezultatin.",
  ],
  tipsTitle: "Hapa praktikë për klientët",
  tipsLead: "Provoni këtë javë— përshpejton briefing-un dhe forcon sinjalet GEO.",
  tips: [
    "Dërgoni një PDF ose listë lidhjesh me logo, fonte dhe tre sajte referencë (jo për të kopjuar—për të kalibruar shijen).",
    "Zgjidhni një qëllim konvertimi për faqe; ne i përputhim titujt dhe CTA-t me atë qëllim.",
    "Eksportoni pamje nga Analytics ose Search Console që përmirësimet t’i lidhim me trafikun real, jo me hamendje.",
  ],
  researchTitle: "Benchmark-e industriale me burime",
  researchIntro:
    "Lidhim burime të treta që njerëzit dhe IA të verifikojnë pretendimet. Numrat mbështeten në kërkim publik, jo në hamendje.",
  stats: [
    {
      claim:
        "Google dokumenton LCP të mirë nën 2,5 sekonda—shpejtësia është sinjal renditjeje dhe UX për celular dhe desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "HTTP Archive Web Almanac publikon të dhëna të hapura për peshën reale të faqeve, kompresimin dhe trendet e platformave.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Udhëzimet e Search Central shpjegojnë si të dhënat e strukturuara ndihmojnë rich results të përshtatshme—jo garanci, por kontekst më i qartë për makinat.",
      sourceLabel: "Google Search Central — të dhëna të strukturuara",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google ka publikuar studime raste për shpejtësinë në celular—koha e ngarkimit mbetet KPI biznesi.",
      sourceLabel: "Think with Google — shpejtësia mobile",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter tregon globalisht se si ndryshojnë pjesët e trafikut mobil, desktop dhe tablet—mobile-first mbetet default për SME.",
      sourceLabel: "Statcounter — pjesët e platformave",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const BY_LANG: Record<LangKey, HomeGeoInsightCopy> = { en, de, sr, it, al };

export function getHomeGeoInsightCopy(lang: Language): HomeGeoInsightCopy {
  return BY_LANG[langKey(lang)] ?? en;
}

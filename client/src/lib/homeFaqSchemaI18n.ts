import type { Language } from "@/lib/i18n";

type LangKey = "en" | "de" | "sr" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

export type FaqPair = { q: string; a: string };

const FAQ_BY_LANG: Record<LangKey, FaqPair[]> = {
  sr: [
    {
      q: "Zašto izabrati AGR Multimedia za web dizajn i grafiku?",
      a: "Kombinujemo tehničku SEO-prijateljsku strukturu, pristupačnost i performanse sa dizajnom koji podržava konverzije. Umesto generičkih šablona gradimo hijerarhiju sadržaja i vizuelni jezik prilagođen vašoj publici, uz primere u portfolio delu sajta.",
    },
    {
      q: "Kako izgleda proces izrade sajta od prvog poziva do objave?",
      a: "Kreće od briefinga i predloga strukture stranica, zatim dizajn i razvoj u iteracijama sa jasnim rokovima. Pre objave testiramo forme, brzinu i mobilni prikaz; po potrebi usklađujemo sadržaj sa digitalnim marketingom i SEO koracima koje možete pratiti.",
    },
    {
      q: "Šta sve obuhvata ponuda za mala preduzeća u EU?",
      a: "Web i landing stranice, grafički identitet i štampa, video produkcija, kao i AI-pomoć pri kreiranju sadržaja uz ljudsku reviziju kvaliteta — sve sa ciljem merljivih rezultata za mala preduzeća u Nemačkoj, Austriji, Švajcarskoj i širom EU.",
    },
    {
      q: "Koliko brzo možete očekivati odgovor i pokretanje projekta?",
      a: "Na upite obično odgovaramo u roku od 24 sata i dogovaramo sledeće korake (ciljevi, obim, rokovi). Najbrži način je kontakt forma ili direktan poziv — dobijate predlog bez obaveze.",
    },
    {
      q: "Šta je AEO i šta je GEO u kontekstu web sadržaja?",
      a: "AEO (Answer Engine Optimization) je praksa pisanja i strukture stranice tako da sistemi odgovora mogu da izvuku jedan jasan citat. GEO (Generative Engine Optimization) je sadržaj sa definicijama, povezanim izvorima i uravnoteženim perspektivama da generativna pretraga može bezbedno da sumarizuje ponudu. AGR Multimedia ih uključuje zajedno sa tehničkim SEO i performansama.",
    },
    {
      q: "Zašto su spoljašnji linkovi važni kada AI pretraživači citiraju stranicu?",
      a: "Javni izvori (npr. Google Search Central, HTTP Archive) omogućavaju proveru tvrdnji o performansama i smernicama. To podiže pouzdanost za GEO i E-E-A-T signale; operativna obećanja (rok odgovora, obim) ostaju u pisanoj ponudi.",
    },
    {
      q: "Kako izgleda „odgovor prvo” na početku ključne stranice?",
      a: "Prva rečenica direktno odgovara na glavno korisničko pitanje, zatim sledi lista ili podnaslovi sa detaljima. Taj raspored olakšava skeniranje i pomaže AEO izvodima bez gubitka konteksta.",
    },
  ],
  en: [
    {
      q: "Why choose AGR Multimedia for web design and graphics?",
      a: "We combine SEO-friendly structure, accessibility, and performance with design that supports conversions. Instead of generic templates we build content hierarchy and a visual language tailored to your audience, with examples in the portfolio section.",
    },
    {
      q: "What does the website process look like from the first call to launch?",
      a: "It starts with a briefing and proposed page structure, then design and development in iterations with clear deadlines. Before launch we test forms, speed, and mobile layout; we align content with digital marketing and SEO steps you can follow.",
    },
    {
      q: "What does the offer include for small businesses in the EU?",
      a: "Web and landing pages, brand identity and print, video production, and AI-assisted content creation with human quality review — all aimed at measurable results for SMEs in Germany, Austria, Switzerland, and across the EU.",
    },
    {
      q: "How quickly can I expect a response and project kickoff?",
      a: "We usually reply within 24 hours and agree next steps (goals, scope, timelines). Fastest path is the contact form or a direct call — you get a proposal without obligation.",
    },
    {
      q: "What are AEO and GEO in the context of web content?",
      a: "AEO (Answer Engine Optimization) is the practice of writing and structuring pages so answer engines can extract one clear quote. GEO (Generative Engine Optimization) is content with definitions, linked sources, and balanced perspectives so generative search can summarize your offer safely. AGR Multimedia includes both alongside technical SEO and performance.",
    },
    {
      q: "Why are external links important when AI search cites a page?",
      a: "Public sources (for example Google Search Central, HTTP Archive) let readers verify claims about performance and guidelines. That strengthens GEO and E-E-A-T signals; operational promises (reply time, scope) stay in your written proposal.",
    },
    {
      q: 'What does an "answer-first" lead look like at the top of a key page?',
      a: "The first sentence answers the main user question directly, then lists or subheads carry the details. That layout speeds scanning and helps AEO extracts without losing context.",
    },
  ],
  de: [
    {
      q: "Warum AGR Multimedia für Webdesign und Grafik wählen?",
      a: "Wir verbinden SEO-freundliche Struktur, Barrierefreiheit und Performance mit Design, das Konversionen unterstützt. Statt generischer Vorlagen bauen wir eine klare Inhaltshierarchie und eine passende Bildsprache — mit Beispielen im Portfolio.",
    },
    {
      q: "Wie läuft die Website-Erststellung vom ersten Gespräch bis zum Launch?",
      a: "Start mit Briefing und Seitenstruktur, dann Design und Umsetzung in Iterationen mit klaren Terminen. Vor dem Livegang testen wir Formulare, Geschwindigkeit und Mobile-Ansicht; bei Bedarf stimmen wir Inhalte mit Marketing und SEO-Schritten ab.",
    },
    {
      q: "Was umfasst das Angebot für kleine Unternehmen in der EU?",
      a: "Web- und Landingpages, Markenidentität und Print, Videoproduktion sowie KI-unterstützte Inhalte mit menschlicher Qualitätsprüfung — alles mit messbaren Zielen für KMU in Deutschland, Österreich, der Schweiz und in der EU.",
    },
    {
      q: "Wie schnell können wir mit Antwort und Projektstart rechnen?",
      a: "In der Regel antworten wir innerhalb von 24 Stunden und vereinbaren die nächsten Schritte (Ziele, Umfang, Zeitplan). Am schnellsten über Kontaktformular oder Telefon — unverbindliches Angebot.",
    },
    {
      q: "Was sind AEO und GEO im Kontext von Webinhalten?",
      a: "AEO (Answer Engine Optimization) ist Schreibweise und Struktur, damit Answer Engines ein klares Zitat ziehen können. GEO (Generative Engine Optimization) sind Definitionen, verlinkte Quellen und ausgewogene Perspektiven, damit generative Suche Ihr Angebot sicher zusammenfassen kann. AGR Multimedia verbindet beides mit technischem SEO und Performance.",
    },
    {
      q: "Warum sind externe Links wichtig, wenn KI-Suche Seiten zitiert?",
      a: "Öffentliche Quellen (z. B. Google Search Central, HTTP Archive) erlauben die Prüfung von Aussagen zu Performance und Richtlinien. Das stärkt GEO- und E-E-A-T-Signale; operative Zusagen (Antwortzeit, Umfang) stehen im schriftlichen Angebot.",
    },
    {
      q: "Wie sieht ein Antwort-zuerst-Einstieg auf einer Kernseite aus?",
      a: "Der erste Satz beantwortet die Kernfrage direkt, danach folgen Listen oder Zwischenüberschriften mit Details. Das unterstützt AEO-Zitate und schnelles Scannen ohne Kontextverlust.",
    },
  ],
  it: [
    {
      q: "Perché scegliere AGR Multimedia per web design e grafica?",
      a: "Uniamo struttura SEO-friendly, accessibilità e performance con un design che supporta le conversioni. Al posto di template generici costruiamo gerarchia dei contenuti e linguaggio visivo su misura, con esempi nel portfolio.",
    },
    {
      q: "Come funziona il processo dal primo contatto al lancio?",
      a: "Partiamo da briefing e struttura delle pagine, poi design e sviluppo in iterazioni con scadenze chiare. Prima del go-live testiamo moduli, velocità e mobile; allineiamo i contenuti a marketing digitale e passi SEO seguibili.",
    },
    {
      q: "Cosa include l’offerta per le PMI nell’UE?",
      a: "Siti e landing page, identità di marca e stampa, produzione video e contenuti assistiti da IA con revisione umana — orientati a risultati misurabili in Germania, Austria, Svizzera e in tutta l’UE.",
    },
    {
      q: "Quanto velocemente rispondete e avviate il progetto?",
      a: "Di solito entro 24 ore con i passi successivi (obiettivi, scope, tempi). Modulo contatti o telefono per la via più rapida — proposta senza impegno.",
    },
    {
      q: "Cosa sono AEO e GEO nel contesto dei contenuti web?",
      a: "L’AEO (Answer Engine Optimization) è scrittura e struttura così che i motori di risposta estraggano una citazione chiara. Il GEO (Generative Engine Optimization) è contenuto con definizioni, fonti collegate e prospettive equilibrate per riassunti generativi sicuri. AGR Multimedia li integra con SEO tecnico e performance.",
    },
    {
      q: "Perché i link esterni contano quando la ricerca IA cita la pagina?",
      a: "Fonti pubbliche (es. Google Search Central, HTTP Archive) permettono di verificare affermazioni su performance e linee guida. Rafforza segnali GEO ed E-E-A-T; promesse operative restano in proposta scritta.",
    },
    {
      q: "Che aspetto ha un ingresso “risposta per prima” in una pagina chiave?",
      a: "La prima frase risponde subito alla domanda principale, poi elenchi o sottotitoli con i dettagli. Aiuta gli estratti AEO e la scansione rapida senza perdere contesto.",
    },
  ],
  al: [
    {
      q: "Pse të zgjidhni AGR Multimedia për web dizajn dhe grafikë?",
      a: "Ne lidhim strukturë miqësore me SEO, aksesueshmëri dhe performancë me dizajn që mbështet konvertimet. Në vend të shablloneve gjenerike ndërtojmë hierarki përmbajtjeje dhe gjuhë vizuale të përshtatur, me shembuj në portfolio.",
    },
    {
      q: "Si duket procesi nga thirrja e parë deri te publikimi?",
      a: "Fillon me briefing dhe strukturë faqesh, pastaj dizajn dhe zhvillim në iteracione me afate të qarta. Para publikimit testojmë formularët, shpejtësinë dhe pamjen mobile; përputhim përmbajtjen me marketing digjital dhe hapa SEO.",
    },
    {
      q: "Çfarë përfshin oferta për SME në BE?",
      a: "Faqe web dhe landing, identitet marke dhe print, prodhim video dhe përmbajtje me ndihmën e AI me kontroll cilësie njerëzor — për rezultate të matshme në Gjermani, Austri, Zvicër dhe në BE.",
    },
    {
      q: "Sa shpejt marr përgjigje dhe nisje projekti?",
      a: "Zakonisht brenda 24 orëve me hapat e radhës (objektiva, fushëveprim, afate). Formulari i kontaktit ose telefoni për rrugën më të shpejtë — ofertë pa detyrim.",
    },
    {
      q: "Çfarë janë AEO dhe GEO në kontekstin e përmbajtjes web?",
      a: "AEO (Answer Engine Optimization) është mënyra e shkrimit dhe strukturës që motorët e përgjigjes të nxjerrin një citim të qartë. GEO (Generative Engine Optimization) është përmbajtje me përkufizime, burime të lidhura dhe kënde të balancuara që kërkimi gjenerativ të përmbledhë ofertën me siguri. AGR Multimedia i bashkon me SEO teknik dhe performancë.",
    },
    {
      q: "Pse janë të rëndësishëm lidhjet e jashtme kur kërkimi me AI citon faqen?",
      a: "Burimet publike (p.sh. Google Search Central, HTTP Archive) lejojnë verifikimin e pretendimeve për performancë dhe udhëzime. Forcon sinjalet GEO dhe E-E-A-T; premtimet operative mbeten në ofertë me shkrim.",
    },
    {
      q: "Si duket hyrja “përgjigje së pari” në krye të një faqeje kyçe?",
      a: "Fjalimi i parë përgjigjet drejtpërdrejt pyetjes kryesore, pastaj lista ose nënnënështra me detaje. Ndihmon nxjerrjet AEO dhe leximin e shpejtë pa humbje konteksti.",
    },
  ],
};

const IN_LANG: Record<LangKey, string> = {
  sr: "sr-Latn",
  en: "en",
  de: "de",
  it: "it",
  al: "sq",
};

export function getHomeFaqPairs(lang: Language): FaqPair[] {
  return FAQ_BY_LANG[langKey(lang)] ?? FAQ_BY_LANG.en;
}

export function getHomeFaqJsonLd(lang: Language) {
  const key = langKey(lang);
  const pairs = FAQ_BY_LANG[key] ?? FAQ_BY_LANG.en;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.agrmultimedia.eu/#faq",
    "url": "https://www.agrmultimedia.eu/",
    "inLanguage": IN_LANG[key],
    "mainEntity": pairs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

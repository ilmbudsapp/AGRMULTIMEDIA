import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

function L({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-blue-300 underline-offset-2 hover:text-blue-200 hover:underline">
      {children}
    </Link>
  );
}

function SrBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> je digitalni studio sa bazom u Geislingen an der Steige
        (Baden-Württemberg, Nemačka). Bavimo se{" "}
        <L href="/web-design">web dizajnom</L>, <L href="/graphic-design">grafikom i brendingom</L>, kao i video i AI
        sadržajem za mala preduzeća u Nemačkoj, Austriji, Švajcarskoj i širom EU. Na stranici{" "}
        <L href="/services">pregled usluga</L> videćete kako spajamo brzinu učitavanja, jasnu strukturu i vizuelni
        identitet koji gradi poverenje. Ako želite kontekst o timu i pristupu, pogledajte i{" "}
        <L href="/about">o nama</L> — tu objašnjavamo filozofiju rada i iskustvo sa klijentima koji žele merljive
        rezultate, ne samo „lepu stranicu”.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Zašto izabrati AGR Multimedia za web dizajn i grafiku?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Kombinujemo tehničku ispravnost (SEO-prijateljski markup, pristupačnost, brzi hosting put) sa dizajnom koji
        odgovara vašoj publici. Umesto generičkih šablona, radimo strukturu sadržaja i vizuelni jezik koji podržavaju
        konverzije — od kontakt forme do poziva na WhatsApp. U <L href="/portfolio">portfolio delu</L> možete videti
        primere realnih projekata i kako su rešeni problemi prepoznatljivosti i jasne ponude.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Kako izgleda proces izrade sajta od prvog poziva do objave?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Počinjemo kratkim briefingom i predlogom informacione arhitekture: koje stranice su potrebne, koje poruke su
        prioritet, koji dokazi poverenja (reference, sertifikati, FAQ) idu iznad folda. Zatim sledi dizajn i razvoj u
        iteracijama sa jasnim rokovima. Kada je sajt spreman, testiramo forme, brzinu i prikaz na mobilnim uređajima pre
        objave. Za kampanje i organski saobraćaj često predlažemo i sadržaj koji se nadovezuje na{" "}
        <L href="/digital-marketing">digitalni marketing</L> i SEO—bez „napuhanih” obećanja, uz realne korake koje možete
        pratiti.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Šta sve obuhvata ponuda za mala preduzeća u EU?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pored klasičnog izrade sajta i landing stranica, radimo identitet (logo, boje, tipografija), štampu i digitalne
        banere, kao i <L href="/video-production">video produkciju</L> i materijale za društvene mreže. Za timove koji
        žele da ubrzaju produkciju vizuala koristimo i <L href="/ai-content-creation">AI pomoć pri kreiranju sadržaja</L>
        , uvek uz ljudsku reviziju kvaliteta i usklađivanje sa brendom. Tako dobijate skalabilan set dokumenata i
        kreativa koji možete ponovo koristiti u oglasima i na sajtu.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Koliko brzo možete očekivati odgovor i pokretanje projekta?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Odgovaramo obično u roku od 24 sata na upite i dogovaramo sledeće korake (ciljevi, rok, budžet, prioriteti).
        Manji sajtovi i mikro sajtovi često krenu u produkciju u roku od nekoliko radnih dana nakon što su tekstovi i
        materijali dostupni; veći projekti dobijaju jasan plan i kontrolne tačke. Najbrži način da krenemo je{" "}
        <L href="/contact">kontakt forma ili direktan poziv</L> — tu možemo odmah proceniti obim i predložiti sledeći
        korak bez obaveze.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Gde radimo i na kojim jezicima komuniciramo sa klijentima?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Studio je registrovan u Nemačkoj, a klijente podržavamo na srpskom, engleskom, nemačkom, italijanskom i
        albanskom — što olakšava timovima u dijaspori i firmama koje rade preko granica. Materijale i strukturu sajta
        možemo uskladiti sa više jezika ili pripremiti ključne stranice za kasnije proširenje. Za dubinske teme i trendove
        povremeno objavljujemo članke u <L href="/blog">blog sekciji</L>, kako bismo delili praktične savete iz digitalnog
        marketinga i produkcije.
      </p>
    </>
  );
}

function EnBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> is a digital studio based in Geislingen an der Steige,
        Germany. We deliver <L href="/web-design">web design</L>, <L href="/graphic-design">graphics & branding</L>,
        video, and AI-assisted content for small businesses across Germany, Austria, Switzerland, and the wider EU. On
        our <L href="/services">services overview</L> you can see how we combine fast pages, clear UX, and trustworthy
        visuals. For background on how we work, visit <L href="/about">about</L> — we explain the methodology behind
        measurable outcomes, not “pretty pages only”.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Why choose AGR Multimedia for web design and graphics?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We pair technical SEO-friendly markup, accessibility, and performance-minded delivery with design that matches
        your audience. Instead of generic templates, we shape content hierarchy and visual language to support conversions.
        The <L href="/portfolio">portfolio</L> shows real projects and how we solved visibility and offer-clarity
        problems.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        What does the website project process look like end-to-end?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We start with a focused briefing and IA proposal: which pages you need, priority messages, and trust signals
        above the fold. Design and development move in iterations with clear checkpoints. Before launch we test forms,
        speed, and mobile layouts. For growth we align content with <L href="/digital-marketing">digital marketing</L>{" "}
        and SEO in realistic steps you can track.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        What is included for EU small businesses?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Beyond corporate sites and landing pages we deliver brand systems, print and digital banners,{" "}
        <L href="/video-production">video production</L>, and social-ready assets. Teams that need faster throughput can
        leverage <L href="/ai-content-creation">AI-assisted content workflows</L> with human QC so everything stays
        on-brand.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        How fast can we respond and start?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We typically reply within 24 hours and align on goals, scope, and milestones. Smaller sites can move into
        production quickly once copy and assets are ready. The fastest path is our <L href="/contact">contact page</L> or
        a direct call — we will outline next steps without obligation.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Where do we work and which languages do we support?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        The studio is Germany-based while supporting Serbian, English, German, Italian, and Albanian — ideal for
        cross-border teams. We can structure multilingual sites or prepare key pages for later expansion. Practical
        articles live in the <L href="/blog">blog</L> section.
      </p>
    </>
  );
}

function DeBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> ist ein Digitalstudio mit Sitz in Geislingen an der
        Steige (Baden-Württemberg). Wir liefern <L href="/web-design">Webdesign</L>,{" "}
        <L href="/graphic-design">Grafik & Branding</L>, Video und KI-unterstützte Inhalte für kleine Unternehmen in
        Deutschland, Österreich, der Schweiz und der EU. Auf der Seite <L href="/services">Leistungen</L> sehen Sie, wie
        wir Geschwindigkeit, klare UX und Vertrauen verbinden. Hintergründe zum Team finden Sie unter{" "}
        <L href="/about">Über uns</L>.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Warum AGR Multimedia für Webdesign und Grafik wählen?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir verbinden SEO-freundliches Markup, Barrierefreiheit und Performance mit einem Design, das zu Ihrer Zielgruppe
        passt. Im <L href="/portfolio">Portfolio</L> zeigen wir echte Projekte und messbare Verbesserungen bei Angebot
        und Sichtbarkeit.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Wie läuft ein Website-Projekt von Briefing bis Launch?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir starten mit Informationsarchitektur und klaren Seiten-Botschaften, danach Design und Entwicklung in
        Iterationen. Vor dem Go-live testen wir Formulare, Geschwindigkeit und Mobile. Für Wachstum binden wir{" "}
        <L href="/digital-marketing">Digital Marketing</L> und SEO realistisch ein.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Was gehört für kleine EU-Unternehmen dazu?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Neben Websites und Landingpages liefern wir Markensysteme, Banner und{" "}
        <L href="/video-production">Video-Produktion</L>. Mit <L href="/ai-content-creation">KI-gestützten Workflows</L>{" "}
        bleiben Produktion und Freigaben kontrollierbar.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Wie schnell antworten wir und wann startet das Projekt?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        In der Regel innerhalb von 24 Stunden. Kurze Landingpages können nach Materialfreigabe zügig starten. Schreiben
        Sie uns über <L href="/contact">Kontakt</L> — wir skizzieren nächste Schritte unverbindlich.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Wo arbeiten wir und in welchen Sprachen?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Standort Deutschland; Unterstützung auf Serbisch, Englisch, Deutsch, Italienisch und Albanisch. Mehrsprachige
        Strukturen sind möglich. Praxisnahe Artikel finden Sie im <L href="/blog">Blog</L>.
      </p>
    </>
  );
}

function ItBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> è uno studio digitale con sede a Geislingen an der Steige,
        in Germania. Offriamo <L href="/web-design">web design</L>, <L href="/graphic-design">grafica e branding</L>,
        video e contenuti con supporto AI per piccole imprese in Germania, Austria, Svizzera e UE. Nella pagina{" "}
        <L href="/services">servizi</L> trovi come uniamo velocità, UX chiara e fiducia visiva. Per il contesto sul team,
        vedi <L href="/about">chi siamo</L>.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Perché scegliere AGR Multimedia per web e grafica?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Uniamo markup SEO-friendly, accessibilità e performance a un design mirato al pubblico giusto. Nel{" "}
        <L href="/portfolio">portfolio</L> trovi casi reali su visibilità e chiarezza dell&apos;offerta.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Com&apos;è strutturato il processo fino al lancio?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Briefing, architettura delle pagine, priorità dei messaggi, poi design e sviluppo iterativi. Prima del lancio
        testiamo moduli, velocità e mobile. Per la crescita integriamo <L href="/digital-marketing">digital marketing</L>{" "}
        e SEO in modo realistico.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Cosa include l&apos;offerta per le PMI nell&apos;UE?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Siti corporate e landing, sistemi di marca, banner e <L href="/video-production">video</L>. Con{" "}
        <L href="/ai-content-creation">workflow AI assistiti</L> manteniamo volume e controllo qualità.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Quanto tempo per una risposta e l&apos;avvio?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Di solito entro 24 ore. Il modo più rapido è la pagina <L href="/contact">contatti</L> o una chiamata diretta per
        definire tempi e priorità.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Dove operate e in quali lingue?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Studio in Germania; lingue: serbo, inglese, tedesco, italiano e albanese. Approfondimenti nel{" "}
        <L href="/blog">blog</L>.
      </p>
    </>
  );
}

function AlBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> është një studio digjitale me bazë në Geislingen an der
        Steige, Gjermani. Ofrojmë <L href="/web-design">web dizajn</L>, <L href="/graphic-design">grafikë dhe branding</L>
        , video dhe përmbajtje me ndihmën e AI për biznese të vogla në DE, AT, CH dhe BE. Te{" "}
        <L href="/services">shërbimet</L> shihni si përziejmë shpejtësi, UX të qartë dhe besueshmëri vizuale. Për ekipin,
        lexoni <L href="/about">rreth nesh</L>.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Pse të zgjidhni AGR Multimedia për web dhe grafikë?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Lidhjmë markup SEO-miqësor, aksesueshmëri dhe performancë me dizajn që i përshtatet audiencës. Në{" "}
        <L href="/portfolio">portfolio</L> janë projekte reale për dukshmëri dhe ofertë më të qartë.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Si duket procesi nga briefing deri te publikimi?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Fillojmë me strukturën e faqeve dhe përparësitë e mesazheve, pastaj dizajn dhe zhvillim në iteracione. Para
        lançimit testojmë forma, shpejtësi dhe mobile. Për rritje përfshijmë{" "}
        <L href="/digital-marketing">marketing digjital</L> dhe SEO me hapa të matshëm.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Çfarë përfshin oferta për bizneset e vogla në BE?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Faqe korporative dhe landing, sisteme marke, banner dhe <L href="/video-production">prodhim video</L>. Me{" "}
        <L href="/ai-content-creation">workflow me AI</L> mbajmë volumin dhe kontrollin cilësor.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Sa shpejt përgjigjemi dhe kur nis projekti?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Zakonisht brenda 24 orëve. Rruga më e shpejtë është <L href="/contact">kontakti</L> ose telefonata për të
        përcaktuar hapin tjetër pa detyrim.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Ku punojmë dhe në cilat gjuhë komunikojmë?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Studio në Gjermani; gjuhë: serbisht, anglisht, gjermanisht, italisht dhe shqip. Artikuj praktikë në{" "}
        <L href="/blog">blog</L>.
      </p>
    </>
  );
}

function bodyForLang(lang: Language) {
  switch (lang) {
    case "sr":
      return <SrBody />;
    case "en":
      return <EnBody />;
    case "de":
      return <DeBody />;
    case "it":
      return <ItBody />;
    case "al":
    case "sq":
      return <AlBody />;
    default:
      return <EnBody />;
  }
}

type SectionLangKey = "sr" | "en" | "de" | "it" | "al";

function sectionLangKey(lang: Language): SectionLangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

const SECTION_COPY: Record<
  SectionLangKey,
  { eyebrow: string; title: string; subtitle: string; aria: string }
> = {
  sr: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafika i digitalni marketing za mala preduzeća",
    subtitle:
      "Kratak vodič kroz našu ponudu i način rada — sa linkovima ka ključnim stranicama sajta.",
    aria: "Tekstualni pregled usluga i česta pitanja",
  },
  en: {
    eyebrow: "AGR Multimedia",
    title: "Web design, graphics & digital marketing for small businesses",
    subtitle: "A concise overview of our offer and workflow — with links to key sections.",
    aria: "Services overview and frequently asked questions",
  },
  de: {
    eyebrow: "AGR Multimedia",
    title: "Webdesign, Grafik und Digitalmarketing für kleine Unternehmen",
    subtitle: "Kurzer Überblick über Angebot und Arbeitsweise — mit Links zu den wichtigsten Bereichen.",
    aria: "Leistungsüberblick und häufige Fragen",
  },
  it: {
    eyebrow: "AGR Multimedia",
    title: "Web design, grafica e digital marketing per piccole imprese",
    subtitle: "Panoramica rapida su offerta e metodo — con link alle sezioni principali.",
    aria: "Panoramica dei servizi e domande frequenti",
  },
  al: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafikë dhe marketing digjital për biznese të vogla",
    subtitle: "Përmbledhje e shkurtër e ofertës dhe mënyrës së punës — me lidhje te seksionet kryesore.",
    aria: "Përmbledhje shërbimesh dhe pyetje të shpeshta",
  },
};

export default function HomeSeoSection() {
  const { currentLanguage } = useLanguage();
  const copy = SECTION_COPY[sectionLangKey(currentLanguage)];

  return (
    <section
      id="seo-content"
      className="premium-section scroll-mt-20 border-b border-[#333333] bg-[#07070b] py-16 md:py-20"
      aria-label={copy.aria}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{copy.eyebrow}</p>
        <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.title}</p>
        <p className="mt-3 text-sm text-white/55">{copy.subtitle}</p>
        <div className="prose-seo mt-10 border-t border-white/10 pt-10">{bodyForLang(currentLanguage)}</div>
      </div>
    </section>
  );
}

import { Link } from "wouter";

/** Shared contextual link style inside SEO prose */
export function SeoLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-blue-300 underline-offset-2 hover:text-blue-200 hover:underline">
      {children}
    </Link>
  );
}

const L = SeoLink;

/** Stable fragment ids for TOC / anchors (same across all languages). */
export function SeoTopicHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
      {children}
    </h3>
  );
}

/** ~520+ words — detailed services + multi-perspective for GEO / trust signals */
export function SrBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> je digitalni studio iz Geislingen an der Steige
        (Baden-Württemberg, Nemačka) koji pomaže malim preduzećima da budu jasniji na tržištu — od prvog utiska na sajtu do
        materijala koji nosite u štampi i na društvenim mrežama. Ovaj tekst objašnjava kako radimo{" "}
        <L href="/web-design">web dizajn</L>, <L href="/graphic-design">grafički dizajn</L> i{" "}
        <L href="/ai-content-creation">AI podršku</L>, bez „magijskih” formula: cilj su merljivi rezultati (više upita,
        bolje razumevanje ponude, konzistentan brend). Za pregled celokupnih linija usluga pogledajte{" "}
        <L href="/services">stranicu usluga</L>; tim i filozofija su na <L href="/about">O nama</L>, a obradu ličnih
        podataka na <L href="/privacy-policy">Politici privatnosti</L>. Za smernice o pristupačnosti koristimo i javne
        resurse kao što je{" "}
        <a
          href="https://www.w3.org/WAI/WCAG21/quickref/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-300 underline-offset-2 hover:text-blue-200 hover:underline"
        >
          WCAG 2.1 Quick Reference (W3C WAI)
        </a>
        .
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Web dizajn — šta konkretno dobijate u saradnji sa nama
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ne radimo „sajt radi sajta”. Počinjemo od cilja: ko je idealan posetilac, šta treba da uradi na stranici (poziv,
        forma, rezervacija), i koja poruka se mora pročitati u prvih deset sekundi. Informaciona arhitektura (koje stranice
        postoje i kako su povezane) piše se pre vizuelnog koncepta. U implementaciji vodimo računa o brzini učitavanja,
        čitljivosti na mobilnom telefonu i tehničkim osnovama za SEO — semantički naslovi, smisleni linkovi, tekst koji
        ljudi stvarno žele da pročitaju. Kada je potrebno, spajamo sajt sa kampanjama i sadržajem koji opisujemo u delu o{" "}
        <L href="/digital-marketing">digitalnom marketingu</L>. Reference i živi primeri nalaze se u{" "}
        <L href="/portfolio">portfoliju</L>.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Grafički dizajn — brend, štampa i digitalni set koji ostaje dosledan
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Vizuelni identitet nije samo logo: to su pravila upotrebe boja i tipografije, odnos fotografije prema ilustraciji,
        ton komunikacije na baneru i na vizitkarti. Za lokalne usluge često radimo flajere, menije, plakate i društvene
        formate koji izgledaju profesionalno i u štampi i na ekranu. Priprema datoteka za štampu (bleed, CMYK kada je
        potrebno), kao i digitalni izlazi za web i oglase, spadaju u isti sistem — da ne dobijete pet različitih „verzija”
        brenda kroz kanale. Kada brend već postoji, možemo ga srediti i proširiti; kada počinjemo od nule, vodimo vas kroz
        varijante koje su realne za vaš budžet i rokove.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        AI rešenja — šta ubrzava produkciju, a gde je čovek nezamenljiv
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        AI koristimo kao alat za istraživanje varijanti, skicu copy-ja, razne vizuelne pravce i ponavljanje dosadnih
        zadataka (formatiranje, varijante dimenzija, batch obrada). To skraćuje vreme i smanjuje cenu iteracija. Međutim,
        odluke koje utiču na poverenje — konačna poruka, fotografija koja predstavlja vašu radionicu, ton koji ne zvuči
        generički — uvek prolaze ljudsku reviziju. Klijent dobija objašnjenje šta je mašinski predlog, a šta ručno
        doterano, kako biste znali šta objavljujete u svoje ime. Detaljnije o AI tokovima i šta ulazi u paket pročitajte na
        stranici <L href="/ai-content-creation">AI sadržaj i produkcija</L>.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Prednosti i mane AI u dizajnu — iskreno, iz prakse
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Prednosti: brža eksploracija ideja, više varijanti layouta u kraćem roku, lakše prilagođavanje više jezika,
        ušteda pri ponovljenim formatima. Mane: bez smernica brenda lako završite na generičkom izgledu; tekst može zvučati
        „glatko” ali prazan po smislu; vizuelni predlozi ponekad ignorišu zakonske ili tehničke ograničenja (pristupačnost,
        kontrast, truth-in-advertising). Zato ne prodajemo „AI sajt u jednom kliku” kao gotovo rešenje — već kombinaciju
        alata i iskustva, uz jasnu podelu odgovornosti i kontrolu kvaliteta pre objave.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Naš pristup naspram čistog šablona ili pristupa „samo AI bez dizajn tima”
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Gotovi šabloni su jeftini na početku, ali često koštaju na konverzijama: isti izgled kao konkurencija, teško
        objašnjavanje jedinstvene ponude, ograničenja kada treba da porastete. Čist AI pristup bez dizajnerskog okvira
        može dati brzu sliku, ali retko nosi duboku konsistentnost brenda i pravnu/UX sigurnost. Mi radimo hibrid:
        dizajn sistem + iteracije sa jasnim feedbackom + AI gde pomaže. Tako dobijate i brzinu i odgovornost — zna se ko
        projektuje koheziju, a ko je odgovoran za finalni kvalitet pre nego što korisnik klikne „Pošalji” na{" "}
        <L href="/contact">kontakt stranici</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Za web projekat pravimo jasnu mapu stranica i stubove poruka pre vizuelnog dizajna, da marketing i vlasnik firme
        vide isti „film”. Za grafiku definišemo export pravila (štampa vs digital) i kako se isti element ponavlja na
        Instagramu i na flajeru. AI izlazi dobijaju verziju i napomenu šta je odobreno za objavu. Pravne informacije:
        <L href="/privacy-policy">Politika privatnosti</L>, <L href="/impresum">Impressum</L>, i uvod u tim na{" "}
        <L href="/about">O nama</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Zašto izabrati AGR Multimedia?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Jedan tim pokriva web, grafiku i produkciju sadržaja; jezik saradnje može biti srpski, engleski, nemački,
        italijanski ili albanski — što smanjuje prevodilačke gubitke u briefingu. Držimo se rokova i dokumentujemo šta je
        u dogovoru, kako biste znali šta dobijate u svakoj fazi.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Kako izgleda start projekta i šta doneti na prvi poziv?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Nakon upita (obično odgovor u roku od 24 sata) zakazujemo kratak poziv ili pisani briefing: ciljevi, reference koje
        volite, materijale koje već imate. Za složenije tražimo primer konkurentnih sajtova koji vam se dopadaju —
        ne radi kopiranja, već da razumemo nivo očekivanja. Blog objave kao što su one u <L href="/blog">blog sekciji</L>{" "}
        mogu vam pomoći da unapred razumete teme oko konverzije i video marketinga pre nego što krenemo u izradu.
      </p>
    </>
  );
}

export function EnBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> is a Germany-based digital studio helping small businesses
        become clearer in the market — from first impressions on the web to print and social assets. This guide explains
        how we deliver <L href="/web-design">web design</L>, <L href="/graphic-design">graphic design</L>, and{" "}
        <L href="/ai-content-creation">AI-assisted workflows</L> without hype: the goal is measurable outcomes (more
        enquiries, clearer offers, consistent branding). See the full service lines on <L href="/services">services</L>,
        our background on <L href="/about">about</L>, and how we handle personal data in the{" "}
        <L href="/privacy-policy">privacy policy</L>. For accessibility baselines we reference{" "}
        <a
          href="https://www.w3.org/WAI/WCAG21/quickref/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-300 underline-offset-2 hover:text-blue-200 hover:underline"
        >
          WCAG 2.1 Quick Reference (W3C WAI)
        </a>
        .
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Web design — what you actually get when we work together
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We do not ship “a website for the sake of it”. We start from goals: who should visit, what they should do (call,
        form, booking), and which message must land in the first seconds. Information architecture is defined before
        visual design. Implementation focuses on performance, mobile readability, and SEO foundations — semantic headings,
        meaningful internal links, and copy humans want to read. When needed, we align the site with campaigns described
        under <L href="/digital-marketing">digital marketing</L>. Live examples sit in the <L href="/portfolio">portfolio</L>.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Graphic design — brand systems for print and digital
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Visual identity is more than a logo: colour and type rules, photography vs illustration balance, and tone across
        banners and business cards. For local businesses we produce flyers, menus, posters, and social formats that stay
        consistent in print and on screen. Print-ready files (bleed, CMYK when required) and digital exports for web and
        ads live inside one system — so you do not end up with five accidental “brand versions” across channels.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        AI solutions — acceleration vs human judgement
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We use AI to explore variants, draft copy directions, visual routes, and repetitive production tasks (resizing,
        batch formatting). That shortens timelines and iteration cost. Trust-critical decisions — final messaging,
        photography that represents your workshop, tone that does not sound generic — always pass human review. Read more
        on the <L href="/ai-content-creation">AI content</L> page.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Pros and cons of AI in design — a balanced view
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pros: faster exploration, more layout variants, easier multilingual drafts, savings on repeated formats. Cons:
        without brand guardrails you risk generic aesthetics; copy may sound fluent but hollow; proposals may ignore legal
        or accessibility constraints. We therefore do not sell “one-click AI websites” as finished products — we combine
        tooling with experience and QA before anything goes live.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Our hybrid approach vs templates-only or AI-only workflows
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Templates are cheap upfront but often cost conversions: same look as competitors, weak differentiation, limits when
        you scale. AI-only flows without design leadership can move fast yet miss brand coherence and compliance. Our
        hybrid model pairs a design system with structured feedback loops and AI where it truly helps — so you keep speed
        and accountability, including before users hit “Submit” on the <L href="/contact">contact page</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        For websites we align page maps and core messages before UI design so stakeholders share one roadmap. For brand
        work we document export rules for print vs social so colours stay consistent. AI outputs are labelled by version and
        approval status. Legal transparency: <L href="/privacy-policy">privacy policy</L>,{" "}
        <L href="/impresum">legal notice</L>, and background on <L href="/about">about</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Why choose AGR Multimedia?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        One team spans web, graphics, and content production; we work in Serbian, English, German, Italian, and Albanian
        — reducing briefing noise. We document scope and milestones so expectations stay transparent.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        How do projects start and what should you prepare?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        After your enquiry (typically answered within 24 hours) we schedule a short call or written briefing: goals,
        references you like, assets you already own. Articles in the <L href="/blog">blog</L> help you understand
        conversion and video topics before production kicks in.
      </p>
    </>
  );
}

export function DeBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> ist ein Digitalstudio in Geislingen an der Steige und
        unterstützt kleine Unternehmen bei klarer Positionierung — von der Website bis zu Print- und Social-Assets. Hier
        beschreiben wir <L href="/web-design">Webdesign</L>, <L href="/graphic-design">Grafik & Branding</L> und{" "}
        <L href="/ai-content-creation">KI-gestützte Abläufe</L> realistisch. Gesamtüberblick:{" "}
        <L href="/services">Leistungen</L>, Team: <L href="/about">Über uns</L>, Datenschutz:{" "}
        <L href="/privacy-policy">Privacy Policy</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Webdesign — Deliverables und Qualitätslinien
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir starten mit Zielen und Informationsarchitektur, dann UX und UI. Performance, Mobile-First und technische SEO-Basics
        gehören dazu. Kampagnen flankieren wir über <L href="/digital-marketing">Digital Marketing</L>. Beispiele im{" "}
        <L href="/portfolio">Portfolio</L>.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Grafikdesign — ein System für Print und Digital
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Identität bedeutet Farben, Typografie, Bildsprache und Einheit zwischen Flyer, Menükarte und Social Posts.
        Druckdaten und Web-Exporte folgen denselben Regeln — weniger „Versions-Chaos“ über Kanäle hinweg.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        KI im Kreativprozess — Tempo und menschliche Freigabe
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        KI hilft bei Varianten, Textentwürfen und wiederholenden Produktionsschritten. Finale Botschaften, Markenkonformität
        und Verantwortung vor Livegang bleiben beim Team — Details auf der Seite <L href="/ai-content-creation">KI-Inhalte</L>.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Vor- und Nachteile von KI im Design
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Vorteile: Geschwindigkeit, mehr Varianten, Skalierung. Risiken: Generischer Look, inhaltsleere Texte,
        Compliance-Themen (Barrierefreiheit, Werbeaussagen). Wir kombinieren KI mit QA und Markenführung statt
        „Ein-Klick-Wunder“ zu verkaufen.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Hybrid vs. reine Vorlagen oder KI ohne Designführung
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Templates sparen kurzfristig Kosten, kosten aber oft Conversion. Reine KI ohne Leitplanken birgt Markenbrüche. Unser
        Hybridmodell verbindet Systemdesign, Feedback-Schleifen und KI dort, wo sie Mehrwert liefert — bis zum Absenden auf
        der <L href="/contact">Kontaktseite</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Für Webprojekte dokumentieren wir wireframes oder strukturierte Seitenlisten, damit Marketing und Geschäftsführung
        dieselbe Erwartung teilen. Beim Grafikteil legen wir Styleguides und Exportregeln fest — etwa Social-Snippets im
        gleichen Raster wie Druckunterlagen. KI-gestützte Varianten exportieren wir mit Versionsnamen und kurzen
        Freigabehinweisen, damit nachvollziehbar bleibt, welche Datei live gehen darf. Wenn Sie bereits eine Agentur
        haben, können wir als Spezialist für Umsetzung und Produktion ergänzen; wenn Sie ein kompaktes Studio suchen,
        liefern wir End-to-end von der ersten Skizze bis zur Übergabe der Assets. Rechtliche Transparenz finden Sie in der{" "}
        <L href="/privacy-policy">Datenschutzerklärung</L> und im <L href="/impresum">Impressum</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Warum AGR Multimedia?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ein Team für Web, Grafik und Content; Arbeitssprachen Serbisch, Englisch, Deutsch, Italienisch, Albanisch. Klare
        Scope-Dokumentation und Terminorientierung.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Projektstart — was wir vom ersten Gespräch brauchen
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Nach Ihrer Anfrage (meist Antwort innerhalb von 24 Stunden) klären wir Ziele und Referenzen. Im{" "}
        <L href="/blog">Blog</L> finden Sie vertiefende Artikel zu Conversion und Video.
      </p>
    </>
  );
}

export function ItBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> è uno studio digitale con sede a Geislingen an der Steige.
        Questa guida illustra <L href="/web-design">web design</L>, <L href="/graphic-design">grafica e branding</L> e{" "}
        <L href="/ai-content-creation">flussi con AI</L> in modo trasparente. Servizi completi: <L href="/services">servizi</L>
        ; chi siamo: <L href="/about">chi siamo</L>; privacy: <L href="/privacy-policy">privacy policy</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Web design — obiettivi, architettura e conversioni
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Partiamo da metriche chiare e dalla struttura delle pagine prima della grafica. Prestazioni, mobile e basi SEO
        tecnici sono inclusi. Collegamento alle campagne tramite <L href="/digital-marketing">digital marketing</L>. Casi in{" "}
        <L href="/portfolio">portfolio</L>.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Grafica — coerenza tra stampa e digitale
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Costruiamo palette, tipografie e regole d&apos;uso così flyer, menu e social non divergono. File stampa e export
        digitali seguono lo stesso sistema visivo.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        AI nel processo creativo
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        L&apos;AI accelera varianti e attività ripetitive; messaggi finali, conformità al brand e revisione restano umane.
        Approfondimenti su <L href="/ai-content-creation">contenuti AI</L>.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Pro e contro dell&apos;AI nel design
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pro: velocità e scala. Contro: genericità, testi vuoti, rischi di accessibilità. Offriamo un approccio ibrido con QA,
        non promesse miracolistiche.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Approccio ibrido vs solo template o solo AI
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        I template riducono costi iniziali ma spesso omogeneizzano l&apos;offerta. Solo AI senza direzione creativa rischia
        incoerenze. Combiniamo sistema di design, feedback e AI mirata fino al modulo su{" "}
        <L href="/contact">contatti</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Nei progetti web definiamo KPI condivisi (contatti, prenotazioni, download) e li colleghiamo a tracking essenziale,
        senza sovraccaricare la cookie banner policy descritta nella{" "}
        <L href="/privacy-policy">privacy policy</L>. In ambito grafico integriamo mockup con varianti colore per ambienti
        diversi (dark shop vs landing chiara) così le decisioni non dipendono da un singolo schermo. Flussi AI includono
        checklist di revisione per contrasto e tono di voce allineato al brand. Per il team: <L href="/about">chi siamo</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Perché scegliere AGR Multimedia?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Un team per web, grafica e produzione; lingue serbo, inglese, tedesco, italiano, albanese. Scope e milestone
        documentati.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Come inizia un progetto
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Dopo la richiesta rispondiamo rapidamente e definiamo briefing e riferimenti. Nel <L href="/blog">blog</L> trovi
        articoli pratici su conversion e video.
      </p>
    </>
  );
}

export function AlBody() {
  return (
    <>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        <strong className="text-white">AGR Multimedia</strong> është studio digjitale në Geislingen an der Steige. Kjo faqe
        shpjegon <L href="/web-design">web dizajn</L>, <L href="/graphic-design">grafikë dhe branding</L> dhe{" "}
        <L href="/ai-content-creation">rrjedha me AI</L>. Shërbimet: <L href="/services">shërbimet</L>; rreth nesh:{" "}
        <L href="/about">rreth nesh</L>; privatësia: <L href="/privacy-policy">politika e privatësisë</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Web dizajn — qëllime dhe strukturë
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Fillojmë nga qëllimet dhe arkitektura e informacionit. Performanca, mobile dhe baza SEO janë të përfshira. Shembuj në{" "}
        <L href="/portfolio">portfolio</L>; kampanja përmes <L href="/digital-marketing">marketingut digjital</L>.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Grafikë — sistem i njëjtë për print dhe digital
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Identiteti përfshin ngjyra, tipografi dhe ton mes flyerëve dhe rrjeteve sociale. Skedarët për print dhe eksportet
        digitale ndjekin të njëjtat rregulla.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        AI në procesin kreativ
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        AI përdoret për variante dhe detaje të përsëritura; vendimet përfundimtare dhe përputhja me markën kalojnë në
        revizion njerëzor. Më shumë te <L href="/ai-content-creation">përmbajtja me AI</L>.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Anët për dhe kundër AI në dizajn
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pro: shpejtësi dhe shumë variante. Kundër: pamje gjenerike dhe tekst pa thellësi. Ne ofrojmë qasje hibride me kontroll
        cilësie, jo „një klik magjik”.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Qasja jonë hibride vs vetëm shabllone ose vetëm AI
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Shabllonet janë të lira në fillim por shpesh dobësojnë diferencimin. Vetëm AI pa udhëheqje dizajni rrezikon
        qëllimshmërinë e markës. Kombinojmë sistem dizajni, feedback dhe AI deri te forma në{" "}
        <L href="/contact">kontakt</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Për projektet e uebit dokumentojmë strukturën e faqeve dhe mesazhet kryesore para se të fillojë dizajni vizual, që
        ekipi të mirëkuptojë të njëjtat prioritete. Në grafikë përcaktojmë si përdoren ngjyrat në print dhe në ekran, për të
        shmangur mospërputhjet midis menut dhe postimeve. AI përdoret me lista kontrolli për cilësi dhe me etiketa versioni.
        Transparenca ligjore: <L href="/privacy-policy">politika e privatësisë</L> dhe <L href="/about">rreth nesh</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Pse AGR Multimedia?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Një ekip për web, grafikë dhe përmbajtje; gjuhë: serbisht, anglisht, gjermanisht, italisht, shqip. Dokumentim i qartë
        i scope-it.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Si fillon projekti
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pas kërkesës përgjigjemi shpejt dhe përçlodhim briefing-un. Artikuj në <L href="/blog">blog</L> për konvertim dhe
        video.
      </p>
    </>
  );
}

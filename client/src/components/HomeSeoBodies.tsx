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

/** ~520+ words — Grade-A polish: short sentences, transitions, first person, multi-perspective */
export function SrBody() {
  return (
    <>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mi vodimo <strong className="text-white">AGR Multimedia</strong> iz Geislingen an der Steige (Baden-Württemberg).
        Naš fokus su mala preduzeća u EU koje žele jasniji nastup na webu.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Dok neki dizajneri vole isključivo tradicionalne metode, mi smatramo da simbioza AI-a i čoveka ubrzava iteracije. Pritom ne gubimo odgovornost prema brendu. Međutim, poštujemo ručne procese kada je to pravi izbor za vas. Ja lično nadgledam ključne odluke pre objave. Naša misija je merljiv rezultat, a ne samo lep ekran.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Za razliku od šablonskih rešenja, AGR Multimedia koristi personalizovan AI pristup. Mi ručno vodimo glas brenda i odluke koje grade poverenje. Stoga klijent uvek vidi gde alat pomaže, a gde završavamo ručno.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Dok se tradicionalne agencije često drže samo estetike, mi balansiramo vizuelni identitet i tehničku AI optimizaciju. Jer u 2026. godini jedno bez drugog retko donosi rezultate. Međutim, lep izgled i dalje važi — mora da radi zajedno sa brzinom sajta i jasnom porukom.
      </p>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        Ovaj tekst objašnjava kako radimo <L href="/web-design">web dizajn</L>, <L href="/graphic-design">grafički dizajn</L>{" "}
        i <L href="/ai-content-creation">AI podršku</L>. Za ceo spektar usluga idite na <L href="/services">stranicu usluga</L>.
        Tim opisujemo na <L href="/about">O nama</L>. Za lične podatke važi <L href="/privacy-policy">Politika privatnosti</L>.
        Za pristupačnost koristimo{" "}
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
        Šta konkretno dobijate kada radimo web dizajn zajedno?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mi ne radimo „sajt radi sajta”. Prvo pitamo ko je idealan posetilac i šta treba da uradi. Na primer, poziv, forma
        ili rezervacija moraju biti jasni u prvih deset sekundi. Zato informacionu arhitekturu pišemo pre vizuelnog koncepta.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        U implementaciji čuvamo brzinu učitavanja i mobilnu čitljivost. Stoga dodajemo semantičke naslove i smislene linkove.
        Kampanje povezujemo sa delom o <L href="/digital-marketing">digitalnom marketingu</L>. Reference su u{" "}
        <L href="/portfolio">portfoliju</L>.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Sa druge strane, šabloni i page-builder-i mogu smanjiti početni trošak. Međutim, kada vam treba diferenc i isti brend
        na sajtu i u štampi, treba nam struktura — biramo šta automatizujemo, a šta ručno potvrđujemo.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Kako izgleda grafički dizajn koji ostaje dosledan u štampi i na ekranu?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Za nas brend nije samo logo. To su pravila boja, tipografije i fotografije. Mi pravimo flajere, menije i društvene
        formate koji izgledaju jednako u štampi i na telefonu.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Priprema za štampu ide uz digitalne izlaske u jednom sistemu. Pored toga, izbegavate pet „verzija” brenda po kanalima.
        Ako brend već postoji, mi ga doterivamo. Ako počinjemo od nule, vodimo vas kroz realne varijante za budžet i rok.
        Shodno tome, svaka izmena ima verziju — na primer „v2 meni“ ili „letak Q3“.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        Gde AI ubrzava produkciju, a gde je čovek neophodan?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mi koristimo AI za varijante, skicu teksta i dosadne zadatke poput dimenzija paketa. To skraćuje vreme. Međutim,
        poruke koje grade poverenje uvek prolaze ljudsku reviziju.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Vi znate šta je mašinski predlog, a šta ručno doterano. Više o tokovima čitate na{" "}
        <L href="/ai-content-creation">AI sadržaj i produkcija</L>. Na kraju, ja biram šta ide uživo. Na primer, ako kampanja
        ima pravni rizik, šaljemo tekst na dodatnu proveru pre objave.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Kakve su prednosti i mane AI u dizajnu — praktično gledano?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Prednosti su brža ideja i više layout varijanti. Mane su generički izgled i „glatki” tekstovi bez dubine. Zato mi ne
        prodajemo čarobni jedan klik.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Na primer, kontrast i pristupačnost moraju ostati ispravni. Stoga kombinujemo alate i iskustvo. Pre objave radimo
        kontrolu kvaliteta zajedno sa vama.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Zašto je hibrid bolji od čistog šablona ili „samo AI bez dizajn tima”?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Šabloni koštaju manje na početku. Ali često slabije konvertuju jer izgledaju kao konkurencija. Čist AI bez vođenja
        riskira haos u brendu.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mi radimo hibrid: dizajn sistem, feedback i AI gde pomaže. Tako dobijate brzinu i odgovornost do klika „Pošalji” na{" "}
        <L href="/contact">kontaktu</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Za web pravimo mapu stranica pre UI-ja. Za grafiku definišemo export pravila. AI izlazi dobijaju oznaku verzije.
        Pravno: <L href="/privacy-policy">Politika privatnosti</L>, <L href="/impresum">Impressum</L>,{" "}
        <L href="/about">O nama</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Zašto baš AGR Multimedia za web i grafiku?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mi pokrivamo web, grafiku i sadržaj u jednom timu. Radimo na srpskom, engleskom, nemačkom, italijanskom i albanskom.
        Zato briefing ostaje čist i bez gubitaka u prevodu.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Rokove držimo u pisanom obimu. Mi dokumentujemo milestone-e da znate šta sledi u svakoj fazi saradnje. Pored toga,
        držimo kratak zapis o dogovoru — scope, rokovi i kanali komunikacije. Na primer, ako treba hitna izmena na sajtu,
        dogovaramo prioritet umesto haosa u inbox-u.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Kako izgleda start projekta i šta doneti na prvi poziv?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Nakon upita mi obično odgovorimo za 24 sata. Zatim zakazujemo kratak poziv ili pismo. Molimo vas da ponesete ciljeve,
        reference i materijale koje već imate.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Za složenije projekte tražimo primere sajtova koji vam se dopadaju — ne radi kopiranja, već da razumemo očekivanja.
        Blog na <L href="/blog">blog stranici</L> pomaže oko konverzije i video tema pre nego što krenemo u izradu.
      </p>
    </>
  );
}

export function EnBody() {
  return (
    <>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        We run <strong className="text-white">AGR Multimedia</strong> from Geislingen an der Steige. Our focus is EU small
        businesses that want clearer positioning online.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Some designers insist on purely traditional craft. We believe the mix of AI and human creativity is stronger. It
        speeds iteration without losing brand accountability. However, we still honour fully manual workflows when that is the
        right ethical choice for you. In addition, I personally review launch decisions. Our mission is measurable outcomes, not
        only pretty pixels.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Unlike template-only solutions, AGR Multimedia uses a personalized AI approach. I still lead the brand voice and
        trust-critical decisions. Therefore you see where the tool helps and where we finish by hand.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        While traditional studios sometimes chase aesthetics alone, we balance visual identity with technical AI optimisation
        and speed. In 2026, one without the other rarely drives outcomes. However, craft still matters — it must pair with
        performance and clear messaging.
      </p>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        This guide explains how we deliver <L href="/web-design">web design</L>, <L href="/graphic-design">graphic design</L>,
        and <L href="/ai-content-creation">AI-assisted workflows</L>. Services live on <L href="/services">services</L>.
        Background sits on <L href="/about">about</L>. Data handling is in the <L href="/privacy-policy">privacy policy</L>.
        For accessibility we cite{" "}
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
        What do you actually get from our web design collaboration?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We do not ship vanity pages. First we ask who visits and what they must do. For example, calls, forms, or bookings
        should feel obvious within seconds. Therefore we define information architecture before visual design.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        In build-out we protect performance and mobile readability. So we add semantic headings and meaningful links. We tie
        campaigns to <L href="/digital-marketing">digital marketing</L>. Proof sits in the <L href="/portfolio">portfolio</L>.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        On the other hand, templates cut startup cost. However, when you need differentiation, we require structure. We pick
        what we automate and what stays human-reviewed.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        How do we keep brand systems consistent for print and digital?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Brand is more than a logo for us. It is colour, type, and photography rules. We ship flyers, menus, and social
        templates that match print and screen.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Print-ready files and web exports share one system. In addition, you avoid five accidental brand versions. If your
        brand exists, we refine it. If we start fresh, we guide realistic options for budget and time. Consequently every
        change has a version label, for example “menu v2” or “Q3 flyer”.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        Where does AI accelerate work — and where is human judgement essential?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We use AI for variants, draft copy, and boring resizing tasks. That saves days. However, trust-led messaging always
        passes human review.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        You always know what is machine-suggested versus hand-finished. Read more on <L href="/ai-content-creation">AI content</L>.
        Finally, I decide what goes live when stakes are high. For instance, if copy touches regulated claims, we add an extra
        review pass before launch.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        What are the pros and cons of AI in design — honestly?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pros include faster exploration and more layout ideas. Cons include generic visuals and hollow copy. Therefore we do
        not sell magic one-click sites.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        For instance, contrast and accessibility law still matter. So we pair tools with experience. Before launch we run QA
        together with you.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Why is a hybrid approach stronger than templates-only or AI-only workflows?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Templates cost less upfront. Yet they often hurt conversions because everyone looks the same. Pure AI without
        creative leadership risks brand drift.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Our hybrid pairs a design system, feedback loops, and AI where it truly helps. Thus you keep speed and accountability
        up to the <L href="/contact">contact page</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        For websites we align page maps before UI work. For brand work we document export rules. AI outputs carry version
        labels. Legal paths: <L href="/privacy-policy">privacy policy</L>, <L href="/impresum">legal notice</L>,{" "}
        <L href="/about">about</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Why choose AGR Multimedia for web and brand work?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        One team covers web, graphics, and content for us. We work in Serbian, English, German, Italian, and Albanian. That
        keeps briefings precise.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        We document scope and milestones. Therefore you always know the next step in our collaboration. We also keep a short
        written summary of decisions — channels, deadlines, and owners. Meanwhile, if you need an urgent site tweak, we agree
        priorities instead of flooding everyone with ad hoc tasks.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        How do projects start and what should you prepare?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        After your enquiry we usually reply within 24 hours. Next we book a short call or written brief. Please bring goals,
        references, and assets you already own.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        For complex builds we may ask for example sites you admire — not to copy, but to learn expectations. Meanwhile our{" "}
        <L href="/blog">blog</L> explains conversion and video topics before production starts.
      </p>
    </>
  );
}

export function DeBody() {
  return (
    <>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir führen <strong className="text-white">AGR Multimedia</strong> in Geislingen an der Steige. Unser Schwerpunkt
        liegt auf kleinen Unternehmen in der EU.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Während manche Designer nur klassische Methoden nutzen, halten wir die Symbiose aus KI und menschlicher Kreativität
        für stärker. Sie beschleunigt Iterationen ohne Markenverantwortung zu verlieren. Dennoch respektieren wir rein manuelle
        Prozesse, wenn das für Sie richtig ist. Außerdem prüfe ich persönlich kritische Launch-Entscheidungen. Unsere Mission
        sind messbare Ergebnisse.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Anders als reine Vorlagen setzen wir auf einen personalisierten KI-Workflow. Ich führe Markenstimme und
        vertrauenskritische Entscheidungen. Daher sehen Sie klar, wo automatisiert wird und wo wir freigeben.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Viele klassische Agenturen betonen nur Ästhetik. Wir balancieren Markenbild, technische KI-Optimierung und Speed.
        Im Jahr 2026 liefert eines ohne das andere selten Wirkung. Dennoch bleibt Design wichtig — es muss Performance und
        Botschaft tragen.
      </p>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        Hier beschreiben wir <L href="/web-design">Webdesign</L>, <L href="/graphic-design">Grafik und Branding</L> und{" "}
        <L href="/ai-content-creation">KI-Abläufe</L>. Überblick unter <L href="/services">Leistungen</L>. Teaminfos unter{" "}
        <L href="/about">Über uns</L>. Datenschutz in der <L href="/privacy-policy">Privacy Policy</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Was liefert Webdesign bei uns konkret?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir starten ohne Vanity-Pages. Zuerst klären wir Ziele und Informationsarchitektur. Dann folgen UX und UI.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Performance und Mobile-First gehören dazu. Zudem pflegen wir technische SEO-Basics. Kampagnen binden wir über{" "}
        <L href="/digital-marketing">Digital Marketing</L> ein. Beispiele liegen im <L href="/portfolio">Portfolio</L>.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Andererseits senken Templates die Startkosten. Wenn Sie sich jedoch differenzieren müssen, brauchen wir klare Regeln.
        Daher trennen wir Automation und Freigabe bewusst.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Wie bleiben Grafik und Branding zwischen Print und Digital konsistent?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Identität ist mehr als ein Logo. Wir definieren Farben, Typografie und Bildsprache. Flyer und Social-Posts wirken so
        zusammen.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Druckdaten und Web-Exporte folgen einem System. Dadurch vermeiden wir Versions-Chaos über Kanäle hinweg. Zudem
        benennen wir Dateien einheitlich, zum Beispiel „Flyer_Q3_v2“. So bleibt die Freigabe nachvollziehbar.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        Wo beschleunigt KI den Prozess — und wo bleibt der Mensch unverzichtbar?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        KI hilft bei Varianten und wiederholenden Schritten. Das spart Zeit. Dennoch bleiben Vertrauensbotschaften beim Team.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Mehr lesen Sie bei <L href="/ai-content-creation">KI-Inhalten</L>. Am Ende entscheide ich mit Ihnen, was live geht.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Welche Vor- und Nachteile hat KI im Design — realistisch betrachtet?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Vorteile sind Tempo und Variantenreichtum. Risiken sind generischer Look und leere Texte. Deshalb verkaufen wir kein
        Ein-Klick-Wunder.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Zum Beispiel gelten Barrierefreiheit und Werbeaussagen weiter. Daher kombinieren wir KI mit QA vor dem Livegang.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Warum Hybrid schlägt „nur Vorlage“ oder „nur KI ohne Lead“?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Vorlagen sind billig am Start. Sie kosten aber oft Conversion. Reine KI ohne Lead riskiert Markenbrüche.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Unser Hybrid verbindet Systemdesign, Feedback und KI mit Mehrwert. So bleibt Verantwortung bis zur{" "}
        <L href="/contact">Kontaktseite</L> klar.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Für Web dokumentieren wir Seitenlisten vor dem UI. Für Grafik legen wir Exportregeln fest. KI-Dateien erhalten
        Versionsnamen. Rechtliches: <L href="/privacy-policy">Datenschutzerklärung</L>, <L href="/impresum">Impressum</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Warum AGR Multimedia für Web und Grafik?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ein Team deckt Web, Grafik und Content ab. Wir sprechen Serbisch, Englisch, Deutsch, Italienisch und Albanisch. Dadurch
        bleibt das Briefing präzise.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Wir dokumentieren Scope und Meilensteine. Folglich wissen Sie immer, was als Nächstes kommt. Außerdem halten wir kurze
        Beschlüsse fest — Kanäle, Termine, Verantwortliche. Im Übrigen klären wir bei Dringlichkeiten Prioritäten statt
        Ad-hoc-Chaos.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Wie startet ein Projekt — und was sollten Sie vorbereiten?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Nach Ihrer Anfrage antworten wir meist in 24 Stunden. Danach folgt ein kurzes Gespräch oder Briefing. Bitte bringen Sie
        Ziele, Referenzen und bestehende Assets mit.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Für komplexe Projekte fragen wir nach Beispielseiten — nicht zum Kopieren, sondern zum Verständnis. Nebenbei hilft der{" "}
        <L href="/blog">Blog</L> zu Conversion und Video.
      </p>
    </>
  );
}

export function ItBody() {
  return (
    <>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Noi gestiamo <strong className="text-white">AGR Multimedia</strong> a Geislingen an der Steige. Il nostro pubblico sono
        PMI dell&apos;UE che vogliono chiarezza online.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Alcuni designer scelgono solo metodi tradizionali. Noi crediamo che la simbiosi tra intelligenza artificiale e
        creatività umana sia più forte. Essa accelera le iterazioni senza perdere responsabilità sul brand. Tuttavia rispettiamo
        anche processi completamente manuali quando serve. Inoltre supervisiono io le decisioni critiche prima del go-live. La
        nostra missione sono risultati misurabili.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        A differenza delle sole soluzioni template, usiamo un flusso AI personalizzato. Io guido voce del brand e scelte di
        fiducia. Perciò capite dove il tool aiuta e dove rifiniamo a mano.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Molte agenzie tradizionali inseguono solo l&apos;estetica. Noi bilanciamo identità visiva, AI tecnica e velocità. Nel
        2026, raramente basta solo uno dei due. Tuttavia l&apos;aspetto resta centrale — deve andare con performance e
        messaggio.
      </p>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        Questa guida copre <L href="/web-design">web design</L>, <L href="/graphic-design">grafica e branding</L>,{" "}
        <L href="/ai-content-creation">flussi AI</L>. Servizi su <L href="/services">servizi</L>. Team su{" "}
        <L href="/about">chi siamo</L>. Privacy nella <L href="/privacy-policy">privacy policy</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Cosa ottieni concretamente nel nostro web design?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Non vendiamo pagine vuote. Prima definiamo metriche e architettura delle informazioni. Poi segue la grafica.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Prestazioni, mobile e SEO tecnico sono inclusi. In più colleghiamo le campagne tramite{" "}
        <L href="/digital-marketing">digital marketing</L>. Casi nel <L href="/portfolio">portfolio</L>.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        D&apos;altra parte i template abbassano i costi iniziali. Però quando serve differenziazione servono regole chiare.
        Perciò decidiamo cosa automatizzare e cosa revisionare a mano.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Come manteniamo coerenza tra stampa e digitale?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Il brand non è solo logo. Costruiamo palette e tipografie coerenti. Flyer e social seguono le stesse regole.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        File stampa ed export digitali vivono nello stesso sistema. Così eviti versioni casuali tra i canali. In più nominiamo
        i file in modo coerente, ad esempio „menu_v2“. Dunque la revisione resta tracciabile.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        Dove l&apos;AI accelera — e dove serve il giudizio umano?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        L&apos;AI accelera varianti e compiti ripetitivi. In questo modo risparmiamo giorni. Nonostante ciò i messaggi di
        fiducia restano umani.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Dettagli su <L href="/ai-content-creation">contenuti AI</L>. Infine decidiamo insieme cosa pubblicare.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Quali sono pro e contro dell&apos;AI nel design — senza slogan?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pro: velocità e più varianti. Contro: genericità e testi vuoti. Dunque non vendiamo miracoli in un clic.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ad esempio contrasto e accessibilità restano obbligatori. Pertanto combiniamo tool ed esperienza prima del lancio.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Perché un approccio ibrido batte solo template o solo AI?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        I template riducono il costo iniziale. Spesso però omogeneizzano l&apos;offerta. Solo AI senza direzione rischia
        incoerenze.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Il nostro ibrido unisce sistema di design, feedback e AI mirata fino al modulo{" "}
        <L href="/contact">contatti</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Nei progetti web definiamo KPI condivisi senza appesantire la cookie policy della{" "}
        <L href="/privacy-policy">privacy policy</L>. In grafica allineiamo mockup e palette. Per il team:{" "}
        <L href="/about">chi siamo</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Perché scegliere AGR Multimedia per web e brand?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Un team unico copre web, grafica e produzione. Parliamo serbo, inglese, tedesco, italiano e albanese. Così il briefing
        resta pulito.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Documentiamo scope e milestone. Quindi sai sempre il passo successivo con noi. Inoltre teniamo note brevi su decisioni,
        canali e scadenze. Nel frattempo, se serve un fix urgente, concordiamo priorità invece di task casuali.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Come inizia un progetto — e cosa preparare?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Dopo la richiesta rispondiamo rapidamente. Poi fissiamo call o briefing scritto. Porta obiettivi, reference e asset.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Per progetti complessi chiediamo esempi che ami — non per copiare, ma per capire attese. Nel frattempo il{" "}
        <L href="/blog">blog</L> aiuta su conversion e video.
      </p>
    </>
  );
}

export function AlBody() {
  return (
    <>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ne drejtojmë <strong className="text-white">AGR Multimedia</strong> në Geislingen an der Steige. Fokusi ynë janë bizneset
        e vogla në BE që duan pozicionim më të qartë online.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ndërsa disa dizajnerë parapëlqejnë vetëm metoda tradicionale, ne në AGR Multimedia besojmë se simbioza e AI-së dhe
        kreativitetit njerëzor është superiore. Ajo përshpejton iteracionet pa humbur përgjegjësinë ndaj markës. Megjithatë
        respektojmë edhe procese krejtësisht manuale kur është zgjedhja e duhur. Për më tepër, unë personalisht mbikëqyr
        vendimet kritike para publikimit. Misioni ynë janë rezultate të matshme.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ndryshe nga zgjidhjet vetëm me shabllone, ne përdorim një qasje të personalizuar me AI. Unë udhëheq zërin e markës dhe
        vendimet e besimit. Prandaj shihni qartë ku ndihmon mjeti dhe ku përfundojmë dorazi.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-white/80">
        Shumë agjenci tradicionale kërkojnë vetëm estetikë. Ne balancojmë identitetin vizual me optimizim teknik të AI-së dhe
        shpejtësinë. Në 2026, rrallë mjafton vetëm njëra anë. Megjithatë pamja mbetet e rëndësishme — duhet të përputhet me
        performancën dhe mesazhin.
      </p>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
        Kjo faqe shpjegon <L href="/web-design">web dizajn</L>, <L href="/graphic-design">grafikë dhe branding</L>, dhe{" "}
        <L href="/ai-content-creation">rrjedha me AI</L>. Shërbimet: <L href="/services">shërbimet</L>. Rreth nesh:{" "}
        <L href="/about">rreth nesh</L>. Privatësia: <L href="/privacy-policy">politika e privatësisë</L>.
      </p>

      <SeoTopicHeading id="seo-topic-web">
        Çfarë merrni konkretisht nga web dizajni ynë?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ne nuk shesim faqe boshe. Së pari përcaktojmë qëllimet dhe arkitekturën e informacionit. Pastaj vjen dizajni vizual.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Performanca dhe mobile janë të përfshira. Gjithashtu lidhim kampanjat përmes{" "}
        <L href="/digital-marketing">marketingut digjital</L>. Shembuj gjenden në <L href="/portfolio">portfolio</L>.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Në anën tjetër, shabllonet ulën koston fillestare. Por kur ju duhet diferencim, na duhen rregulla të qarta. Prandaj
        vendosim çfarë automatizohet dhe çfarë kontrollohet dorazi.
      </p>

      <SeoTopicHeading id="seo-topic-graphic">
        Si qëndron i njëtrajtshëm brendi në print dhe në ekran?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Brendi është më shumë se logo. Ne përcaktojmë ngjyra dhe tipografi të njëtrajtshme. Flyerët dhe rrjetet sociale përputhen.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Skedarët për print dhe eksportet digitale ndjekin të njëjtin sistem. Kështu shmangni versione të rastësishme. Gjithashtu
        përdorim emërtim të qëndrueshëm skedarësh, për shembull „menu_v2“. Me këtë, miratimet mbeten të gjurmueshme.
      </p>

      <SeoTopicHeading id="seo-topic-ai">
        Ku AI përshpejton — dhe kur është i domosdoshëm njeriu?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ne përdorim AI për variante dhe detaje të përsëritura. Kjo kursen kohë. Megjithatë mesazhet e besimit kalojnë në revizion
        njerëzor.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Lexoni më shumë te <L href="/ai-content-creation">përmbajtja me AI</L>. Në fund vendosim bashkë çfarë publikohet.
      </p>

      <SeoTopicHeading id="seo-topic-ai-tradeoffs">
        Cilat janë përfitimet dhe kufizimet e AI në dizajn — sinqerisht?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pro: shpejtësi dhe më shumë variante. Kundër: pamje gjenerike dhe tekst pa thellësi. Prandaj nuk shesim magji me një klik.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Për shembull kontrasti dhe aksesibiliteti mbeten të detyrueshëm. Prandaj kombinojmë mjetet me cilësi para publikimit.
      </p>

      <SeoTopicHeading id="seo-topic-hybrid">
        Pse qasja hibride fiton ndaj vetëm shablloneve ose vetëm AI-së?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Shabllonet janë të lira në fillim. Shpesh dobësojnë diferencimin. Vetëm AI pa udhëheqje rrezikon markën.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Qasja jonë hibride bashkon sistem dizajni, feedback dhe AI deri te forma në <L href="/contact">kontakt</L>.
      </p>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/80">
        Për projektet e uebit dokumentojmë strukturën para UI-së. Në grafikë përputhim palette. Transparenca:{" "}
        <L href="/privacy-policy">politika e privatësisë</L> dhe <L href="/about">rreth nesh</L>.
      </p>

      <SeoTopicHeading id="seo-topic-why">
        Pse të zgjidhni AGR Multimedia për web dhe grafikë?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Një ekip mbulon web, grafikë dhe përmbajtje. Flasim serbisht, anglisht, gjermanisht, italisht dhe shqip. Kjo e bën
        briefing-un të qartë.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Ne dokumentojmë scope dhe milestone. Pra e dini gjithmonë hapi tjetër me ne. Për më tepër mbajmë shënime të shkurtra për
        vendime dhe afate. Ndërkaq, për ndryshime urgjente, përcaktojmë prioritete në vend të detyrave të rastit.
      </p>

      <SeoTopicHeading id="seo-topic-kickoff">
        Si fillon projekti — dhe çfarë të përgatisni?
      </SeoTopicHeading>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Pas kërkesës përgjigjemi shpejt. Pastaj caktojmë telefonatë ose briefing. Sillni qëllime, referenca dhe materiale ekzistuese.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80">
        Për projekte komplekse kërkojmë shembuj që ju pëlqejnë — jo për kopjim, por për pritshmëri. Ndërkaq blogu në{" "}
        <L href="/blog">blog</L> ndihmon për konvertim dhe video.
      </p>
    </>
  );
}

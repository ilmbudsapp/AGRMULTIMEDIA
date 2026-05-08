/**
 * One-off generator: merges head from client/index.html with expanded <noscript> body.
 * Run: node scripts/patch-index-noscript.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const indexPath = path.join(root, "client", "index.html");
let src = fs.readFileSync(indexPath, "utf8");
const headEnd = src.indexOf("</head>") + "</head>".length;
const head = src.slice(0, headEnd);

const body = `
<body>
    <noscript>
        <nav role="navigation" aria-label="Glavna navigacija na sajtu AGR Multimedia" style="padding:0.75rem 1.5rem;background:#0a0a0f;border-bottom:1px solid #333;font-family:system-ui,sans-serif;font-size:0.9rem;color:#e5e5e5;">
        <a href="/" style="color:#93c5fd;">Početna</a>
        · <a href="/about" style="color:#93c5fd;">O nama</a>
        · <a href="/services" style="color:#93c5fd;">Usluge</a>
        · <a href="/web-design" style="color:#93c5fd;">Web dizajn</a>
        · <a href="/graphic-design" style="color:#93c5fd;">Grafika</a>
        · <a href="/portfolio" style="color:#93c5fd;">Portfolio</a>
        · <a href="/blog" style="color:#93c5fd;">Blog</a>
        · <a href="/contact" style="color:#93c5fd;">Kontakt</a>
        · <a href="/privacy-policy" style="color:#93c5fd;">Politika privatnosti</a>
        · <a href="/terms" style="color:#93c5fd;">Uslovi</a>
    </nav>
        <main role="main" id="noscript-main-content">
        <div style="padding: 2rem; max-width: 42rem; margin: 0 auto; background: #07070b; color: #e5e5e5; font-family: system-ui, sans-serif; line-height: 1.65;">
            <img src="/agr-logo-white.png" alt="Agron Osmani - AGR Multimedia Web Dizajn i SEO" width="140" height="46" loading="lazy" decoding="async" style="display:block;margin-bottom:1rem;height:auto;" />
            <p style="margin-top:0;"><strong>Autor:</strong> <a href="https://www.linkedin.com/in/agron-osmani-228947266/" style="color:#93c5fd;" rel="author">Agron Osmani</a> · CEO, AGR Multimedia · Geislingen an der Steige · <time datetime="2026-05-08">8. maj 2026.</time></p>
            <h1 style="font-size: 1.5rem; color: #fff;">Web dizajn i grafika za mala preduzeća u EU (Geislingen)</h1>
            <p><strong>Napomena o naslovu stranice:</strong> u &lt;title&gt; tagu je brendirani kratki zapis; ovaj H1 širi ključne reči (web dizajn, EU, lokacija). Preporuka je da se title drži ispod 60 znakova radi boljeg prikaza u SERP-u (vidi <a href="https://developers.google.com/search/docs/appearance/title-link" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Google Search Central</a>).</p>

            <h2 id="seo-section-title" style="font-size: 1.35rem; color: #fff; margin-top: 1.75rem;">Kako AGR Multimedia isporučuje web dizajn, grafiku i AI marketing malim preduzećima u EU?</h2>
            <p id="seo-visible-byline" lang="en" style="font-size: 0.75rem; color: #999; margin: 0.35rem 0 0 0;">By Agron Osmani</p>

            <p style="margin-top:1rem;">Mi pripremamo ovaj sadržaj da bude jasan mala preduzećima u EU. Ovde je detaljan pregled usluga, našeg toka rada i odgovornog korišćenja veštačke inteligencije. Pored toga, linkovi vode ka stranici usluga, O nama i politici privatnosti. Stoga brzo pronalazite ono što vam treba pre prvog razgovora.</p>
            <p id="seo-answer-lead"><strong>Ukratko:</strong> naša misija su brze, SEO-prijateljske stranice i dosledan brend. AI koristimo gde ubrzava rad. Međutim, ja lično pazim da odluke koje grade poverenje ostanu ljudske. Pre objave proveravamo performanse i jasnoću poruke — za vas, ne samo za algoritam.</p>

            <aside style="margin:1.25rem 0;padding:1rem;border:1px solid rgba(96,165,250,0.35);border-radius:0.5rem;background:rgba(59,130,246,0.08);font-size:0.9rem;">
                <strong>Rad usklađujemo sa javnim specifikacijama:</strong>
                <a href="https://www.w3.org/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">W3C</a>
                · <a href="https://schema.org/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Schema.org</a>
                · <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">MDN</a>
                · <a href="https://developers.google.com/search/docs" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Google Search Central</a>
            </aside>

            <p style="font-size:0.85rem;color:#aaa;"><time datetime="2026-05-08">8. maj 2026.</time> · Poslednje ažuriranje ovog teksta.</p>

            <div id="seo-takeaways" style="margin:1.25rem 0;padding:1rem;border:1px solid rgba(52,211,153,0.35);border-radius:0.5rem;background:rgba(16,185,129,0.07);">
                <p style="margin:0;font-weight:600;color:#fff;">Ključne tačke</p>
                <ul style="margin:0.5rem 0 0 1rem;">
                    <li>Studio u Geislingen an der Steige — web, grafika i video za mala preduzeća u EU.</li>
                    <li>Prvo struktura stranica i poruka, zatim dizajn; tehnički SEO i performanse od početka.</li>
                    <li>AI koristimo za skicu i produkciju; konačni kvalitet i odgovornost su uvek ljudski.</li>
                    <li>Na upit obično odgovaramo u roku od 24 sata; jasan obim i rokovi u pisanom dogovoru.</li>
                </ul>
            </div>

            <dl style="margin:1.25rem 0;padding:1rem;border:1px solid #444;border-radius:0.5rem;font-size:0.9rem;">
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Lokacija:</dt> <dd style="display:inline;margin:0;">Geislingen an der Steige (Baden-Württemberg, DE)</dd></div>
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Jezici saradnje:</dt> <dd style="display:inline;margin:0;">sr, en, de, it, sq — 5 jezika</dd></div>
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Odgovor na upit:</dt> <dd style="display:inline;margin:0;">obično do 24 sata</dd></div>
                <div><dt style="font-weight:600;color:#93c5fd;display:inline;">Primarna zona:</dt> <dd style="display:inline;margin:0;">EU (mala preduzeća)</dd></div>
            </dl>

            <nav aria-label="Sadržaj na ovoj stranici" style="margin:1.25rem 0;padding:1rem;border:1px solid #444;border-radius:0.5rem;">
                <p style="margin:0 0 0.5rem 0;font-weight:600;color:#fff;">Na ovoj stranici</p>
                <ol style="margin:0;padding-left:1.25rem;">
                    <li><a href="#seo-topic-web" style="color:#93c5fd;">Šta konkretno dobijate kada radimo web dizajn zajedno?</a></li>
                    <li><a href="#seo-topic-graphic" style="color:#93c5fd;">Kako izgleda grafički dizajn koji ostaje dosledan u štampi i na ekranu?</a></li>
                    <li><a href="#seo-topic-ai" style="color:#93c5fd;">Gde AI ubrzava produkciju, a gde je čovek neophodan?</a></li>
                    <li><a href="#seo-topic-ai-tradeoffs" style="color:#93c5fd;">Kakve su prednosti i mane AI u dizajnu — praktično gledano?</a></li>
                    <li><a href="#seo-topic-hybrid" style="color:#93c5fd;">Zašto je hibrid bolji od čistog šablona ili „samo AI bez dizajn tima”?</a></li>
                    <li><a href="#seo-topic-why" style="color:#93c5fd;">Zašto baš AGR Multimedia za web i grafiku?</a></li>
                    <li><a href="#seo-topic-kickoff" style="color:#93c5fd;">Kako izgleda start projekta i šta doneti na prvi poziv?</a></li>
                </ol>
            </nav>

            <p>Mi vodimo <strong style="color:#fff;">AGR Multimedia</strong> iz Geislingen an der Steige (Baden-Württemberg). Naš fokus su mala preduzeća u EU koje žele jasniji nastup na webu.</p>
            <p>Dok neki dizajneri vole isključivo tradicionalne metode, mi u AGR Multimedia smatramo da simbioza AI-a i ljudske kreativnosti daje brže iteracije. Pritom ne gubimo odgovornost prema brendu. Međutim, poštujemo i potpuno ručne procese kada je to pravi izbor za vas. Pored toga, ja lično nadgledam ključne odluke pre objave. Naša misija je merljiv rezultat, a ne samo lep ekran.</p>
            <p>Za razliku od šablonskih rešenja, AGR Multimedia koristi personalizovan AI pristup. Mi ručno vodimo glas brenda i odluke koje grade poverenje. Stoga klijent uvek vidi gde alat pomaže, a gde završavamo ručno.</p>
            <p>Ovaj tekst objašnjava kako radimo <a href="/web-design" style="color:#93c5fd;">web dizajn</a>, <a href="/graphic-design" style="color:#93c5fd;">grafički dizajn</a> i <a href="/ai-content-creation" style="color:#93c5fd;">AI podršku</a>. Za ceo spektar usluga idite na <a href="/services" style="color:#93c5fd;">stranicu usluga</a>. Tim opisujemo na <a href="/about" style="color:#93c5fd;">O nama</a>. Za lične podatke važi <a href="/privacy-policy" style="color:#93c5fd;">Politika privatnosti</a>. Za pristupačnost koristimo <a href="https://www.w3.org/WAI/WCAG21/quickref/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">WCAG 2.1 Quick Reference (W3C WAI)</a>.</p>

            <h3 id="seo-topic-web" style="font-size: 1.15rem; color: #fff; margin-top: 1.5rem;">Šta konkretno dobijate kada radimo web dizajn zajedno?</h3>
            <p>Mi ne radimo „sajt radi sajta”. Prvo pitamo ko je idealan posetilac i šta treba da uradi. Na primer, poziv, forma ili rezervacija moraju biti jasni u prvih deset sekundi. Zato informacionu arhitekturu pišemo pre vizuelnog koncepta.</p>
            <p>U implementaciji čuvamo brzinu učitavanja i mobilnu čitljivost. Stoga dodajemo semantičke naslove i smislene linkove. Kampanje povezujemo sa delom o <a href="/digital-marketing" style="color:#93c5fd;">digitalnom marketingu</a>. Reference su u <a href="/portfolio" style="color:#93c5fd;">portfoliju</a>.</p>
            <p>Sa druge strane, šabloni i page-builder-i mogu smanjiti početni trošak. Međutim, kada vam treba diferenc i isti brend na sajtu i u štampi, treba nam struktura — biramo šta automatizujemo, a šta ručno potvrđujemo.</p>

            <h3 id="seo-topic-graphic" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Kako izgleda grafički dizajn koji ostaje dosledan u štampi i na ekranu?</h3>
            <p>Za nas brend nije samo logo. To su pravila boja, tipografije i fotografije. Mi pravimo flajere, menije i društvene formate koji izgledaju jednako u štampi i na telefonu.</p>
            <p>Priprema za štampu ide uz digitalne izlaske u jednom sistemu. Pored toga, izbegavate pet „verzija” brenda po kanalima. Ako brend već postoji, mi ga doterivamo. Ako počinjemo od nule, vodimo vas kroz realne varijante za budžet i rok. Shodno tome, svaka izmena ima verziju — na primer „v2 meni“ ili „letak Q3“.</p>

            <h3 id="seo-topic-ai" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Gde AI ubrzava produkciju, a gde je čovek neophodan?</h3>
            <p>Mi koristimo AI za varijante, skicu teksta i dosadne zadatke poput dimenzija paketa. To skraćuje vreme. Međutim, poruke koje grade poverenje uvek prolaze ljudsku reviziju.</p>
            <p>Vi znate šta je mašinski predlog, a šta ručno doterano. Više o tokovima čitate na <a href="/ai-content-creation" style="color:#93c5fd;">AI sadržaj i produkcija</a>. Na kraju, ja biram šta ide uživo. Na primer, ako kampanja ima pravni rizik, šaljemo tekst na dodatnu proveru pre objave.</p>

            <h3 id="seo-topic-ai-tradeoffs" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Kakve su prednosti i mane AI u dizajnu — praktično gledano?</h3>
            <p>Prednosti su brža ideja i više layout varijanti. Mane su generički izgled i „glatki” tekstovi bez dubine. Zato mi ne prodajemo čarobni jedan klik.</p>
            <p>Na primer, kontrast i pristupačnost moraju ostati ispravni. Stoga kombinujemo alate i iskustvo. Pre objave radimo kontrolu kvaliteta zajedno sa vama.</p>

            <h3 id="seo-topic-hybrid" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Zašto je hibrid bolji od čistog šablona ili „samo AI bez dizajn tima”?</h3>
            <p>Šabloni koštaju manje na početku. Ali često slabije konvertuju jer izgledaju kao konkurencija. Čist AI bez vođenja riskira haos u brendu.</p>
            <p>Mi radimo hibrid: dizajn sistem, feedback i AI gde pomaže. Tako dobijate brzinu i odgovornost do klika „Pošalji” na <a href="/contact" style="color:#93c5fd;">kontaktu</a>.</p>

            <p>Za web pravimo mapu stranica pre UI-ja. Za grafiku definišemo export pravila. AI izlazi dobijaju oznaku verzije. Pravno: <a href="/privacy-policy" style="color:#93c5fd;">Politika privatnosti</a>, <a href="/impresum" style="color:#93c5fd;">Impressum</a>, <a href="/about" style="color:#93c5fd;">O nama</a>.</p>

            <h3 id="seo-topic-why" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Zašto baš AGR Multimedia za web i grafiku?</h3>
            <p>Mi pokrivamo web, grafiku i sadržaj u jednom timu. Radimo na srpskom, engleskom, nemačkom, italijanskom i albanskom. Zato briefing ostaje čist i bez gubitaka u prevodu.</p>
            <p>Rokove držimo u pisanom obimu. Mi dokumentujemo milestone-e da znate šta sledi u svakoj fazi saradnje. Pored toga, držimo kratak zapis o dogovoru — scope, rokovi i kanali komunikacije. Na primer, ako treba hitna izmena na sajtu, dogovaramo prioritet umesto haosa u inbox-u.</p>

            <h3 id="seo-topic-kickoff" style="font-size: 1.15rem; color: #fff; margin-top: 1.25rem;">Kako izgleda start projekta i šta doneti na prvi poziv?</h3>
            <p>Nakon upita mi obično odgovorimo za 24 sata. Zatim zakazujemo kratak poziv ili pismo. Molimo vas da ponesete ciljeve, reference i materijale koje već imate.</p>
            <p>Za složenije projekte tražimo primere sajtova koji vam se dopadaju — ne radi kopiranja, već da razumemo očekivanja. Blog na <a href="/blog" style="color:#93c5fd;">blog stranici</a> pomaže oko konverzije i video tema pre nego što krenemo u izradu.</p>

            <table style="width:100%;border-collapse:collapse;margin:1rem 0;font-size:0.9rem;">
                <caption style="text-align:left;font-weight:600;color:#fff;padding-bottom:0.5rem;">Poređenje pristupa (pojednostavljeno)</caption>
                <thead><tr style="border-bottom:1px solid #444;"><th style="text-align:left;padding:0.35rem;">Pristup</th><th style="text-align:left;padding:0.35rem;">Prednost</th><th style="text-align:left;padding:0.35rem;">Rizik</th></tr></thead>
                <tbody>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">Šablon</td><td style="padding:0.35rem;">Niža početna cena</td><td style="padding:0.35rem;">Sličan izgled kao kod konkurencije</td></tr>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">Samo AI</td><td style="padding:0.35rem;">Brza skica</td><td style="padding:0.35rem;">Generički ton i brend rizici</td></tr>
                    <tr><td style="padding:0.35rem;">Hibrid (tim + AI)</td><td style="padding:0.35rem;">Brzina + kontrola</td><td style="padding:0.35rem;">Zahteva jasan briefing</td></tr>
                </tbody>
            </table>

            <blockquote cite="https://www.linkedin.com/in/agron-osmani-228947266/" style="margin:1.25rem 0;padding-left:1rem;border-left:4px solid #60a5fa;color:#ddd;font-style:italic;">„Merljivost mora da bude dogovorena pre dizajna — inače lep izgled ostaje samo estetika bez odgovornosti za rezultat.” — <span style="font-style:normal;color:#aaa;">Agron Osmani · CEO, AGR Multimedia</span></blockquote>

            <p><strong>Pet koraka od prvog upita do objave</strong></p>
            <ol style="margin-top:0.5rem;padding-left:1.25rem;">
                <li>Upit ili konsultacija — ciljevi, budžet i rokovi u jednoj poruci.</li>
                <li>Briefing i struktura stranica (informaciona arhitektura, stubovi poruka).</li>
                <li>Dizajn i razvoj u iteracijama — vaš feedback pre svake faze.</li>
                <li>Testiranje performansi, mobilnog prikaza i formi pre javnog puštanja.</li>
                <li>Objava, osnovno praćenje i dogovor o sledećim koracima (marketing, sadržaj, širenje).</li>
            </ol>

            <h3 style="font-size: 1.05rem; color: #fff; margin-top: 1.5rem;">Ključni pojmovi</h3>
            <dl style="margin:1rem 0;padding-left:0;">
                <dt style="font-weight:600;color:#fff;margin-top:0.75rem;">On-page SEO</dt>
                <dd style="margin:0.25rem 0 0 0;">Optimizacija sadržaja i HTML strukture na samoj stranici (naslovi, linkovi, brzina) da pretraživači bolje razumeju temu.</dd>
                <dt style="font-weight:600;color:#fff;margin-top:0.75rem;">Semantički HTML</dt>
                <dd style="margin:0.25rem 0 0 0;">Korišćenje smislenih elemenata (naslovi, section, article) usklađeno sa specifikacijom što olakšava pristupačnost i razumevanje stranice.</dd>
                <dt style="font-weight:600;color:#fff;margin-top:0.75rem;">JSON-LD / Schema.org</dt>
                <dd style="margin:0.25rem 0 0 0;">Strukturisani podaci u JSON formatu koji objašnjavaju entitete (Organization, Person, FAQ) prema vokabularu <a href="https://schema.org/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">schema.org</a>.</dd>
                <dt style="font-weight:600;color:#fff;margin-top:0.75rem;">Brend sistem</dt>
                <dd style="margin:0.25rem 0 0 0;">Pravila za logo, boje i tipografiju koja čine dosledan izgled na sajtu, štampi i društvenim mrežama.</dd>
            </dl>

            <p>Referentni izvori: <a href="https://www.w3.org/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">W3C</a>, <a href="https://schema.org/" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Schema.org</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">MDN</a>, <a href="https://developers.google.com/search/docs" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Google Search Central</a>.</p>
            <p><a href="/about" style="color: #93c5fd;">O nama</a> · <a href="/services" style="color: #93c5fd;">Usluge</a> · <a href="/web-design" style="color: #93c5fd;">Web dizajn</a> · <a href="/graphic-design" style="color: #93c5fd;">Grafika</a> · <a href="/portfolio" style="color: #93c5fd;">Portfolio</a> · <a href="/blog" style="color: #93c5fd;">Blog</a> · <a href="/contact" style="color: #93c5fd;">Kontakt</a> · <a href="/privacy-policy" style="color: #93c5fd;">Politika privatnosti</a> · <a href="/terms" style="color: #93c5fd;">Uslovi korišćenja</a></p>
            <p>Za punu funkcionalnost i jezike sajta uključite JavaScript u pregledaču.</p>

            <footer role="contentinfo" style="margin-top:2rem;padding-top:1rem;border-top:1px solid #333;font-size:0.875rem;color:#888;">
                <p style="margin:0;">AGR Multimedia · Geislingen an der Steige · <a href="tel:+4915560873124" style="color:#93c5fd;">+49 155 60873124</a> · <a href="mailto:agron6922@gmail.com" style="color:#93c5fd;">agron6922@gmail.com</a></p>
            </footer>
        </div>
        </main>
    </noscript>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

fs.writeFileSync(indexPath, head + body, "utf8");
console.log("Updated client/index.html noscript + landmarks.");

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
        · <a href="#optimization-excellence" style="color:#93c5fd;">SEO / AI optimizacija</a>
    </nav>
        <main role="main" id="noscript-main-content">
        <div style="padding: 2rem; max-width: 42rem; margin: 0 auto; background: #07070b; color: #e5e5e5; font-family: system-ui, sans-serif; line-height: 1.65;">
            <figure style="margin:0 0 1rem 0;">
                <img src="/agr-logo-white.webp" alt="Agron Osmani - AGR Multimedia Web Dizajn i SEO" width="140" height="46" loading="eager" fetchpriority="high" decoding="async" style="display:block;height:auto;" />
                <figcaption style="margin-top:0.35rem;font-size:0.75rem;color:#9ca3af;">Logo studija AGR Multimedia u SEO sekciji.</figcaption>
            </figure>
            <p style="margin-top:0;"><strong>Autor:</strong> <a href="https://www.linkedin.com/in/agron-osmani-228947266/" style="color:#93c5fd;" rel="author">Agron Osmani</a> · CEO, AGR Multimedia · Geislingen an der Steige · <time datetime="2026-05-08">8. maj 2026.</time></p>
            <h1 id="seo-static-h1" style="font-size: 1.5rem; color: #fff;">AGR Multimedia — Web, grafika i AI · Geislingen</h1>
            <p style="margin-top:0.75rem;line-height:1.65;">Mi u AGR Multimedia iz <strong>Geislingen an der Steige</strong> radimo <a href="/web-design" style="color:#93c5fd;">web dizajn</a>, <a href="/graphic-design" style="color:#93c5fd;">grafiku</a>, video i <a href="/ai-content-creation" style="color:#93c5fd;">AI podršku</a> malim preduzećima u Nemačkoj i EU. Ovaj tekst je u noscript bloku da pretraživači i AI alati bez JavaScript-a odmah vide lokaciju i ključne usluge.</p>

            <div id="seo-takeaways" style="margin:1.25rem 0;padding:1rem;border:1px solid rgba(52,211,153,0.35);border-radius:0.5rem;background:rgba(16,185,129,0.07);">
                <p style="margin:0;font-weight:600;color:#fff;">Ključne tačke</p>
                <ul style="margin:0.5rem 0 0 1rem;">
                    <li>Studio u Geislingen an der Steige — web, grafika i video za mala preduzeća u EU.</li>
                    <li>Prvo struktura stranica i poruka, zatim dizajn; tehnički SEO i performanse od početka.</li>
                    <li>AI koristimo za skicu i produkciju; konačni kvalitet i odgovornost su uvek ljudski.</li>
                    <li>Na upit obično odgovaramo u roku od 24 sata; jasan obim i rokovi u pisanom dogovoru.</li>
                </ul>
            </div>

            <section id="optimization-excellence" aria-labelledby="opt-excel-h2" style="margin:1.75rem 0;padding:1.25rem 1.35rem 1.5rem;border:1px solid rgba(52,211,153,0.28);border-radius:0.75rem;background:linear-gradient(165deg,rgba(12,16,24,0.96),rgba(7,7,11,0.98));">
                <p style="margin:0;font-size:0.65rem;letter-spacing:0.16em;text-transform:uppercase;color:#34d399;">AI i optimizacija pretrage</p>
                <h2 id="opt-excel-h2" style="font-size:1.22rem;color:#fff;margin:0.45rem 0 0.85rem 0;line-height:1.3;">Izuzetnost u optimizaciji: tehnički SEO, AEO i GEO</h2>
                <p style="margin:0 0 0.75rem 0;">Usklađujemo sajt za klasičnu pretragu, odgovorne sisteme i generativno pronalaženje — uz merljive skorove i jasnu kvalitetnu granicu. Godine 2026. „malo bolje“ više nije dovoljno: korisnici i AI sistemi očekuju brze, proverljive i strukturisane odgovore. <strong>Grade A</strong> signal znači da vas brend izgleda tehnički uredno i pouzdano pre nego što neko pročita ceo uvod.</p>
                <p style="margin:0 0 1rem 0;">Optimizujemo za Google i klasičnu pretragu, a sadržaj strukturišemo tako da modeli kao ChatGPT i Gemini mogu tačno da citiraju vaše stranice kada predlažu rešenja. Tri stuba: <strong>SEO i tehnička izvrsnost</strong> (indeksiranje, performanse, Core Web Vitals, strukturisani podaci); <strong>AEO</strong> (jasni odgovori i definicije za sisteme odgovora); <strong>GEO / Generative Engine Optimization</strong> (transparentnost i pouzdani izvori za generativne modele).</p>
                <div id="agr-multimedia-benchmark" style="margin:1.25rem 0;padding:1rem 1.1rem;border:1px solid rgba(129,140,248,0.38);border-radius:0.65rem;background:linear-gradient(165deg,rgba(49,46,129,0.35),rgba(7,7,11,0.92));">
                    <p style="margin:0;font-size:0.62rem;letter-spacing:0.14em;text-transform:uppercase;color:#a5b4fc;">Naš sopstveni benchmark</p>
                    <h3 style="font-size:1.05rem;color:#fff;margin:0.45rem 0 0.55rem 0;line-height:1.35;">Isti standard primenjujemo na agrmultimedia.eu</h3>
                    <p style="margin:0 0 0.65rem;font-size:0.9rem;">Naš sajt nije samo vizit karta, već dokaz naše ekspertize. Dokazujemo naš standard kroz SEO skor od 92, osiguravajući da naša tehnologija uvek prati najnovije algoritme pretrage.</p>
                    <p style="margin:0 0 0.75rem;padding:0.65rem;border-radius:0.45rem;border:1px solid rgba(129,140,248,0.35);background:rgba(67,56,202,0.2);font-size:0.82rem;line-height:1.55;">Sistem je klasifikovao sajt kao SaaS tip (50% pouzdanosti klasifikacije), što dodatno naglašava našu tehničku dubinu i funkcionalnost koju gradimo.</p>
                    <p style="margin:0 0 0.45rem;font-size:0.72rem;color:#9ca3af;">www.agrmultimedia.eu — izveštaj od 9. maj 2026.</p>
                    <picture>
                        <source type="image/webp" srcset="/agrmultimedia-benchmark-640.webp 640w, /agrmultimedia-benchmark-960.webp 960w, /agrmultimedia-benchmark.webp 1200w" sizes="100vw" />
                        <img src="/agrmultimedia-benchmark.jpg" alt="SEO AEO GEO izveštaj za www.agrmultimedia.eu — ukupno Grade A, SEO 92, AEO 83, GEO 78, tip sajta SaaS" width="1200" height="675" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;border-radius:0.45rem;border:1px solid rgba(255,255,255,0.08);" />
                    </picture>
                    <table style="width:100%;border-collapse:collapse;margin:0.75rem 0 0;font-size:0.85rem;">
                        <caption style="text-align:left;font-weight:600;color:#e0e7ff;padding-bottom:0.35rem;">www.agrmultimedia.eu — trenutni skorovi (9. maj 2026.)</caption>
                        <thead><tr style="border-bottom:1px solid #444;"><th scope="col" style="text-align:left;padding:0.35rem;">Oblast</th><th scope="col" style="text-align:left;padding:0.35rem;">Skor</th></tr></thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">SEO</td><td style="padding:0.35rem;color:#6ee7b7;">92</td></tr>
                            <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">AEO</td><td style="padding:0.35rem;color:#6ee7b7;">83</td></tr>
                            <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">GEO</td><td style="padding:0.35rem;color:#6ee7b7;">78</td></tr>
                            <tr><td style="padding:0.35rem;font-weight:600;">Ukupno</td><td style="padding:0.35rem;font-weight:600;color:#c7d2fe;">86 — Grade A</td></tr>
                        </tbody>
                    </table>
                </div>
                <p style="margin:0 0 0.65rem 0;font-weight:600;color:#a7f3d0;">fixbike.online — skorovi posle optimizacije (9. maj 2026.)</p>
                <table style="width:100%;border-collapse:collapse;margin:0.5rem 0 1rem;font-size:0.88rem;">
                    <caption style="text-align:left;font-weight:600;color:#fff;padding-bottom:0.4rem;">Merenje po oblastima — SEO 88, AEO 85, GEO 90, ukupno 88 (Grade A)</caption>
                    <thead><tr style="border-bottom:1px solid #444;"><th scope="col" style="text-align:left;padding:0.35rem;">Oblast</th><th scope="col" style="text-align:left;padding:0.35rem;">Skor</th></tr></thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">SEO</td><td style="padding:0.35rem;color:#6ee7b7;">88</td></tr>
                        <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">AEO</td><td style="padding:0.35rem;color:#6ee7b7;">85</td></tr>
                        <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">GEO</td><td style="padding:0.35rem;color:#6ee7b7;">90</td></tr>
                        <tr><td style="padding:0.35rem;font-weight:600;">Ukupno</td><td style="padding:0.35rem;font-weight:600;color:#6ee7b7;">88 — Grade A</td></tr>
                    </tbody>
                </table>
                <h3 style="font-size:1.05rem;color:#fff;margin:1rem 0 0.5rem 0;">Studija slučaja — fixbike.online (pre i posle)</h3>
                <p style="margin:0 0 0.75rem 0;">Isti domen, dva snimka stanja: <strong>8. maj 2026.</strong> (Critical · Grade F, ukupno 49) naspram <strong>9. maj 2026.</strong> (Excellent · Grade A, ukupno 88) — interval kraći od 24 sata.</p>
                <div style="display:grid;grid-template-columns:1fr;gap:0.85rem;margin:0.85rem 0;">
                    <div style="border:2px solid rgba(239,68,68,0.55);border-radius:0.5rem;overflow:hidden;background:rgba(69,10,10,0.25);">
                        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:rgba(127,29,29,0.35);border-bottom:1px solid rgba(239,68,68,0.35);">
                            <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:#fecaca;">Pre — 8. maj 2026.</span>
                            <span style="font-size:0.65rem;font-weight:800;text-transform:uppercase;color:#fff;background:#b91c1c;padding:0.2rem 0.5rem;border-radius:999px;">Critical · Grade F</span>
                        </div>
                        <picture>
                            <source type="image/webp" srcset="/fixbike-before-640.webp 640w, /fixbike-before-960.webp 960w, /fixbike-before.webp 1200w" sizes="100vw" />
                            <img src="/fixbike-before.jpg" alt="SEO AEO GEO izveštaj fixbike.online — 8. maj 2026, ukupno Grade F" width="1200" height="675" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" />
                        </picture>
                        <p style="margin:0;padding:0.45rem 0.65rem;font-family:ui-monospace,monospace;font-size:0.78rem;color:#fecaca;text-align:center;">Ukupno 49 · SEO 71 · AEO 31 · GEO 24</p>
                    </div>
                    <div style="border:2px solid rgba(52,211,153,0.55);border-radius:0.5rem;overflow:hidden;background:rgba(6,78,59,0.2);">
                        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:rgba(6,95,70,0.35);border-bottom:1px solid rgba(52,211,153,0.35);">
                            <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:#a7f3d0;">Posle — 9. maj 2026.</span>
                            <span style="font-size:0.65rem;font-weight:800;text-transform:uppercase;color:#fff;background:#059669;padding:0.2rem 0.5rem;border-radius:999px;">Excellent · Grade A</span>
                        </div>
                        <picture>
                            <source type="image/webp" srcset="/fixbike-after-640.webp 640w, /fixbike-after-960.webp 960w, /fixbike-after.webp 1200w" sizes="100vw" />
                            <img src="/fixbike-after.jpg" alt="SEO AEO GEO izveštaj fixbike.online — 9. maj 2026, ukupno Grade A" width="1200" height="675" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" />
                        </picture>
                        <p style="margin:0;padding:0.45rem 0.65rem;font-family:ui-monospace,monospace;font-size:0.78rem;color:#a7f3d0;text-align:center;">Ukupno 88 · SEO 88 · AEO 85 · GEO 90</p>
                    </div>
                </div>
                <p style="margin:0.85rem 0 0.65rem;font-weight:600;color:#fff;">Ključni skokovi u performansama</p>
                <ul style="margin:0 0 0.85rem 1.1rem;line-height:1.6;font-size:0.88rem;">
                    <li><strong>GEO:</strong> skok sa 24 na 90 (<strong>+66</strong> poena).</li>
                    <li><strong>AEO:</strong> skok sa 31 na 85 (<strong>+54</strong> poena).</li>
                    <li><strong>SEO:</strong> skok sa 71 na 88 (<strong>+17</strong> poena).</li>
                </ul>
                <p style="margin:0 0 1rem 0;font-size:0.92rem;">Ovaj primer pokazuje transformaciju lokalnog biznisa iz digitalne nevidljivosti (Grade F) u apsolutnog lidera (Grade A) za manje od 24 sata. Fokusiranjem na Generative Engine Optimization (GEO), povećali smo vidljivost za AI modele za neverovatnih 275%.</p>
                <p style="margin:1rem 0 0;"><a href="https://www.agrmultimedia.eu/contact" style="display:inline-block;padding:0.65rem 1.25rem;border-radius:999px;background:linear-gradient(90deg,#059669,#10b981);color:#fff;font-weight:600;text-decoration:none;">Zatražite besplatnu SEO/AI analizu vašeg sajta</a></p>
            </section>

            <p><strong>Napomena o naslovu stranice:</strong> ovaj uvod je namerno detaljan da AI sistemi dobiju jasan kontekst bez JavaScript-a. Mi ovde opisujemo šta radimo, za koga radimo i kako merimo rezultat. Međutim, ne stajemo na estetici. Stoga povezujemo brzinu, sadržaj i SEO praksu u jednoj celini (vidi <a href="https://developers.google.com/search/docs/appearance/title-link" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Google Search Central</a>).</p>

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

            <dl style="margin:1.25rem 0;padding:1rem;border:1px solid #444;border-radius:0.5rem;font-size:0.9rem;">
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Lokacija:</dt> <dd style="display:inline;margin:0;">Geislingen an der Steige (Baden-Württemberg, DE)</dd></div>
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Jezici saradnje:</dt> <dd style="display:inline;margin:0;">sr, en, de, it, sq — 5 jezika</dd></div>
                <div style="margin-bottom:0.75rem;"><dt style="font-weight:600;color:#93c5fd;display:inline;">Odgovor na upit:</dt> <dd style="display:inline;margin:0;">obično do 24 sata</dd></div>
                <div><dt style="font-weight:600;color:#93c5fd;display:inline;">Primarna zona:</dt> <dd style="display:inline;margin:0;">EU (mala preduzeća)</dd></div>
            </dl>

            <h2 id="seo-stats" style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">AGR Multimedia u brojkama</h2>
            <p>Mi vodimo projekte iz jednog mesta. Naše interne kontrole tokom projekata pokazuju da jasan brief skraćuje iteracije. Međutim, brojke su okvir—vi dobijate tačan plan u pisanom dogovoru.</p>
            <table style="width:100%;border-collapse:collapse;margin:1rem 0;font-size:0.9rem;">
                <caption style="text-align:left;font-weight:600;color:#fff;padding-bottom:0.5rem;">Podaci koje javno koristimo u komunikaciji sa klijentima</caption>
                <thead><tr style="border-bottom:1px solid #444;"><th style="text-align:left;padding:0.35rem;">Pokazatelj</th><th style="text-align:left;padding:0.35rem;">Vrednost</th></tr></thead>
                <tbody>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">Jezika konsultacija</td><td style="padding:0.35rem;">5 jezika (sr, en, de, it, sq)</td></tr>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">Tipičan odgovor na upit</td><td style="padding:0.35rem;">do 24 h u radnim danima</td></tr>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">QA korak pre produkcije</td><td style="padding:0.35rem;">100% projekata dobija ručnu reviziju ključnih stranica</td></tr>
                    <tr style="border-bottom:1px solid #333;"><td style="padding:0.35rem;">Nivo dostupnosti kontakt kanala</td><td style="padding:0.35rem;">forma i email 24/7; odgovor tima ciljno do 24 h</td></tr>
                    <tr><td style="padding:0.35rem;">Primarni hosting SLA (Vercel edge)</td><td style="padding:0.35rem;">cilj 99,9% uptime na produkciji</td></tr>
                </tbody>
            </table>

            <h2 id="seo-defs" style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Definicije koje često pitaju AI pretraživači</h2>
            <p><strong>AEO</strong> (Answer Engine Optimization) je skup radnih navika da odgovori budu jasni u jednoj rečenici i da struktura stranice pomogne izvodljivim citatima.</p>
            <p><strong>GEO</strong> (Generative Engine Optimization) je sklad sadržaja sa načinom na koji generativni modeli biraju izvore—jasni naslovi, dokazi i razlike u perspektivi.</p>
            <p><strong>Multimedia</strong> je u našem radu spoj teksta, slike, videa i zvuka u jedinstven sistem koji ponovo koristite na sajtu i društvenim mrežama.</p>

            <h2 id="seo-video" style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Video: zašto brzina i čitljivost ulaze u SEO razgovor</h2>
            <p>Mi ubacujemo edukativni video koji veže performanse i korisnike. Međutim, ovaj prikaz radi i bez JavaScript-a u podržanim pregledačima.</p>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border:1px solid #333;border-radius:0.5rem;margin:1rem 0;">
                <iframe title="Google Search Central — uvod u SEO i pretraživanje (Web Vitals)" src="https://www.youtube-nocookie.com/embed/wbsISIAy-hY" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
            </div>
            <p style="font-size:0.85rem;color:#9ca3af;margin-top:0;">Izvor videa: Google Search Central (YouTube).</p>

            <h2 id="seo-perspectives" style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Tri perspektive o AI trendovima i web dizajnu</h2>
            <p>Sa jedne strane, šabloni donose brzinu starta. Međutim, ja i naš tim vidimo da diferenc traži poseban raspored i fotografiju.</p>
            <p>S druge strane, čist AI bez revizije često zvuči isto kao konkurencija. Stoga mi držimo ljudski pregled pre objave.</p>
            <p>Iako je AI trend popularan, hibrid koji mi nudimo spaja brzinu alata i odgovornost dizajnera. Na primer, mi označavamo šta je predlog mašine.</p>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Usluge</h2>
            <p>Mi pokrivamo web dizajn, grafiku, video i AI podršku. Međutim, obim prilagođavamo vašem budžetu. Na primer, možemo početi od jedne landing stranice.</p>

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
                    <li><a href="#seo-stats" style="color:#93c5fd;">AGR Multimedia u brojkama</a></li>
                    <li><a href="#seo-defs" style="color:#93c5fd;">Definicije AEO, GEO i multimedia</a></li>
                    <li><a href="#seo-video" style="color:#93c5fd;">Video o performansama i SEO kontekstu</a></li>
                    <li><a href="#seo-perspectives" style="color:#93c5fd;">Tri perspektive o AI i web dizajnu</a></li>
                </ol>
            </nav>

            <p>Mi vodimo <strong style="color:#fff;">AGR Multimedia</strong> iz Geislingen an der Steige (Baden-Württemberg). Naš fokus su mala preduzeća u EU koje žele jasniji nastup na webu.</p>
            <p>Dok neki dizajneri vole isključivo tradicionalne metode, mi u AGR Multimedia smatramo da simbioza AI-a i ljudske kreativnosti daje brže iteracije. Pritom ne gubimo odgovornost prema brendu. Međutim, poštujemo i potpuno ručne procese kada je to pravi izbor za vas. Pored toga, ja lično nadgledam ključne odluke pre objave. Naša misija je merljiv rezultat, a ne samo lep ekran.</p>
            <p>Za razliku od šablonskih rešenja, AGR Multimedia koristi personalizovan AI pristup. Mi ručno vodimo glas brenda i odluke koje grade poverenje. Stoga klijent uvek vidi gde alat pomaže, a gde završavamo ručno.</p>
            <p>Dok tradicionalni dizajneri često zanemaruju tehničku SEO stranu, mi u AGR Multimedia verujemo da vizuelni identitet i AI optimizacija moraju raditi zajedno.</p>
            <p>Preciznije rečeno, ja verujem u model gde mi i naš klijent delimo jasne metrike. U tom pogledu, moj tim i ja prvo proveravamo brzinu, pa tek finalni sjaj. Povrh toga, mi beležimo svaku odluku u kratkom zapisniku. Shodno tome, naš proces ostaje jasan i kada se projekat širi.</p>
            <p>DIY alat može biti brz za test. Međutim, često daje isti izgled kao kod konkurencije. Jeftin šablon štedi startni budžet. Stoga mi biramo personalizovan AI dizajn i ručnu QA proveru. Na primer, ja lično proveravam ključne CTA poruke pre objave.</p>
            <p>AI web dizajn je radni model gde AI daje varijante, a mi donosimo finalne odluke. U tom pogledu, naš tim štiti ton brenda. Povrh toga, naš tim meri brzinu i čitljivost. Shodno tome, vi dobijate jasan sadržaj i stabilan tehnički nivo.</p>
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

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Proces</h2>
            <p><strong>Pet koraka od prvog upita do objave</strong></p>
            <ol style="margin-top:0.5rem;padding-left:1.25rem;">
                <li>Upit ili konsultacija — ciljevi, budžet i rokovi u jednoj poruci.</li>
                <li>Briefing i struktura stranica (informaciona arhitektura, stubovi poruka).</li>
                <li>Dizajn i razvoj u iteracijama — vaš feedback pre svake faze.</li>
                <li>Testiranje performansi, mobilnog prikaza i formi pre javnog puštanja.</li>
                <li>Objava, osnovno praćenje i dogovor o sledećim koracima (marketing, sadržaj, širenje).</li>
            </ol>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">FAQ</h2>
            <p>Mi odgovaramo na upite brzo. Dakle, najčešća pitanja rešavamo pre starta. Međutim, detaljan opseg dogovaramo na prvom pozivu.</p>
            <section id="noscript-faq-aeo-geo" lang="sr" style="margin:1rem 0;padding:1rem 1.1rem;border:1px solid rgba(52,211,153,0.28);border-radius:0.55rem;background:rgba(16,185,129,0.06);">
                <h3 id="noscript-faq-schema-mirror-h3" style="font-size:1.05rem;color:#fff;margin:0 0 0.65rem 0;">Česta pitanja (tekst bez JavaScript-a, usklađeno sa FAQPage šemom)</h3>
                <p style="margin:0 0 0.85rem 0;font-size:0.88rem;color:#d1d5db;line-height:1.55;">Isti sadržaj kao u JSON-LD FAQPage kada je JS uključen; prevod na en/de/it/sq je u React aplikaciji.</p>
                <dl style="margin:0;font-size:0.88rem;line-height:1.55;color:#e5e7eb;">
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Zašto izabrati AGR Multimedia za web dizajn i grafiku?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Kombinujemo tehničku SEO-prijateljsku strukturu, pristupačnost i performanse sa dizajnom koji podržava konverzije. Umesto generičkih šablona gradimo hijerarhiju sadržaja i vizuelni jezik prilagođen vašoj publici, uz primere u portfolio delu sajta.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Kako izgleda proces izrade sajta od prvog poziva do objave?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Kreće od briefinga i predloga strukture stranica, zatim dizajn i razvoj u iteracijama sa jasnim rokovima. Pre objave testiramo forme, brzinu i mobilni prikaz; po potrebi usklađujemo sadržaj sa digitalnim marketingom i SEO koracima koje možete pratiti.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Šta sve obuhvata ponuda za mala preduzeća u EU?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Web i landing stranice, grafički identitet i štampa, video produkcija, kao i AI-pomoć pri kreiranju sadržaja uz ljudsku reviziju kvaliteta — sve sa ciljem merljivih rezultata za mala preduzeća u Nemačkoj, Austriji, Švajcarskoj i širom EU.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Koliko brzo možete očekivati odgovor i pokretanje projekta?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Na upite obično odgovaramo u roku od 24 sata i dogovaramo sledeće korake (ciljevi, obim, rokovi). Najbrži način je kontakt forma ili direktan poziv — dobijate predlog bez obaveze.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Šta je AEO i šta je GEO u kontekstu web sadržaja?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">AEO (Answer Engine Optimization) je praksa pisanja i strukture stranice tako da sistemi odgovora mogu da izvuku jedan jasan citat. GEO (Generative Engine Optimization) je sadržaj sa definicijama, povezanim izvorima i uravnoteženim perspektivama da generativna pretraga može bezbedno da sumarizuje ponudu. AGR Multimedia ih uključuje zajedno sa tehničkim SEO i performansama.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Zašto su spoljašnji linkovi važni kada AI pretraživači citiraju stranicu?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Javni izvori (npr. Google Search Central, HTTP Archive) omogućavaju proveru tvrdnji o performansama i smernicama. To podiže pouzdanost za GEO i E-E-A-T signale; operativna obećanja (rok odgovora, obim) ostaju u pisanoj ponudi.</dd>
                    <dt style="font-weight:600;color:#93c5fd;margin-top:0.65rem;">Kako izgleda „odgovor prvo” na početku ključne stranice?</dt>
                    <dd style="margin:0.35rem 0 0 0;color:#d1d5db;">Prva rečenica direktno odgovara na glavno korisničko pitanje, zatim sledi lista ili podnaslovi sa detaljima. Taj raspored olakšava skeniranje i pomaže AEO izvodima bez gubitka konteksta.</dd>
                </dl>
            </section>
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
                <dt style="font-weight:600;color:#fff;margin-top:0.75rem;">AI web dizajn</dt>
                <dd style="margin:0.25rem 0 0 0;">AI web dizajn je kombinacija automatskih predloga i naše ljudske provere kvaliteta pre objave.</dd>
            </dl>

            <h3 style="font-size: 1.05rem; color: #fff; margin-top: 1.5rem;">JSON-LD primer koda</h3>
            <pre style="overflow:auto;background:#0a0a12;border:1px solid #333;border-radius:0.5rem;padding:0.85rem;font-size:0.75rem;color:#c7f9cc;"><code>{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AGR Multimedia",
  "url": "https://www.agrmultimedia.eu/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.agrmultimedia.eu/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}</code></pre>
            <h3 style="font-size: 1.05rem; color: #fff; margin-top: 1.5rem;">Schema primer koda</h3>
            <pre style="overflow:auto;background:#0a0a12;border:1px solid #333;border-radius:0.5rem;padding:0.85rem;font-size:0.75rem;color:#c7f9cc;"><code>{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Agron Osmani",
  "url": "https://www.linkedin.com/in/agron-osmani-228947266/",
  "jobTitle": "CEO & Founder"
}</code></pre>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Glavni zaključci</h2>
            <p>Kratko: mi spajamo web, grafiku i AI. Međutim, naš fokus ostaje merljiv rezultat. Stoga naš pristup štedi vreme i čuva kvalitet.</p>
            <ul style="margin:0.5rem 0 0 1rem;">
                <li>Naš proces uključuje strukturu, dizajn i SEO u jednoj celini.</li>
                <li>Mi radimo na 5 jezika i tipično odgovaramo u roku od 24 sata.</li>
                <li>Kontakt forma je dostupna 24/7, a naš tim odgovara u najkraćem roku.</li>
            </ul>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Trust signali i alati</h2>
            <p>U radu koristimo profesionalne alate i cloud platforme. Na primer: Adobe alati za dizajn, Google Cloud za infrastrukturu i Vercel za isporuku frontenda.</p>
            <p>Mi držimo isti pipeline za izvoz PDF-a i WEBP-a. Međutim, ako vi koristite drugi CMS, mi prilagođavamo paket datoteka. Stoga ne ostajete zaključani u jednom alatu.</p>
            <p>Shodno tome, naš QA lista pokriva kontrast, veličinu dodira na mobilnom i forme. Preciznije rečeno, mi testiramo na pravim uređajima kad god je moguće.</p>
            <figure style="margin:0.75rem 0;padding:0.75rem;border:1px solid #333;border-radius:0.5rem;">
                <figcaption style="font-size:0.8rem;color:#9ca3af;">Alati koje koristimo: Adobe · Google Cloud · Vercel.</figcaption>
            </figure>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Zaključak</h2>
            <p>Mi verujemo da je najbolji rezultat spoj estetike i tehnike. Međutim, bez jasnog procesa to ne traje dugo. Stoga naš tim i ja radimo iterativno, sa merljivim koracima i pisanim dogovorom.</p>
            <p>Na kraju, ja AGR Multimedia tim garantujem da ćete znati šta je automatizovano, a šta ručno potvrđeno. Na primer, mi vam šaljemo kratak changelog posle većih izmena.</p>
            <p>Trebalo bi da probate jedan jasan CTA po stranici pre širenja sadržaja. Probajte ovaj korak sedam dana. Naš sledeći korak zajedno može biti merenje klika i poziva.</p>

            <h2 style="font-size: 1.15rem; color: #fff; margin-top: 1.35rem;">Šta bi trebalo da probate</h2>
            <ol style="margin-top:0.5rem;padding-left:1.25rem;">
                <li>Definišite jednu ključnu akciju po stranici.</li>
                <li>Proverite brzinu i mobilnu čitljivost pre dizajn revizije.</li>
                <li>Testirajte dve CTA varijante i merite rezultat 14 dana.</li>
            </ol>

            <p>Prema smernicama iz <a href="https://developers.google.com/search/docs" style="color:#93c5fd" target="_blank" rel="noopener noreferrer">Google Search Central</a>, jasna struktura i tehnička optimizacija olakšavaju razumevanje stranice i povećavaju vidljivost u pretrazi.</p>

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

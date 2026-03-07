# Šta smo uradili na projektu AGR Multimedia

Dokument sažima sve izmene na sajtu **www.agrmultimedia.eu** (redizajn, jezici, portfolio, footer, kontakt i sl.).

---

## 1. Redizajn (Perplexity spec)

- **Tamna, moderna tema** – pozadina `#0a0a0f`, sekcije u tamnim nijansama, konzistentan izgled.
- **Navigacija** – redosled: Home → Services → Portfolio → About → Blog → Contact. Tamni header, beli logo (LOGO IN BIANCO).
- **Prekidač jezika** u headeru: **DE | EN | IT | SR | AL** (inline, bez dropdown-a).
- **Nove sekcije na početnoj:**
  - **Hero** – H1, podnaslov, CTA „Request free consultation” i „View portfolio”, linija „Available in DE · EN · IT · SR · AL”.
  - **Services preview** – 4 kartice (Web & UI, Graphic & Branding, Video & Motion, AI) sa linkom na `/services`.
  - **Izabrani projekti** – grid portfolija sa filterima.
  - **Zašto da radite sa mnom** – 4 benefita (jezici, mala preduzeća, end-to-end, AI).
  - **Utisci klijenata** – 3 placeholder kartice.
  - **Završni CTA** – „Ready to bring your idea to life?” + dugme „Send a message”.

---

## 2. Pet jezika (DE, EN, IT, SR, AL)

- **`client/src/lib/specTranslations.ts`** – svi tekstovi iz spec-a za svih 5 jezika (hero, nav, services, portfolio, why me, testimonials, final CTA, services page, about page, contact page).
- **Albanian** – dodat kao `al` (prikaz „AL” u switcheru); kada je `al`, za stare prevode koristi se `sq`.
- **LanguageContext** – dodato `tSpec` (getSpecTranslations), postavljanje `document.documentElement.lang` pri promeni jezika (SEO i pristupačnost).
- Navigacija, Hero, Services preview, Portfolio, Why me, Testimonials, Final CTA, stranice Services/About/Contact koriste **tSpec** pa se sadržaj menja sa jezikom.

---

## 3. Stranice i rute

- **`/services`** – ServicesPage (uvod + 4 sekcije: Web & UI, Graphic & Branding, Video & Motion, AI + CTA).
- **`/about`** – AboutPage (uvod, alati, timeline, CTA).
- **`/contact`** – ContactPage (formular: Ime, Email, Usluga, Budžet, Poruka + uspeh, lokacija, telefon, Facebook, Instagram).
- **`/portfolio`** – PortfolioPage (isti grid kao na početnoj).
- **`/blog`** – BlogIndexPage (lista postova).

---

## 4. Portfolio

- **Prave slike** iz projekta (BANNER, Green Harvest, InnovateTech, PowerFit, Ragazzo con lanterne, KING KONG, Print Materials mockup…) umesto placeholder slika.
- **Filteri:** All, Web, Graphic, Photo, Video, AI.
- **8 stavki** u gridu, svaka vodi na postojeću portfolio detalj stranicu (`/portfolio/:slug`).

---

## 5. Mobilni Hero

- **Veći font na malim ekranima** – H1 od `text-2xl` do `xl:text-7xl`, podnaslov od `text-base` do `text-xl`.
- **Dugmad** – na mobilnom puna širina (`w-full`), `min-h-[48px]` radi lakšeg tapovanja.

---

## 6. Glas „ja” (I umesto We)

- Kontakt podnaslov: *I'm ready to turn your ideas into reality. Send me a message!* (i prevodi na SR, DE, IT, AL).
- U **i18n.ts** i **i18n-it.ts** zamenjeno „We're / Spremni smo / Wir sind / Jemi / Siamo” sa „I'm / Spreman sam / Ich bin / Jam / Sono”.

---

## 7. Footer

- **Usluge** – nova struktura: Web & UI Design, Graphic Design & Branding, Video Editing & Motion, AI (linkovi na `/services#web-ui`, `#graphic`, `#video`, `#ai`).
- **Uklonjeno** – Career.
- **Kontakt blok** – broj **+49 1556 7204598** (klikabilan `tel:`), email, lokacija.
- **Društvene mreže** – linkovi „Facebook” i „Instagram” ispod brenda:
  - Facebook: https://www.facebook.com/halidosmani74  
  - Instagram: https://www.instagram.com/agrondesign/

---

## 8. Telefon i društvene mreže

- **Broj** zamenjen na: Footer, Contact sekcija (home), ContactPage; svuda **+49 1556 7204598**.
- **Facebook** i **Instagram** linkovi su na Footeru, Contact sekciji i ContactPage (isti URL-ovi kao gore).

---

## 9. Vercel deploy (prethodno)

- Root Directory na Vercelu: **prazno** (ne `client`).
- Build Command: **`npm run build:client`**, Output Directory: **`dist/public`**.
- Uklonjeni Replit plugini iz **vite.config.ts** da bi build radio na Vercelu.

---

## Fajlovi koje smo dodali ili značajno menjali

| Fajl | Šta |
|------|-----|
| `client/src/lib/specTranslations.ts` | Novi – svi prevodi za spec (DE, EN, IT, SR, AL). |
| `client/src/components/LanguageSwitcherInline.tsx` | Novi – DE \| EN \| IT \| SR \| AL u headeru. |
| `client/src/components/ServicesPreview.tsx` | Novi – 4 kartice usluga na početnoj. |
| `client/src/components/WhyMe.tsx` | Novi – sekcija „Zašto da radite sa mnom”. |
| `client/src/components/Testimonials.tsx` | Novi – 3 testimonial kartice. |
| `client/src/components/FinalCta.tsx` | Novi – završni CTA blok. |
| `client/src/pages/ServicesPage.tsx` | Novi – stranica /services. |
| `client/src/pages/AboutPage.tsx` | Novi – stranica /about. |
| `client/src/pages/ContactPage.tsx` | Novi – stranica /contact sa formularom. |
| `client/src/pages/PortfolioPage.tsx` | Novi – stranica /portfolio. |
| `client/src/pages/BlogIndexPage.tsx` | Novi – stranica /blog. |
| `client/src/contexts/LanguageContext.tsx` | tSpec, podrška za `al`, postavljanje `document.documentElement.lang`. |
| `client/src/lib/i18n.ts` | Tip `Language` + `al`, getTranslations za `al` → `sq`, footer.phone, I-voice. |
| `client/src/components/Navigation.tsx` | Tamna navigacija, tSpec.nav, LanguageSwitcherInline, linkovi na /services, /about, itd. |
| `client/src/components/Hero.tsx` | tSpec hero, mobilni fontovi i puna širina dugmadi. |
| `client/src/components/Portfolio.tsx` | Realni asseti, filter AI, tSpec naslovi. |
| `client/src/components/Footer.tsx` | Nova struktura usluga, bez Career, telefon, FB/IG linkovi. |
| `client/src/components/Contact.tsx` | Broj telefona +49 1556 7204598. |
| `client/src/pages/home.tsx` | Redosled: Hero, ServicesPreview, Portfolio, WhyMe, Testimonials, FinalCta, About, Blog, Contact. |
| `client/src/App.tsx` | Rute za /services, /about, /contact, /portfolio, /blog. |
| `client/src/index.css` | body pozadina `#0a0a0f`. |

---

*Poslednje ažuriranje: 07.03.2026.*

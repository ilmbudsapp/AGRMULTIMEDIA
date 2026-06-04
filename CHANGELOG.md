# Changelog — GDPR / legal compliance (agrmultimedia.eu)

## 2026-06-03 — Tairovic Gebäudeservice (tairovic-gebaeudeservice.de)

- Real contact data: Mevlida Tairovic, Kirchstr. 32, 56564 Neuwied, phone, email.
- Added `impressum.html` and `datenschutz.html` (§ 5 DDG, 15 privacy sections).
- Cookie banner + `tairovic-cookie-consent` localStorage (`assets/consent.js`).
- Footer legal links; JSON-LD LocalBusiness; contact via `mailto:` (no server-side form).
- Removed Unsplash CDN backgrounds (DSGVO-friendly, no third-party images on load).
- Middleware routes `/impressum` and `/datenschutz` on client domain.

## 2026-05-31 — Production-ready DSGVO & legal fixes

### Google Fonts / privacy
- Removed all remote `fonts.googleapis.com` and `fonts.gstatic.com` requests from `client/index.html`, `client/src/index.css`, and static demo pages.
- Added self-hosted fonts via `@fontsource/plus-jakarta-sans` (main SPA bundle).
- Added `scripts/copy-local-fonts.mjs` to copy Inter & Playfair Display `.woff2` files to `client/public/assets/fonts/` for demo pages.
- Updated Content-Security-Policy in `vercel.json` and `client/vercel.json` (removed Google Fonts, Font Awesome, jsDelivr CDN allowances).

### Footer & contact symbols
- Replaced broken emoji characters (`ðŸ"ž`, etc.) in `Footer.tsx` with Lucide SVG icons (`Phone`, `Mail`, `MapPin`).
- Fixed corrupted UTF-8 strings in footer service labels (Serbian, Albanian).

### Datenschutzerklärung / privacy (all languages)
- Added comprehensive GDPR privacy policy in `client/src/lib/legal/privacyPolicyI18n.ts` (DE, EN, SR, IT, AL).
- Updated `client/src/pages/privacy.tsx` to render 15 structured sections.
- Covers: controller, hosting (Vercel), logs, contact/EmailJS, localStorage, cookies, Google Analytics (consent-only), self-hosted fonts, external links, SSL, retention, rights, objection.

### Impressum / legal pages
- Added expanded Impressum in `client/src/lib/legal/impressumI18n.ts` with **§ 5 DDG** (replacing outdated TMG-only wording).
- Sections: operator, contact, tax, MStV content responsibility, EU ODR, liability, copyright.
- Updated `client/src/pages/impresum.tsx` to use new legal content on all languages.

### Cookie / tracking
- Added consent-gated Google Analytics (`client/src/lib/consent.ts`, `client/src/components/CookieConsent.tsx`).
- GA loads **only** after user clicks “Accept all” / equivalent.
- Updated `App.tsx`, `use-analytics.tsx`, and German cookie policy text in `i18n.ts`.

### Technical
- Primary font stack set to **Plus Jakarta Sans** in `index.css`.
- Build pipeline runs `copy-local-fonts.mjs` before Vite build.

### Documentation
- Added `PRIVACY_AUDIT.md` and `READY_FOR_GERMANY.md`.

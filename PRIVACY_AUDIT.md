# Privacy audit — agrmultimedia.eu

Date: **May 2026**

## Problems found

| Area | Issue | Risk |
|------|--------|------|
| Google Fonts | Loaded from Google CDN on homepage, CSS, and demo pages | IP transfer to Google without legal basis (BGH/EuGH precedent) |
| Footer contact | Emoji icons rendered as mojibake (“hijeroglifi”) | UX + unprofessional appearance |
| Footer services | Serbian/Albanian labels corrupted (wrong encoding) | Broken text on mobile/desktop |
| Datenschutz | Only 5 short generic sections | Insufficient for DE/EU business site |
| Impressum | Referenced **§ 5 TMG** only; missing DDG/MStV sections | Outdated legal framing for Germany |
| Google Analytics | Loaded automatically on page idle (~2s) | No prior consent (DSGVO Art. 6(1)(a)) |
| CSP | Allowed Google Fonts, Font Awesome, jsDelivr | Broader attack/tracking surface than needed |

## External requests (after fix)

| Request | Purpose | Necessary? | Privacy risk | Action taken |
|---------|---------|------------|--------------|----------------|
| `self` (HTML/CSS/JS/fonts) | Site delivery | Yes | Low | Keep |
| `api.emailjs.com` | Contact form delivery | Yes (if form used) | Medium — US/third-party processor | Documented in privacy policy; DPA recommended |
| `googletagmanager.com` / `google-analytics.com` | Statistics | Optional | High — tracking | **Consent required** — loads only after opt-in |
| `images.unsplash.com` | Portfolio/blog stock images | Optional | Low–medium | Not blocked; disclosed as external images on page load |
| `google.com/maps` (link only) | Location link from contact | Optional | Low (user leaves site) | No embed; link only |
| `wa.me` / social networks | WhatsApp float & footer links | Optional | Low (user leaves site) | Disclosed |
| ~~`fonts.googleapis.com`~~ | Fonts | No | High | **Removed** — self-hosted |
| ~~`fonts.gstatic.com`~~ | Font files | No | High | **Removed** |
| ~~Font Awesome CDN~~ | Icons | No | Medium | Not used in code; removed from CSP |

### Consent banner

**Required** for Google Analytics. Implemented minimal bottom banner (DE/EN/SR/IT/AL):

- **Essential only** — language + consent choice in `localStorage`; no GA.
- **Accept all** — enables Google Analytics 4.

Essential storage alone does **not** require analytics consent.

## What was fixed

- Self-hosted fonts (Plus Jakarta Sans in bundle; Inter/Playfair for demos).
- Footer icons → Lucide SVG.
- Full Datenschutzerklärung (15 sections) on all site languages.
- Impressum updated to DDG + MStV + liability blocks.
- Consent-gated analytics.
- Tightened CSP headers.

## What you must still fill in manually

| Item | Where | Current state |
|------|--------|---------------|
| **Phone in Impressum** | `impressumI18n.ts` | Placeholder `[BITTE TELEFONNUMMER EINTRAGEN]` — site already shows phone in footer via `contact.ts` |
| **EmailJS DPA** | Legal records | Confirm Data Processing Agreement with EmailJS if required |
| **Vercel DPA / SCCs** | Legal records | Ensure Vercel GDPR package is accepted in dashboard |
| **Google Analytics** | Optional | If you do not need stats, remove `VITE_GA_MEASUREMENT_ID` from env — then no tracking at all |
| **Company legal form** | Impressum | Confirm whether “Einzelunternehmen” / trade name wording is complete |
| **Professional chamber** | Impressum | Add if legally required for your profession (currently not listed) |
| **Supervisory authority contact** | Privacy | Baden-Württemberg mentioned generically — verify if still your authority |

## Recommended next steps

1. Replace phone placeholder in Impressum with the same number as footer (`PHONE_DISPLAY` in `client/src/lib/contact.ts`).
2. Sign/accept processor agreements (Vercel, EmailJS, Google if using Analytics).
3. Test cookie banner on live site after deploy.
4. Run Lighthouse / browser Network tab — confirm no `fonts.googleapis.com` requests.

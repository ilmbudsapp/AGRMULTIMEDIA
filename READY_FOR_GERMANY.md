# Ready for Germany — checklist

## Completed (code)

- [x] Google Fonts removed; fonts self-hosted (DSGVO-friendly)
- [x] Footer/contact “hijeroglyph” symbols fixed (Lucide icons)
- [x] Serbian & Albanian footer encoding fixed
- [x] Datenschutzerklärung expanded (15 sections, DE + EN + SR + IT + AL)
- [x] Impressum updated to **§ 5 DDG** framework + MStV + liability
- [x] Cookie consent banner before Google Analytics
- [x] Analytics only after explicit opt-in
- [x] Cookie policy (DE) updated for consent model
- [x] CSP tightened (no Google Fonts / unused CDNs)
- [x] Privacy policy documents EmailJS, Vercel hosting, localStorage
- [x] SSL/HTTPS section in privacy policy
- [x] Production build verified (`npm run build:client`)

## Waiting for your data / decisions

- [ ] **Impressum phone number** — replace placeholder in `client/src/lib/legal/impressumI18n.ts`
- [ ] Confirm legal business name (AGRONDESIGN vs AGR Multimedia) is correct everywhere
- [ ] Accept **Vercel** GDPR / DPA terms in Vercel dashboard
- [ ] **EmailJS** — confirm privacy settings & optional DPA
- [ ] Decide: keep **Google Analytics** (with banner) or remove `VITE_GA_MEASUREMENT_ID` entirely
- [ ] Optional: add VAT/tax advisor review of Impressum tax lines (numbers already present)
- [ ] Optional: professional association / chamber line if applicable to your trade

## Quick test after deploy

1. Open https://www.agrmultimedia.eu — cookie banner appears on first visit.
2. Choose “Nur notwendige” — Network tab should show **no** `google-analytics.com`.
3. Clear site data, reload, choose “Alle akzeptieren” — GA scripts may load.
4. Footer: phone, email, location show icons (not broken characters).
5. `/privacy-policy?lang=de` — full Datenschutzerklärung visible.
6. `/impresum?lang=de` — DDG Impressum visible.

## Legal disclaimer

This implementation follows common GDPR practice for small business websites but **does not replace legal advice**. For binding compliance (especially if you expand tracking, newsletter, or shop features), consult a German **Datenschutz** / **IT-Recht** specialist.

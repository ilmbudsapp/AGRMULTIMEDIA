# Privacy audit — tairovic-gebaeudeservice.de

**Stand:** Juni 2026

## Vorher / Nachher

| Bereich | Vorher | Nachher |
|--------|--------|---------|
| Google Fonts | Nicht verwendet | Lokal (`/assets/fonts/`) |
| Analytics | Keine | Keine |
| Maps/YouTube embed | Keine | Keine |
| Unsplash CDN | CSS-Hintergrundbilder | Entfernt (nur CSS-Verläufe) |
| Kontaktformular | Dummy-Inputs | `mailto:` + WhatsApp |
| Impressum / Datenschutz | Fehlend | `impressum.html`, `datenschutz.html` |
| Cookie-Banner | Fehlend | `tairovic-cookie-consent` |
| Kontaktdaten | Platzhalter | Echte Daten (Mevlida Tairovic, Neuwied) |

## Third-party (nach Consent / Klick)

| Dienst | Laden ohne Klick? |
|--------|-------------------|
| Vercel Hosting | Ja (technisch nötig) |
| WhatsApp (wa.me) | Nein (nur Link) |
| AGRMULTIMEDIA (Credit) | Nein (nur Link) |

## Consent

- Key: `tairovic-cookie-consent`
- Werte: `essential` | `all`
- Kein zusätzliches Tracking bei „Alle akzeptieren“

## Offen (Inhaberin)

- [ ] E-Mail-Domain prüfen (`@gamil.com` → ggf. `@gmail.com`)
- [ ] Steuernummer in Impressum ergänzen
- [ ] Vercel DPA im Dashboard bestätigen

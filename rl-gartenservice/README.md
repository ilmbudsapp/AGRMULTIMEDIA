# RL Gartenservice

Samostalan sajt u ovom folderu. Ne ulazi u build AGRMULTIMEDIA sajta. Radi i na drugom računaru: sve slike i klipovi su u `public/`.

## Pokretanje

```bash
cd rl-gartenservice
npm install
npm run dev
```

Pregled: http://localhost:3010

Provera i build:

```bash
npm run check
npm run build
```

## Gde se menja sadržaj

`content/site.ts`

- tekstovi, telefon, mejl, meni, usluge, mesta, galerija
- društvene mreže: Facebook i TikTok se vide i bez linka. Ubaci tačan URL u `href` kad stigne, pa postaju klikabilni.

Nova fotografija:

1. Stavi optimizovan `.webp` u `public/media/`.
2. U `gallery` u `content/site.ts` dodaj stavku `kind: "image"` sa kategorijom `gartenpflege`, `gartenbau`, `hausmeisterservice`, `reinigung` ili `boden`.

Novi video: `.mp4` plus poster `.webp`, stavka `kind: "video"`. Video se učitava tek kad posetilac otvori klip.

Vorher / Nachher samo kad su oba snimka isti posao: `kind: "compare"`.

## Kontakt forma

Lokalno (`.env.local`): `CONTACT_SINK=file`. Upit se snima u `data/inquiries/`. Potvrda se prikazuje tek kad fajl stvarno bude upisan.

Pre objave u `.env` na serveru:

```
CONTACT_SINK=smtp
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_TO=rlgartenservice24@gmail.com
```

Bez ovih podataka forma na produkciji vraća grešku i ne prikazuje uspeh.

Dozvoljeno je do 5 fotografija, JPG, PNG ili WEBP, do 8 MB. Tip fajla se proverava na serveru, ne samo po nastavku.

## Još treba pre objave

- Facebook URL (naziv na flajeru: RL Gartenservice)
- TikTok URL (naziv na flajeru: RL Gartenservice)
- Google Unternehmensprofil URL
- SMTP nalog za prijem upita
- Umsatzsteuer-ID, ako postoji
- Handelsregister, ako postoji
- naziv hosting provajdera u Datenschutzerklärung
- fotografije ili kratki video za Hausmeisterservice
- fotografije ili kratki video za Reinigung
- DNS kod GoDaddy ostaje poseban korak. Domen: https://www.rl-gartenservice.de

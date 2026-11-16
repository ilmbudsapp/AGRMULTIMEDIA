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
- društvene mreže: prazan `href` ostavlja ime i ikonu, ali bez linka.

Nova fotografija:

1. Stavi optimizovan `.webp` u `public/media/`.
2. U `gallery` u `content/site.ts` dodaj stavku `kind: "image"` sa kategorijom `gartenpflege`, `gartenbau`, `hausmeisterservice`, `reinigung` ili `boden`.

Novi video: `.mp4` plus poster `.webp`, stavka `kind: "video"`. Video se učitava tek kad posetilac otvori klip.

Vorher / Nachher samo kad su oba snimka isti posao: `kind: "compare"`.

## Kontakt

Nema formulara. Stranica `/kontakt` prikazuje telefon, WhatsApp, e-poštu i Google mapu adrese.

## Još treba pre objave

- Google Unternehmensprofil URL
- Umsatzsteuer-ID, ako postoji
- Handelsregister, ako postoji
- naziv hosting provajdera u Datenschutzerklärung
- fotografije ili kratki video za Hausmeisterservice
- fotografije ili kratki video za Reinigung
- DNS kod GoDaddy ostaje poseban korak. Domen: https://www.rl-gartenservice.de

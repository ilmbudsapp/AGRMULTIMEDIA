# Vercel deploy – status i sledeći koraci

## Šta je urađeno
- Projekat je na GitHubu: **ilmbudsapp/AGRMULTIMEDIA**
- Na Vercelu je projekat **agrmultimedia**, povezan na taj repo
- U `package.json` dodat skript: **`"build:client": "vite build"`**
- U korenu projekta dodat **`vercel.json`** (rewrites za SPA)
- U Vercel podešavanjima:
  - **Build Command:** `npm run build:client`
  - **Output Directory:** `dist/public`
- Domen **www.agrmultimedia.eu** i **agrmultimedia.eu** su u Vercel Domains, DNS u GoDaddy-u je podešen (Valid Configuration)
- Poslat je prazan commit da se pokrene novi deploy sa najnovijim kodom

## Zašto build pada
- Vercel je radio build sa **starim commitom** (db9ef31), gde nema `build:client` → "Missing script: build:client"
- **Redeploy** ponovo pokreće isti stari commit; zato treba **novi** deploy koji vuče **novi** kod (commit sa build:client)

## Šta MORA da se uradi sutra (jedan korak)
1. U Vercelu: **Settings** → **Build & Development** (ili General)
2. Naći **Root Directory**
3. Ako piše **client** → obrisati i ostaviti polje **prazno** (ili tačku `.`)
4. **Save**
5. U **Deployments** proveriti da li ima novi deploy sa porukom **"Trigger Vercel deploy from latest main"**:
   - ako je **Ready** (zelen) → otvoriti https://www.agrmultimedia.eu (trebalo bi da radi)
   - ako je **Error** → otvoriti taj deploy, pogledati **Build Logs** (crveni tekst) i reći šta piše

## Ako novi deploy nije krenuo
- U **Deployments** ručno: **Redeploy** na bilo kom deployu – ali PRE toga obavezno prazan **Root Directory** (korak gore). Posle Redeploy-a Vercel ponekad povuče najnoviji main.

## Lokalno
- Build radi: `npm run build:client` → gradi u `dist/public`
- Za deploy na Vercel treba: Root Directory prazan, Build Command = `npm run build:client`, Output = `dist/public`

---
*Fajl napravljen da se sutra lako nastavi odavde.*

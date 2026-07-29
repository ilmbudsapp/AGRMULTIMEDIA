# AGR Multimedia — Standalone

Standalone reconstruction of [agrmultimedia.eu](https://www.agrmultimedia.eu/) extracted from the original demo monorepo.

## Stack

- **Next.js 15** (App Router, static export)
- **React 18** + TypeScript
- **Tailwind CSS 3** + shadcn/ui
- **Wouter** (client routing — identical to live demo)

## Structure

```
agrmultimedia-standalone/
├── app/              # Next.js App Router entry
├── src/
│   ├── components/   # UI components
│   ├── pages/        # Page views (routed via Wouter)
│   ├── lib/          # Utilities, SEO, analytics
│   ├── contexts/     # i18n (de/en)
│   └── data/         # Blog, portfolio data
├── public/           # Static assets + client demos (/demo/*)
├── shared/           # Shared schemas
└── api/              # Vercel serverless (contact fallback)
```

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static output is written to `out/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import in Vercel → Framework: **Next.js**
3. Add environment variables from `.env.example`
4. Deploy

Client demos under `/demo/*` are static HTML served from `public/demo/`.

## Notes

- Content, images, and translations are **unchanged** from agrmultimedia.eu
- No content modifications in this extraction step

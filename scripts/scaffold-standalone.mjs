#!/usr/bin/env node
/**
 * Scaffold agrmultimedia-standalone from existing client source.
 * Reconstructs agrmultimedia.eu as a standalone Next.js project.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "agrmultimedia-standalone");
const CLIENT = path.join(ROOT, "client");
const SHARED = path.join(ROOT, "shared");

const STATIC_ROUTES = [
  "/",
  "/webdesign-geislingen-an-der-steige",
  "/webdesign-seo",
  "/videoproduktion",
  "/bewertungen",
  "/kontakt",
  "/portfolio",
  "/portfolio/ecommerce-site",
  "/portfolio/restaurant-website",
  "/portfolio/brand-identity",
  "/portfolio/corporate-video",
  "/portfolio/product-photography",
  "/portfolio/packaging-design",
  "/services",
  "/about",
  "/blog",
  "/graphic-design",
  "/digital-marketing",
  "/ai-content-creation",
  "/application-design-development",
  "/photography",
  "/consulting",
  "/impresum",
  "/blog/digital-marketing-trends-2024",
  "/blog/website-conversion-optimization",
  "/blog/video-marketing-power",
  "/blog/food-truck-web-500",
  "/blog/webdesign-lokale-firmen",
  "/blog/seo-firmen-geislingen",
  "/blog/moderne-website-mehr-kunden",
  "/blog/webdesign-trends-kmu",
  "/blog/lokaler-seo-handwerk",
  "/privacy",
  "/privacy-policy",
  "/terms",
  "/cookies",
];

function rm(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function cp(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  mkdirp(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

function patchTsx(content) {
  return content
    .replace(/import\.meta\.env\.DEV/g, "process.env.NODE_ENV === 'development'")
    .replace(/import\.meta\.env\.VITE_GA_MEASUREMENT_ID/g, "process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID")
    .replace(/import\.meta\.env\.VITE_EMAILJS_SERVICE_ID/g, "process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID")
    .replace(/import\.meta\.env\.VITE_EMAILJS_TEMPLATE_ID/g, "process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID")
    .replace(/import\.meta\.env\.VITE_EMAILJS_PUBLIC_KEY/g, "process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
}

function copyAndPatchDir(srcDir, destDir) {
  mkdirp(destDir);
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyAndPatchDir(src, dest);
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      write(dest, patchTsx(fs.readFileSync(src, "utf8")));
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

console.log("Scaffolding agrmultimedia-standalone...");

// Clean output (keep if partial)
if (fs.existsSync(OUT)) {
  console.log("Removing existing standalone folder...");
  rm(OUT);
}
mkdirp(OUT);

// Copy source
console.log("Copying src...");
copyAndPatchDir(path.join(CLIENT, "src"), path.join(OUT, "src"));

// Copy shared
console.log("Copying shared...");
cp(SHARED, path.join(OUT, "shared"));

// Copy public (includes demo sites, assets, sitemap, etc.)
console.log("Copying public...");
cp(path.join(CLIENT, "public"), path.join(OUT, "public"));

// Copy api route for Vercel
console.log("Copying api...");
cp(path.join(ROOT, "api"), path.join(OUT, "api"));

// App router shell
console.log("Creating app router...");
write(
  path.join(OUT, "app", "layout.tsx"),
  `import type { Metadata } from "next";
import "@/index.css";
import "@/styles/fonts.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agrmultimedia.eu"),
  title: {
    default: "AGR Multimedia | Webdesign Geislingen",
    template: "%s | AGR Multimedia",
  },
  description:
    "Webdesign, SEO, GEO & AEO in Geislingen an der Steige — professionelle Websites für lokale Unternehmen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
`
);

write(
  path.join(OUT, "app", "[[...slug]]", "page.tsx"),
  `"use client";

import App from "@/App";

export default function CatchAllPage() {
  return <App />;
}
`
);

write(
  path.join(OUT, "app", "[[...slug]]", "generateStaticParams.ts"),
  `export function generateStaticParams() {
  const routes = ${JSON.stringify(STATIC_ROUTES, null, 2)};
  return routes.map((route) => ({
    slug: route === "/" ? undefined : route.slice(1).split("/"),
  }));
}
`
);

// Providers wrapper (extracted from App shell minus Router)
write(
  path.join(OUT, "src", "components", "Providers.tsx"),
  `"use client";

import { Suspense, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA } from "@/lib/analytics";
import { hasAnalyticsConsent } from "@/lib/consent";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import MetaSEO from "@/components/MetaSEO";
import SkipToContent from "@/components/SkipToContent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoadingFallback from "@/components/PageLoadingFallback";
import ScrollToTop from "@/components/ScrollToTop";
import LegacyHashRedirect from "@/components/LegacyHashRedirect";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const loadGaIfConsented = () => {
      if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
      if (!hasAnalyticsConsent()) return;
      initGA();
    };
    loadGaIfConsented();
    window.addEventListener("agr-consent-change", loadGaIfConsented);
    return () => window.removeEventListener("agr-consent-change", loadGaIfConsented);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <LanguageProvider>
            <ErrorBoundary>
              <TooltipProvider>
                <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
                  <SkipToContent />
                  <MetaSEO />
                  <ScrollToTop />
                  <LegacyHashRedirect />
                  <Suspense fallback={<PageLoadingFallback />}>{children}</Suspense>
                  <WhatsAppFloat />
                  <CookieConsent />
                </div>
                <Toaster />
              </TooltipProvider>
            </ErrorBoundary>
          </LanguageProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
`
);

// Patch App.tsx to remove duplicate providers (keep Router only)
const appPath = path.join(OUT, "src", "App.tsx");
let appContent = fs.readFileSync(appPath, "utf8");
appContent = appContent.replace(
  /function App\(\) \{[\s\S]*?return \(/,
  `function App() {
  return (`
);
appContent = appContent.replace(
  /<ErrorBoundary>[\s\S]*?<Suspense fallback=\{<PageLoadingFallback \/>\}>[\s\S]*?<Router \/>[\s\S]*?<\/Suspense>[\s\S]*?<WhatsAppFloat \/>[\s\S]*?<CookieConsent \/>[\s\S]*?<\/div>[\s\S]*?<Toaster \/>[\s\S]*?<\/TooltipProvider>[\s\S]*?<\/ErrorBoundary>[\s\S]*?<\/ErrorBoundary>[\s\S]*?<\/ErrorBoundary>[\s\S]*?<\/QueryClientProvider>[\s\S]*?<\/ErrorBoundary>/,
  `<Suspense fallback={<PageLoadingFallback />}><Router /></Suspense>`
);
appContent = appContent.replace(/^import \{ Suspense, lazy, useEffect \}/m, "import { Suspense, lazy }");
appContent = appContent.replace(/import \{ queryClient \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ QueryClientProvider \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ Toaster \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ TooltipProvider \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ initGA \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ hasAnalyticsConsent \}[^\n]+\n/g, "");
appContent = appContent.replace(/import CookieConsent[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ LanguageProvider \}[^\n]+\n/g, "");
appContent = appContent.replace(/import \{ ErrorBoundary \}[^\n]+\n/g, "");
appContent = appContent.replace(/import MetaSEO[^\n]+\n/g, "");
appContent = appContent.replace(/import SkipToContent[^\n]+\n/g, "");
appContent = appContent.replace(/import WhatsAppFloat[^\n]+\n/g, "");
appContent = appContent.replace(/import ScrollToTop[^\n]+\n/g, "");
appContent = appContent.replace(/import LegacyHashRedirect[^\n]+\n/g, "");
write(appPath, appContent);

// next.config.ts
write(
  path.join(OUT, "next.config.ts"),
  `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: false,
  transpilePackages: [],
};

export default nextConfig;
`
);

// tailwind
write(
  path.join(OUT, "tailwind.config.ts"),
  fs.readFileSync(path.join(ROOT, "tailwind.config.ts"), "utf8").replace(
    "./client/index.html", "./app/**/*.{js,ts,jsx,tsx}"
  ).replace(
    "./client/src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"
  )
);

// postcss
cp(path.join(ROOT, "postcss.config.js"), path.join(OUT, "postcss.config.js"));

// components.json
cp(path.join(ROOT, "components.json"), path.join(OUT, "components.json"));

// tsconfig
write(
  path.join(OUT, "tsconfig.json"),
  `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@shared/*": ["./shared/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`
);

// vercel.json (adapted from root, framework nextjs)
write(
  path.join(OUT, "vercel.json"),
  JSON.stringify(
    {
      framework: "nextjs",
      redirects: [
        { source: "/contact", destination: "/kontakt", permanent: true },
        { source: "/web-design", destination: "/webdesign-seo", permanent: true },
        { source: "/video-production", destination: "/videoproduktion", permanent: true },
        { source: "/demo-reinigung", destination: "/portfolio", permanent: true },
        { source: "/demo/berisha", destination: "/portfolio", permanent: true },
        { source: "/demo/tonis-autopflege", destination: "/portfolio", permanent: true },
        { source: "/demo/islamic-center", destination: "/portfolio", permanent: true },
        { source: "/demo/porro-lidia", destination: "/portfolio", permanent: true },
        { source: "/demo/tairovic-bez-verzija", destination: "/demo/tairovic-dark-verzija", permanent: true },
        { source: "/demo/tairovic-azzura-verzija", destination: "/demo/tairovic-dark-verzija", permanent: true },
      ],
      rewrites: [
        { source: "/demo", destination: "/demo/index.html" },
        { source: "/demo/", destination: "/demo/index.html" },
        { source: "/demo/:slug", destination: "/demo/:slug/index.html" },
        { source: "/demo/:slug/", destination: "/demo/:slug/index.html" },
      ],
    },
    null,
    2
  )
);

// .env.example
write(
  path.join(OUT, ".env.example"),
  `# EmailJS (contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Google Analytics (optional, loads after cookie consent)
NEXT_PUBLIC_GA_MEASUREMENT_ID=
`
);

// package.json - read root deps
const rootPkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
const nextPkg = {
  name: "agrmultimedia-standalone",
  version: "1.0.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "next lint",
  },
  dependencies: {
    ...Object.fromEntries(
      Object.entries(rootPkg.dependencies).filter(
        ([k]) => !["express", "express-session", "passport", "passport-local", "connect-pg-simple", "memorystore", "ws", "@neondatabase/serverless", "drizzle-orm", "drizzle-zod"].includes(k)
      )
    ),
    next: "15.1.0",
  },
  devDependencies: {
    "@tailwindcss/typography": rootPkg.devDependencies["@tailwindcss/typography"],
    "@types/node": rootPkg.devDependencies["@types/node"],
    "@types/react": rootPkg.devDependencies["@types/react"],
    "@types/react-dom": rootPkg.devDependencies["@types/react-dom"],
    autoprefixer: rootPkg.devDependencies["autoprefixer"],
    postcss: rootPkg.devDependencies["postcss"],
    tailwindcss: rootPkg.devDependencies["tailwindcss"],
    typescript: rootPkg.devDependencies["typescript"],
    eslint: "^9",
    "eslint-config-next": "15.1.0",
  },
};
write(path.join(OUT, "package.json"), JSON.stringify(nextPkg, null, 2) + "\n");

// README
write(
  path.join(OUT, "README.md"),
  `# AGR Multimedia — Standalone

Standalone reconstruction of [agrmultimedia.eu](https://www.agrmultimedia.eu/) extracted from the original demo monorepo.

## Stack

- **Next.js 15** (App Router, static export)
- **React 18** + TypeScript
- **Tailwind CSS 3** + shadcn/ui
- **Wouter** (client routing — identical to live demo)

## Structure

\`\`\`
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
\`\`\`

## Local development

\`\`\`bash
npm install
cp .env.example .env.local
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

## Production build

\`\`\`bash
npm run build
\`\`\`

Static output is written to \`out/\`.

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import in Vercel → Framework: **Next.js**
3. Add environment variables from \`.env.example\`
4. Deploy

Client demos under \`/demo/*\` are static HTML served from \`public/demo/\`.

## Notes

- Content, images, and translations are **unchanged** from agrmultimedia.eu
- No content modifications in this extraction step
`
);

// next-env.d.ts
write(
  path.join(OUT, "next-env.d.ts"),
  `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
`
);

// .gitignore
write(
  path.join(OUT, ".gitignore"),
  `node_modules
.next
out
.env
.env.local
*.log
.DS_Store
`
);

console.log("Done! Run: cd agrmultimedia-standalone && npm install && npm run build");

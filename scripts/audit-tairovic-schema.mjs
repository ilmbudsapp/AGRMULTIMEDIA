/**
 * Static audit: simulates Tairovic buildGraph() per page (no DOM).
 * Run: node scripts/audit-tairovic-schema.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "client/public/demo/tairovic-dark-verzija");

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const hasMicrodataFaq = /itemtype="https:\/\/schema\.org\/FAQPage"/.test(indexHtml);
const faqListCount = (indexHtml.match(/class="faq-list"/g) || []).length;

const PAGES = [
  "home",
  "about",
  "reinigung",
  "hausmeister",
  "garten",
  "winter",
  "arbeiten",
  "kontakt",
  "impressum",
  "datenschutz",
];

const FAQ_PAGES = new Set(["reinigung", "hausmeister", "garten", "winter"]);

function countTypes(graph, type) {
  return graph.filter((n) => n["@type"] === type).length;
}

// Mirror buildGraph from tairovic-seo.js (FAQ omitted — DOM-only)
function mockGraph(page) {
  const graph = [
    { "@type": "WebSite" },
    { "@type": "LocalBusiness" },
    { "@type": "ProfessionalService" },
    { "@type": "CleaningService" },
    { "@type": "BreadcrumbList" },
  ];
  if (FAQ_PAGES.has(page)) graph.push({ "@type": "FAQPage" });
  return graph;
}

console.log("HTML microdata FAQPage in index.html:", hasMicrodataFaq ? "YES (bad)" : "no");
console.log(".faq-list blocks in index.html (DOM, not all in JSON-LD):", faqListCount);
console.log("\nJSON-LD @graph counts per page (simulated apply()):\n");

const rows = PAGES.map((page) => {
  const g = mockGraph(page);
  return {
    page,
    path:
      {
        home: "/",
        about: "/ueber-uns",
        reinigung: "/gebaeudereinigung",
        hausmeister: "/hausmeisterservice",
        garten: "/gartenpflege",
        winter: "/winterdienst",
        arbeiten: "/unsere-arbeiten",
        kontakt: "/kontakt",
        impressum: "/impressum",
        datenschutz: "/datenschutz",
      }[page] || "/",
    FAQPage: countTypes(g, "FAQPage"),
    BreadcrumbList: countTypes(g, "BreadcrumbList"),
    LocalBusiness: countTypes(g, "LocalBusiness"),
    ldScripts: 1,
  };
});

console.table(rows);

const stray = (indexHtml.match(/"@type":\s*"FAQPage"/g) || []).length;
console.log('Inline "@type":"FAQPage" in index.html:', stray);

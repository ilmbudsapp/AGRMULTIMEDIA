#!/usr/bin/env node
/**
 * Proverava da li sitemap.xml vraća čist 200 OK za Googlebot.
 * Pokretanje: npm run check:sitemap
 */
const GOOGLEBOT_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

const TARGETS = [
  {
    name: "AGR Multimedia (www)",
    url: "https://www.agrmultimedia.eu/sitemap.xml",
    robots: "https://www.agrmultimedia.eu/robots.txt",
    requireWww: true,
  },
  {
    name: "AGR Multimedia (apex)",
    url: "https://agrmultimedia.eu/sitemap.xml",
    robots: "https://agrmultimedia.eu/robots.txt",
    requireWww: false,
  },
  {
    name: "FixBike",
    url: "https://fixbike.online/sitemap.xml",
    robots: "https://fixbike.online/robots.txt",
    requireWww: false,
  },
  {
    name: "Tairovic Gebäudeservice",
    url: "https://www.tairovic-gebaeudeservice.de/sitemap.xml",
    robots: "https://www.tairovic-gebaeudeservice.de/robots.txt",
    requireDomain: "https://www.tairovic-gebaeudeservice.de",
    requireWww: false,
  },
];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`OK: ${message}`);
}

function hasBom(text) {
  return text.charCodeAt(0) === 0xfeff;
}

function parseLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

async function fetchWithGooglebot(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": GOOGLEBOT_UA,
      Accept: "application/xml,text/xml,*/*",
    },
    redirect: "manual",
  });
  const body = await response.text();
  return { response, body };
}

async function checkTarget(target) {
  console.log(`\n== ${target.name} ==`);

  const { response, body } = await fetchWithGooglebot(target.url);
  if (response.status !== 200) {
    fail(`${target.url} status ${response.status}`);
    return;
  }
  pass(`${target.url} status 200`);

  if (response.headers.get("location")) {
    fail(`${target.url} redirects to ${response.headers.get("location")}`);
  } else {
    pass(`${target.url} no redirect`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/xml")) {
    fail(`${target.url} content-type is ${contentType || "(missing)"}`);
  } else {
    pass(`${target.url} content-type ${contentType}`);
  }

  if (hasBom(body)) {
    fail(`${target.url} body starts with UTF-8 BOM`);
  } else {
    pass(`${target.url} no BOM`);
  }

  const trimmed = body.trimStart();
  if (!trimmed.startsWith("<?xml")) {
    fail(`${target.url} body does not start with XML declaration`);
    return;
  }
  if (trimmed.includes("<!DOCTYPE html") || trimmed.includes("<html")) {
    fail(`${target.url} body looks like HTML, not XML`);
    return;
  }
  pass(`${target.url} valid XML start`);

  const locs = parseLocs(body);
  if (locs.length === 0) {
    fail(`${target.url} contains no <loc> entries`);
    return;
  }

  for (const loc of locs) {
    if (!loc.startsWith("https://")) {
      fail(`${target.url} loc is not absolute: ${loc}`);
    }
    if (target.requireDomain && !loc.startsWith(target.requireDomain)) {
      fail(`${target.url} loc wrong domain: ${loc}`);
    }
    if (target.requireWww && !loc.startsWith("https://www.agrmultimedia.eu")) {
      fail(`${target.url} loc missing www: ${loc}`);
    }
    if (target.requireDomain === "https://www.tairovic-gebaeudeservice.de") {
      if (loc.includes("agrmultimedia.eu") || loc.includes("/demo/") || loc.includes("/portfolio")) {
        fail(`${target.url} loc must not contain AGR/demo/portfolio URLs: ${loc}`);
      }
    }
    if (loc.endsWith("//")) {
      fail(`${target.url} loc has trailing slash issue: ${loc}`);
    }
  }
  pass(`${target.url} ${locs.length} absolute loc entries`);

  const robots = await fetchWithGooglebot(target.robots);
  if (robots.response.status !== 200) {
    fail(`${target.robots} status ${robots.response.status}`);
    return;
  }
  if (/disallow:\s*\/sitemap\.xml/i.test(robots.body)) {
    fail(`${target.robots} blocks /sitemap.xml`);
    return;
  }
  pass(`${target.robots} allows sitemap access`);
}

for (const target of TARGETS) {
  await checkTarget(target);
}

if (process.exitCode) {
  console.error("\nSitemap accessibility check failed.");
  process.exit(process.exitCode);
}

console.log("\nAll sitemap accessibility checks passed.");

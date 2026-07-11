import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUT = path.resolve("client/public/demo/jo-gebaeudereinigung/assets");
fs.mkdirSync(OUT, { recursive: true });

const imgs = [
  ["hero-banner.webp", "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1900&q=85"],
  ["hero-main.webp", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85"],
  ["hero-window.webp", "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85"],
  ["hero-vacuum.webp", "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=85"],
  ["about-main.webp", "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85"],
  ["about-small.webp", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85"],
  ["service-buero.webp", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85"],
  ["service-haus.webp", "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=85"],
  ["service-firma.webp", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85"],
  ["service-fenster.webp", "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=85"],
  ["service-side.webp", "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1000&q=85"],
  ["process-1.webp", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85"],
  ["process-2.webp", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=85"],
  ["process-3.webp", "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=600&q=85"],
  ["review-team.webp", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85"],
  ["cta-bg.webp", "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1600&q=85"],
];

for (const [name, url] of imgs) {
  const res = await fetch(url, { headers: { "User-Agent": "AGRMULTIMEDIA-build/1.0" } });
  if (!res.ok) throw new Error(`fetch failed ${url} (${res.status})`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, name));
  console.log("ok", name);
}

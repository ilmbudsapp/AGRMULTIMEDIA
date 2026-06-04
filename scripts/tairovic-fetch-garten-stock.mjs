/**
 * Downloads Pexels stock (free license) for Gartenpflege showcase, converts to WebP.
 * Replace with client photos when available.
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/gartenpflege");
const TMP = path.resolve("scripts/.tmp-garten-stock");

/** [webp, pexels photo id] */
const ITEMS = [
  ["garten-01-rasenmaehen.webp", 2804540],
  ["garten-02-heckenschnitt.webp", 1072824],
  ["garten-03-beetpflege.webp", 326299],
  ["garten-04-bewaesserung.webp", 4503265],
  ["garten-05-laubpflege.webp", 2489473],
  ["garten-06-aussenanlage.webp", 3822844],
];

function pexelsUrl(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
}

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

for (const [outName, photoId] of ITEMS) {
  const url = pexelsUrl(photoId);
  const res = await fetch(url, { headers: { "User-Agent": "AGRMULTIMEDIA-tairovic-asset-fetch" } });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const tmpJpg = path.join(TMP, outName.replace(".webp", ".jpg"));
  fs.writeFileSync(tmpJpg, buf);
  await sharp(tmpJpg)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, outName));
  console.log("ok", outName);
}

fs.rmSync(TMP, { recursive: true, force: true });
console.log("Done:", OUT);

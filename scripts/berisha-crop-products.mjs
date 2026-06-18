import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "client", "public", "demo", "berisha", "assets");
const flyer = path.join(root, "flyer-bremen.jpg");

/** 2×3 product grid on event flyers (1447×2048). */
const crops = [
  { name: "pleskavica", left: 95, top: 610, width: 615, height: 370 },
  { name: "cevapcici", left: 735, top: 610, width: 615, height: 370 },
  { name: "virshle", left: 95, top: 1005, width: 615, height: 370 },
  { name: "adana", left: 735, top: 1080, width: 615, height: 300 },
  { name: "mish-terun", left: 95, top: 1380, width: 615, height: 320 },
  { name: "sucuk", left: 735, top: 1380, width: 615, height: 320 },
];

for (const c of crops) {
  const out = path.join(root, `product-${c.name}.webp`);
  await sharp(flyer)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .webp({ quality: 88 })
    .toFile(out);
  console.log("wrote", path.basename(out));
}

const logo = path.join(root, "logo.png");
await sharp(logo)
  .extract({ left: 1285, top: 310, width: 360, height: 360 })
  .webp({ quality: 90 })
  .toFile(path.join(root, "halal-seal.webp"));
console.log("wrote halal-seal.webp");

await sharp(flyer)
  .extract({ left: 760, top: 1560, width: 560, height: 260 })
  .webp({ quality: 88 })
  .toFile(path.join(root, "product-sucuk.webp"));
console.log("wrote product-sucuk.webp (sausages)");

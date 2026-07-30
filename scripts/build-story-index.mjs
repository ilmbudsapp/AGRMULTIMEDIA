import fs from "fs";
import path from "path";

const lang = process.argv[2] || "it";
const dir = path.resolve(
  process.argv[3] ||
    path.join(
      process.cwd(),
      "..",
      "theenchantedchronicles",
      "locales",
      lang,
      "stories"
    )
);

const index = {};
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".json") || file === "_index.json") continue;
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  index[data.slug] = {
    number: data.number,
    cardTitle: data.cardTitle,
    excerpt: data.excerpt,
    label: data.label,
  };
}

fs.writeFileSync(
  path.join(dir, "_index.json"),
  JSON.stringify(index, null, 2) + "\n"
);
console.log(`Wrote ${Object.keys(index).length} entries to ${dir}/_index.json`);

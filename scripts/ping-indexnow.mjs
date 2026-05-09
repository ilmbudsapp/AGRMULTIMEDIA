/**
 * Ping IndexNow after deploy (Bing, Yandex, etc.).
 * Requires KEY file at https://www.agrmultimedia.eu/<KEY>.txt (see client/public/).
 * Usage: INDEXNOW_KEY=agrmm2026indexnowkey01 node scripts/ping-indexnow.mjs
 */
const key = process.env.INDEXNOW_KEY ?? "agrmm2026indexnowkey01";
const host = "www.agrmultimedia.eu";
const urls = [`https://${host}/`];

const body = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log("IndexNow:", res.status, res.statusText || "");
if (!res.ok) {
  const t = await res.text();
  console.error(t.slice(0, 500));
  process.exit(1);
}

/** Sends visitors to the static Next.js demo under /demo/uganda-hilfe/. */
export default function UgandaHilfeDemoRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace("/demo/uganda-hilfe/index.html");
  }
  return null;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Seite nicht gefunden | RL Gartenservice" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="inhalt">
      <div data-reveal="card">
      <div className="legal card-motion">
      <h1>Seite nicht gefunden</h1>
      <p>Die angeforderte Seite gibt es nicht.</p>
      <p>
        <a href="/">Zur Startseite</a>
      </p>
      </div>
      </div>
    </main>
  );
}

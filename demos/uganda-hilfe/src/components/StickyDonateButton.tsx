import Link from "next/link";

export default function StickyDonateButton() {
  return (
    <Link
      href="/spenden/"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#40916c] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_40px_rgba(64,145,108,0.45)] transition hover:scale-105 hover:bg-[#52b788] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532d]"
      aria-label="Jetzt spenden"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Spenden
    </Link>
  );
}

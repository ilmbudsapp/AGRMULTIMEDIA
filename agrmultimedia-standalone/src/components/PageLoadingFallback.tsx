/** Minimal route transition UI — keeps shell light (no extra icon libraries). */
export default function PageLoadingFallback() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center gap-3 bg-[#07070b] px-4 py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-white/70"
        aria-hidden
      />
      <span className="text-sm text-white/45">Loading…</span>
    </div>
  );
}

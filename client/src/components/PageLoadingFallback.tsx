/** Minimal route transition UI — keeps shell light (no extra icon libraries). */
export default function PageLoadingFallback() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center gap-3 bg-[var(--studio-bg)] px-4 py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--studio-border)] border-t-[var(--studio-accent)]"
        aria-hidden
      />
      <span className="text-sm text-[var(--studio-muted)]">Loading…</span>
    </div>
  );
}

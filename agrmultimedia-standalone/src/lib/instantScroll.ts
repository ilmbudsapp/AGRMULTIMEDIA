/** Instant scroll for nav / CTA clicks (no animated scroll). */
export function scrollWindowToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function scrollToElementById(id: string): void {
  document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
}

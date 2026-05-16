/** Instant scroll for nav / CTA clicks (no animated scroll). */
export function scrollWindowToTop(): void {
  window.scrollTo(0, 0);
}

export function scrollToElementById(id: string): void {
  document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
}

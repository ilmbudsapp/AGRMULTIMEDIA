import { useEffect } from "react";

/** Retired client demo — hard navigation clears stale SPA bundles and lands on portfolio case study. */
export default function DemoReinigungRetired() {
  useEffect(() => {
    window.location.replace("/portfolio#portfolio-reinigung");
  }, []);

  return null;
}

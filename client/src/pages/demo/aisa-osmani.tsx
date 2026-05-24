import { useEffect } from "react";

/** Sends visitors to the static demo under /demo/aisa-osmani/. */
export default function AisaOsmaniDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/aisa-osmani/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#0a0a0f] text-white/70 text-sm">
      Učitavanje demo sajta…
    </div>
  );
}

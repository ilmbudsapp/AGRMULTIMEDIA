import { useEffect } from "react";

/** Sends visitors to the static demo under /demo/berisha/. */
export default function BerishaDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/berisha/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#070707] text-white/70 text-sm">
      Seite wird geladen…
    </div>
  );
}

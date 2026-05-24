import { useEffect } from "react";

/** Sends visitors to the static demo under /demo/porro-lidia/. */
export default function PorroLidiaDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/porro-lidia/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#0a0a0f] text-white/70 text-sm">
      Učitavanje demo sajta…
    </div>
  );
}

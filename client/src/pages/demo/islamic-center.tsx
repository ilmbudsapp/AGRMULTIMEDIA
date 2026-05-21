import { useEffect } from "react";

/** Sends visitors to the static multi-page demo under /demo/islamic-center/. */
export default function IslamicCenterDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/islamic-center/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#0a0a0f] text-white/70 text-sm">
      Učitavanje demo sajta…
    </div>
  );
}

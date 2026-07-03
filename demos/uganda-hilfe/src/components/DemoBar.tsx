import Link from "next/link";
import { BASE } from "@/lib/site";

export default function DemoBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center gap-2 bg-[#14532d] px-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/95"
      role="note"
      aria-label="Demo Hinweis"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#52b788]" aria-hidden />
      <span>
        Demo-Version · Webseite erstellt von{" "}
        <a
          href="https://www.agrmultimedia.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[#d8f3dc]"
        >
          AGRMULTIMEDIA
        </a>
      </span>
    </div>
  );
}

export function demoTopOffsetClass() {
  return "pt-9";
}

export function HeaderLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE}/images/logo.png`} alt="" width={120} height={50} className="h-10 w-auto object-contain" />
      <span className="hidden text-sm font-bold leading-tight text-[#14532d] sm:block">
        Uganda-Hilfe
        <span className="block text-xs font-medium text-[#52796f]">Unterland e.V.</span>
      </span>
    </Link>
  );
}

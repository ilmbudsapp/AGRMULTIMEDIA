"use client";

import dynamic from "next/dynamic";

const ClientShell = dynamic(() => import("@/components/ClientShell"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a12] text-white/70">
      Loading…
    </div>
  ),
});

export default function PageClient() {
  return <ClientShell />;
}

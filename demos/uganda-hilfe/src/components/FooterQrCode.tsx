"use client";

import { QRCodeSVG } from "qrcode.react";
import { SITE } from "@/lib/site";

export default function FooterQrCode() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <p className="text-sm font-semibold text-white">Einfach mit dem Smartphone öffnen</p>
      <div className="mx-auto my-3 inline-flex rounded-xl bg-white p-2.5">
        <QRCodeSVG value={SITE.url} size={112} level="M" includeMargin={false} aria-label="QR-Code zur Demo-Website" />
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-[#52b788]">QR-Code scannen</p>
    </div>
  );
}

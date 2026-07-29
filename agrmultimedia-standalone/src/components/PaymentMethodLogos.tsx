import { SiMastercard, SiPaypal, SiVisa } from "react-icons/si";

const iconClass = "h-[22px] w-auto max-w-[72px] text-white/95 drop-shadow-sm";

/** Simplified SEPA direct-debit mark for dark backgrounds (not an official EPC asset). */
export function SepaPaymentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 32"
      className={className ?? "h-7 w-[88px] text-white/95"}
      aria-hidden
      role="img"
    >
      <rect
        x="1"
        y="1"
        width="86"
        height="30"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="opacity-85"
      />
      <text
        x="44"
        y="21"
        textAnchor="middle"
        fill="currentColor"
        className="font-bold"
        style={{ fontSize: "13px", letterSpacing: "0.06em" }}
      >
        SEPA
      </text>
    </svg>
  );
}

export function PaymentMethodLogosRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
      <span className="inline-flex items-center justify-center opacity-95" title="Visa" aria-label="Visa">
        <SiVisa className={`${iconClass} scale-110`} />
      </span>
      <span className="inline-flex items-center justify-center opacity-95" title="Mastercard" aria-label="Mastercard">
        <SiMastercard className={`${iconClass} scale-105`} />
      </span>
      <span className="inline-flex items-center justify-center opacity-95" title="PayPal" aria-label="PayPal">
        <SiPaypal className={`${iconClass} scale-105`} />
      </span>
      <span
        className="inline-flex items-center justify-center opacity-95"
        title="SEPA Lastschrift"
        aria-label="SEPA direct debit"
      >
        <SepaPaymentIcon />
      </span>
    </div>
  );
}

import { BASE, PAYPAL_DONATION_URL } from "@/lib/site";

type Props = {
  size?: "default" | "large";
  className?: string;
};

export default function PayPalDonateButton({ size = "default", className = "" }: Props) {
  const configured = PAYPAL_DONATION_URL.trim().length > 0;
  const sizeClass =
    size === "large"
      ? "min-h-[3.25rem] px-8 py-4 text-base md:text-lg"
      : "min-h-[2.75rem] px-6 py-3 text-sm";
  const logoClass = size === "large" ? "h-7 md:h-8" : "h-6";

  const inner = (
    <>
      <span aria-hidden className="text-lg leading-none">
        ❤️
      </span>
      <span>Mit PayPal spenden</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/images/paypal-logo.svg`}
        alt=""
        aria-hidden
        className={`${logoClass} w-auto shrink-0`}
        width={124}
        height={33}
      />
    </>
  );

  const classes = `uhu-btn-paypal inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition ${sizeClass} ${className}`;

  if (configured) {
    return (
      <a
        href={PAYPAL_DONATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label="Mit PayPal spenden – öffnet PayPal in neuem Tab"
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={classes} disabled aria-disabled="true" title="PayPal-URL in site.ts hinterlegen">
      {inner}
    </button>
  );
}

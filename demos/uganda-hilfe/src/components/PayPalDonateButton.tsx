import { PAYPAL_DONATION_URL } from "@/lib/site";

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

  const inner = (
    <>
      <span aria-hidden className="text-lg leading-none">
        ❤️
      </span>
      <span>Mit PayPal spenden</span>
      <svg className="h-5 w-auto shrink-0" viewBox="0 0 101 32" fill="none" aria-hidden>
        <path
          d="M12.24 10.67H8.5c-.28 0-.52.2-.56.48L6.04 24.1c-.03.18.12.34.3.34h1.78c.28 0 .52-.2.56-.48l.48-3.05c.04-.28.28-.48.56-.48h1.14c2.37 0 3.74-1.15 4.1-3.43.16-1 .04-1.78-.35-2.32-.4-.58-1.1-.92-2.01-.92Zm.38 3.37c-.2 1.28-1.17 1.28-2.12 1.28h-.54l.38-2.4c.02-.15.15-.26.3-.26h.25c.64 0 1.24 0 1.55.36.23.27.3.68.18 1.02Z"
          fill="#003087"
        />
        <path
          d="M22.67 14.04h-1.78c-.15 0-.28.11-.3.26l-.07.44-.11-.16c-.34-.5-.98-.78-1.84-.78-1.72 0-3.19 1.3-3.48 3.13-.15.91.06 1.78.58 2.38.48.55 1.16.78 1.97.78.39 0 .78-.08 1.13-.24l-.08.52c-.03.18.12.34.3.34h1.6c.28 0 .52-.2.56-.48l.96-6.1c.03-.18-.12-.34-.3-.34Zm-2.84 3.03c-.15.97-.93 1.62-1.9 1.62-.49 0-.88-.16-1.14-.45-.26-.3-.36-.72-.28-1.18.14-.96.93-1.63 1.87-1.63.48 0 .87.16 1.13.46.27.31.37.74.28 1.18Z"
          fill="#003087"
        />
        <path
          d="M33.52 14.04h-1.78c-.17 0-.33.08-.42.22l-3.08 4.54-1.3-4.36c-.06-.22-.26-.36-.49-.36h-1.75c-.21 0-.36.21-.3.41l2.45 7.18-2.3 3.25c-.14.2 0 .47.24.47h1.78c.17 0 .32-.08.42-.21l7.4-10.7c.13-.19 0-.44-.23-.44Z"
          fill="#003087"
        />
        <path
          d="M41.8 10.67h-3.74c-.28 0-.52.2-.56.48l-1.5 9.52c-.03.18.12.34.3.34h1.89c.22 0 .4-.16.43-.38l.42-2.67c.04-.28.28-.48.56-.48h1.14c2.37 0 3.74-1.15 4.1-3.43.16-1 .04-1.78-.35-2.32-.4-.58-1.1-.92-2.01-.92Zm.38 3.37c-.2 1.28-1.17 1.28-2.12 1.28h-.54l.38-2.4c.02-.15.15-.26.3-.26h.25c.64 0 1.24 0 1.55.36.23.27.3.68.18 1.02Z"
          fill="#0070E0"
        />
        <path
          d="M52.23 14.04h-1.78c-.15 0-.28.11-.3.26l-.07.44-.11-.16c-.34-.5-.98-.78-1.84-.78-1.72 0-3.19 1.3-3.48 3.13-.15.91.06 1.78.58 2.38.48.55 1.16.78 1.97.78.39 0 .78-.08 1.13-.24l-.08.52c-.03.18.12.34.3.34h1.6c.28 0 .52-.2.56-.48l.96-6.1c.03-.18-.12-.34-.3-.34Zm-2.84 3.03c-.15.97-.93 1.62-1.9 1.62-.49 0-.88-.16-1.14-.45-.26-.3-.36-.72-.28-1.18.14-.96.93-1.63 1.87-1.63.48 0 .87.16 1.13.46.27.31.37.74.28 1.18Z"
          fill="#0070E0"
        />
        <path
          d="M63.08 14.04h-1.78c-.17 0-.33.08-.42.22l-3.08 4.54-1.3-4.36c-.06-.22-.26-.36-.49-.36h-1.75c-.21 0-.36.21-.3.41l2.45 7.18-2.3 3.25c-.14.2 0 .47.24.47h1.78c.17 0 .32-.08.42-.21l7.4-10.7c.13-.19 0-.44-.23-.44Z"
          fill="#0070E0"
        />
      </svg>
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
        aria-label="Mit PayPal spenden — öffnet PayPal in neuem Tab"
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

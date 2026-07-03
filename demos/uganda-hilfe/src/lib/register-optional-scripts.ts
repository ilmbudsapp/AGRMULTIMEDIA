import { registerConsentScript } from "@/lib/cookie-consent";

/**
 * Register optional third-party scripts here.
 * They load only after the user grants consent for the matching category.
 *
 * Example — Google Analytics (uncomment when GA_MEASUREMENT_ID is available):
 *
 * registerConsentScript({
 *   id: "google-analytics",
 *   category: "analytics",
 *   load: () => {
 *     const id = "G-XXXXXXXXXX";
 *     const script = document.createElement("script");
 *     script.async = true;
 *     script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
 *     document.head.appendChild(script);
 *     window.dataLayer = window.dataLayer || [];
 *     function gtag(...args: unknown[]) {
 *       window.dataLayer.push(args);
 *     }
 *     gtag("js", new Date());
 *     gtag("config", id, { anonymize_ip: true });
 *   },
 * });
 *
 * Example — Meta Pixel:
 *
 * registerConsentScript({
 *   id: "meta-pixel",
 *   category: "marketing",
 *   load: () => {
 *     // Meta Pixel base code …
 *   },
 * });
 */

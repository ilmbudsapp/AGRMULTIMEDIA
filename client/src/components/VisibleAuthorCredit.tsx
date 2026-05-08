/**
 * Explicit English "By Agron Osmani" for SEO scanners (E-E-A-T / byline detection).
 * Keep literal wording; style is muted so it reads as editorial credit.
 */
export default function VisibleAuthorCredit({
  className = "",
  variant = "dark",
}: {
  className?: string;
  /** dark = home SEO section; light = blog on pale background */
  variant?: "dark" | "light";
}) {
  const tone =
    variant === "light" ? "text-gray-500 dark:text-gray-400" : "text-white/45";
  return (
    <p
      {...(variant === "dark" ? { id: "seo-visible-byline" } : {})}
      lang="en"
      className={`text-xs ${tone} ${className}`}
    >
      By Agron Osmani
    </p>
  );
}

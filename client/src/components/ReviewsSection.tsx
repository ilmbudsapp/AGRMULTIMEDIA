import { useLanguage } from "@/contexts/LanguageContext";
import { AGR_GOOGLE_REVIEWS, GOOGLE_MAPS_PLACE_URL } from "@/data/agrGoogleReviews";
import { ExternalLink, Star } from "lucide-react";

const ORGANIZATION_ID = "https://www.agrmultimedia.eu/#organization";
const REVIEWS_LD_ID = "https://www.agrmultimedia.eu/#google-maps-customer-reviews";

function RatingStarsDecorative({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5 text-yellow-400" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="size-4 fill-current stroke-yellow-400/90" strokeWidth={1.2} />
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const { tSpec } = useLanguage();
  const {
    title,
    subtitle,
    ariaRegion,
    platformGoogleMaps,
    ratingScreenReader,
    mapsCta,
    mapsCtaAriaLabel,
  } = tSpec.reviewsSection;

  const avg =
    AGR_GOOGLE_REVIEWS.reduce((s, r) => s + r.rating, 0) /
    Math.max(1, AGR_GOOGLE_REVIEWS.length);

  const reviewsJsonLd = AGR_GOOGLE_REVIEWS.map((r, i) => ({
    "@type": "Review" as const,
    "@id": `${REVIEWS_LD_ID}/review/${i + 1}`,
    itemReviewed: { "@id": ORGANIZATION_ID },
    url: GOOGLE_MAPS_PLACE_URL,
    author: {
      "@type": "Organization" as const,
      name: r.author,
    },
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));

  const aggregateJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avg.toFixed(1),
          bestRating: 5,
          worstRating: 1,
          reviewCount: AGR_GOOGLE_REVIEWS.length,
          ratingCount: AGR_GOOGLE_REVIEWS.length,
        },
        review: reviewsJsonLd.map((x) => ({ "@id": x["@id"] })),
      },
      ...reviewsJsonLd,
    ],
  };

  return (
    <>
      <script
        id="google-reviews-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateJsonLd) }}
      />
      <section
        id="bewertungen"
        className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24"
        role="region"
        aria-label={ariaRegion}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <h2 id="bewertungen-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p id="bewertungen-subheading" className="mt-3 text-base leading-relaxed text-white/65 md:text-lg">
              {subtitle}
            </p>
          </header>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {AGR_GOOGLE_REVIEWS.map((rev, index) => (
              <article key={`${rev.author}-${index}`}>
                <blockquote
                  lang="de"
                  cite={GOOGLE_MAPS_PLACE_URL}
                  className="review-card premium-card flex h-full min-h-0 flex-col rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:p-7"
                >
                  <p className="grow text-base leading-relaxed text-white/85">&ldquo;{rev.text}&rdquo;</p>
                  <footer className="mt-5 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex min-w-0 flex-wrap items-center gap-2 gap-y-1">
                        <cite className="not-italic">
                          <span className="font-semibold text-white">{rev.author}</span>
                        </cite>
                        <span className="sr-only">{ratingScreenReader}</span>
                        <RatingStarsDecorative count={rev.rating} />
                      </div>
                      <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-white/45">
                        {platformGoogleMaps}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={GOOGLE_MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.875rem] font-semibold transition hover:brightness-110"
              aria-label={mapsCtaAriaLabel}
            >
              <ExternalLink className="size-4 shrink-0 opacity-90" aria-hidden />
              {mapsCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

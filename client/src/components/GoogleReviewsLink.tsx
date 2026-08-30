import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

interface ReviewsLinkCopy {
  text: string;
  rating: string;
}

const REVIEWS_COPY: Record<Language, ReviewsLinkCopy> = {
  de: {
    text: "Google-Bewertungen ansehen",
    rating: "5.0 ★★★★★ (15 Bewertungen)",
  },
  en: {
    text: "View Google Reviews",
    rating: "5.0 ★★★★★ (15 reviews)",
  },
  "sr-Latn": {
    text: "Pogledajte Google recenzije",
    rating: "5.0 ★★★★★ (15 recenzija)",
  },
  it: {
    text: "Visualizza recensioni Google",
    rating: "5.0 ★★★★★ (15 recensioni)",
  },
  sq: {
    text: "Shiko recensionet në Google",
    rating: "5.0 ★★★★★ (15 recensione)",
  },
};

export default function GoogleReviewsLink() {
  const { currentLanguage } = useLanguage();
  const copy = REVIEWS_COPY[currentLanguage];

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <a
        href="https://g.page/r/agr-multimedia-reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/10 px-6 py-3 text-sm font-semibold text-blue-300 transition-all hover:border-blue-400/50 hover:bg-blue-600/20"
      >
        <Star className="h-5 w-5 fill-blue-400 text-blue-400" />
        {copy.text}
      </a>
      <p className="text-xs text-white/50">{copy.rating}</p>
    </div>
  );
}

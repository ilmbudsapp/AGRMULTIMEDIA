import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

interface UpdateDateCopy {
  label: string;
  date: string;
}

const UPDATE_DATE_COPY: Record<Language, UpdateDateCopy> = {
  de: {
    label: "Zuletzt aktualisiert",
    date: "30. August 2026",
  },
  en: {
    label: "Last updated",
    date: "August 30, 2026",
  },
  "sr-Latn": {
    label: "Poslednje ažurirano",
    date: "30. avgust 2026",
  },
  it: {
    label: "Ultimo aggiornamento",
    date: "30 agosto 2026",
  },
  sq: {
    label: "Përditësuar më",
    date: "30 gusht 2026",
  },
};

export default function UpdateDate() {
  const { currentLanguage } = useLanguage();
  const copy = UPDATE_DATE_COPY[currentLanguage];

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-white/50">
      <Calendar className="h-4 w-4" />
      <span>
        {copy.label}: <time dateTime="2026-08-30">{copy.date}</time>
      </span>
    </div>
  );
}

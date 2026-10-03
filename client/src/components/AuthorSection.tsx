import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

interface AuthorCopy {
  title: string;
  name: string;
  role: string;
  experience: string;
  projects: string;
  articles: string;
  location: string;
  linkedInLabel: string;
}

const AUTHOR_COPY: Record<Language, AuthorCopy> = {
  de: {
    title: "Autor & Expertise",
    name: "Agron Osmani",
    role: "Gründer & Creative Lead",
    experience: "5+ Jahre Erfahrung",
    projects: "20+ abgeschlossene Projekte in Baden-Württemberg",
    articles: "17 Fachartikel im AGR Multimedia Blog",
    location: "Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige",
    linkedInLabel: "LinkedIn Profil ansehen",
  },
  en: {
    title: "Author & Expertise",
    name: "Agron Osmani",
    role: "Founder & Creative Lead",
    experience: "5+ years of experience",
    projects: "20+ completed projects in Baden-Württemberg",
    articles: "17 expert articles on the AGR Multimedia Blog",
    location: "Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Germany",
    linkedInLabel: "View LinkedIn Profile",
  },
};

export default function AuthorSection() {
  const { currentLanguage } = useLanguage();
  const copy = AUTHOR_COPY[currentLanguage];

  return (
    <section
      id="author-section"
      className="scroll-mt-24 border-t border-[#2a2a30] bg-[#0c0c10] py-16 md:py-20"
      aria-labelledby="author-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl p-8 md:p-10">
          <h2
            id="author-heading"
            className="font-display text-center text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {copy.title}
          </h2>
          
          <div className="mt-8 space-y-4">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                <span className="text-lg font-semibold text-white">{copy.name}</span>
                <span className="text-base text-blue-400">{copy.role}</span>
              </div>
              
              <div className="space-y-2 text-sm text-white/75 md:text-base">
                <p>• {copy.experience}</p>
                <p>• {copy.projects}</p>
                <p>• {copy.articles}</p>
                <p>• {copy.location}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/agron-osmani-228947266/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {copy.linkedInLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

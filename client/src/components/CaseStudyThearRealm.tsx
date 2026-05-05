import { useLanguage } from "@/contexts/LanguageContext";
import { getThearRealmCaseCopy } from "@/lib/thearRealmCaseI18n";

const CASE_DIR = "/Case Studio/";
const PHOTO_FILES = ["06.jpg", "07.jpg", "12.jpg", "14.jpg", "15.jpg", "16.jpg"] as const;
const VIDEO_FILE = "THEAR REALM TV-Video clip.mp4";

function caseStudioAsset(fileName: string): string {
  return encodeURI(`${CASE_DIR}${fileName}`);
}

export default function CaseStudyThearRealm() {
  const { currentLanguage } = useLanguage();
  const t = getThearRealmCaseCopy(currentLanguage);

  return (
    <section
      id="case-study-thear-realm"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-28"
      aria-labelledby="case-study-thear-realm-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">{t.sectionEyebrow}</p>
        <h2 id="case-study-thear-realm-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {t.sectionTitle}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75">{t.intro}</p>

        <a
          href="#thear-realm-tv-panel"
          className="premium-card premium-card-hover mt-10 block rounded-[12px] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-blue-100 transition hover:text-white md:text-base"
        >
          {t.clientLinkLabel}
        </a>

        <div id="thear-realm-tv-panel" className="mt-12 space-y-10 scroll-mt-28">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {PHOTO_FILES.map((file) => (
              <figure key={file} className="premium-card overflow-hidden p-0">
                <img
                  src={caseStudioAsset(file)}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <p className="text-base leading-relaxed text-white/85 md:text-lg">{t.toolsClosing}</p>

          <div className="premium-card overflow-hidden p-0">
            <video
              className="aspect-video w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label={t.videoAriaLabel}
            >
              <source src={caseStudioAsset(VIDEO_FILE)} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

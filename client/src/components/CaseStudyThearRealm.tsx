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
      id="case-studies"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-28"
      aria-labelledby="case-studio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="case-studio-heading"
          className="text-center text-3xl font-bold uppercase tracking-[0.22em] text-white md:text-4xl lg:text-5xl"
        >
          {t.caseStudioHeading}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-lg">
          {t.materialsIntro}
        </p>

        <div className="mt-14 border-t border-[#333333] pt-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">{t.projectEyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{t.sectionTitle}</h3>
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
      </div>
    </section>
  );
}

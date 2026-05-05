import { useLanguage } from "@/contexts/LanguageContext";
import { getCaseStudioCopy } from "@/lib/thearRealmCaseI18n";

const THEAR_DIR = "/Case Studio/";
const THEAR_PHOTOS = ["06.jpg", "07.jpg", "12.jpg", "14.jpg", "15.jpg", "16.jpg"] as const;
const THEAR_VIDEO = "THEAR REALM TV-Video clip.mp4";

const CS1_DIR = "/Case Studio 1/";
const CS1_IMAGES = ["01.jpg", "02.png", "03.png"] as const;
const CS1_VIDEO = "04.mp4";

function studioAsset(baseDir: string, fileName: string): string {
  return encodeURI(`${baseDir}${fileName}`);
}

export default function CaseStudyThearRealm() {
  const { currentLanguage } = useLanguage();
  const t = getCaseStudioCopy(currentLanguage);
  const tr = t.thearRealm;
  const cs = t.comingSoon;

  return (
    <section
      id="case-studies"
      className="premium-section scroll-mt-24 py-20 md:py-28"
      aria-labelledby="case-studio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="case-studio-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {t.caseStudioHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{t.materialsIntro}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50">{t.fontsNote}</p>

        {/* PROJEKAT ZA THEAR REALM TV */}
        <div
          className="mt-12 rounded-[12px] border border-[#333333] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-10"
          aria-labelledby="thear-realm-project-heading"
        >
          <h3
            id="thear-realm-project-heading"
            className="text-center text-lg font-bold uppercase tracking-[0.14em] text-white md:text-left md:text-xl lg:text-2xl"
          >
            {tr.innerSectionHeading}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-white/75">{tr.intro}</p>

          <a
            href="#thear-realm-tv-panel"
            className="premium-card premium-card-hover mt-10 block rounded-[12px] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-blue-100 transition hover:text-white md:text-base"
          >
            {tr.clientLinkLabel}
          </a>

          <div id="thear-realm-tv-panel" className="mt-12 space-y-10 scroll-mt-28">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {THEAR_PHOTOS.map((file) => (
                <figure key={file} className="premium-card overflow-hidden p-0">
                  <img
                    src={studioAsset(THEAR_DIR, file)}
                    alt=""
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>

            <p className="text-base leading-relaxed text-white/85 md:text-lg">{tr.toolsClosing}</p>

            <div className="premium-card overflow-hidden p-0">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label={tr.videoAriaLabel}
              >
                <source src={studioAsset(THEAR_DIR, THEAR_VIDEO)} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* COMING SOON Intro video — Case Studio 1 */}
        <div
          className="mt-14 rounded-[12px] border border-[#333333] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-10"
          aria-labelledby="coming-soon-project-heading"
        >
          <h3
            id="coming-soon-project-heading"
            className="text-center text-lg font-bold uppercase tracking-[0.14em] text-white md:text-left md:text-xl lg:text-2xl"
          >
            {cs.innerSectionHeading}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-white/75">{cs.intro}</p>
          <p className="mt-6 text-base font-medium text-white/90">{cs.materialsCaption}</p>

          <div id="coming-soon-studio-panel" className="mt-10 space-y-10 scroll-mt-28">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {CS1_IMAGES.map((file) => (
                <figure key={file} className="premium-card overflow-hidden p-0">
                  <img
                    src={studioAsset(CS1_DIR, file)}
                    alt=""
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>

            <p className="text-base leading-relaxed text-white/85 md:text-lg">{cs.toolsClosing}</p>

            <div className="premium-card overflow-hidden p-0">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label={cs.videoAriaLabel}
              >
                <source src={studioAsset(CS1_DIR, CS1_VIDEO)} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "@/contexts/LanguageContext";
import { getCaseStudioCopy } from "@/lib/thearRealmCaseI18n";

const THEAR_DIR = "/Case Studio/";
const THEAR_PHOTOS = ["06.jpg", "07.jpg", "12.jpg", "14.jpg", "15.jpg", "16.jpg"] as const;
const THEAR_VIDEO = "THEAR REALM TV-Video clip.mp4";

const CS1_DIR = "/Case Studio 1/";
const CS1_IMAGES = ["01.jpg", "02.png", "03.png"] as const;
const CS1_VIDEO = "04.mp4";

const CS2_DIR = "/Case Studio 2/";
const CS2_LOGO = "01 Logo.jpg";
const CS2_VIDEO = "7.mp4";

const FIXBIKE_DIR = "/Case Studio FixBike/";
const FIXBIKE_IMAGES = ["01.png", "02.png", "03.png", "04.png"] as const;

function studioAsset(baseDir: string, fileName: string): string {
  return encodeURI(`${baseDir}${fileName}`);
}

function renderDescriptionWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/30 underline-offset-4 transition hover:text-white"
        >
          {part}
        </a>
      );
    }
    return <span key={`text-${index}`}>{part}</span>;
  });
}

export default function CaseStudyThearRealm() {
  const { currentLanguage } = useLanguage();
  const t = getCaseStudioCopy(currentLanguage);
  const tr = t.thearRealm;
  const cs = t.comingSoon;
  const kf = t.kerimFoundation;

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

        <div className="mt-12 space-y-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{t.websitesHeading}</h3>

          <article className="rounded-[12px] border border-[#333333] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
            <h4 className="text-xl font-semibold text-white md:text-2xl">{t.websiteProjects.first.title}</h4>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/75">
              {renderDescriptionWithLinks(t.websiteProjects.first.description)}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FIXBIKE_IMAGES.map((file) => (
                <figure key={file} className="premium-card overflow-hidden p-0">
                  <img
                    src={studioAsset(FIXBIKE_DIR, file)}
                    alt={t.websiteProjects.first.title}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
            <a
              href={t.websiteProjects.first.href}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button mt-6 inline-flex"
            >
              {t.websiteProjects.first.cta}
            </a>
          </article>

          <article className="rounded-[12px] border border-[#333333] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
            <h4 className="text-xl font-semibold text-white md:text-2xl">{t.websiteProjects.second.title}</h4>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/75">
              {renderDescriptionWithLinks(t.websiteProjects.second.description)}
            </p>
            <figure className="premium-card mt-6 overflow-hidden p-0">
              <img
                src={studioAsset(FIXBIKE_DIR, "02.png")}
                alt={t.websiteProjects.second.title}
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <a
              href={t.websiteProjects.second.href}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button mt-6 inline-flex"
            >
              {t.websiteProjects.second.cta}
            </a>
          </article>
        </div>

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

        {/* KERIM FOUNDATION — Case Studio 2 */}
        <div
          className="mt-14 rounded-[12px] border border-[#333333] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-10"
          aria-labelledby="kerim-foundation-heading"
        >
          <h3
            id="kerim-foundation-heading"
            className="text-center text-lg font-bold uppercase tracking-[0.14em] text-white md:text-left md:text-xl lg:text-2xl"
          >
            {kf.innerSectionHeading}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-white/75">{kf.intro}</p>
          <p className="mt-6 text-base font-medium text-white/90">{kf.materialsCaption}</p>

          <div id="kerim-foundation-panel" className="mt-10 space-y-10 scroll-mt-28">
            <figure className="premium-card mx-auto max-w-lg overflow-hidden p-4 md:p-6">
              <img
                src={studioAsset(CS2_DIR, CS2_LOGO)}
                alt=""
                className="mx-auto max-h-[min(70vh,520px)] w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <p className="text-sm leading-relaxed text-white/65 md:text-base">{kf.logoFontsNote}</p>

            <p className="text-base leading-relaxed text-white/85 md:text-lg">{kf.toolsClosing}</p>

            <div className="premium-card overflow-hidden p-0">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label={kf.videoAriaLabel}
              >
                <source src={studioAsset(CS2_DIR, CS2_VIDEO)} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-lg font-medium text-white md:text-xl">{t.finalCta}</p>
      </div>
    </section>
  );
}

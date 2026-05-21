import { useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  Clapperboard,
  ExternalLink,
  Layers,
  LayoutGrid,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AiVideoClipGrid from "@/components/AiVideoClipGrid";
import PortfolioImageGallery from "@/components/PortfolioImageGallery";
import PortfolioMediaGallery from "@/components/PortfolioMediaGallery";
import VideoEditingClipGrid from "@/components/VideoEditingClipGrid";
import { reinigungHeroAltByLang, reinigungPortfolioMediaByLang, REINIGUNG_HERO_IMG } from "@/data/reinigungPortfolio";
import { brandingGalleryByLang } from "@/data/brandingGallery";
import { fotoKreiraneSaAiGalleryByLang } from "@/data/fotoKreiraneSaAiGallery";
import type { PortfolioFilterId } from "@/lib/portfolioPageI18n";
import { toServiceLang } from "@/lib/servicePageI18n";

const TONIS_LIVE = "https://www.tonis-autopflege-goeppingen.de";
const FIXBIKE_LIVE = "https://fixbike.online/";
const ISLAMIC_DEMO = "/demo/islamic-center/index.html";
const TONIS_IMG = "/demo/tonis-autopflege/hero-poster.webp";
const ISLAMIC_IMG = "/demo/islamic-center/img/about-1.jpg";
const FIXBIKE_IMG = "/portfolio/web-design/fixbike-fahrradservice-neuwied-hero.webp";
const LIVE_BTN =
  "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90";

const SECONDARY_BTN =
  "inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white";

function ProjectCard({
  image,
  video,
  title,
  description,
  pillarLabel,
  pillarIcon: PillarIcon,
  pillarClass,
  gradeBadge,
  imageFit = "cover",
  children,
}: {
  image?: string;
  video?: { src: string; poster: string; ariaLabel: string };
  title: string;
  description: string;
  pillarLabel: string;
  pillarIcon: LucideIcon;
  pillarClass: string;
  gradeBadge?: string;
  imageFit?: "cover" | "contain";
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playOnHover = () => {
    if (!video) return;
    const el = videoRef.current;
    if (!el) return;
    void el.play().catch(() => undefined);
  };

  const pauseOnLeave = () => {
    if (!video) return;
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
      <div
        className={`relative overflow-hidden bg-black/40 ${video ? "aspect-video" : "aspect-[16/10]"}`}
        onMouseEnter={video ? playOnHover : undefined}
        onMouseLeave={video ? pauseOnLeave : undefined}
        onFocus={video ? playOnHover : undefined}
        onBlur={video ? pauseOnLeave : undefined}
      >
        {video ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={video.ariaLabel}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className={`h-full w-full ${imageFit === "contain" ? "object-contain p-2" : "object-cover"}`}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <span
          className={`pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${pillarClass}`}
        >
          <PillarIcon className="h-3.5 w-3.5" aria-hidden />
          {pillarLabel}
        </span>
        {gradeBadge ? (
          <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            {gradeBadge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 md:text-base">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">{children}</div>
      </div>
    </article>
  );
}

function CategoryBlock({
  id,
  icon: Icon,
  title,
  intro,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/[0.08] pt-14 first:border-t-0 first:pt-0">
      <div className="mb-8 flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5da3f9]/30 bg-[#5da3f9]/10 text-[#93c5fd]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">{intro}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function PortfolioShowcase() {
  const { tSpec, currentLanguage } = useLanguage();
  const p = tSpec.portfolioPage;
  const lang = toServiceLang(currentLanguage);
  const [filter, setFilter] = useState<PortfolioFilterId>("all");

  const brandSamples = useMemo(() => brandingGalleryByLang[lang].slice(0, 6), [lang]);
  const aiPhotoSamples = useMemo(() => fotoKreiraneSaAiGalleryByLang[lang].slice(0, 6), [lang]);
  const reinigungMedia = useMemo(() => reinigungPortfolioMediaByLang(lang), [lang]);
  const reinigungHeroAlt = reinigungHeroAltByLang[lang];
  const filters: { id: PortfolioFilterId; label: string }[] = [
    { id: "all", label: p.filters.all },
    { id: "web", label: p.filters.web },
    { id: "video", label: p.filters.video },
    { id: "graphic", label: p.filters.graphic },
  ];

  const showWeb = filter === "all" || filter === "web";
  const showVideo = filter === "all" || filter === "video";
  const showGraphic = filter === "all" || filter === "graphic";
  const showUx = filter === "all";

  const webPillarClass = "border-[#5da3f9]/40 bg-[#5da3f9]/15 text-[#93c5fd]";
  return (
    <section className="py-16 md:py-24" aria-labelledby="portfolio-showcase-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">{p.pageTitle}</p>
          <h1
            id="portfolio-showcase-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            {p.pageTitle}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{p.pageLead}</p>
        </header>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3"
          role="tablist"
          aria-label={p.pageTitle}
        >
          {filters.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[#0a0a0f]"
                    : "border border-white/15 bg-white/5 text-white/75 hover:border-white/25 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-14 space-y-14">
          {showWeb && (
            <CategoryBlock
              id="portfolio-web"
              icon={LayoutGrid}
              title={p.categories.web.title}
              intro={p.categories.web.intro}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <ProjectCard
                  image={TONIS_IMG}
                  title={p.projects.tonis.title}
                  description={p.projects.tonis.description}
                  pillarLabel={p.categories.web.title}
                  pillarIcon={LayoutGrid}
                  pillarClass={webPillarClass}
                  gradeBadge={p.projects.tonis.gradeBadge}
                >
                  <a href={TONIS_LIVE} target="_blank" rel="noopener noreferrer" className={LIVE_BTN}>
                    {p.projects.tonis.liveCta}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </ProjectCard>
                <ProjectCard
                  image={ISLAMIC_IMG}
                  title={p.projects.islamicCenter.title}
                  description={p.projects.islamicCenter.description}
                  pillarLabel={p.categories.web.title}
                  pillarIcon={LayoutGrid}
                  pillarClass={webPillarClass}
                  gradeBadge={p.projects.islamicCenter.gradeBadge}
                >
                  <a href={ISLAMIC_DEMO} className={LIVE_BTN}>
                    {p.projects.islamicCenter.liveCta}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </ProjectCard>
                <ProjectCard
                  image={FIXBIKE_IMG}
                  title={p.projects.fixbike.title}
                  description={p.projects.fixbike.description}
                  pillarLabel={p.categories.web.title}
                  pillarIcon={LayoutGrid}
                  pillarClass={webPillarClass}
                  gradeBadge={p.projects.fixbike.gradeBadge}
                >
                  <a href={FIXBIKE_LIVE} target="_blank" rel="noopener noreferrer" className={LIVE_BTN}>
                    {p.projects.fixbike.liveCta}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </ProjectCard>
              </div>

              <article
                id="portfolio-reinigung"
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <img
                    src={REINIGUNG_HERO_IMG}
                    alt={reinigungHeroAlt}
                    className="h-full w-full object-contain p-3 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <span
                    className={`pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${webPillarClass}`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
                    {p.categories.web.title}
                  </span>
                  <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {p.projects.reinigung.gradeBadge}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{p.projects.reinigung.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.projects.reinigung.description}
                  </p>
                  <div id="portfolio-reinigung-media" className="mt-8 scroll-mt-28 border-t border-white/[0.08] pt-8">
                    <h4 className="text-lg font-semibold text-white">{p.projects.reinigung.mediaTitle}</h4>
                    <p className="mt-2 text-sm text-white/65 md:text-base">{p.projects.reinigung.mediaIntro}</p>
                    <PortfolioMediaGallery items={reinigungMedia} closeLabel={p.categories.galleryClose} />
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/kontakt" className={LIVE_BTN}>
                      {p.projects.reinigung.liveCta}
                    </Link>
                  </div>
                </div>
              </article>
            </CategoryBlock>
          )}

          {showVideo && (
            <CategoryBlock
              id="portfolio-video"
              icon={Clapperboard}
              title={p.categories.video.title}
              intro={p.categories.video.intro}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <article className="flex flex-col rounded-2xl border border-amber-400/20 bg-amber-500/[0.06] p-6 md:p-8">
                  <div className="flex items-center gap-2">
                    <Clapperboard className="h-5 w-5 text-amber-300" aria-hidden />
                    <h3 className="text-lg font-semibold text-amber-100">{p.categories.videoEditing.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.categories.videoEditing.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-amber-100/90">{p.projects.theirrealm.title}</p>
                  <p className="mt-1 text-xs text-white/55">{p.projects.theirrealm.subtitle}</p>
                  <VideoEditingClipGrid
                    clipAriaLabel={(index) =>
                      p.categories.videoEditing.clipAriaLabel.replace("{n}", String(index))
                    }
                  />
                  <div className="mt-6">
                    <Link href="/kontakt" className={LIVE_BTN}>
                      {p.categories.videoEditing.cta}
                    </Link>
                  </div>
                </article>

                <article className="flex flex-col rounded-2xl border border-violet-400/20 bg-violet-500/[0.06] p-6 md:p-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-violet-300" aria-hidden />
                    <h3 className="text-lg font-semibold text-violet-100">{p.categories.aiVideo.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.categories.aiVideo.description}
                  </p>
                  <AiVideoClipGrid
                    clipAriaLabel={(index) =>
                      p.categories.aiVideo.clipAriaLabel.replace("{n}", String(index))
                    }
                  />
                  <div className="mt-6">
                    <Link href="/kontakt" className={LIVE_BTN}>
                      {p.categories.aiVideo.cta}
                    </Link>
                  </div>
                </article>
              </div>
            </CategoryBlock>
          )}

          {showGraphic && (
            <CategoryBlock
              id="portfolio-graphic"
              icon={Palette}
              title={p.categories.graphic.title}
              intro={p.categories.graphic.intro}
            >
              <div className="space-y-10">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-white">{p.categories.brandGraphics.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.categories.brandGraphics.description}
                  </p>
                  <PortfolioImageGallery items={brandSamples} closeLabel={p.categories.galleryClose} />
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-white">{p.categories.aiPhoto.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.categories.aiPhoto.description}
                  </p>
                  <PortfolioImageGallery items={aiPhotoSamples} closeLabel={p.categories.galleryClose} />
                </div>

                <div className="text-center">
                  <Link href="/graphic-design" className={LIVE_BTN}>
                    {p.categories.graphicCta}
                  </Link>
                </div>
              </div>
            </CategoryBlock>
          )}

          {showUx && (
            <CategoryBlock
              id="portfolio-ux"
              icon={Layers}
              title={p.categories.ux.title}
              intro={p.categories.ux.description}
            >
              <div className="flex flex-wrap gap-3">
                <Link href="/webdesign-seo" className={LIVE_BTN}>
                  {p.categories.ux.cta}
                </Link>
                <Link href="/kontakt" className={SECONDARY_BTN}>
                  {p.contactCta}
                </Link>
              </div>
            </CategoryBlock>
          )}
        </div>
      </div>
    </section>
  );
}

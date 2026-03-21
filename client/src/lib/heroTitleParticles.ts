/**
 * Hero H1 “fine dust from full viewport → text” (2D canvas, rAF).
 * Tweak HERO_TITLE_PARTICLE_CONFIG below.
 */
export const HERO_TITLE_PARTICLE_CONFIG = {
  /** Total length (ms) — 2.5–3s cinematic */
  durationMs: 2800,
  /** Desktop particle count (dense dust) */
  maxParticles: 1200,
  /** Narrow viewports (< mobileMaxWidth) */
  maxParticlesMobile: 520,
  mobileMaxWidth: 640,
  /** Mask sampling step (px); smaller = more text targets */
  sampleStepDesktop: 2,
  sampleStepMobile: 3,
  particleRgb: [
    [210, 200, 255],
    [180, 160, 255],
    [150, 170, 255],
    [200, 180, 255],
  ] as const,
  /** Timeline fraction (0–1) when real H1 fades in (~90% converged feel) */
  textRevealAt: 0.9,
  /** Stagger so dust doesn’t arrive in one wall */
  phaseSpread: 0.18,
  /** Dust radius in CSS px — fine powder, not chunky dots */
  radiusMin: 1,
  radiusMax: 3,
  /** Organic drift amplitude (px), fades as convergence wins */
  driftMax: 22,
  /** Secondary wobble frequency */
  wobbleFreq: 0.0028,
};

type RGB = readonly [number, number, number];

function easeOutQuint(t: number): number {
  return 1 - (1 - t) ** 5;
}

function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function pickColor(colors: readonly RGB[], i: number): RGB {
  return colors[i % colors.length];
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

export interface HeroParticleAnimationOptions {
  fullText: string;
  onReveal?: () => void;
  config?: Partial<typeof HERO_TITLE_PARTICLE_CONFIG>;
}

type Particle = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  phase: number;
  r: number;
  rgb: RGB;
  seed: number;
};

/**
 * Full-viewport fixed canvas: particles spawn anywhere on screen, converge to H1 glyph samples (viewport coords).
 */
export function runHeroTitleParticleAnimation(
  canvas: HTMLCanvasElement,
  h1: HTMLElement,
  opts: HeroParticleAnimationOptions,
): () => void {
  const cfg = { ...HERO_TITLE_PARTICLE_CONFIG, ...opts.config };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    opts.onReveal?.();
    return () => {};
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    opts.onReveal?.();
    return () => {};
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(vw * dpr);
  canvas.height = Math.floor(vh * dpr);
  canvas.style.width = `${vw}px`;
  canvas.style.height = `${vh}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const rect = h1.getBoundingClientRect();
  const mw = Math.max(1, Math.ceil(rect.width));
  const mh = Math.max(1, Math.ceil(rect.height));

  const cs = window.getComputedStyle(h1);
  const family = cs.fontFamily || "system-ui, sans-serif";
  let fontSize = parseFloat(cs.fontSize) || 32;
  const fontWeight = cs.fontWeight || "700";
  const text = opts.fullText.trim();

  const off = document.createElement("canvas");
  off.width = mw;
  off.height = mh;
  const octx = off.getContext("2d");
  if (!octx) {
    opts.onReveal?.();
    return () => {};
  }

  octx.fillStyle = "#ffffff";
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  let fitted = fontSize;
  for (let s = 0; s < 32; s++) {
    octx.font = `${fontWeight} ${fitted}px ${family}`;
    if (octx.measureText(text).width <= mw * 0.96 || fitted < 10) break;
    fitted *= 0.94;
  }
  octx.font = `${fontWeight} ${fitted}px ${family}`;
  octx.fillText(text, mw / 2, mh / 2);

  const step = vw < cfg.mobileMaxWidth ? cfg.sampleStepMobile : cfg.sampleStepDesktop;
  const img = octx.getImageData(0, 0, mw, mh);
  const data = img.data;
  const targets: { vx: number; vy: number }[] = [];
  for (let y = 0; y < mh; y += step) {
    for (let x = 0; x < mw; x += step) {
      if (data[(y * mw + x) * 4 + 3] > 36) {
        targets.push({
          vx: rect.left + x + (Math.random() - 0.5) * 0.8,
          vy: rect.top + y + (Math.random() - 0.5) * 0.8,
        });
      }
    }
  }

  if (targets.length === 0) {
    opts.onReveal?.();
    return () => {};
  }

  const n = vw < cfg.mobileMaxWidth ? cfg.maxParticlesMobile : cfg.maxParticles;

  // Shuffle targets for random letter assignment
  const shuffled = targets.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const particles: Particle[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const t = shuffled[i % shuffled.length];
    particles[i] = {
      sx: Math.random() * vw,
      sy: Math.random() * vh,
      tx: t.vx,
      ty: t.vy,
      phase: Math.random() * cfg.phaseSpread,
      r: cfg.radiusMin + Math.random() * (cfg.radiusMax - cfg.radiusMin),
      rgb: pickColor(cfg.particleRgb, i),
      seed: Math.random() * Math.PI * 2,
    };
  }

  const start = performance.now();
  let raf = 0;
  let cancelled = false;
  let didReveal = false;

  const tick = (now: number) => {
    if (cancelled) return;
    const elapsed = now - start;
    const u = clamp01(elapsed / cfg.durationMs);
    const convergeRaw = clamp01((u - 0.04) / 0.86);
    const converge = easeOutQuint(convergeRaw);

    if (!didReveal && u >= cfg.textRevealAt) {
      didReveal = true;
      opts.onReveal?.();
    }

    ctx.clearRect(0, 0, vw, vh);
    const postReveal = clamp01((u - cfg.textRevealAt) / (1 - cfg.textRevealAt));

    const tMs = elapsed;

    for (let i = 0; i < n; i++) {
      const p = particles[i];
      const localT = clamp01((converge - p.phase) / (1 - p.phase));
      const e = easeInOutSine(localT);

      const bx = p.sx + (p.tx - p.sx) * e;
      const by = p.sy + (p.ty - p.sy) * e;

      const dx = p.tx - p.sx;
      const dy = p.ty - p.sy;
      const len = Math.hypot(dx, dy) || 1;
      const px = -dy / len;
      const py = dx / len;

      const driftW = (1 - e) * cfg.driftMax;
      const w1 = Math.sin(tMs * cfg.wobbleFreq + p.seed) * driftW;
      const w2 = Math.sin(tMs * cfg.wobbleFreq * 1.7 + i * 0.13) * driftW * 0.45;
      const w3 = Math.cos(tMs * 0.0015 + p.seed * 3) * driftW * 0.35;

      let x = bx + px * (w1 * 0.35 + w3 * 0.2) + py * w2 * 0.15;
      let y = by + py * (w1 * 0.35 + w3 * 0.2) - px * w2 * 0.15;

      const pulse = Math.sin(localT * Math.PI) * 0.25 + 0.75;
      let alpha = 0.1 + pulse * 0.72;
      alpha *= 1 - postReveal * 1.2;
      if (alpha <= 0.018) continue;

      ctx.fillStyle = `rgba(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]},${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, p.r * (0.92 + 0.08 * pulse), 0, Math.PI * 2);
      ctx.fill();
    }

    if (u >= 1) {
      if (!didReveal) opts.onReveal?.();
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}

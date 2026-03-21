/**
 * Hero H1 "dust → text" particle effect (canvas, requestAnimationFrame).
 * Tweak these constants to adjust look / performance.
 */
export const HERO_TITLE_PARTICLE_CONFIG = {
  /** Total effect length (ms) — keep between ~1500–3000 for elegance */
  durationMs: 2400,
  /** Desktop cap; mobile uses ~floor(this * mobileRatio) */
  maxParticles: 720,
  mobileRatio: 0.55,
  /** Grid step when reading text mask from offscreen canvas (px); larger = fewer particles, faster */
  sampleStepDesktop: 3,
  sampleStepMobile: 4,
  /** Breakpoint (px) for mobile tuning */
  mobileMaxWidth: 640,
  /** RGB tuples — violet / indigo to match hero gradient */
  particleRgb: [
    [196, 181, 253],
    [167, 139, 250],
    [129, 140, 248],
    [192, 132, 252],
  ] as const,
  /** Max start radius as fraction of max(wrapper w,h) */
  dustSpread: 0.52,
  /** When convergence progress passes this, fade canvas and show solid H1 */
  textRevealAt: 0.88,
  /** Soft swirl strength (px) at start of motion; fades with progress */
  swirlMax: 14,
};

type RGB = readonly [number, number, number];

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function pickColor(colors: readonly RGB[], i: number): RGB {
  return colors[i % colors.length];
}

export interface HeroParticleAnimationOptions {
  /** Full headline string (must match visible H1) */
  fullText: string;
  /** Called when particles are done and H1 should read as solid text */
  onReveal?: () => void;
  /** Merge overrides */
  config?: Partial<typeof HERO_TITLE_PARTICLE_CONFIG>;
}

/**
 * Runs dust→text particle animation. Returns a cancel function.
 * SEO: real <h1> text stays in DOM; this only draws on canvas.
 */
export function runHeroTitleParticleAnimation(
  canvas: HTMLCanvasElement,
  h1: HTMLElement,
  wrapper: HTMLElement,
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

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const wCss = Math.max(1, Math.floor(wrapper.clientWidth));
  const hCss = Math.max(1, Math.floor(wrapper.clientHeight));

  canvas.width = Math.floor(wCss * dpr);
  canvas.height = Math.floor(hCss * dpr);
  canvas.style.width = `${wCss}px`;
  canvas.style.height = `${hCss}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cs = window.getComputedStyle(h1);
  const family = cs.fontFamily || "system-ui, sans-serif";
  let fontSize = parseFloat(cs.fontSize) || 32;
  const fontWeight = cs.fontWeight || "700";
  const text = opts.fullText.trim();

  const off = document.createElement("canvas");
  off.width = wCss;
  off.height = hCss;
  const octx = off.getContext("2d");
  if (!octx) {
    opts.onReveal?.();
    return () => {};
  }

  octx.fillStyle = "#ffffff";
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  let fitted = fontSize;
  for (let s = 0; s < 28; s++) {
    octx.font = `${fontWeight} ${fitted}px ${family}`;
    if (octx.measureText(text).width <= wCss * 0.96 || fitted < 12) break;
    fitted *= 0.94;
  }
  octx.font = `${fontWeight} ${fitted}px ${family}`;
  octx.fillText(text, wCss / 2, hCss / 2);

  const step =
    wCss <= cfg.mobileMaxWidth ? cfg.sampleStepMobile : cfg.sampleStepDesktop;
  const img = octx.getImageData(0, 0, wCss, hCss);
  const data = img.data;
  const targets: { x: number; y: number }[] = [];
  for (let y = 0; y < hCss; y += step) {
    for (let x = 0; x < wCss; x += step) {
      const i = (y * wCss + x) * 4 + 3;
      if (data[i] > 40) targets.push({ x, y });
    }
  }

  if (targets.length === 0) {
    opts.onReveal?.();
    return () => {};
  }

  const mobileCap = Math.floor(cfg.maxParticles * cfg.mobileRatio);
  const cap = wCss <= cfg.mobileMaxWidth ? mobileCap : cfg.maxParticles;

  // Subsample targets if too many
  let useTargets = targets;
  if (targets.length > cap) {
    const stepT = targets.length / cap;
    useTargets = [];
    for (let i = 0; i < cap; i++) useTargets.push(targets[Math.floor(i * stepT)]);
  }

  const n = useTargets.length;
  const cx = wCss / 2;
  const cy = hCss / 2;
  const spread = Math.max(wCss, hCss) * cfg.dustSpread;

  type P = {
    tx: number;
    ty: number;
    sx: number;
    sy: number;
    phase: number;
    rgb: RGB;
    size: number;
  };

  const particles: P[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const ang = Math.random() * Math.PI * 2;
    const r = spread * (0.35 + Math.random() * 0.65);
    const tx = useTargets[i].x;
    const ty = useTargets[i].y;
    particles[i] = {
      tx,
      ty,
      sx: cx + Math.cos(ang) * r + (Math.random() - 0.5) * spread * 0.15,
      sy: cy + Math.sin(ang) * r + (Math.random() - 0.5) * spread * 0.15,
      phase: (i / n) * 0.22 + Math.random() * 0.08,
      rgb: pickColor(cfg.particleRgb, i),
      size: 0.9 + Math.random() * 1.35,
    };
  }

  const start = performance.now();
  let raf = 0;
  let cancelled = false;
  let didReveal = false;

  const tick = (now: number) => {
    if (cancelled) return;
    const elapsed = now - start;
    const u = Math.min(1, elapsed / cfg.durationMs);
    const converge = easeOutCubic(Math.max(0, Math.min(1, (u - 0.08) / 0.82)));

    if (!didReveal && u >= cfg.textRevealAt) {
      didReveal = true;
      opts.onReveal?.();
    }

    ctx.clearRect(0, 0, wCss, hCss);

    const postReveal = Math.max(0, Math.min(1, (u - cfg.textRevealAt) / (1 - cfg.textRevealAt)));

    for (let i = 0; i < n; i++) {
      const p = particles[i];
      const local = Math.max(0, Math.min(1, (converge - p.phase) / (1 - p.phase)));
      const e = easeInOutSine(local);
      let x = p.sx + (p.tx - p.sx) * e;
      let y = p.sy + (p.ty - p.sy) * e;
      const swirl = cfg.swirlMax * (1 - e) * Math.sin(local * Math.PI * 3 + i * 0.15);
      x += Math.cos(i * 0.7 + u * 8) * swirl * 0.35;
      y += Math.sin(i * 0.5 + u * 7) * swirl * 0.35;

      const pulse = Math.sin(local * Math.PI) * 0.35 + 0.65;
      let alpha = 0.12 + pulse * 0.78;
      alpha *= 1 - postReveal * 1.15;
      if (alpha <= 0.02) continue;

      ctx.fillStyle = `rgba(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]},${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, p.size * (0.85 + 0.15 * pulse), 0, Math.PI * 2);
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

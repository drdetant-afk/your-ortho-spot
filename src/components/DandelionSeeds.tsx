import { useEffect, useRef } from "react";

type Seed = {
  x: number;
  y: number;
  z: number; // profondeur 0 (loin) → 1 (proche) : taille, vitesse et opacité
  vy: number;
  drift: number;
  swayAmp: number;
  swaySpeed: number;
  phase: number;
  angle: number;
  spin: number;
};

const GOLD = "#d3a55e";
const GOLD_SOFT = "#e8cf9e";

function makeSeed(w: number, h: number, fromTop: boolean): Seed {
  const z = 0.25 + Math.random() * 0.75;
  return {
    x: Math.random() * w,
    y: fromTop ? -30 : Math.random() * h,
    z,
    vy: (14 + Math.random() * 14) * (0.5 + z * 0.8),
    drift: (Math.random() - 0.5) * 12,
    swayAmp: 12 + Math.random() * 22,
    swaySpeed: 0.4 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.8,
  };
}

function drawSeed(ctx: CanvasRenderingContext2D, s: Seed, t: number) {
  const size = 5 + s.z * 9; // rayon de l'aigrette
  const alpha = 0.2 + s.z * 0.5;
  const sway = Math.sin(t * s.swaySpeed + s.phase);

  ctx.save();
  ctx.translate(s.x + sway * s.swayAmp, s.y);
  ctx.rotate(s.angle + sway * 0.35);
  ctx.globalAlpha = alpha;
  ctx.lineCap = "round";

  // graine
  ctx.fillStyle = GOLD;
  ctx.beginPath();
  ctx.ellipse(0, size * 0.85, size * 0.14, size * 0.32, 0, 0, Math.PI * 2);
  ctx.fill();

  // tige
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = Math.max(0.6, size * 0.07);
  ctx.beginPath();
  ctx.moveTo(0, size * 0.7);
  ctx.lineTo(0, -size * 0.1);
  ctx.stroke();

  // ombelle de filaments
  ctx.strokeStyle = GOLD_SOFT;
  ctx.lineWidth = Math.max(0.5, size * 0.05);
  const filaments = 9;
  for (let i = 0; i < filaments; i++) {
    const a = -Math.PI / 2 + ((i / (filaments - 1)) - 0.5) * (Math.PI * 1.15);
    const fx = Math.cos(a) * size;
    const fy = Math.sin(a) * size - size * 0.1;
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.1);
    ctx.lineTo(fx, fy);
    ctx.stroke();
    ctx.fillStyle = GOLD_SOFT;
    ctx.beginPath();
    ctx.arc(fx, fy, Math.max(0.6, size * 0.06), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

/**
 * Aigrettes de pissenlit dorées qui tombent en virevoltant.
 * Animation canvas légère (pas de librairie 3D), profondeur simulée,
 * désactivée si l'utilisateur préfère réduire les animations.
 */
export function DandelionSeeds({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    let seeds: Seed[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(22, Math.max(8, Math.round(w / 70)));
      seeds = Array.from({ length: count }, () => makeSeed(w, h, false));
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;
      ctx.clearRect(0, 0, w, h);
      for (const s of seeds) {
        s.y += s.vy * dt;
        s.x += s.drift * dt;
        s.angle += s.spin * dt;
        if (s.y > h + 30 || s.x < -40 || s.x > w + 40) {
          Object.assign(s, makeSeed(w, h, true));
        }
        drawSeed(ctx, s, t);
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}

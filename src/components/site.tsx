import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { Phone } from "lucide-react";
import logoUrl from "@/assets/logo-gold.png";

export const SITE_URL = "https://www.dentairebussacforet.fr";
export const PHONE_DISPLAY = "05 46 70 72 87";
export const PHONE_TEL = "tel:+33546707287";
export const MAIL = "secretariat@dentairebussacforet.fr";
export const DOCTOLIB_ORTHO_URL =
  "https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret";
/** Horaires d'ouverture du cabinet, source unique pour l'affichage et les données structurées. */
export const HORAIRES = [
  { jours: "Lundi, mardi, mercredi", heures: "9h — 13h et 14h — 18h" },
  { jours: "Jeudi", heures: "9h — 13h" },
  { jours: "Vendredi, samedi, dimanche", heures: "Fermé" },
];

export const HORAIRES_JSONLD = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    opens: "09:00",
    closes: "13:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    opens: "14:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Thursday"],
    opens: "09:00",
    closes: "13:00",
  },
];

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=26+Place+du+Champ+de+Foire%2C+17210+Bussac-For%C3%AAt";

/* ───────────── Boutons ───────────── */

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition";

export const btn = {
  gold: `${pill} bg-gold text-forest hover:bg-gold-soft`,
  forest: `${pill} bg-forest text-ivory hover:bg-forest-deep`,
  ghostOnForest: `${pill} border border-gold/50 text-ivory hover:bg-gold/10`,
  ghostOnSand: `${pill} border border-forest/40 text-forest hover:bg-forest/5`,
};

/* ───────────── Typographie ───────────── */

/** Libellé de planche, façon atlas d'anatomie : « Planche II — Le cabinet ». */
export function Planche({
  numero,
  children,
  tone = "forest",
  className = "",
}: {
  numero: string;
  children?: ReactNode;
  tone?: "forest" | "light";
  className?: string;
}) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.24em] ${
        tone === "forest" ? "text-gold" : "text-[#8a6b2c]"
      } ${className}`}
    >
      Planche {numero}
      {children && <> — {children}</>}
    </p>
  );
}

/** Numéro de planche en filigrane, posé en fond de section comme sur une gravure. */
export function Filigrane({
  numero,
  tone = "forest",
  className = "",
}: {
  numero: string;
  tone?: "forest" | "light";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-serif leading-none ${
        tone === "forest" ? "text-gold/[0.055]" : "text-[#8a6b2c]/[0.07]"
      } ${className}`}
      style={{ fontSize: "clamp(14rem, 26vw, 26rem)" }}
    >
      {numero}
    </span>
  );
}

/* ───────────── Illustrations anatomiques au trait ───────────── */

const TOOTH_PATHS = {
  molaire: {
    viewBox: "0 0 106 116",
    d: "M20 30 C20 10 35 6 42 14 C48 8 58 8 64 14 C71 6 86 10 86 30 C86 52 80 64 76 92 C74 104 66 104 64 92 L58 64 C56 58 50 58 48 64 L42 92 C40 104 32 104 30 92 C26 64 20 52 20 30 Z",
  },
  canine: {
    viewBox: "0 0 84 136",
    d: "M42 4 C52 12 62 22 62 38 C62 52 56 60 54 76 C52 104 48 132 42 134 C36 132 32 104 30 76 C28 60 22 52 22 38 C22 22 32 12 42 4Z",
  },
  incisive: {
    viewBox: "0 0 84 130",
    d: "M40 10 C54 8 62 14 62 30 C62 46 56 54 54 70 C52 96 48 118 42 120 C36 118 32 96 30 70 C28 54 22 46 22 30 C22 14 30 10 40 10Z",
  },
} as const;

export type ToothKind = keyof typeof TOOTH_PATHS | "gencive";

/** Petite dent dessinée au trait (molaire, canine, incisive, ou incisive avec ligne de gencive). */
export function Tooth({ kind, className = "" }: { kind: ToothKind; className?: string }) {
  const t = TOOTH_PATHS[kind === "gencive" ? "incisive" : kind];
  return (
    <svg viewBox={t.viewBox} aria-hidden="true" fill="none" className={`trace ${className}`}>
      <path
        d={t.d}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        data-trace
      />
      {kind === "gencive" && (
        <path
          d="M14 58 C32 70 52 70 70 58"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 5"
          vectorEffect="non-scaling-stroke"
          data-trace-fade
        />
      )}
    </svg>
  );
}

/** Bord déchiré : lisière de papier entre deux fonds, tracée en SVG. */
export function BordDeckle({
  couleur = "var(--sand)",
  position = "haut",
  className = "",
}: {
  couleur?: string;
  position?: "haut" | "bas";
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 18"
      preserveAspectRatio="none"
      className={`block h-[14px] w-full ${position === "bas" ? "rotate-180" : ""} ${className}`}
    >
      <path
        fill={couleur}
        d="M0 18V9.2c36-2.1 72 1.4 108 2.2s72-1.9 108-3.4 72-2.2 108-.7 72 4.6 108 4.8 72-2.5 108-4.1 72-2.3 108-.9 72 4.2 108 4.5 72-2.1 108-3.8 72-2.4 108-1.2 72 4 108 4.4 72-2 108-3.6 72-2.5 108-1.6c36 .9 72 3.4 108 4.3s72 .3 108-.6V18Z"
      />
    </svg>
  );
}

/** Cul-de-lampe : fleuron de fin de chapitre, une dent au trait entre deux filets. */
export function CulDeLampe({
  tone = "forest",
  className = "",
}: {
  tone?: "forest" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-5 ${
        tone === "forest" ? "text-gold/60" : "text-[#8a6b2c]/60"
      } ${className}`}
    >
      <span className="h-px w-16 bg-current sm:w-24" />
      <svg viewBox="0 0 84 136" fill="none" className="h-9 w-6">
        <path
          d="M40 10 C54 8 62 14 62 30 C62 46 56 54 54 70 C52 96 48 118 42 120 C36 118 32 96 30 70 C28 54 22 46 22 30 C22 14 30 10 40 10Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="h-px w-16 bg-current sm:w-24" />
    </div>
  );
}

/** Molaire annotée comme dans un atlas : A. couronne, B. racines. */
export function MolaireAnnotee({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <svg
        viewBox="0 0 150 170"
        width="150"
        height="170"
        fill="none"
        aria-hidden="true"
        className="trace shrink-0 text-gold"
      >
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path
            pathLength={1}
            data-trace
            d="M42 40 C42 16 60 10 70 20 C76 12 90 12 96 20 C106 10 124 16 124 40 C124 64 117 78 112 110 C109 128 99 128 97 110 L90 76 C88 68 78 68 76 76 L69 110 C67 128 57 128 54 110 C49 78 42 64 42 40 Z"
          />
          <path
            d="M60 44 C64 34 74 34 78 42 M88 42 C92 34 102 34 106 44"
            strokeWidth="0.8"
            opacity="0.7"
            pathLength={1}
            data-trace
            style={{ "--i": 2 } as CSSProperties}
          />
          <path
            d="M44 58 C70 64 96 64 122 58"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            opacity="0.8"
            data-trace-fade
          />
          <line
            x1="124"
            y1="34"
            x2="148"
            y2="22"
            strokeWidth="0.8"
            pathLength={1}
            data-trace
            style={{ "--i": 4 } as CSSProperties}
          />
          <line
            x1="100"
            y1="118"
            x2="148"
            y2="146"
            strokeWidth="0.8"
            pathLength={1}
            data-trace
            style={{ "--i": 5 } as CSSProperties}
          />
        </g>
        <circle cx="148" cy="22" r="2" fill="currentColor" data-trace-fade />
        <circle cx="148" cy="146" r="2" fill="currentColor" data-trace-fade />
      </svg>
      <div className="flex h-[150px] flex-col justify-between font-serif text-lg italic text-parchment">
        <span>
          <span className="font-sans text-xs not-italic tracking-[0.18em] text-gold">A.</span>{" "}
          Couronne — émail et dentine
        </span>
        <span>
          <span className="font-sans text-xs not-italic tracking-[0.18em] text-gold">B.</span>{" "}
          Racines — ancrage dans l'os
        </span>
      </div>
    </div>
  );
}

/** Arcade dentaire supérieure au trait, vue occlusale. */
export function ArcadeDentaire({
  fig = "6",
  className = "",
}: {
  fig?: string;
  className?: string;
}) {
  const count = 14;
  const cx = 230;
  const rx = 190;
  const top = 40;
  const ry = 250;
  const teeth = Array.from({ length: count }, (_, i) => {
    const t = -Math.PI * 0.46 + (i / (count - 1)) * Math.PI * 0.92;
    const side = Math.abs(i - (count - 1) / 2);
    const w = side < 1.5 ? 26 : side < 2.5 ? 22 : side < 3.5 ? 24 : side < 5.5 ? 28 : 34;
    const h = side < 1.5 ? 16 : side < 2.5 ? 18 : side < 3.5 ? 22 : side < 5.5 ? 26 : 32;
    return {
      x: cx + Math.sin(t) * rx,
      y: top + (1 - Math.cos(t)) * ry,
      w,
      h,
      rot: (t * 180) / Math.PI,
    };
  });
  const labels = [
    { n: "11", x: 214, y: 20 },
    { n: "21", x: 250, y: 20 },
    { n: "16", x: 24, y: 164 },
    { n: "26", x: 436, y: 164 },
  ];
  return (
    <figure className={`m-0 flex flex-col items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 460 330"
        className="trace w-full max-w-[460px] text-gold"
        fill="none"
        aria-hidden="true"
      >
        {teeth.map((t, i) => (
          <rect
            key={i}
            x={t.x - t.w / 2}
            y={t.y - t.h / 2}
            width={t.w}
            height={t.h}
            rx={t.w * 0.45}
            stroke="currentColor"
            strokeWidth="1.4"
            transform={`rotate(${t.rot.toFixed(1)} ${t.x.toFixed(1)} ${t.y.toFixed(1)})`}
            pathLength={1}
            data-trace
            style={{ "--i": Math.abs(i - (count - 1) / 2) } as CSSProperties}
          />
        ))}
        {labels.map((l) => (
          <text
            key={l.n}
            x={l.x}
            y={l.y}
            fill="currentColor"
            fontFamily="Newsreader, Georgia, serif"
            fontSize="15"
            data-trace-fade
          >
            {l.n}
          </text>
        ))}
      </svg>
      <figcaption className="font-serif text-lg italic text-lichen">
        Fig. {fig} — Arcade supérieure, vue occlusale
      </figcaption>
    </figure>
  );
}

/* ───────────── Tirage photo ───────────── */

type TirageProps = {
  src: string;
  alt: string;
  legende: string;
  numero?: string;
  tilt?: number;
  ratio?: string;
  tape?: boolean;
  loading?: "lazy" | "eager";
  imgClassName?: string;
  className?: string;
};

/** Photo présentée comme un tirage posé sur une planche d'atlas : papier ivoire, scotch, légende « Fig. n ». */
export function Tirage({
  src,
  alt,
  legende,
  numero,
  tilt = 0,
  ratio = "4 / 3",
  tape = true,
  loading = "lazy",
  imgClassName = "",
  className = "",
}: TirageProps) {
  return (
    <figure
      className={`tirage relative m-0 bg-ivory p-3 pb-4 sm:p-4 sm:pb-5 ${className}`}
      style={{ ["--tilt" as string]: `${tilt}deg` }}
    >
      {tape && (
        <span
          aria-hidden="true"
          className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-gold/35 backdrop-blur-[1px]"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`block w-full object-cover ${imgClassName}`}
        style={{ aspectRatio: ratio }}
      />
      <figcaption className="mt-3 font-serif text-lg text-ink">
        {numero && (
          <span className="font-sans text-xs font-semibold tracking-[0.16em] text-[#8a6b2c]">
            FIG. {numero} —{" "}
          </span>
        )}
        <em>{legende}</em>
      </figcaption>
    </figure>
  );
}

/* ───────────── Fiche (tableau d'étiquette) ───────────── */

export function Fiche({
  rows,
  tone = "forest",
  compact = false,
}: {
  rows: { label: string; value: ReactNode }[];
  tone?: "forest" | "light";
  compact?: boolean;
}) {
  const labelCls = tone === "forest" ? "text-lichen" : "text-[#6b5a35]";
  const valueCls = tone === "forest" ? "text-ivory" : "text-ink";
  const lineCls = tone === "forest" ? "border-line" : "border-forest/20";
  return (
    <dl className={`border-t ${lineCls}`}>
      {rows.map(({ label, value }) => (
        <div
          key={label}
          className={`grid grid-cols-1 gap-1 border-b ${lineCls} py-3.5 ${compact ? "sm:grid-cols-[5.5rem_1fr]" : "sm:grid-cols-[9.5rem_1fr]"} sm:gap-5`}
        >
          <dt className={`text-sm ${labelCls}`}>{label}</dt>
          <dd className={`m-0 text-[16px] ${valueCls}`}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ───────────── Fiche clinique (carte praticien) ───────────── */

export function FicheClinique({
  numero,
  discipline,
  photo,
  nom,
  rows,
  children,
}: {
  numero: string;
  discipline: string;
  photo: string;
  nom: string;
  rows: { label: string; value: ReactNode }[];
  children?: ReactNode;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-ivory text-ink">
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-forest/15 px-7 py-3.5 text-[11px] uppercase tracking-[0.14em] text-[#6b5a35] sm:text-xs sm:tracking-[0.2em]">
        <span className="font-semibold">Fiche clinique</span>
        <span>
          N° {numero} · {discipline}
        </span>
      </div>
      <div className="flex flex-col gap-7 p-7 sm:flex-row">
        <img
          src={photo}
          alt={nom}
          loading="lazy"
          className="aspect-[3/4] w-40 shrink-0 self-start rounded-xl object-cover object-top sm:w-44"
        />
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="font-serif text-4xl font-normal leading-none">{nom}</h3>
          <Fiche tone="light" compact rows={rows} />
          {children}
        </div>
      </div>
    </article>
  );
}

/* ───────────── En-tête ───────────── */

const NAV = [
  { href: "/#cabinet", label: "Le cabinet" },
  { href: "/#equipe", label: "L'équipe" },
  { href: "/orthodontie", label: "Orthodontie" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader({
  subtitle = "Chirurgiens-dentistes · Bussac-Forêt",
}: {
  subtitle?: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-forest-deep/95 text-ivory backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:gap-6 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Cabinet dentaire Dandelion — accueil"
        >
          <img src={logoUrl} alt="" className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12" />
          <span className="min-w-0 leading-tight">
            <span className="block font-serif text-lg leading-[1.1] text-ivory sm:whitespace-nowrap sm:text-xl">
              Cabinet dentaire Dandelion
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-lichen sm:block">
              {subtitle}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-[15px] md:flex"
          aria-label="Navigation principale"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link text-parchment transition hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <a href={PHONE_TEL} className={`${btn.gold} !px-5 !py-2.5`}>
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <details className="relative md:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-gold/50 px-4 text-sm text-ivory [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-14 w-56 rounded-2xl border border-line bg-forest-deep p-3 shadow-2xl">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="block rounded-xl px-4 py-3 text-parchment hover:bg-gold/10 hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={PHONE_TEL}
                className="mt-2 block rounded-xl bg-gold px-4 py-3 text-center font-semibold text-forest"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ───────────── Pied de page ───────────── */

export function SiteFooter({
  signature = "Cabinet dentaire Dandelion — Bussac-Forêt",
}: {
  signature?: string;
}) {
  return (
    <footer className="border-t border-line bg-forest-deep px-6 py-12 text-lichen">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="" className="h-9 w-9 object-contain" />
          <span className="font-serif text-lg text-ivory">Cabinet dentaire Dandelion</span>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Liens de pied de page"
        >
          <Link to="/orthodontie" className="transition hover:text-gold">
            Orthodontie
          </Link>
          <a href="/#contact" className="transition hover:text-gold">
            Contact
          </a>
          <Link to="/mentions-legales" className="transition hover:text-gold">
            Mentions légales
          </Link>
        </nav>
        <p>
          © {new Date().getFullYear()} {signature}
        </p>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-line pt-6 text-center text-[11px] uppercase tracking-[0.2em] text-lichen/80">
        Composé en Newsreader &amp; Source Sans 3 · Planches dessinées au trait · Bussac-Forêt,
        MMXXVI
      </p>
    </footer>
  );
}

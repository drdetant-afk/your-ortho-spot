import type { ReactNode } from "react";

/**
 * Bloc d'accroche pleine largeur : une phrase courte en très grande
 * typographie sérif, un mot accentué en italique doré (<em>).
 * Chaque ligne monte à son tour à l'entrée dans l'écran.
 */
export function Statement({
  lines,
  eyebrow,
  footer,
  tone = "dark",
}: {
  lines: ReactNode[];
  eyebrow?: string;
  footer?: ReactNode;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={`grain py-28 md:py-40 px-6 ${
        isDark
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/40 text-primary border-y border-border"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow && (
          <p className="statement-line text-gold tracking-[0.25em] uppercase text-xs mb-10">
            {eyebrow}
          </p>
        )}
        <p className="statement">
          {lines.map((line, i) => (
            <span key={i} className="statement-line block">
              {line}
            </span>
          ))}
        </p>
        {footer && (
          <div className="statement-line mt-12 flex flex-wrap justify-center gap-4">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Bandeau de chiffres-clés, sobre : un nombre en grand sérif doré,
 * une légende courte en dessous.
 */
export function KeyFigures({
  figures,
}: {
  figures: { value: string; label: string }[];
}) {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground border-y border-gold/20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {figures.map(({ value, label }) => (
          <div key={label} className="statement-line">
            <p className="font-serif text-5xl md:text-6xl text-gold leading-none">
              {value}
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-snug">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

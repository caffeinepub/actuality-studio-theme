import { useTheme } from "../context/ThemeContext";

export function ThemedHero() {
  const { theme } = useTheme();

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20"
      style={{ background: theme.heroGradient }}
      data-ocid="hero.section"
    >
      {/* Breathing blobs */}
      {theme.blobs.map((blob, i) => (
        <div
          key={blob.gradient.slice(0, 40)}
          className="absolute pointer-events-none"
          style={{
            ...blob.style,
            background: blob.gradient,
            animation: `${
              i % 3 === 0
                ? "breathe"
                : i % 3 === 1
                  ? "breathe-slow"
                  : "breathe-drift"
            } ${blob.style.animationDuration as string} ease-in-out infinite`,
            animationDelay: blob.style.animationDelay as string,
            position: "absolute",
            filter: "blur(40px)",
            mixBlendMode: theme.id === "twilight" ? "screen" : "multiply",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-label */}
        <div
          className="inline-block px-5 py-1.5 rounded-full text-xs tracking-widest uppercase mb-8 animate-fade-up"
          style={{
            background: theme.cardTint,
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: theme.textMuted,
            boxShadow: `0 0 16px 2px ${theme.glow}`,
          }}
        >
          Living Design System · Steiner Veil Painting
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] mb-4"
          style={{
            color: theme.textPrimary,
            textShadow: `0 2px 40px ${theme.glow}`,
          }}
        >
          Actuality
          <br />
          <span
            className="italic"
            style={{
              color:
                theme.id === "twilight"
                  ? "#e8b898"
                  : theme.id === "forest"
                    ? "#78a890"
                    : "#d4956a",
            }}
          >
            Studio
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display italic text-xl sm:text-2xl mb-6 opacity-80"
          style={{ color: theme.textSecondary }}
        >
          {theme.tagline}
        </p>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12 opacity-75"
          style={{ color: theme.textSecondary }}
        >
          {theme.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            className="btn-glow px-8 py-3.5 rounded-2xl font-semibold text-base transition-all"
            style={{
              background: theme.btnPrimary,
              color: theme.btnPrimaryText,
              boxShadow: `0 4px 24px ${theme.glow}`,
              border: "none",
            }}
            data-ocid="hero.primary_button"
          >
            Explore the Palette
          </button>
          <button
            type="button"
            className="btn-glow px-8 py-3.5 rounded-2xl font-semibold text-base"
            style={{
              background: theme.btnSecondary,
              color: theme.btnSecondaryText,
              border: `1.5px solid ${theme.btnSecondaryBorder}`,
              backdropFilter: "blur(12px)",
            }}
            data-ocid="hero.secondary_button"
          >
            View Components
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-16 rounded-full"
            style={{
              background: `linear-gradient(to bottom, transparent, ${theme.textMuted})`,
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: theme.textMuted }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

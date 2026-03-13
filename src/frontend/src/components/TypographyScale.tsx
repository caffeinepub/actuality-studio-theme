import { useTheme } from "../context/ThemeContext";

export function TypographyScale() {
  const { theme } = useTheme();

  const typeRows = [
    {
      label: "Display",
      font: "Playfair Display",
      weight: "800",
      size: "text-6xl",
      className: "font-display",
      sample: "Veil of Light",
    },
    {
      label: "H1",
      font: "Playfair Display",
      weight: "700",
      size: "text-5xl",
      className: "font-display",
      sample: "Sacred Colour",
    },
    {
      label: "H2",
      font: "Playfair Display",
      weight: "600",
      size: "text-4xl",
      className: "font-display",
      sample: "Soul Palette",
    },
    {
      label: "H3",
      font: "Playfair Display",
      weight: "500",
      size: "text-2xl",
      className: "font-display",
      sample: "Lasur Technique",
    },
    {
      label: "Body Large",
      font: "DM Sans",
      weight: "400",
      size: "text-lg",
      className: "",
      sample:
        "Steiner teaches that warm colours radiate outward — they carry the quality of soul-warmth and earthly embodiment.",
    },
    {
      label: "Body",
      font: "DM Sans",
      weight: "400",
      size: "text-base",
      className: "",
      sample:
        "The cool colours, blue and violet, draw the eye and soul inward toward spiritual depth and contemplation.",
    },
    {
      label: "Caption",
      font: "DM Sans",
      weight: "300",
      size: "text-sm",
      className: "",
      sample:
        "Green mediates between warmth and coolness, between soul and spirit, between earth and heaven.",
    },
    {
      label: "Label",
      font: "DM Sans",
      weight: "600",
      size: "text-xs",
      className: "uppercase tracking-widest",
      sample: "Steiner Veil Painting · Lasur · Living Colour",
    },
    {
      label: "Mono",
      font: "JetBrains Mono",
      weight: "400",
      size: "text-sm",
      className: "font-mono",
      sample: "#e8c86e  #8aaccf  #9ab89a  rgba(253,248,240,0.72)",
    },
  ];

  return (
    <section className="py-16 px-6" data-ocid="typography.section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-3 opacity-60"
            style={{ color: theme.textMuted }}
          >
            Type System
          </p>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: theme.textPrimary }}
          >
            Typography
          </h2>
        </div>

        <div
          className="glass-card overflow-hidden"
          style={{
            background: theme.cardTint,
            boxShadow: `0 8px 32px ${theme.glow}`,
          }}
        >
          {typeRows.map((row, i) => (
            <div
              key={row.label}
              className={`px-8 py-6 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 ${
                i < typeRows.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: `${theme.textMuted}22` }}
            >
              {/* Meta */}
              <div className="flex-none w-32 flex flex-col gap-0.5">
                <span
                  className="font-mono text-xs font-medium opacity-70"
                  style={{ color: theme.textMuted }}
                >
                  {row.label}
                </span>
                <span
                  className="font-mono text-xs opacity-45"
                  style={{ color: theme.textMuted }}
                >
                  {row.font} / {row.weight}
                </span>
              </div>

              {/* Sample */}
              <div
                className={`flex-1 ${row.size} ${row.className} leading-snug`}
                style={{ color: theme.textPrimary }}
              >
                {row.sample}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

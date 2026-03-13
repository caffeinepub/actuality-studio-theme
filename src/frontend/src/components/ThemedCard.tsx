import { useTheme } from "../context/ThemeContext";

interface CardProps {
  index: number;
  icon: string;
  iconGradient: string;
  title: string;
  body: string;
  accentColor: string;
}

function Card({
  index,
  icon,
  iconGradient,
  title,
  body,
  accentColor,
}: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      className="glass-card p-7 flex flex-col gap-5 h-full"
      data-ocid={`card.item.${index}` as `card.item.${1 | 2 | 3}`}
    >
      {/* Icon area */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{
          background: iconGradient,
          boxShadow: `0 0 20px 4px ${accentColor}55`,
        }}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3
          className="font-display font-semibold text-xl mb-2"
          style={{ color: theme.textPrimary }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed opacity-75"
          style={{ color: theme.textSecondary }}
        >
          {body}
        </p>
      </div>

      <button
        type="button"
        className="btn-glow self-start px-5 py-2 rounded-xl text-sm font-medium"
        style={{
          background: theme.btnSecondary,
          color: theme.btnSecondaryText,
          border: `1.5px solid ${theme.btnSecondaryBorder}`,
          backdropFilter: "blur(8px)",
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export function ComponentShowcase() {
  const { theme } = useTheme();
  const isDark = theme.id === "twilight";

  const cards: Omit<CardProps, "index">[] = [
    {
      icon: "✦",
      iconGradient: isDark
        ? "linear-gradient(135deg, #d4a06a, #e8b898)"
        : theme.id === "forest"
          ? "linear-gradient(135deg, #78a890, #d4e8cc)"
          : "linear-gradient(135deg, #e8c86e, #f2d4c2)",
      title: "Veil Colour Fields",
      body: "Like Steiner's Lasur technique, each colour is applied as a luminous, translucent layer — never opaque, always allowing the ground to breathe through.",
      accentColor: isDark
        ? "#d4a06a"
        : theme.id === "forest"
          ? "#78a890"
          : "#e8c86e",
    },
    {
      icon: "◎",
      iconGradient: isDark
        ? "linear-gradient(135deg, #9890c8, #7090b8)"
        : theme.id === "forest"
          ? "linear-gradient(135deg, #d89880, #c89060)"
          : "linear-gradient(135deg, #8aaccf, #b0a0c8)",
      title: "Soul & Spirit Polarity",
      body: "Warm colours radiate outward with soul-warmth; cool colours draw inward with spiritual depth. Together they create the living tension of consciousness.",
      accentColor: isDark
        ? "#9890c8"
        : theme.id === "forest"
          ? "#d89880"
          : "#8aaccf",
    },
    {
      icon: "❋",
      iconGradient: isDark
        ? "linear-gradient(135deg, #7a9878, #5a8868)"
        : theme.id === "forest"
          ? "linear-gradient(135deg, #5a8868, #78a890)"
          : "linear-gradient(135deg, #9ab89a, #c8d8c8)",
      title: "Living Green Mediation",
      body: "Green stands at the meeting point of warmth and coolness — the life-force that mediates between the spiritual blue and the soul-warm red. It breathes.",
      accentColor:
        theme.id === "forest" ? "#5a8868" : isDark ? "#7a9878" : "#9ab89a",
    },
  ];

  return (
    <section className="py-16 px-6" data-ocid="components.section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-3 opacity-60"
            style={{ color: theme.textMuted }}
          >
            Component Library
          </p>
          <h2
            className="font-display text-4xl font-bold mb-4"
            style={{ color: theme.textPrimary }}
          >
            UI Components
          </h2>
          <p
            className="text-base max-w-xl mx-auto opacity-70"
            style={{ color: theme.textSecondary }}
          >
            Glassmorphism cards, softly glowing inputs, and atmospheric buttons
            — all expressing the Steiner colour philosophy.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <Card key={card.title} index={i + 1} {...card} />
          ))}
        </div>

        {/* Form inputs */}
        <div
          className="glass-card p-8 max-w-2xl mx-auto"
          style={{
            background: theme.cardTint,
            boxShadow: `0 8px 32px ${theme.glow}`,
          }}
        >
          <h3
            className="font-display text-xl font-semibold mb-6"
            style={{ color: theme.textPrimary }}
          >
            Form Inputs
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="form-name"
                className="block text-sm font-medium mb-1.5"
                style={{ color: theme.textSecondary }}
              >
                Name
              </label>
              <input
                id="form-name"
                type="text"
                placeholder="Enter your name…"
                className="theme-input"
                data-ocid="form.input"
                style={{ color: theme.textPrimary } as React.CSSProperties}
              />
            </div>

            <div>
              <label
                htmlFor="form-theme"
                className="block text-sm font-medium mb-1.5"
                style={{ color: theme.textSecondary }}
              >
                Theme Variant
              </label>
              <select
                id="form-theme"
                className="theme-input"
                data-ocid="form.select"
                style={{ color: theme.textPrimary } as React.CSSProperties}
              >
                <option>Dawn · Main Site</option>
                <option>Twilight · App Interface</option>
                <option>Forest-Soul · Affiliate</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="form-message"
                className="block text-sm font-medium mb-1.5"
                style={{ color: theme.textSecondary }}
              >
                Message
              </label>
              <textarea
                id="form-message"
                rows={3}
                placeholder="Share your thoughts on the veil colour system…"
                className="theme-input resize-none"
                data-ocid="form.textarea"
                style={{ color: theme.textPrimary } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              className="btn-glow w-full py-3 rounded-2xl font-semibold text-sm"
              style={{
                background: theme.btnPrimary,
                color: theme.btnPrimaryText,
                border: "none",
                boxShadow: `0 4px 20px ${theme.glow}`,
              }}
              data-ocid="form.submit_button"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

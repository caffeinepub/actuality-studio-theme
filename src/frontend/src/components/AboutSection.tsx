import { useTheme } from "../context/ThemeContext";

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme.id === "twilight";

  return (
    <section className="py-24 px-6" data-ocid="about.section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-widest uppercase mb-3 opacity-60"
            style={{ color: theme.textMuted }}
          >
            The Philosophy
          </p>
          <h2
            className="font-display text-5xl font-bold leading-tight"
            style={{ color: theme.textPrimary }}
          >
            The Art of
            <br />
            <span
              className="italic"
              style={{
                color: isDark
                  ? "#e8b898"
                  : theme.id === "forest"
                    ? "#78a890"
                    : "#d4956a",
              }}
            >
              Veiling Light
            </span>
          </h2>
        </div>

        <div
          className="glass-card p-10 sm:p-14 space-y-7"
          style={{
            background: theme.cardTint,
            boxShadow: `0 8px 40px ${theme.glow}`,
          }}
        >
          <p
            className="text-base leading-8 opacity-85"
            style={{ color: theme.textSecondary }}
          >
            Rudolf Steiner's approach to painting, known as{" "}
            <em className="font-display italic">Lasur</em> — the German word for
            glaze — is founded on a single luminous principle: colour must never
            be applied as flat, opaque matter. Instead, thin translucent veils
            of pigment are layered over a brilliant white ground, each layer
            modifying the layers beneath, creating depth through transparency
            rather than density. The white always shines through.
          </p>

          <p
            className="text-base leading-8 opacity-85"
            style={{ color: theme.textSecondary }}
          >
            Steiner taught that colours are not merely physical phenomena but
            carriers of soul and spiritual qualities. He distinguished between{" "}
            <em className="font-display italic">lustre colours</em> — the warm
            family of yellow, orange, red, and peach — which radiate outward
            from within, expressing earthly warmth and embodied soul-life; and{" "}
            <em className="font-display italic">image colours</em> — the cool
            family of blue, violet, and green — which draw consciousness inward
            toward spiritual depth and contemplation.
          </p>

          {/* Pull quote */}
          <blockquote
            className="my-10 px-8 py-7 rounded-2xl relative"
            style={{
              background: isDark
                ? "rgba(152,144,200,0.15)"
                : theme.id === "forest"
                  ? "rgba(120,168,144,0.12)"
                  : "rgba(232,200,110,0.12)",
              borderLeft: `4px solid ${isDark ? "#9890c8" : theme.id === "forest" ? "#78a890" : "#e8c86e"}`,
              boxShadow: `0 0 24px 4px ${theme.glow}`,
            }}
          >
            <p
              className="font-display italic text-xl leading-relaxed"
              style={{ color: theme.textPrimary }}
            >
              "Colour is not a property of things, nor a sensation in the eye —
              it is a living being dwelling between light and darkness, between
              waking and sleeping, between the earthly and the divine."
            </p>
            <footer className="mt-4">
              <cite
                className="text-sm not-italic tracking-wide opacity-60"
                style={{ color: theme.textMuted }}
              >
                — Rudolf Steiner, after Goethe's Theory of Colour
              </cite>
            </footer>
          </blockquote>

          <p
            className="text-base leading-8 opacity-85"
            style={{ color: theme.textSecondary }}
          >
            In the Steiner veil-painting tradition, green occupies a singular
            position: it is the mediating colour, standing between the warmth of
            red and the coolness of blue, between earth and heaven, between soul
            and spirit. It is the colour of life itself — active, breathing,
            balancing. This is why the Forest-Soul theme places green at its
            centre, neither warm nor cool, but ceaselessly alive.
          </p>

          <p
            className="text-base leading-8 opacity-85"
            style={{ color: theme.textSecondary }}
          >
            The Actuality Studio design system applies these principles as
            living form: backgrounds are translucent gradient fields — never
            flat, always multi-layered, always allowing the luminous ground to
            breathe through. Cards are frosted glass rather than solid panels.
            Animations breathe rather than snap. Colours glow with inner
            radiance rather than asserting themselves opaquely. The interface
            does not shout; it{" "}
            <em className="font-display italic">illuminates</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

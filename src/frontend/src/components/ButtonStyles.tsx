import { useTheme } from "../context/ThemeContext";

export function ButtonStyles() {
  const { theme } = useTheme();

  const buttons = [
    {
      label: "Primary Warm",
      desc: "Soul lustre",
      style: {
        background: theme.btnPrimary,
        color: theme.btnPrimaryText,
        boxShadow: `0 4px 20px ${theme.glow}`,
      },
    },
    {
      label: "Secondary Cool",
      desc: "Inward depth",
      style: {
        background: theme.btnSecondary,
        color: theme.btnSecondaryText,
        border: `1.5px solid ${theme.btnSecondaryBorder}`,
        backdropFilter: "blur(12px)",
      },
    },
    {
      label: "Ghost",
      desc: "Transparent field",
      style: {
        background: "transparent",
        color: theme.textPrimary,
        border: `1.5px solid ${theme.id === "twilight" ? "rgba(245,240,232,0.25)" : "rgba(58,48,40,0.2)"}`,
      },
    },
    {
      label: "Life Accent",
      desc: "Sage mediator",
      style: {
        background:
          theme.id === "twilight"
            ? "linear-gradient(135deg, #7a9878, #5a8068)"
            : theme.id === "forest"
              ? "linear-gradient(135deg, #5a8868, #78a890)"
              : "linear-gradient(135deg, #9ab89a, #7a9a7a)",
        color: "#f5f0e8",
        boxShadow: `0 4px 16px ${theme.glow}`,
      },
    },
  ];

  return (
    <section className="py-16 px-6" data-ocid="buttons.section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-widest uppercase mb-3 opacity-60"
            style={{ color: theme.textMuted }}
          >
            Interactive Elements
          </p>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: theme.textPrimary }}
          >
            Button Styles
          </h2>
        </div>

        <div
          className="glass-card p-10 flex flex-wrap gap-6 justify-center items-center"
          style={{
            background: theme.cardTint,
            boxShadow: `0 8px 32px ${theme.glow}`,
          }}
        >
          {buttons.map((btn) => (
            <div key={btn.label} className="flex flex-col items-center gap-2">
              <button
                type="button"
                className="btn-glow px-7 py-3 rounded-2xl font-semibold text-sm min-w-[148px]"
                style={btn.style}
              >
                {btn.label}
              </button>
              <span
                className="text-xs italic opacity-55"
                style={{ color: theme.textMuted }}
              >
                {btn.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Rounded pill variants */}
        <div
          className="glass-card p-8 mt-6 flex flex-wrap gap-4 justify-center items-center"
          style={{ background: theme.cardTint }}
        >
          <button
            type="button"
            className="btn-glow px-6 py-2.5 rounded-full text-sm font-medium"
            style={{
              background: theme.btnPrimary,
              color: theme.btnPrimaryText,
            }}
          >
            Pill Primary
          </button>
          <button
            type="button"
            className="btn-glow px-6 py-2.5 rounded-full text-sm font-medium"
            style={{
              background: "transparent",
              color: theme.textPrimary,
              border: `1.5px solid ${theme.btnSecondaryBorder}`,
            }}
          >
            Pill Outline
          </button>
          <button
            type="button"
            className="btn-glow px-6 py-2.5 rounded-full text-sm font-medium text-white"
            style={{
              background:
                theme.id === "twilight"
                  ? "#9890c8"
                  : theme.id === "forest"
                    ? "#78a890"
                    : "#8aaccf",
              boxShadow: `0 4px 16px ${theme.glow}`,
            }}
          >
            Pill Cool
          </button>
          <button
            type="button"
            className="btn-glow px-4 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "transparent",
              color: theme.textMuted,
              border: `1px solid ${theme.id === "twilight" ? "rgba(245,240,232,0.2)" : "rgba(58,48,40,0.15)"}`,
            }}
          >
            Ghost Small
          </button>
        </div>
      </div>
    </section>
  );
}

import { useTheme } from "../context/ThemeContext";

const navLinks = ["Vision", "Palette", "Components", "Typography"];

export function ThemedNav() {
  const { theme } = useTheme();

  return (
    <section className="py-16 px-6" data-ocid="nav.section">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase mb-3 opacity-60 text-center"
          style={{ color: theme.textMuted }}
        >
          Component Sample
        </p>
        <h2
          className="font-display text-3xl font-bold text-center mb-8"
          style={{ color: theme.textPrimary }}
        >
          Navigation Sample
        </h2>

        <nav
          className="glass-nav rounded-3xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: theme.cardTint,
            boxShadow: `0 8px 32px ${theme.glow}`,
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-display"
              style={{
                background: theme.btnPrimary,
                color: theme.btnPrimaryText,
              }}
            >
              A
            </div>
            <span
              className="font-display font-semibold text-lg tracking-wide"
              style={{ color: theme.textPrimary }}
            >
              Actuality Studio
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <span
                key={link}
                className="text-sm font-medium cursor-pointer transition-colors duration-200"
                style={{ color: i === 0 ? theme.textPrimary : theme.textMuted }}
                data-ocid="nav.link"
              >
                {link}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            className="btn-glow px-5 py-2 rounded-xl text-sm font-semibold"
            style={{
              background: theme.btnPrimary,
              color: theme.btnPrimaryText,
              border: "none",
            }}
            data-ocid="nav.primary_button"
          >
            Begin
          </button>
        </nav>
      </div>
    </section>
  );
}

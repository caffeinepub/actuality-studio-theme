import { useTheme } from "../context/ThemeContext";

const columns = [
  {
    heading: "Design System",
    links: ["Colour Palette", "Typography", "Components", "Motion & Animation"],
  },
  {
    heading: "Theme Variants",
    links: [
      "Dawn · Main Site",
      "Twilight · App",
      "Forest-Soul · Affiliate",
      "Custom Themes",
    ],
  },
  {
    heading: "Philosophy",
    links: [
      "Steiner Lasur",
      "Goethe Colour Theory",
      "Soul & Spirit",
      "Living Form",
    ],
  },
];

export function ThemedFooter() {
  const { theme } = useTheme();
  const isDark = theme.id === "twilight";
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer
      className="pt-20 pb-10 px-6"
      style={{ background: theme.footerGradient }}
      data-ocid="footer.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display"
                style={{
                  background: theme.btnPrimary,
                  color: theme.btnPrimaryText,
                }}
              >
                A
              </div>
              <span
                className="font-display font-bold text-xl tracking-wide"
                style={{ color: isDark ? "#f5f0e8" : theme.textPrimary }}
              >
                Actuality Studio
              </span>
            </div>
            <p
              className="font-display italic text-base leading-relaxed opacity-80"
              style={{ color: isDark ? "#e8d8b8" : theme.textSecondary }}
            >
              {theme.tagline}
            </p>
            <p
              className="text-sm mt-3 leading-relaxed opacity-60"
              style={{ color: isDark ? "#e8d8b8" : theme.textSecondary }}
            >
              A living design language rooted in Rudolf Steiner's spiritual
              colour theory.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-semibold text-sm tracking-widest uppercase mb-5 opacity-75"
                style={{ color: isDark ? "#f5f0e8" : theme.textPrimary }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <span
                      className="text-sm cursor-pointer transition-opacity duration-200 opacity-60 hover:opacity-90"
                      style={{
                        color: isDark ? "#e8d8b8" : theme.textSecondary,
                      }}
                    >
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8 opacity-25"
          style={{ background: isDark ? "#f5f0e8" : theme.textMuted }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs opacity-50"
            style={{ color: isDark ? "#e8d8b8" : theme.textSecondary }}
          >
            © {year} Actuality Studio. All colour belongs to light.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs opacity-50 hover:opacity-75 transition-opacity"
            style={{ color: isDark ? "#e8d8b8" : theme.textSecondary }}
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

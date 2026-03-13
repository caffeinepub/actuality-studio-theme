import { useTheme } from "../context/ThemeContext";
import type { ThemeId } from "../themes/themeData";

const tabs: { id: ThemeId; label: string; sub: string }[] = [
  { id: "dawn", label: "Dawn", sub: "Main Site" },
  { id: "twilight", label: "Twilight", sub: "App" },
  { id: "forest", label: "Forest-Soul", sub: "Affiliate" },
];

export function ThemeToggleBar() {
  const { activeTheme, setTheme, theme } = useTheme();

  const isDark = activeTheme === "twilight";

  return (
    <header
      className="glass-nav fixed top-0 left-0 right-0 z-50"
      style={{
        background: isDark ? "rgba(30,28,53,0.85)" : "rgba(253,248,240,0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: theme.btnPrimary,
              color: theme.btnPrimaryText,
            }}
          >
            A
          </div>
          <span
            className="font-display text-lg font-semibold tracking-wide"
            style={{ color: theme.textPrimary }}
          >
            Actuality Studio
          </span>
          <span
            className="hidden sm:inline text-xs tracking-widest uppercase opacity-60"
            style={{ color: theme.textMuted }}
          >
            Theme System
          </span>
        </div>

        {/* Theme Toggle Group */}
        <div
          className="flex rounded-2xl overflow-hidden"
          style={{
            background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "3px",
          }}
          data-ocid="theme.toggle"
        >
          {tabs.map((tab, i) => {
            const isActive = tab.id === activeTheme;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setTheme(tab.id)}
                data-ocid={
                  `theme.tab.${i + 1}` as
                    | "theme.tab.1"
                    | "theme.tab.2"
                    | "theme.tab.3"
                }
                className="px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5"
                style={{
                  background: isActive
                    ? tab.id === "dawn"
                      ? "linear-gradient(135deg, #f5e6c8, #f2d4c2)"
                      : tab.id === "twilight"
                        ? "linear-gradient(135deg, #3d3060, #4a3858)"
                        : "linear-gradient(135deg, #d4e8cc, #c4d8bc)"
                    : "transparent",
                  color: isActive
                    ? tab.id === "twilight"
                      ? "#f5f0e8"
                      : "#3a3028"
                    : theme.textMuted,
                  boxShadow: isActive ? `0 0 14px 3px ${theme.glow}` : "none",
                }}
              >
                <span className="font-display italic text-xs opacity-80">
                  {tab.label}
                </span>
                <span className="hidden sm:inline text-xs opacity-60">
                  · {tab.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

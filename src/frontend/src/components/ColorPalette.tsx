import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import type { ThemeColorToken } from "../themes/themeData";

function toVarName(name: string) {
  return `--color-${name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}`;
}

function CopyButton({
  text,
  label,
  small,
}: { text: string; label: string; small?: boolean }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded font-mono transition-all ${
        small ? "text-[10px] px-1.5 py-0.5 mt-1" : "text-xs px-2.5 py-1 mt-2"
      } border border-white/20 bg-white/10 hover:bg-white/20 active:scale-95`}
      style={{ color: copied ? "#86efac" : undefined }}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

function SwatchGroup({
  title,
  tokens,
}: { title: string; tokens: ThemeColorToken[] }) {
  const { theme } = useTheme();

  const allTokensCss = tokens
    .map((t) => `  ${toVarName(t.name)}: ${t.hex};`)
    .join("\n");

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3
          className="font-display italic text-lg"
          style={{ color: theme.textSecondary }}
        >
          {title}
        </h3>
        <CopyButton
          text={allTokensCss}
          label="Copy group tokens"
          small={false}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {tokens.map((token) => {
          const varDecl = `${toVarName(token.name)}: ${token.hex};`;
          return (
            <div key={token.hex} className="swatch-block">
              <div
                className="w-full h-24 rounded-2xl mb-3"
                style={{
                  background: token.hex,
                  boxShadow: `0 4px 20px ${token.hex}55, 0 0 0 1px rgba(255,255,255,0.15)`,
                }}
              />
              <p
                className="font-semibold text-sm leading-tight"
                style={{ color: theme.textPrimary }}
              >
                {token.name}
              </p>
              <p
                className="text-xs italic opacity-70 mt-0.5"
                style={{ color: theme.textMuted }}
              >
                {token.steinerName}
              </p>
              <p
                className="font-mono text-xs mt-1 opacity-55"
                style={{ color: theme.textMuted }}
              >
                {token.hex}
              </p>
              <CopyButton text={varDecl} label="Copy token" small />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ColorPalette() {
  const { theme } = useTheme();

  return (
    <section className="py-24 px-6" data-ocid="palette.section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 opacity-60"
            style={{ color: theme.textMuted }}
          >
            Steiner Colour Theory
          </p>
          <h2
            className="font-display text-5xl font-bold mb-4"
            style={{ color: theme.textPrimary }}
          >
            Sacred Colour Palette
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto opacity-75 leading-relaxed"
            style={{ color: theme.textSecondary }}
          >
            Each colour carries a specific quality of soul and spirit — warm
            lustres that radiate outward, cool inward colours that invite depth,
            and the living green that mediates between them.
          </p>
        </div>

        <div className="space-y-12">
          <SwatchGroup
            title="Warm Lustre — Soul Warmth"
            tokens={theme.palette.warm}
          />
          <div
            className="h-px opacity-20"
            style={{ background: theme.textMuted }}
          />
          <SwatchGroup
            title="Cool Inward — Spiritual Depth"
            tokens={theme.palette.cool}
          />
          <div
            className="h-px opacity-20"
            style={{ background: theme.textMuted }}
          />
          <SwatchGroup
            title="Life Accents — Sage & Ground"
            tokens={theme.palette.life}
          />
          <div
            className="h-px opacity-20"
            style={{ background: theme.textMuted }}
          />
          <SwatchGroup
            title="Ground & Text — Light Foundation"
            tokens={theme.palette.ground}
          />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Check, Copy, Download } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import type { ThemeColorToken } from "../themes/themeData";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function generateCss(theme: ReturnType<typeof useTheme>["theme"]): string {
  const lines: string[] = [];

  lines.push(`/* Actuality Studio — ${theme.label} (${theme.sublabel}) */`);
  lines.push(`/* ${theme.tagline} */`);
  lines.push("");
  lines.push(":root {");

  // CSS vars from theme.cssVars
  lines.push("  /* Theme Variables */");
  for (const [key, val] of Object.entries(theme.cssVars)) {
    lines.push(`  ${key}: ${val};`);
  }

  // Key design values
  lines.push("");
  lines.push("  /* Design Values */");
  lines.push(`  --text-primary: ${theme.textPrimary};`);
  lines.push(`  --text-secondary: ${theme.textSecondary};`);
  lines.push(`  --text-muted: ${theme.textMuted};`);
  lines.push(`  --card-tint: ${theme.cardTint};`);
  lines.push(`  --glow: ${theme.glow};`);

  // Palette tokens
  lines.push("");
  lines.push("  /* Palette — Warm */");
  theme.palette.warm.forEach((token: ThemeColorToken, i: number) => {
    lines.push(`  --color-warm-${i + 1}: ${token.hex}; /* ${token.name} */`);
  });

  lines.push("");
  lines.push("  /* Palette — Cool */");
  theme.palette.cool.forEach((token: ThemeColorToken, i: number) => {
    lines.push(`  --color-cool-${i + 1}: ${token.hex}; /* ${token.name} */`);
  });

  lines.push("");
  lines.push("  /* Palette — Life */");
  theme.palette.life.forEach((token: ThemeColorToken, i: number) => {
    lines.push(`  --color-life-${i + 1}: ${token.hex}; /* ${token.name} */`);
  });

  lines.push("");
  lines.push("  /* Palette — Ground */");
  theme.palette.ground.forEach((token: ThemeColorToken, i: number) => {
    lines.push(`  --color-ground-${i + 1}: ${token.hex}; /* ${token.name} */`);
  });

  // Named tokens by slugified name
  lines.push("");
  lines.push("  /* Named Color Tokens */");
  const allTokens: ThemeColorToken[] = [
    ...theme.palette.warm,
    ...theme.palette.cool,
    ...theme.palette.life,
    ...theme.palette.ground,
  ];
  for (const token of allTokens) {
    lines.push(`  --color-${slugify(token.name)}: ${token.hex};`);
  }

  lines.push("}");

  return lines.join("\n");
}

export function CssExportSection() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const cssText = generateCss(theme);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [cssText]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([cssText], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `actuality-${theme.id}.css`;
    a.click();
    URL.revokeObjectURL(url);
  }, [cssText, theme.id]);

  return (
    <section
      data-ocid="css-export.section"
      style={{ color: theme.textPrimary }}
      className="px-6 py-20 max-w-5xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p
          className="uppercase tracking-[0.2em] text-xs font-semibold mb-3"
          style={{ color: theme.textMuted }}
        >
          Export
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-light mb-4"
          style={{ color: theme.textPrimary }}
        >
          CSS Variables
        </h2>
        <p
          className="text-base max-w-xl leading-relaxed"
          style={{ color: theme.textMuted }}
        >
          Copy the complete{" "}
          <strong style={{ color: theme.textSecondary }}>{theme.label}</strong>{" "}
          theme as CSS custom properties, ready to paste into any project.
        </p>
      </motion.div>

      {/* Code card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          background: theme.cardTint,
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: `1px solid ${theme.glow}`,
          boxShadow: `0 8px 40px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.25)`,
        }}
        className="rounded-2xl overflow-hidden"
      >
        {/* Button row */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{
            borderColor: `${theme.glow}`,
            background: `color-mix(in srgb, ${theme.cardTint} 60%, transparent)`,
          }}
        >
          <span
            className="text-sm font-mono tracking-wide"
            style={{ color: theme.textMuted }}
          >
            actuality-{theme.id}.css
          </span>
          <div className="flex items-center gap-3">
            <Button
              data-ocid="css-export.copy_button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              style={{
                borderColor: theme.glow,
                color: theme.textPrimary,
                background: theme.cardTint,
              }}
              className="gap-2 text-sm font-medium transition-all duration-200 hover:opacity-80"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy CSS
                </>
              )}
            </Button>

            <Button
              data-ocid="css-export.primary_button"
              size="sm"
              onClick={handleDownload}
              style={{
                background: theme.btnPrimary,
                color: theme.btnPrimaryText,
                border: "none",
              }}
              className="gap-2 text-sm font-medium transition-all duration-200 hover:opacity-80"
            >
              <Download className="w-4 h-4" />
              Download .css
            </Button>
          </div>
        </div>

        {/* Code block */}
        <div className="overflow-auto" style={{ maxHeight: "480px" }}>
          <pre
            className="p-6 text-sm leading-relaxed"
            style={{
              fontFamily: "'JetBrains Mono', 'Geist Mono', monospace",
              color: theme.textPrimary,
              margin: 0,
              whiteSpace: "pre",
            }}
          >
            <code>{cssText}</code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}

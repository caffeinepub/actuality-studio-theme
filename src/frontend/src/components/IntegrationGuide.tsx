import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const PLAIN_CSS_SNIPPET = `/* 1. Paste your exported :root {} block into your global stylesheet */
/* (e.g. styles/global.css, index.css, or _variables.css)           */

:root {
  --color-warm-1: #f5e6c8; /* Pale Dawn      */
  --color-warm-2: #e8c98a; /* Golden Veil    */
  --color-warm-3: #d4a84b; /* Amber Lustre   */
  --color-cool-1: #c8d8e8; /* Sky Wash       */
  --color-cool-2: #7fa8c9; /* Cerulean Depth */
  --color-life-1: #c8e0c8; /* Sage Breath    */
  --color-life-2: #5a9e6f; /* Forest Soul    */
  --color-ground-1: #e8d8c8;/* Warm Earth    */
  --color-crimson-lustre: #c0392b;
  /* ... all other tokens from the CSS Export section below ... */
}

/* 2. Use variables anywhere in your CSS */
body {
  background-color: var(--color-warm-1);
  color: var(--text-primary);
}

.card {
  background: var(--card-tint);
  border: 1px solid var(--glow);
  border-radius: 1rem;
}

.btn-primary {
  background: var(--color-crimson-lustre);
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
}

h1, h2, h3 { color: var(--text-primary); }
.muted      { color: var(--text-muted);   }`;

const TAILWIND_SNIPPET = `// tailwind.config.js
// Paste the :root{} block into your global CSS first,
// then map the variables into Tailwind's theme extension.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm palette
        "warm-1":  "var(--color-warm-1)",
        "warm-2":  "var(--color-warm-2)",
        "warm-3":  "var(--color-warm-3)",
        // Cool palette
        "cool-1":  "var(--color-cool-1)",
        "cool-2":  "var(--color-cool-2)",
        // Life palette
        "life-1":  "var(--color-life-1)",
        "life-2":  "var(--color-life-2)",
        // Ground palette
        "ground-1": "var(--color-ground-1)",
        // Named tokens
        "crimson-lustre":  "var(--color-crimson-lustre)",
        // Semantic tokens
        "text-primary":    "var(--text-primary)",
        "text-secondary":  "var(--text-secondary)",
        "text-muted":      "var(--text-muted)",
        "card-tint":       "var(--card-tint)",
        "glow":            "var(--glow)",
      },
      boxShadow: {
        "glow-sm": "0 2px 12px var(--glow)",
        "glow-lg": "0 8px 40px var(--glow)",
      },
    },
  },
  plugins: [],
};

// Usage in JSX / HTML:
// <div className="bg-warm-1 text-text-primary shadow-glow-sm">
// <button className="bg-crimson-lustre text-white">Get started</button>`;

const SHADCN_SNIPPET = `/* index.css
 * Step 1: paste your exported :root{} block
 * Step 2: remap shadcn/ui token names to Actuality Studio values
 */

/* ── Step 1: exported palette ─────────────────────────────── */
:root {
  --color-warm-1: #f5e6c8;
  --color-crimson-lustre: #c0392b;
  --card-tint: rgba(245, 230, 200, 0.45);
  --glow: rgba(192, 57, 43, 0.18);
  --text-primary: #2c1a0e;
  --text-secondary: #5a3a22;
  --text-muted: #7a5c44;
  /* ...all tokens from CSS Export below... */
}

/* ── Step 2: remap shadcn tokens ──────────────────────────── */
:root {
  /* Base */
  --background:      var(--color-warm-1);
  --foreground:      var(--text-primary);

  /* Card */
  --card:            var(--card-tint);
  --card-foreground: var(--text-primary);

  /* Primary (buttons, links) */
  --primary:            var(--color-crimson-lustre);
  --primary-foreground: #ffffff;

  /* Muted */
  --muted:            var(--color-warm-2, #e8c98a);
  --muted-foreground: var(--text-muted);

  /* Border / ring */
  --border: var(--glow);
  --ring:   var(--color-crimson-lustre);

  /* Border radius */
  --radius: 0.75rem;
}

/* Every shadcn component now uses your Actuality palette:
 * <Button>                  → crimson-lustre background
 * <Card>                    → translucent warm card tint
 * <Badge variant="outline"> → glow-coloured border
 */`;

function CopyButton({ text, ocid }: { text: string; ocid: string }) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={handleCopy}
      style={{
        border: `1px solid ${theme.glow}`,
        color: theme.textMuted,
        background: theme.cardTint,
        borderRadius: "0.4rem",
        padding: "0.25rem 0.75rem",
        fontSize: "0.75rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "opacity 0.15s",
      }}
      className="hover:opacity-70"
    >
      {copied ? (
        <>
          <Check style={{ width: 12, height: 12 }} />
          Copied!
        </>
      ) : (
        <>
          <Copy style={{ width: 12, height: 12 }} />
          Copy
        </>
      )}
    </button>
  );
}

function CodePanel({ code, ocid }: { code: string; ocid: string }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background: theme.cardTint,
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: `1px solid ${theme.glow}`,
        boxShadow: `0 8px 40px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.25)`,
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div
        className="flex items-center justify-end px-4 py-3 border-b"
        style={{ borderColor: theme.glow }}
      >
        <CopyButton text={code} ocid={ocid} />
      </div>
      <div style={{ overflowX: "auto", maxHeight: "420px" }}>
        <pre
          style={{
            margin: 0,
            padding: "1.25rem 1.5rem",
            fontSize: "0.78rem",
            lineHeight: 1.7,
            fontFamily: "'JetBrains Mono', 'Geist Mono', monospace",
            color: theme.textPrimary,
            whiteSpace: "pre",
          }}
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function IntegrationGuide() {
  const { theme } = useTheme();

  return (
    <section
      data-ocid="integration.section"
      style={{ color: theme.textPrimary }}
      className="px-6 py-20 max-w-5xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <p
          className="uppercase tracking-[0.2em] text-xs font-semibold mb-3"
          style={{ color: theme.textMuted }}
        >
          Integration
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-light mb-4"
          style={{ color: theme.textPrimary }}
        >
          Apply to Your Project
        </h2>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: theme.textMuted }}
        >
          Export your theme variables from the CSS Export section below, then
          follow one of these three paths — whichever matches your stack. In
          every case the exported{" "}
          <code
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85em",
              color: theme.textSecondary,
            }}
          >
            :root &#123;&#125;
          </code>{" "}
          block is the single source of truth; everything else simply references
          those variables via{" "}
          <code
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85em",
              color: theme.textSecondary,
            }}
          >
            var(--color-warm-1)
          </code>
          .
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Tabs defaultValue="css" className="w-full">
          <TabsList
            data-ocid="integration.tab"
            style={{
              background: theme.cardTint,
              border: `1px solid ${theme.glow}`,
              backdropFilter: "blur(12px)",
            }}
            className="mb-5 h-auto p-1 gap-1 flex-wrap"
          >
            <TabsTrigger
              value="css"
              data-ocid="integration.css.tab"
              style={{ color: theme.textMuted }}
              className="text-sm px-4 py-2"
            >
              Plain CSS
            </TabsTrigger>
            <TabsTrigger
              value="tailwind"
              data-ocid="integration.tailwind.tab"
              style={{ color: theme.textMuted }}
              className="text-sm px-4 py-2"
            >
              Tailwind CSS
            </TabsTrigger>
            <TabsTrigger
              value="shadcn"
              data-ocid="integration.shadcn.tab"
              style={{ color: theme.textMuted }}
              className="text-sm px-4 py-2"
            >
              React + shadcn/ui
            </TabsTrigger>
          </TabsList>

          <TabsContent value="css">
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: theme.textMuted }}
            >
              Paste the exported{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85em",
                }}
              >
                :root{"{}"}
              </code>{" "}
              into your main stylesheet, then use{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85em",
                }}
              >
                var(--color-warm-1)
              </code>{" "}
              anywhere in your CSS. No build tool required.
            </p>
            <CodePanel code={PLAIN_CSS_SNIPPET} ocid="integration.css.button" />
          </TabsContent>

          <TabsContent value="tailwind">
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: theme.textMuted }}
            >
              Map each CSS variable into{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85em",
                }}
              >
                theme.extend.colors
              </code>
              , then write utility classes like{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85em",
                }}
              >
                bg-warm-1
              </code>{" "}
              or{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85em",
                }}
              >
                text-crimson-lustre
              </code>{" "}
              anywhere in your Tailwind project.
            </p>
            <CodePanel
              code={TAILWIND_SNIPPET}
              ocid="integration.tailwind.button"
            />
          </TabsContent>

          <TabsContent value="shadcn">
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: theme.textMuted }}
            >
              Remap shadcn/ui&apos;s own token names (--primary, --card,
              --background, etc.) to Actuality Studio variables. Every shadcn
              component then inherits your palette automatically — no
              per-component overrides needed.
            </p>
            <CodePanel code={SHADCN_SNIPPET} ocid="integration.shadcn.button" />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}

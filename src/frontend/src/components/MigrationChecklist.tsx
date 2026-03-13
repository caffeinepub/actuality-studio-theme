import { CheckCircle2, Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const STEPS = [
  {
    id: "export",
    title: "Export your theme CSS",
    description:
      "Go to the CSS Export section below, select your variant (Main Website, App, or Affiliate), then click Copy or Download to get the :root {} block.",
  },
  {
    id: "paste",
    title: "Paste variables into your global stylesheet",
    description:
      "Open your project's global CSS file (e.g. index.css, global.css, or _variables.css) and paste the :root {} block at the very top, before any other rules.",
  },
  {
    id: "fonts",
    title: "Load the display font",
    description:
      "Add a Google Fonts import for Cormorant Garamond (or your chosen display face) to your <head> or global CSS so headings render correctly.",
  },
  {
    id: "backgrounds",
    title: "Replace hardcoded backgrounds",
    description:
      "Swap any hardcoded background colors in your app with the matching CSS variable, e.g. background: #f5e6c8 → background: var(--color-warm-1).",
  },
  {
    id: "text",
    title: "Replace hardcoded text colors",
    description:
      "Update heading, body, and muted text colors to var(--text-primary), var(--text-secondary), and var(--text-muted) respectively.",
  },
  {
    id: "components",
    title: "Update component tokens",
    description:
      "If you use a component library (shadcn, MUI, etc.), remap its semantic tokens — --primary, --card, --border — to the Actuality variables using the React + shadcn/ui tab in the Integration Guide above.",
  },
  {
    id: "tailwind",
    title: "Extend Tailwind config (if applicable)",
    description:
      "Add the CSS variables to tailwind.config.js under theme.extend.colors so you can use utility classes like bg-warm-1 or text-crimson-lustre directly in your JSX.",
  },
  {
    id: "review",
    title: "Visual review and fine-tune",
    description:
      "Open your app in the browser and compare it against this style guide. Use the group-copy buttons on each palette section to quickly grab individual token groups for any remaining adjustments.",
  },
];

export function MigrationChecklist() {
  const { theme } = useTheme();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / STEPS.length) * 100);
  const allDone = checked.size === STEPS.length;

  return (
    <section
      data-ocid="migration.section"
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
          Migration
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-light mb-4"
          style={{ color: theme.textPrimary }}
        >
          Step-by-Step Checklist
        </h2>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: theme.textMuted }}
        >
          Work through these steps to migrate an existing app to the Actuality
          Studio theme. Check each one off as you go.
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
        data-ocid="migration.panel"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm" style={{ color: theme.textMuted }}>
            {checked.size} of {STEPS.length} complete
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: theme.textSecondary }}
          >
            {progress}%
          </span>
        </div>
        <div
          className="w-full h-2 rounded-full overflow-hidden"
          style={{ background: theme.glow }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: theme.textSecondary }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {STEPS.map((step, i) => {
          const isChecked = checked.has(step.id);
          return (
            <motion.div
              key={step.id}
              data-ocid={`migration.item.${i + 1}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <button
                type="button"
                data-ocid={`migration.checkbox.${i + 1}`}
                onClick={() => toggle(step.id)}
                className="w-full text-left flex items-start gap-4 px-5 py-4 rounded-xl transition-all duration-200 hover:opacity-90 focus-visible:outline-none"
                style={{
                  background: isChecked
                    ? `${theme.cardTint}`
                    : `${theme.cardTint}`,
                  border: `1px solid ${
                    isChecked ? theme.textSecondary : theme.glow
                  }`,
                  backdropFilter: "blur(16px)",
                  opacity: isChecked ? 0.7 : 1,
                  boxShadow: isChecked ? "none" : `0 2px 16px ${theme.glow}`,
                }}
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                  <AnimatePresence mode="wait" initial={false}>
                    {isChecked ? (
                      <motion.span
                        key="checked"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2
                          style={{
                            width: 22,
                            height: 22,
                            color: theme.textSecondary,
                          }}
                        />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="unchecked"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Circle
                          style={{ width: 22, height: 22, color: theme.glow }}
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span
                    className="text-xs font-mono"
                    style={{ color: theme.textMuted, lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{
                      color: isChecked ? theme.textMuted : theme.textPrimary,
                      textDecoration: isChecked ? "line-through" : "none",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Completion message */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            data-ocid="migration.success_state"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="mt-8 px-6 py-5 rounded-xl text-center"
            style={{
              background: theme.cardTint,
              border: `1px solid ${theme.textSecondary}`,
              backdropFilter: "blur(16px)",
              boxShadow: `0 4px 32px ${theme.glow}`,
            }}
          >
            <p
              className="font-display text-2xl font-light mb-1"
              style={{ color: theme.textPrimary }}
            >
              Migration complete
            </p>
            <p className="text-sm" style={{ color: theme.textMuted }}>
              Your app is now aligned with the Actuality Studio theme. Use the
              CSS Export section below whenever you need to re-sync tokens.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

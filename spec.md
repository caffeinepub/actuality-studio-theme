# Actuality Studio Theme

## Current State
The style guide includes a living color palette, typography, component showcase, integration guide (with Plain CSS / Tailwind / shadcn tabs and copy snippets), and a CSS export section.

## Requested Changes (Diff)

### Add
- `MigrationChecklist` component: an interactive, step-by-step checklist guiding users through migrating an existing app to the Actuality Studio theme. Steps are checkable, with progress tracking.

### Modify
- `ShowcasePage.tsx`: import and render `MigrationChecklist` between `IntegrationGuide` and `CssExportSection`.

### Remove
- Nothing.

## Implementation Plan
1. Create `src/frontend/src/components/MigrationChecklist.tsx` with 7-8 sequential migration steps, each with a checkbox, title, and short description. Track checked state locally. Show a progress bar and a completion message.
2. Add `MigrationChecklist` to `ShowcasePage.tsx` between `IntegrationGuide` and `CssExportSection`.
3. Style using the existing theme context (cardTint, glow, textPrimary, textMuted, etc.) consistent with other sections.

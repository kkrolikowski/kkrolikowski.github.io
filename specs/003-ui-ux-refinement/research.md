# Research: UI/UX Refinement & Fixes

## Decision 1: Dark Mode Palette Refinement
**Decision**: Transition from near-black (#121212) to a deep, slightly tinted charcoal (#1e2124) for the main background, and use softer contrasting grays for cards.

**Rationale**: Pure black backgrounds can feel too "heavy" and create harsh contrast with white text. A slightly lighter, tinted dark gray reduces eye strain and feels more modern/premium.
- Main BG: `#1e2124`
- Card BG: `#2b2f33`
- Border: `#3e444a`
- Text: `#e1e3e6`

**Alternatives considered**: Deep navy (#0d1117 - GitHub style). Rejected to stay closer to the current neutral palette but with better "depth".

## Decision 2: Compact Hero Section
**Decision**: Remove `uk-height-viewport` from the Hero section and replace it with a fixed minimum height (e.g., `60vh` on desktop, auto on mobile) with generous but controlled vertical padding.

**Rationale**: Full-viewport heroes are often unnecessary for CVs where the visitor wants to see the professional experience quickly. Reducing it improves the "above the fold" information density.

## Decision 3: Linear Timeline Architecture
**Decision**: Refactor the `.uk-timeline` to use a single vertical track on the left (at all breakpoints) rather than alternating sides on desktop.

**Rationale**: Single-column timelines are easier to scan chronologically. They provide a more consistent experience between mobile and desktop and simplify the visual complexity of the page.

## Decision 4: Redesigned Experience Blocks & Labels
**Decision**: 
- **Blocks**: Remove heavy card headers. Use a clean typographic hierarchy (Role, Company, Date) followed by the description.
- **Labels**: Replace colorful `uk-label` badges with subtle monochromatic outlined tags or small uppercase text with a faint background tint.

**Rationale**: Colorful labels (success/warning) can distract from the content. A muted, consistent style for tags (e.g., for company names and roles) looks more professional and "refined".
- Tag Style: `border: 1px solid var(--border-color); color: var(--text-color); font-size: 0.75rem;`

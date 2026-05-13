# Implementation Plan: UI/UX Refinement & Fixes

**Branch**: `003-refinement` | **Date**: 2026-05-13 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/003-ui-ux-refinement/spec.md`

## Summary

This feature involves a series of UI and UX improvements to the personal CV website. Key changes include fixing the theme toggle reliability and aesthetics, reducing the Hero section's dominance, transitioning the career timeline to a more readable linear format, and refining the visual design of experience blocks and labels to achieve a more modern and professional look.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES6)

**Primary Dependencies**: UIkit 3.20.8, Font Awesome 6.5.1, Google Fonts (Inter, Poppins)

**Storage**: `localStorage` for theme persistence

**Testing**: Manual visual testing across breakpoints; Accessibility audit (contrast check)

**Target Platform**: Modern Web Browsers (Responsive)

**Project Type**: Static CV Website

**Performance Goals**: < 1s load time; smooth theme transitions

**Constraints**: No external frameworks beyond UIkit; maintain semantic HTML

**Scale/Scope**: Refinement of existing single-page layout (Hero and Career sections)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Check | Status |
|-----------|-------|--------|
| **I. Mobile-First** | Linear timeline must be the default for all screens; Hero section must be compact on mobile. | ✅ |
| **II. UX-Driven** | Linear timeline improves chronological readability; Theme toggle must work predictably. | ✅ |
| **III. Minimalist** | Minimal JS for theme switching; CSS-based layout adjustments. | ✅ |
| **IV. Accessibility** | Dark mode contrast must meet WCAG AA; Theme toggle button must have ARIA labels. | ✅ |
| **V. Polished** | Redesigned blocks and labels must elevate the professional feel. | ✅ |

## Project Structure

### Documentation (this feature)

```text
specs/003-ui-ux-refinement/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (Theme state)
├── quickstart.md        # Phase 1 output
├── checklists/          # Validation checklists
│   └── requirements.md
└── spec.md              # Source specification
```

### Source Code (repository root)

```text
/
├── index.html           # Structure updates (Hero, Timeline, Experience Blocks)
├── style.css            # Styling updates (Colors, Layout, Component Redesign)
├── script.js            # Logic updates (Theme toggle fix, Persistence)
└── me.png               # (Existing asset)
```

**Structure Decision**: Single-project static site structure is maintained as per constitution Principle III.

## Complexity Tracking

*No constitution violations detected.*

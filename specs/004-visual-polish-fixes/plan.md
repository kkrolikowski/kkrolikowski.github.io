# Implementation Plan: Visual Polish & UX Fixes

**Branch**: `004-visual-polish-fixes` | **Date**: 2026-05-13 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/004-visual-polish-fixes/spec.md`

## Summary

This plan addresses visual inconsistencies and UX bugs reported by the user. The primary focus is on fixing the theme toggle icons, aligning the hero section photo with typography, adding decorative elements to fill empty space, ensuring visual consistency of rounded corners, implementing scroll-spy navigation highlighting, and enriching the career timeline with specific team names.

## Technical Context

**Language/Version**: HTML5, CSS3 (Modern features like Flexbox/Grid), JavaScript (ES6+)

**Primary Dependencies**: UIkit 3.20.8, Font Awesome 6.5.1, Google Fonts (Inter, Poppins)

**Storage**: `localStorage` (for theme persistence)

**Testing**: Manual visual testing across breakpoints; ScrollSpy trigger validation; Accessibility contrast check for highlighted nav items.

**Target Platform**: Modern Web Browsers (Mobile-First)

**Project Type**: Static Personal Website

**Performance Goals**: Maintaining minimal JS execution; ensuring layout stability during scroll.

**Constraints**: Adhere to existing UIkit-based architecture while enhancing with custom CSS.

**Scale/Scope**: Refinement of existing UI components (Hero, Nav, Timeline).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Check | Status |
|-----------|-------|--------|
| **I. Mobile-First** | Pseudo-elements must not overflow on mobile; layout fixes must scale. | ✅ |
| **II. UX-Driven** | ScrollSpy improves navigation context; fixed toggle reduces friction. | ✅ |
| **III. Minimalist** | Use UIkit's built-in ScrollSpy; avoid heavy JS for visual fixes. | ✅ |
| **IV. Accessibility** | Font Awesome icons for theme must have ARIA labels; contrast check. | ✅ |
| **V. Polished** | Alignment and border-radius consistency are the core of this feature. | ✅ |

## Project Structure

### Documentation (this feature)

```text
specs/004-visual-polish-fixes/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (Updated Career structure)
├── quickstart.md        # Phase 1 output (Validation steps)
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
/
├── index.html           # Structure updates (Nav attributes, Hero layout, Timeline content)
├── style.css            # Styling updates (Pseudo-elements, Alignment, Transitions)
└── script.js            # Logic updates (Theme icon swap, ScrollSpy initialization if needed)
```

**Structure Decision**: Single project static architecture is maintained. No new directories required.

## Complexity Tracking

*No violations detected.*

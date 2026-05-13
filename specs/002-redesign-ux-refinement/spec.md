# Feature Specification: Redesign UX Refinement

**Feature Branch**: `002-redesign-ux-refinement`

**Created**: 2026-05-13

**Status**: Draft

**Input**: User description: "Napraw przełączanie pomiędzy trybami - light / dark. Hero Section jest za duże jednak, timeline niech będzie w formie osi czasu - jeden element pod drugim. Dark mode jest zbyt ciemny. Zrób redesign bloczków z doświadczeniem zawodowym. Te kolorowe labelki mi się nie podobają, wymyśl coś lepszego."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reliable Theme Switching (Priority: P1)
As a visitor, I want the theme toggle to work reliably across page reloads and different devices so that my viewing preference is always respected.
**Why this priority**: Essential UX. Broken functionality creates a sense of low quality.
**Independent Test**: Toggle to Dark mode, refresh page, verify site remains in Dark mode. Check persistence in LocalStorage.

### User Story 2 - Focused Hero Section (Priority: P2)
As a recruiter, I want the Hero section to be compact enough so that I can see the start of the professional content without excessive scrolling.
**Why this priority**: "Above the fold" content efficiency.
**Independent Test**: Verify Hero section height is reduced to approximately 60% of viewport height (60vh) or less.

### User Story 3 - Clean Professional Timeline (Priority: P2)
As a recruiter, I want the professional experience to be displayed in a simple, one-column timeline with a modern card design so that I can scan it quickly.
**Why this priority**: Readability and scanability.
**Independent Test**: Verify timeline items are stacked vertically (one under another) on all devices, and colored labels are replaced with a more subtle design.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST fix the JavaScript toggle logic to ensure smooth theme transition and persistent state in `localStorage`.
- **FR-002**: System MUST adjust the Dark Mode color palette to use softer dark grays instead of deep black to improve readability and reduce eye strain.
- **FR-003**: Hero section height MUST be reduced from 80vh to a maximum of 60vh.
- **FR-004**: Timeline layout MUST be changed to a single-column (vertical axis) format for all screen sizes.
- **FR-005**: Professional experience cards MUST be redesigned to remove UIKit colored labels (`uk-label-success`, etc.).
- **FR-006**: Redesigned cards MUST use subtle monochrome pills (grayscale or border-only) to distinguish between roles and companies, ensuring they do not distract from the primary text.

### Success Criteria *(mandatory)*

- **SC-001**: Theme preference persists correctly after page reload in 100% of cases.
- **SC-002**: Hero section occupies no more than 60% of vertical space on desktop.
- **SC-003**: Career timeline follows a single vertical line with items stacked on the right side of the line (or centered under each other).
- **SC-004**: Dark mode background color has a minimum contrast ratio of 4.5:1 for body text, using a shade of gray (e.g., #1f1f1f) rather than #121212.

## Assumptions

- [Assumption about style]: "Subtle design" means removing high-contrast colored elements in favor of a more professional, corporate-tech aesthetic.
- [Assumption about accessibility]: The site will maintain WCAG 2.1 AA compliance during color adjustments.
- [Dependency]: Uses FontAwesome 6.5.1 for iconography.

# Feature Specification: UI/UX Refinement & Fixes

**Feature Branch**: `003-refinement`

**Created**: 2026-05-13

**Status**: Draft

**Input**: User description: "Napraw przełączanie pomiędzy trybami - light / dark. Hero Section jest za duże jednak, timeline niech będzie w formie osi czasu - jeden element pod drugim. Dark mode jest zbyt ciemny. Zrób redesign bloczków z doświadczeniem zawodowym. Te kolorowe labelki mi się nie podobają, wymyśl coś lepszego."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reliable Theme Switching (Priority: P1)

As a visitor, I want to switch between light and dark modes easily so that I can read the content comfortably in different lighting conditions.

**Why this priority**: Core accessibility and user preference feature.

**Independent Test**: Can be tested by clicking the toggle and verifying color changes and icon updates.

**Acceptance Scenarios**:

1. **Given** I am on the website, **When** I click the theme toggle, **Then** the colors switch between light and dark modes immediately.
2. **Given** dark mode is active, **When** I look at the toggle button, **Then** it shows a "sun" icon (or appropriate light mode icon).
3. **Given** light mode is active, **When** I look at the toggle button, **Then** it shows a "moon" icon.

---

### User Story 2 - Linear Career Timeline (Priority: P1)

As a visitor, I want to see the career history in a clear, vertical timeline so that it is easier to read chronologically without scanning left and right.

**Why this priority**: Primary information architecture of a CV website.

**Independent Test**: Can be tested by viewing the Career section on both desktop and mobile.

**Acceptance Scenarios**:

1. **Given** I am in the Career section, **When** I scroll, **Then** each job experience block follows the previous one in a single vertical column.
2. **Given** the linear timeline, **When** I view it on a mobile device, **Then** it remains readable and consistent with the desktop view.

---

### User Story 3 - Refined Visual Design (Priority: P2)

As a visitor, I want a modern and professional-looking interface with comfortable contrast levels and elegant components.

**Why this priority**: Enhances professional branding and readability.

**Independent Test**: Visual inspection of the Hero section, dark mode colors, and experience blocks.

**Acceptance Scenarios**:

1. **Given** I visit the site, **When** the page loads, **Then** the Hero section doesn't push the main content too far down the page.
2. **Given** dark mode is active, **When** I read the text, **Then** the background is a comfortable dark grey (not pure black) providing good contrast without being harsh.
3. **Given** the Experience blocks, **When** I view job details, **Then** the tags/labels are subtle and elegant (not overly bright/colorful).

### Edge Cases

- **Persistence**: Theme preference should be saved across sessions (localStorage).
- **Responsiveness**: Ensure the linear timeline doesn't become too narrow on small screens.
- **Contrast**: Ensure new dark mode colors meet accessibility standards.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Theme toggle MUST correctly identify the current state and switch to the opposite one.
- **FR-002**: Icons for theme toggle MUST clearly represent the target state or current state consistently.
- **FR-003**: Hero section height MUST be reduced from the current full-viewport height to a more compact layout.
- **FR-004**: Career timeline layout MUST be changed from staggered (alternating sides) to a single-column vertical axis.
- **FR-005**: Dark mode background color MUST be adjusted to a lighter shade of dark (e.g., charcoal or deep navy instead of pure black).
- **FR-006**: Professional experience blocks MUST be redesigned for a more modern, minimal look.
- **FR-007**: Colorful badges MUST be replaced with a more refined design (e.g., outlined tags, subtle monochromatic labels, or stylized text).

### Key Entities *(include if feature involves data)*

- **Theme State**: Persistent state (light/dark) stored in the browser.
- **Experience Block**: Data structure representing a job entry (date, company, role, description).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of theme switches result in the correct CSS variables being applied.
- **SC-002**: Hero section vertical height is reduced by at least 30% compared to the current implementation.
- **SC-003**: Career timeline displays all items in a single column on all screen sizes (>320px).
- **SC-004**: Dark mode background color contrast ratio with primary text meets WCAG AA standards.
- **SC-005**: All colorful badges are replaced with the new unified refined design.

## Assumptions

- **Target Users**: Professional recruiters and peers viewing on various devices.
- **Tech Constraints**: Continues using UIkit and CSS variables for theming.
- **Accessibility**: Site should remain accessible with the new color scheme.
- **Design Style**: "Better" labels implies a more minimal, professional aesthetic consistent with modern CVs.

# Tasks: UI/UX Refinement & Fixes

**Input**: Design documents from `specs/003-ui-ux-refinement/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Manual visual validation and accessibility contrast checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure verification

- [x] T001 Verify existing project structure and accessibility of `index.html`, `style.css`, and `script.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core design tokens and accessibility basics that MUST be complete before user stories

- [x] T002 Define new design tokens (CSS variables) for charcoal dark mode and refined tags in `style.css`
- [x] T003 Add ARIA label and base styles for the theme toggle button in `index.html` and `style.css`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Reliable Theme Switching (Priority: P1) 🎯 MVP

**Goal**: Fix toggle reliability, icon representation, and localStorage persistence.

**Independent Test**: Click the toggle to switch themes, verify icons update correctly, refresh the page to ensure theme persists.

### Implementation for User Story 1

- [x] T004 [US1] Refactor theme toggle logic in `script.js` to ensure reliable switching and persistence
- [x] T005 [P] [US1] Update theme toggle button in `index.html` with correct UIkit icons (bolt for sun, moon for dark)
- [x] T006 [P] [US1] Add smooth transition properties for theme changes in `style.css`

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Linear Career Timeline (Priority: P1)

**Goal**: Transition career history to a single-column vertical axis for better scannability.

**Independent Test**: View the career section on desktop and mobile; all entries must be in a single column aligned to the left vertical axis.

### Implementation for User Story 2

- [x] T007 [US2] Update `index.html` structure to remove staggered timeline classes and align all items to the left
- [x] T008 [US2] Refactor `.uk-timeline` styles in `style.css` to implement a single-column linear vertical track

**Checkpoint**: User Story 2 should be functional and testable independently

---

## Phase 5: User Story 3 - Refined Visual Design (Priority: P2)

**Goal**: Modernize the Hero section, dark mode palette, and professional experience components.

**Independent Test**: Visual inspection of reduced Hero height, comfortable dark mode contrast, and minimal tag styles.

### Implementation for User Story 3

- [x] T009 [US3] Reduce Hero section height in `style.css` by removing `uk-height-viewport` and adding controlled padding
- [x] T010 [US3] Implement the new charcoal dark mode palette (#1e2124) and soft card grays in `style.css`
- [x] T011 [US3] Redesign experience blocks in `index.html` to simplify hierarchy (Role, Company, Date) and remove heavy headers
- [x] T012 [P] [US3] Create refined, monochromatic tag styles in `style.css`
- [x] T013 [P] [US3] Replace all colorful `uk-label` badges with the new refined tags in `index.html`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and cross-browser/breakpoint validation.

- [x] T014 [P] Run accessibility audit on new dark mode colors to ensure WCAG AA contrast
- [x] T015 [P] Validate responsive behavior of the linear timeline and Hero section on mobile viewports
- [x] T016 Clean up any unused or redundant CSS from the previous staggered timeline implementation in `style.css`
- [x] T017 Run final validation steps from `specs/003-ui-ux-refinement/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Phase 2.
  - US1 (Theme) and US2 (Timeline) are both P1 and can be worked on in parallel.
  - US3 (Visuals) can proceed once US1/US2 foundations are solid.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### Parallel Opportunities

- T005 and T006 can run in parallel within US1.
- T012 and T013 can run in parallel within US3.
- US1 and US2 can be implemented in parallel if needed as they touch different parts of CSS/HTML.

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Setup and Foundations.
2. Fix Theme Toggle (US1) - Core reliability.
3. Fix Timeline (US2) - Core layout.
4. Validate both independently.

### Incremental Delivery

1. Foundation ready.
2. Reliable theme switching + linear timeline (P1 goals met).
3. Visual redesign and refinement (P2 goals met).
4. Final accessibility and responsive polish.

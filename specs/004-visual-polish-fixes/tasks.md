# Tasks: Visual Polish & UX Fixes

**Input**: Design documents from `specs/004-visual-polish-fixes/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Manual visual validation, ScrollSpy trigger verification, and cross-browser theme switching.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initial project verification

- [x] T001 Verify access to `index.html`, `style.css`, and `script.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Global style and navigation infrastructure

- [x] T002 Standardize global `border-radius` to `20px` for cards, images, and buttons in `style.css`
- [x] T003 [P] Add `uk-scrollspy-nav` attributes to the main navigation menu in `index.html`
- [x] T004 [P] Ensure all navigation links in `index.html` have the `uk-scroll` attribute for smooth scrolling

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Fixed Theme Switching (Priority: P1) 🎯 MVP

**Goal**: Reliable theme toggle with Font Awesome Sun/Moon icons.

**Independent Test**: Click toggle, check if icons swap correctly, verify theme persists on refresh.

### Implementation for User Story 1

- [x] T005 [P] Update `index.html` to use Font Awesome `<i>` tags inside the theme toggle button instead of UIkit icons
- [x] T006 Update `script.js` to handle Font Awesome icon classes (`fa-sun`, `fa-moon`) instead of UIkit icon attributes
- [x] T007 [P] Add transition styles for theme icons in `style.css` (opacity and scale effects)

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Hero Section Alignment & Polish (Priority: P1)

**Goal**: Align photo with text and fill empty space with decorative elements.

**Independent Test**: Visual inspection of top-alignment and pseudo-elements presence.

### Implementation for User Story 2

- [x] T008 [P] Adjust hero grid alignment in `style.css` to vertically align the author photo with the name heading
- [x] T009 Add `::after` decorative pseudo-elements to the author image container in `style.css` to fill space below the photo
- [x] T010 [P] Ensure hero buttons ("View Experience", "Technical Skills") have the standardized `20px` border-radius in `style.css`

**Checkpoint**: User Story 2 should be functional and testable independently

---

## Phase 5: User Story 3 - Visual Consistency & Navigation (Priority: P2)

**Goal**: Integrate laptop image properly and verify ScrollSpy highlighting.

**Independent Test**: Check laptop image scaling/placement and nav highlighting during scroll.

### Implementation for User Story 3

- [x] T011 [P] Remove the tiny laptop image from `index.html` and re-integrate it as a properly scaled background or header element in `style.css`
- [x] T012 Add active state styling for navigation menu items in `style.css` (e.g., green text/underline when `uk-active`)

**Checkpoint**: User Story 3 should be functional and testable independently

---

## Phase 6: User Story 4 - Detailed Career History (Priority: P3)

**Goal**: Add specific team names to career entries.

**Independent Test**: Check all career entries for "Team: [Proposed Name]".

### Implementation for User Story 4

- [x] T013 Update all career entries in `index.html` with their respective team names as defined in the spec:
    - Ringier Axel Springer Tech: "Cloud Governance Team" / "Automation & Tools Team"
    - Ringier Axel Springer Polska: "Microservices Migration Taskforce"
    - DreamLab: "Infrastructure Modernization Group"
    - Grupa Onet.pl: "Systems Engineering Unit"
    - Axel Springer Polska: "Network & Hosting Ops"
    - eo Networks: "TCC Hosting Squad"
    - Polish Comittee of Standarization: "IT Systems Support"

**Checkpoint**: User Story 4 should be functional and testable independently

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and validation

- [x] T014 [P] Validate responsive behavior of decorative pseudo-elements on mobile viewports
- [x] T015 [P] Run final validation steps from `specs/004-visual-polish-fixes/quickstart.md`
- [x] T016 Clean up any redundant or buggy CSS related to the old laptop image or icons

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Phase 1.
- **User Stories (Phase 3+)**: All depend on Phase 2.
  - US1 and US2 are P1 and should be prioritized.
- **Polish (Phase 7)**: Depends on all user stories.

### Parallel Opportunities

- T003 and T004 (Nav structure).
- T005 and T007 (Icon styling).
- T013 (Content update) can be done anytime after Phase 2.

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Setup and Foundations.
2. Fix Theme Toggle Icons (US1).
3. Align and Polish Hero Section (US2).

### Incremental Delivery

1. Foundation ready.
2. P1 stories done: Website looks professional and works reliably.
3. P2/P3 stories done: Enhanced navigation and deeper career content.
4. Final responsive polish.

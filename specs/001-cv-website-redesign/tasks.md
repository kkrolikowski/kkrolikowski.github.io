---
description: "Task list for CV Website Redesign implementation"
---

# Tasks: CV Website Redesign

**Input**: Design documents from `specs/001-cv-website-redesign/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan (specs/001-cv-website-redesign/plan.md)
- [x] T002 [P] Link UIkit 3.20.8 and Google Fonts (Inter, Poppins) in index.html
- [x] T003 [P] Configure global CSS reset and typography in style.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure for theming and navigation MUST be complete before user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Implement CSS Custom Properties for Light/Dark themes in style.css
- [x] T005 [P] Create theme toggle logic and persistence in script.js
- [x] T006 [P] Implement sticky navigation menu with theme toggle button in index.html
- [x] T007 [P] Enable smooth scrolling for all anchor links in style.css and script.js
- [x] T008 Configure native lazy loading defaults for images in index.html

**Checkpoint**: Foundation ready - theme toggle and navigation are functional

---

## Phase 3: User Story 1 - Review Professional Experience (Priority: P1) 🎯 MVP

**Goal**: Vertical interactive timeline showing professional journey

**Independent Test**: Scroll to #career section and verify vertical timeline layout with all roles from previous version

- [x] T009 [P] [US1] Define vertical timeline CSS layout and responsive breakpoints in style.css
- [x] T010 [US1] Extract career content from old index.html and map to new timeline structure in index.html
- [x] T011 [P] [US1] Implement Hero section (Bio) with me.png and high-level summary in index.html
- [x] T012 [US1] Style Hero section to 80vh minimum height in style.css

**Checkpoint**: User Story 1 (MVP) is fully functional and testable independently

---

## Phase 4: User Story 2 - Assess Technical Skills (Priority: P2)

**Goal**: Categorized skills section with technical icons

**Independent Test**: Verify "Technical Skills" section has categorized groups (Cloud, IaC, etc.) with icons

- [x] T013 [P] [US2] Link FontAwesome CDN in index.html for technical icons
- [x] T014 [US2] Implement Skills section layout with category headers in index.html
- [x] T015 [P] [US2] Map technologies from timeline to Skill entries in index.html
- [x] T016 [US2] Apply styling for skill badges and category grouping in style.css

**Checkpoint**: User Story 2 is functional and integrates with the timeline data

---

## Phase 5: User Story 3 - Interests & Hobbies (Priority: P3)

**Goal**: Engaging hobbies section with placeholder content

**Independent Test**: Verify #hobbies section exists with icons and placeholder descriptions

- [x] T017 [P] [US3] Implement Hobby section layout in index.html
- [x] T018 [US3] Generate placeholder content for Homelab, Smart Home, and Hiking in index.html
- [x] T019 [P] [US3] Add descriptive icons for each hobby category in index.html
- [x] T020 [US3] Finalize hobby section visual polish in style.css

**Checkpoint**: All user stories are independently functional and integrated

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and quality validation

- [x] T021 [P] Perform accessibility audit (WAVE/axe) and fix contrast/aria-label issues
- [x] T022 [P] Responsive design validation across mobile, tablet, and desktop breakpoints
- [x] T023 Run Google Lighthouse audit and optimize for >90 performance score
- [x] T024 Validate all anchor links and smooth scroll behavior
- [x] T025 Update quickstart.md with final implementation details

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 - BLOCKS all user stories.
- **User Stories (Phase 3-5)**: All depend on Phase 2.
- **Polish (Phase 6)**: Depends on completion of desired user stories.

### User Story Dependencies

- **US1 (P1)**: Independent after Phase 2.
- **US2 (P2)**: Independent after Phase 2.
- **US3 (P3)**: Independent after Phase 2.

### Parallel Opportunities

- T002 and T003 (Phase 1)
- T005, T006, T007 (Phase 2)
- T009 and T011 (Phase 3)
- T013 and T015 (Phase 4)
- T017 and T019 (Phase 5)
- All Phase 6 tasks marked [P]

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup (Phase 1).
2. Complete Foundational (Phase 2).
3. Complete User Story 1 (Phase 3).
4. **STOP and VALIDATE**: Verify vertical timeline and hero section.

### Incremental Delivery

1. Foundation ready (Theme + Nav).
2. Add US1 -> Test MVP.
3. Add US2 -> Verify skill mapping.
4. Add US3 -> Verify hobbies.
5. Final Polish.

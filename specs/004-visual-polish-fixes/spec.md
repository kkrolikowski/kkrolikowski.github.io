# Feature Specification: Visual Polish & UX Fixes

**Feature Branch**: `004-visual-polish-fixes`

**Created**: 2026-05-13

**Status**: Draft

**Input**: User description: "Trzeba naprawić Przełączanie trybu Dark mode / Light mode Nadal nie działa. Przełączanie powinno odbywać się za pomocą ikonki księżcyca i słońca. Obrazek laptopa na timelinie jest śmiesznie mały, jest to bug na stronie. Należy go wkomponować w taki sposób aby pasował do layoutu. Moje zdjęcie w hero section nie pasuje. Jest za dużo pustej przestrzeni pod zdjęciem. Moim zdaniem zdjęcie powinno zostać wyrównane do linii: \"Krzysztof Królikowski\" Pod zdjęciem trzeba zaaranżować jakieś pseudo elementy, które będą pasować do strony i zapełnią pustą przestrzeń pod zdjęciem. Ponieważ zdjęcie ma zaokrąglone rogi i pozycje w timeline, Przyciski view experience oraz Technical skills również powinny takie mieć. podświetlanie w menu na górze powinno podążać za aktualną pozycją na stronie. Przykładowo. Viewport jest na Professional career, to Career w menu powinno zostawać zielone itd. Elementy timeline wyglądają dobrze, Dodajmy jeszcze informację z nazwą zespołu w którym pracowałem. Na potrzeby tej wersji strony zaproponuj własne."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Fixed Theme Switching (Priority: P1)

As a visitor, I want a reliable theme toggle that uses intuitive sun/moon icons so that I can switch between modes without confusion.

**Why this priority**: Core UX feature that the user reported as still broken.

**Independent Test**: Click toggle, check if icons swap between sun (light) and moon (dark), verify theme changes.

**Acceptance Scenarios**:

1. **Given** dark mode is active, **When** I look at the toggle, **Then** I see a sun icon.
2. **Given** light mode is active, **When** I look at the toggle, **Then** I see a moon icon.
3. **Given** I click the toggle, **Then** the theme switches immediately and correctly.

---

### User Story 2 - Hero Section Alignment & Polish (Priority: P1)

As a visitor, I want the hero section to look balanced and professional, with the author's photo properly aligned and the space utilized effectively.

**Why this priority**: First impression of the website.

**Independent Test**: Visual check of photo alignment with the name "Krzysztof Królikowski" and presence of decorative pseudo-elements.

**Acceptance Scenarios**:

1. **Given** I am in the hero section, **When** I look at the photo, **Then** its top edge is aligned with the top of the name heading.
2. **Given** the space under the photo, **When** I scroll, **Then** I see decorative pseudo-elements that fill the gap elegantly.

---

### User Story 3 - Visual Consistency & Navigation (Priority: P2)

As a visitor, I want consistent styling for interactive elements and clear indication of where I am on the page.

**Why this priority**: Improves overall professional feel and usability.

**Independent Test**: Check button border-radius and navigation menu highlighting during scroll.

**Acceptance Scenarios**:

1. **Given** buttons in the hero section, **When** I look at them, **Then** they have rounded corners matching the photo and timeline items.
2. **Given** I scroll through the page, **When** a section enters the viewport, **Then** the corresponding menu item is highlighted (e.g., in green).

---

### User Story 4 - Detailed Career History (Priority: P3)

As a visitor, I want to see which specific teams the author worked in to better understand their professional context.

**Why this priority**: Enhances the information value of the CV.

**Independent Test**: Check timeline entries for the presence of "Team" or "Department" names.

**Acceptance Scenarios**:

1. **Given** a career entry, **When** I read the job details, **Then** I see a specific team name (e.g., "Cloud Governance Team").

---

### Edge Cases

- **Sticky Nav Highlighting**: Ensure the highlighting is accurate even when the header is sticky and covers some content.
- **Image Responsiveness**: Ensure the laptop image and hero pseudo-elements scale correctly on mobile.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Theme toggle MUST use Font Awesome or custom icons (Sun/Moon) for better clarity than generic UIkit icons.
- **FR-002**: Timeline laptop image MUST be resized and integrated into the section layout (e.g., as a background element or a properly scaled figure).
- **FR-003**: Hero section image MUST be vertically aligned with the primary heading.
- **FR-004**: Decorative pseudo-elements (e.g., stylized shapes, lines, or background patterns) MUST be added under the hero image.
- **FR-005**: Hero section buttons MUST have a border-radius matching the author's image (approx 20px).
- **FR-006**: Navigation menu MUST implement "ScrollSpy" behavior to highlight the active section.
- **FR-007**: Career timeline entries MUST include proposed team names:
    - Ringier Axel Springer Tech: "Cloud Governance Team" / "Automation & Tools Team"
    - Ringier Axel Springer Polska: "Microservices Migration Taskforce"
    - DreamLab: "Infrastructure Modernization Group"
    - Grupa Onet.pl: "Systems Engineering Unit"
    - Axel Springer Polska: "Network & Hosting Ops"
    - eo Networks: "TCC Hosting Squad"
    - Polish Comittee of Standarization: "IT Systems Support"

### Key Entities *(include if feature involves data)*

- **Career Entry**: Now includes `team_name` field.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% success rate in theme switching with correct icon display.
- **SC-002**: Hero image top alignment matches the baseline/cap-height of the name heading within +/- 5px.
- **SC-003**: Navigation highlighting updates within 100ms of a new section reaching the trigger point (approx 20% viewport height).
- **SC-004**: Laptop image width increased from "tiny" (10px) to a layout-appropriate size (min 200px or full container width depending on placement).

## Assumptions

- **Icons**: Font Awesome is preferred for Sun/Moon as it's already included in the project.
- **Styling**: Vanilla CSS will be used for pseudo-elements and layout fixes.
- **ScrollSpy**: UIkit's built-in ScrollSpy component or custom JS can be used.

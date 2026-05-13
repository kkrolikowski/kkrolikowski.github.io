# Feature Specification: CV Website Redesign

**Feature Branch**: `001-cv-website-redesign`

**Created**: 2026-05-13

**Status**: Draft

**Input**: User description: "Do wykonania jest całkowity redesign strony. Menu strony ma pozostać na górze. Strona powinna zawierać takie bloki jak: * Bio - może w formie hero section? Jeśli będzie zgodny z UX * Timeline z doświadczeniem zawodowym, * Osobny blok z umiejętnościami (technologie), * Zainsteresowania (hobby). Bloczek z technologiami stwórz na podstawie timeline doświadczenia zawodowego. Bloczek z hobby - wygeneruj przykładowe informacje. Zostaną one przeedytowane później. Styl strony powinien obsługiwać dwa tryby: jasny i ciemny, smoothscrolling i lazy loading. Aby urozmaicić stronę - użyj odpowiednich ikon lub prostych grafik. Treść do Timeline i Bio wykorzystaj z obecnej wersji strony."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Review Professional Experience (Priority: P1)

As a potential employer or recruiter, I want to see a clear and engaging overview of Krzysztof's professional journey so that I can quickly assess his seniority and areas of expertise.

**Why this priority**: Core purpose of a CV website. The timeline is the primary data source for assessing professional value.

**Independent Test**: Can be verified by navigating the vertical timeline and confirming all roles from the current version are present with correct details and dates.

**Acceptance Scenarios**:

1. **Given** I am on the home page, **When** I scroll to the Career section, **Then** I see a vertical timeline starting from the most recent role.
2. **Given** the timeline is visible, **When** I view an entry, **Then** I see the job title, company name, dates, and key accomplishments clearly formatted.

---

### User Story 2 - Assess Technical Skills (Priority: P2)

As a technical recruiter, I want to see a dedicated skills section grouped by category so that I can immediately identify if the candidate has the specific technical stack required for a role.

**Why this priority**: High value for technical screening. Mapping skills from experience ensures consistency and credibility.

**Independent Test**: Confirm that the "Skills" section contains categories like "Cloud", "IaC", and "Containerization" with relevant technologies extracted from the professional timeline.

**Acceptance Scenarios**:

1. **Given** the skills section, **When** I view the categories, **Then** I see technologies like AWS, Terraform, and Kubernetes grouped logically.

---

### User Story 3 - Visual Preference & Accessibility (Priority: P3)

As a visitor, I want to toggle between light and dark themes and experience smooth transitions so that I can view the website comfortably in different lighting conditions and on various devices.

**Why this priority**: Enhances UX and demonstrates technical polish/modern web standards.

**Independent Test**: Verify that clicking the theme toggle changes the website's color scheme immediately and persists during navigation.

**Acceptance Scenarios**:

1. **Given** the website is in Light mode, **When** I click the theme toggle, **Then** the background becomes dark and text becomes light.
2. **Given** I am scrolling between sections, **When** I click a menu link, **Then** the page smooth-scrolls to the target section.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST feature a Hero section for the Bio, including a professional image and a high-level summary derived from existing content.
- **FR-002**: System MUST implement a vertical, responsive timeline for Professional Experience.
- **FR-003**: System MUST include a "Technical Skills" section with icons, grouped by expertise areas (Cloud, IaC, Automation, etc.).
- **FR-004**: System MUST include an "Interests/Hobby" section with placeholder content (e.g., Homelab, Smart Home, Hiking).
- **FR-005**: System MUST provide a theme toggle (Light/Dark mode) in the top navigation menu.
- **FR-006**: System MUST implement smooth scrolling for all internal navigation links.
- **FR-007**: System MUST implement lazy loading for images and heavy graphical elements to optimize performance.
- **FR-008**: System MUST maintain the navigation menu at the top of the viewport.
- **FR-009**: System MUST use professional icons or simple graphics to represent different sections and skills.

### Key Entities *(include if feature involves data)*

- **ExperienceEntry**: Represents a single job role (Title, Company, Date Range, Description).
- **Skill**: Represents a technical competency (Name, Category, Icon).
- **Hobby**: Represents a personal interest (Title, Description, Icon).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of existing career data from current `index.html` is accurately represented in the new design.
- **SC-002**: Page achieves a Google Lighthouse score of >90 for Performance and Accessibility.
- **SC-003**: The website is fully responsive, passing visual regression tests on mobile (<768px), tablet (768px-1024px), and desktop (>1024px) resolutions.
- **SC-004**: Theme toggle switches styles in under 100ms with no layout shift.

## Assumptions

- [Assumption about scope boundaries]: The redesign is limited to the single-page layout (landing page).
- [Assumption about content]: Placeholder hobby information will be replaced by the user after implementation.
- [Assumption about accessibility]: The site will follow WCAG 2.1 AA standards for color contrast and screen reader support.
- [Dependency on existing system/service]: Uses UIkit 3.20.8 and FontAwesome/UIkit Icons for visual elements.

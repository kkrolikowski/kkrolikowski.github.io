<!--
Version change: none → 1.0.0
List of modified principles:
- [PRINCIPLE_1_NAME] → I. Mobile-First Responsiveness
- [PRINCIPLE_2_NAME] → II. UX-Driven Design
- [PRINCIPLE_3_NAME] → III. Static Minimalist Architecture
- [PRINCIPLE_4_NAME] → IV. Accessibility & Best Practices
- [PRINCIPLE_5_NAME] → V. Modern Polished Aesthetics
Added sections:
- Technological Stack
- Development Workflow
Removed sections: none
Templates requiring updates:
- .specify/templates/plan-template.md (✅ updated)
- .specify/templates/spec-template.md (✅ updated)
- .specify/templates/tasks-template.md (✅ updated)
- .gemini/commands/speckit.constitution.toml (✅ updated)
Follow-up TODOs: none
-->

# Krzysztof Królikowski CV Website Constitution

## Core Principles

### I. Mobile-First Responsiveness
The website MUST adapt seamlessly to smartphones, tablets, and desktops. Implementation MUST prioritize mobile layouts using fluid grids and media queries before scaling up to larger screens.
Rationale: Ensures the CV is professional and readable regardless of the device the recruiter uses.

### II. UX-Driven Design
Every design decision MUST prioritize user experience. Navigation MUST be intuitive, content MUST be logically structured, and visual hierarchy MUST guide the user to the most important information first.
Rationale: A CV is a communication tool; UX excellence ensures the message is delivered effectively.

### III. Static Minimalist Architecture
The project MUST leverage simple HTML5, CSS3, and basic JavaScript. Use UIkit for component consistency but avoid heavy frameworks that add unnecessary complexity or load time.
Rationale: High performance and long-term maintainability are critical for a personal portfolio.

### IV. Accessibility & Best Practices
Follow web standards for semantic HTML and accessibility (a11y). All interactive elements MUST be keyboard-accessible, and content MUST be readable by screen readers.
Rationale: Inclusivity is a core value of modern web development and reflects professional standards.

### V. Modern Polished Aesthetics
The site MUST maintain a professional and "alive" feel through high-quality typography (Inter/Poppins), consistent spacing, and subtle interactive feedback.
Rationale: Visual appeal establishes trust and demonstrates attention to detail.

## Technological Stack
The project is built using:
- **HTML5**: For semantic structure.
- **CSS3**: For custom styling and layout.
- **UIkit 3.20.8**: For UI components and grid system.
- **Google Fonts**: Inter and Poppins for modern typography.
- **JavaScript**: Minimal use for basic interactivity.

## Development Workflow
All feature development MUST follow the SpecKit process:
1. **Specify**: Define requirements in `spec.md`.
2. **Plan**: Design technical approach in `plan.md`.
3. **Implement**: Execute tasks defined in `tasks.md`.
4. **Validate**: Verify against acceptance criteria and constitution principles.

## Governance
This constitution supersedes all other project practices. Amendments require a clear rationale and must be documented through the versioning system. All contributions MUST be reviewed for compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2026-05-13 | **Last Amended**: 2026-05-13

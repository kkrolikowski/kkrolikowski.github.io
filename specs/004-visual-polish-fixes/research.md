# Research: Visual Polish & UX Fixes

## Decision 1: ScrollSpy Implementation
**Decision**: Use UIkit's native `uk-scrollspy-nav` component.

**Rationale**: Since UIkit is already a project dependency, using its built-in ScrollSpy is the most minimalist and maintainable approach (Principle III).
- Implementation: Add `uk-scrollspy-nav="closest: li; cls: uk-active"` to the navbar `ul`.
- Requirement: Nav links must have `uk-scroll` attribute to work seamlessly with ScrollSpy.

## Decision 2: Theme Toggle Icons (Font Awesome)
**Decision**: Replace UIkit icons with Font Awesome 6.5.1 `<i>` tags.

**Rationale**: User specifically requested Sun/Moon icons, which Font Awesome provides with better visual weight and clarity than the current UIkit icons.
- Light mode (switch to dark): Show Moon icon (`fa-solid fa-moon`).
- Dark mode (switch to light): Show Sun icon (`fa-solid fa-sun`).
- Transition: Use CSS opacity and scale for a smooth icon swap.

## Decision 3: Hero Photo Alignment & Decorative Elements
**Decision**: 
- **Alignment**: Adjust the `uk-grid` child containing the image to have `align-self: flex-start` and ensure vertical alignment with the first line of the `h1`.
- **Decorative Elements**: Add a `::after` pseudo-element to the `.author-image-container` using a stylized geometric pattern (e.g., a "dots" grid or a set of floating squares) to fill the empty space below the photo.

## Decision 4: Laptop Image Integration
**Decision**: Move the laptop image from a standalone `img` tag to a background element for the `.section-header` or a stylized card header within the timeline.

**Rationale**: A 10px wide image is indeed a bug. Integrating it as a large background element with `background-size: cover` and `opacity: 0.1` (or similar) will make it a meaningful part of the layout rather than a "funny" small artifact.

## Decision 5: Unified Border-Radius
**Decision**: Standardize `border-radius` to `20px` across the author image, timeline cards, and hero buttons.

**Rationale**: Consistency in rounded corners (Principle V) creates a cohesive visual identity.

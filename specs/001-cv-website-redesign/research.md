# Research: CV Website Redesign

**Feature**: CV Website Redesign
**Date**: 2026-05-13

## Decision 1: Light/Dark Mode Implementation
**Decision**: Use CSS Custom Properties (Variables) and a data-attribute on the `<html>` element.

**Rationale**:
- CSS variables allow for clean theme definitions.
- Toggling a data-attribute (e.g., `data-theme="dark"`) is highly performant.
- Persistence can be handled via `localStorage` in a tiny script in the `<head>` to prevent Flash of Unstyled Content (FOUC).

**Alternatives considered**:
- Separate stylesheets (rejected as it increases HTTP requests and is harder to maintain).
- Pure JS style injection (rejected for performance and readability reasons).

## Decision 2: Vertical Responsive Timeline
**Decision**: Use a custom CSS implementation leveraging UIkit's grid system and utility classes.

**Rationale**:
- UIkit doesn't have a native "Timeline" component that meets the "vertical vertical" requirement for mobile/desktop parity.
- Custom CSS allows for precise control over the center line and connector icons requested.

**Alternatives considered**:
- Third-party timeline libraries (rejected to keep dependencies minimal).

## Decision 3: Smooth Scrolling & Lazy Loading
**Decision**: Use native browser features (`scroll-behavior: smooth` and `loading="lazy"`).

**Rationale**:
- Native features are performance-optimized and require zero JavaScript.
- Polyfills are unnecessary for modern browser targets.

**Alternatives considered**:
- JS-based smooth scroll libraries (rejected as redundant).

## Decision 4: Icons for Technical Skills
**Decision**: Use UIkit Icons supplemented by FontAwesome (via CDN) for brand-specific technologies (AWS, Terraform).

**Rationale**:
- UIkit Icons are lightweight and integrated.
- FontAwesome provides a wider range of technical/brand icons not present in UIkit.

**Alternatives considered**:
- Custom SVG icons (rejected due to maintenance overhead).

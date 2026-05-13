# UI & Interaction Contract: CV Website Redesign

**Feature**: CV Website Redesign
**Date**: 2026-05-13

## Theme Toggle Interface
The website exposes a theme toggle mechanism via JavaScript.

### Global Attribute
- **Target**: `<html>` element
- **Attribute**: `data-theme`
- **Values**: `light`, `dark`

### Persistence
- **Key**: `theme`
- **Storage**: `window.localStorage`

### DOM Elements
- **Toggle Button**: `#theme-toggle` (MUST be present in navigation menu)
- **Navigation Menu**: `<nav class="uk-navbar-container" uk-sticky>` (MUST be sticky at the top)

## Layout Constraints
- **Vertical Timeline**: Entries MUST alternate sides on desktop (left/right) and stack vertically on mobile.
- **Hero Section**: MUST have a minimum height of `80vh` for visual impact.
- **Section IDs**: `about`, `career`, `skills`, `hobbies` (required for smooth scroll navigation).

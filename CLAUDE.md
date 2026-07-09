# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Krzysztof Królikowski's personal portfolio site, served via GitHub Pages directly from this repo (`kkrolikowski.github.io`). It is a static, single-page site with no build step, no package manager, and no framework — just `index.html`, `style.css`, and `script.js`.

## Development

There is no build/lint/test tooling in this repo. To preview changes, open `index.html` directly in a browser or serve the directory locally, e.g.:

```
python3 -m http.server 8000
```

Deployment is automatic: pushing to `main` publishes via GitHub Pages, since this is a `<username>.github.io` repository.

## Architecture

Everything lives in three files at the repo root:

- **`index.html`** — single page, all content inline (no templating). Structured as stacked `<section>`s in document order: `#hero` → `#experience` (career timeline) → `#work-showcase` → `#skills` → `#hobbies` → `#contact` (footer). The nav bar's anchor links (`#hero`, `#experience`, `#skills`, `#hobbies`, `#contact`) must stay in sync with these section IDs.
- **`style.css`** — plain CSS with `:root` custom properties for theming (`--bg-primary`, `--text-primary`, `--accent`, etc.). Dark mode is the default (`body.dark-mode`); light mode overrides the same variables under `.light-mode`. Sections are marked with `/* Comment */` dividers (Navigation, Hero Section, Technology Eras, Vertical Timeline, Showcase, Skills, Hobbies, Footer, Responsive) — keep new rules under the matching divider rather than appending to the end of the file.
- **`script.js`** — vanilla JS, no dependencies. Runs on `DOMContentLoaded` and wires up: theme toggle (persisted to `localStorage['theme']`, toggles `dark-mode`/`light-mode` classes and swaps the FontAwesome moon/sun icon), scroll-triggered reveal animations via `IntersectionObserver` (applies `.active` to elements with the `.reveal` class), a navbar shadow/padding effect on scroll, and the mobile hamburger menu. Note: the reveal animation's own CSS keyframes/transitions are injected at runtime via a `<style>` tag appended to `<head>`, not defined in `style.css`.

External dependencies are loaded via CDN only (Google Fonts — Outfit/DM Sans, Font Awesome 6.5.1 icons) — there is no local vendoring.

Images/icons live in `assets/` (PNG renders and matching SVGs for each skill area, plus `favicon.png` and `profile.png`).

## Content notes

The `#experience` section is a chronological career timeline grouped into "eras" (`.era-header` blocks: Linux Foundations → Virtualization Shift → Cloud & AI Frontier), each containing one or more `.timeline-item` entries with a date range, role, company, and bullet list. When updating career history, preserve this era-grouping structure and keep entries in reverse-chronological order within `#experience`.

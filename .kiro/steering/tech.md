# Tech Stack

## Overview

Vanilla HTML/CSS static site — no build system, no bundler, no JavaScript framework.

## Languages & Files

- `index.html` — single-page markup
- `style.css` — all custom styles

## External Dependencies (CDN, no local install)

| Dependency | Version | Purpose |
|---|---|---|
| [UIkit](https://getuikit.com/) | 3.20.8 | UI component library (grid, cards, badges, timeline, icons) |
| [Google Fonts – Inter](https://fonts.google.com/specimen/Inter) | latest | Body/UI font |
| [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins) | latest | Primary display font |

## Hosting

- GitHub Pages — push to `main` branch deploys automatically
- No CI/CD pipeline configured

## Common Commands

There is no build step. To work on the site locally:

```bash
# Serve locally with Python (no install required)
python3 -m http.server 8080

# Or with Node (if npx is available)
npx serve .
```

Then open `http://localhost:8080` in a browser.

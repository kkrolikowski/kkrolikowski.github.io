# Project Structure

```
kkrolikowski.github.io/
├── index.html       # Single-page site — all content lives here
├── style.css        # All custom styles
├── me.png           # Author profile photo (used in About section)
├── laptop.jpg       # Decorative image (used in Career section header)
└── README.md        # GitHub profile README (not part of the site)
```

## Conventions

- **Single page** — all sections (`#about`, `#career`, etc.) are in `index.html`. Do not create separate HTML files for new sections.
- **One stylesheet** — all custom CSS goes in `style.css`. Do not introduce additional CSS files or inline `<style>` blocks.
- **No JavaScript** — the site has no JS. Interactivity should come from UIkit attributes (`uk-*`) or pure CSS. Do not add `<script>` tags or `.js` files unless explicitly requested.
- **No package manager** — there is no `package.json`, `node_modules`, or lockfile. Keep it that way unless a build system is intentionally introduced.
- **Images** — place new images in the root directory alongside existing ones. Use descriptive filenames in lowercase with hyphens.
- **UIkit components** — prefer UIkit utility classes and components over writing custom CSS when UIkit already covers the need.
- **Color palette** — primary green `#187552`, body text `#444`. Keep new UI consistent with these values.
- **Typography** — Poppins is the primary font. Use font-weight and text-transform for hierarchy rather than introducing new fonts.
- **Section anchors** — each new section must have an `id` attribute matching its nav link `href` (e.g., `id="projects"` paired with `<a href="#projects">`).

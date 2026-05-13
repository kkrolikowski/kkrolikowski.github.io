# Data Model: UI/UX Refinement & Fixes

## Theme Preference (LocalStorage)

| Key | Type | Description | Values |
|-----|------|-------------|--------|
| `theme` | String | Persists the user's color scheme preference. | `light`, `dark` |

## CSS Variables (Design Tokens)

The following design tokens will be refined to support the new dark mode and aesthetic changes:

| Variable | Light Mode (Default) | Dark Mode (New) |
|----------|----------------------|-----------------|
| `--bg-color` | `#ffffff` | `#1e2124` |
| `--card-bg` | `#ffffff` | `#2b2f33` |
| `--text-color` | `#444444` | `#e1e3e6` |
| `--border-color` | `#dadee4` | `#3e444a` |
| `--hero-bg` | `#f8f9fa` | `#1a1a1a` |
| `--nav-bg` | `rgba(255,255,255,0.9)` | `rgba(30,33,36,0.9)` |
| `--tag-bg` | `rgba(24,117,82,0.05)` | `rgba(225,227,230,0.05)` |
| `--tag-text` | `#187552` | `#e1e3e6` |

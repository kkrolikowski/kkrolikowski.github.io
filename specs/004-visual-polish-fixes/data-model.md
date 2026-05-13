# Data Model: Visual Polish & UX Fixes

## Updated Career Entry

The data structure for professional experience is enriched with specific team/department names to provide more context.

| Field | Type | Description |
|-------|------|-------------|
| `role` | String | Job title (e.g., Senior Engineer) |
| `company` | String | Organization name |
| `team_name` | String | **NEW**: Specific unit/squad (e.g., Cloud Governance Team) |
| `date_range` | String | Period of employment |
| `achievements` | List | Bullet points of key results |

## Theme Icons (UI State)

| State | CSS Class | Icon (Font Awesome) |
|-------|-----------|----------------------|
| Light Mode | `[data-theme="light"]` | `fa-moon` (toggle target) |
| Dark Mode | `[data-theme="dark"]` | `fa-sun` (toggle target) |

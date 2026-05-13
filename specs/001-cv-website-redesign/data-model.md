# Data Model: CV Website Redesign

**Feature**: CV Website Redesign
**Date**: 2026-05-13

## Entities

### ExperienceEntry (Career Section)
Represents a professional role in the vertical timeline.

| Field | Type | Description |
|-------|------|-------------|
| Title | String | Job title (e.g., Senior Engineer) |
| Company | String | Name of the organization |
| Location | String | Geographic location (optional) |
| DateRange | String | Duration (e.g., 07.2024 - present) |
| Description | List | Bullet points of accomplishments |

### Skill (Technologies Section)
Represents a technical competency grouped by category.

| Field | Type | Description |
|-------|------|-------------|
| Name | String | Technology name (e.g., AWS, Terraform) |
| Category | String | Cloud, IaC, Automation, Containers, etc. |
| Icon | String | FontAwesome or UIkit icon class |

### Hobby (Interests Section)
Represents a personal interest.

| Field | Type | Description |
|-------|------|-------------|
| Title | String | Hobby name (e.g., Homelab) |
| Description | String | Brief summary of the interest |
| Icon | String | Visual representation icon |

## Theme Schema
The system state for the visual theme.

| State | Attribute | Persistent Storage |
|-------|-----------|--------------------|
| Light | `data-theme="light"` | `localStorage.setItem('theme', 'light')` |
| Dark | `data-theme="dark"` | `localStorage.setItem('theme', 'dark')` |

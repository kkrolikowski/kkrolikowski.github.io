# Quickstart: UI/UX Refinement & Fixes

## Overview
This feature refines the CV website's layout, theming, and component aesthetics.

## Local Development
1. Open `index.html` in any modern web browser.
2. Use the Browser Console to clear localStorage if you want to reset the theme:
   ```javascript
   localStorage.removeItem('theme');
   location.reload();
   ```

## Verification Steps
1. **Theme Toggle**:
   - Click the moon/sun icon in the header.
   - Verify that the background transitions to a charcoal gray (#1e2124) in dark mode.
   - Refresh the page and ensure the theme persists.
2. **Hero Section**:
   - Verify that the "About" section no longer takes up the full viewport height on desktop.
3. **Timeline**:
   - Verify that all career entries are aligned in a single column on the left.
   - Check that the vertical line connects all items correctly.
4. **Experience Blocks**:
   - Ensure "labels" (Role/Company) are subtle and professional (no more bright green/yellow badges).
   - Verify text contrast in both modes using an accessibility checker.

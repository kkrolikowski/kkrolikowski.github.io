/**
 * Returns the initial theme based on:
 * 1. localStorage["theme"] if it's "dark" or "light"
 * 2. prefers-color-scheme media query
 * 3. Fallback: "light"
 *
 * @returns {"light"|"dark"}
 */
function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch (e) {
    // localStorage unavailable — continue without persistence
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

/**
 * Persists the theme choice to localStorage.
 * Silently ignores errors (e.g. private browsing mode).
 *
 * @param {"light"|"dark"} theme
 */
function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // localStorage unavailable — continue without persistence
  }
}

/**
 * Updates the theme toggle button's icon and aria-label
 * to reflect the given theme.
 *
 * @param {HTMLElement} btn  - the .theme-toggle button
 * @param {"light"|"dark"} theme
 */
function updateToggleUI(btn, theme) {
  if (!btn) return;
  if (theme === "dark") {
    btn.textContent = "🌙";
    btn.setAttribute("aria-label", "Przełącz na tryb jasny");
  } else {
    btn.textContent = "☀️";
    btn.setAttribute("aria-label", "Przełącz na tryb ciemny");
  }
}

/**
 * Reads the initial theme, applies it to <html> via data-theme,
 * and updates the toggle button UI.
 * Called once on DOMContentLoaded.
 */
function initTheme() {
  const theme = getInitialTheme();
  document.documentElement.setAttribute("data-theme", theme);

  const btn = document.querySelector(".theme-toggle");
  updateToggleUI(btn, theme);
}

/**
 * Attaches a click handler to .theme-toggle that:
 * - reads the current data-theme from <html>
 * - switches to the opposite theme
 * - saves the new theme to localStorage
 * - updates the button icon and aria-label
 */
function initThemeToggle() {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    saveTheme(next);
    updateToggleUI(btn, next);
  });
}

/**
 * Initialises the hamburger menu for mobile navigation:
 * - Clicking `.hamburger` toggles `.nav-open` on `<header>` and updates
 *   `aria-expanded` on the button accordingly.
 * - Clicking any nav link while the menu is open closes the menu and resets
 *   `aria-expanded` to `"false"`.
 */
function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".site-header");
  if (!hamburger || !header) return;

  hamburger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  const navLinks = header.querySelectorAll("#main-nav .nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/**
 * Attaches smooth-scroll behaviour to all anchor links whose href starts
 * with "#".  On click the default jump is prevented and the target section
 * is scrolled into view with the native smooth animation.
 *
 * CSS `scroll-behavior: smooth` (defined in the reset) acts as a fallback
 * for browsers that do not support the `behavior` option.
 *
 * Guards against a missing target element — if `document.querySelector(href)`
 * returns null the click is still prevented but no scroll is attempted.
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      event.preventDefault();
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Initialises the active navigation state using IntersectionObserver.
 * Observes every <section> with an id attribute. When a section crosses
 * the 50% visibility threshold, the matching nav link receives the class
 * `.active` and all other nav links lose it.
 *
 * Gracefully degrades — does nothing if IntersectionObserver is not
 * supported by the browser.
 */
function initActiveNav() {
  if (!("IntersectionObserver" in window)) return;

  const navLinks = document.querySelectorAll("#main-nav .nav-list a");
  if (!navLinks.length) return;

  const sections = document.querySelectorAll("section[id]");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initThemeToggle();
  initHamburger();
  initSmoothScroll();
  initActiveNav();
});

// ---------------------------------------------------------------------------
// Exports (used by unit / property-based tests in Node / jsdom environment)
// ---------------------------------------------------------------------------

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getInitialTheme, saveTheme, updateToggleUI, initTheme, initThemeToggle, initHamburger, initSmoothScroll, initActiveNav };
}

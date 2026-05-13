# Implementation Plan: portfolio-redesign

## Overview

Kompletne przepisanie statycznej strony portfolio z UIkit 3 na autorski vanilla HTML5/CSS/JavaScript. Strona pozostaje single-page, hostowana na GitHub Pages. Implementacja obejmuje: semantyczny markup HTML5, autorski CSS z CSS Custom Properties (light/dark mode), vanilla JS (nawigacja, hamburger menu, dark mode toggle, IntersectionObserver), wypełnienie treścią oraz testy właściwości (fast-check) i testy smoke.

Język implementacji: **JavaScript (vanilla, ES2020+)** — bez frameworków, bez bundlera.

---

## Tasks

- [x] 1. Konfiguracja projektu i struktura HTML
  - Przepisz `index.html` od zera: usuń zależność od UIkit CDN, dodaj `lang="pl"`, `<meta name="viewport">`, `<meta charset="UTF-8">`, zachowaj Google Fonts (Poppins)
  - Dodaj `<script src="script.js" defer></script>` na końcu `<head>`
  - Utwórz szkielet semantyczny: `<header class="site-header">`, `<main>`, `<footer>`, sekcje `<section id="about">`, `<section id="career">`, `<section id="skills">`, `<section id="hobbies">`, `<section id="links">`
  - Dodaj markup sticky headera z hamburgerem i theme toggle zgodnie z design.md (sekcja "Sticky Header")
  - Utwórz pusty plik `script.js`
  - _Wymagania: 1.1, 2.1, 2.2, 10.2, 10.3, 10.8, 10.9_

- [x] 2. CSS — Custom Properties, reset i base
  - [x] 2.1 Zdefiniuj CSS Custom Properties w `:root` (light mode) i `[data-theme="dark"]` (dark mode)
    - Zmienne: `--bg-color`, `--text-color`, `--primary-color`, `--card-bg`, `--border-color`, `--header-bg`, `--shadow-color`
    - Light mode: `--bg-color: #ffffff`, `--text-color: #333333`, `--primary-color: #187552`
    - Dark mode: `--bg-color: #1a1a2e`, `--text-color: #e0e0e0`, `--primary-color: #32d296`
    - Dodaj `transition: background-color 300ms ease, color 300ms ease` na `html`
    - _Wymagania: 8.3, 8.5, 8.6_
  - [ ]* 2.2 Napisz test smoke dla CSS Custom Properties
    - Sprawdź że zmienne `--bg-color` i `--text-color` są zdefiniowane dla `:root` i `[data-theme="dark"]`
    - Sprawdź że media queries używają `min-width` (mobile-first)
    - _Wymagania: 8.5, 8.6, 1.2_
  - [x] 2.3 Napisz reset CSS i style bazowe
    - Box-sizing reset, margin/padding reset, `scroll-behavior: smooth` na `html`
    - Typografia bazowa: font-family Poppins, line-height 1.5, rozmiary nagłówków
    - Kontener `.container`: `max-width: 1200px`, `margin: 0 auto`, `padding: 0 1rem`
    - _Wymagania: 1.5, 1.6_

- [x] 3. CSS — Sticky header i nawigacja (desktop)
  - [x] 3.1 Zaimplementuj style `.site-header`
    - `position: sticky; top: 0; z-index: 100`
    - Layout: flexbox, `justify-content: space-between`, `align-items: center`
    - Tło `var(--header-bg)`, cień `box-shadow`
    - _Wymagania: 2.1_
  - [x] 3.2 Zaimplementuj style `.nav-list` i linków nawigacyjnych
    - Flexbox, `gap`, `list-style: none`
    - Style linków: kolor `var(--primary-color)`, hover underline, klasa `.active` (zmiana koloru/podkreślenie)
    - Style `.theme-toggle`: przycisk bez domyślnych stylów przeglądarki, kursor pointer
    - _Wymagania: 2.2, 2.4, 2.7_
  - [ ]* 3.3 Napisz test smoke dla sticky headera
    - Sprawdź że `.site-header` ma `position: sticky` lub `position: fixed` w CSS
    - _Wymagania: 2.1_

- [x] 4. CSS — Hamburger menu (mobile)
  - [x] 4.1 Zaimplementuj style `.hamburger` i `.hamburger-line`
    - Przycisk widoczny tylko poniżej 768px (`display: none` na ≥768px)
    - Trzy linie (`span.hamburger-line`): `display: block`, `width: 24px`, `height: 2px`, `background: var(--text-color)`
    - Animacja transformacji do ikony X gdy `.nav-open` na `<header>`
    - _Wymagania: 2.5_
  - [x] 4.2 Zaimplementuj style menu mobilnego
    - `#main-nav` na mobile: `display: none` domyślnie, `display: block` gdy `.nav-open` na `<header>`
    - `.nav-list` na mobile: `flex-direction: column`, pełna szerokość, tło `var(--header-bg)`
    - _Wymagania: 2.5, 2.6_

- [x] 5. CSS — Sekcja About
  - [x] 5.1 Zaimplementuj layout sekcji About
    - Mobile: jednokolumnowy, zdjęcie wycentrowane nad tekstem
    - ≥768px: CSS Grid `grid-template-columns: 1fr 2fr`, zdjęcie w lewej kolumnie
    - _Wymagania: 3.2, 3.3_
  - [x] 5.2 Zaimplementuj style `.about-photo`
    - `border-radius: 50%`, `box-shadow`, `min-width: 120px`, `min-height: 120px`
    - _Wymagania: 3.4_
  - [ ]* 5.3 Napisz test smoke dla sekcji About
    - Sprawdź że `.about-photo` ma `border-radius: 50%` w CSS
    - _Wymagania: 3.4_

- [x] 6. CSS — Sekcja Career (timeline)
  - Zaimplementuj style `.timeline` (lista `<ol>`) i `.timeline-item`
  - Pionowa linia osi czasu: `::before` na `.timeline-item` z `border-left` lub `position: absolute`
  - `.timeline-marker`: okrągły znacznik na osi czasu
  - `.timeline-card`: karta z `background: var(--card-bg)`, `border-radius`, `box-shadow`, padding
  - `.timeline-card-header`: flexbox, wrap, gap między `.timeline-period`, `.timeline-employer`, `.timeline-role`
  - Mobile: układ jednokolumnowy, wszystkie pola widoczne
  - _Wymagania: 4.1, 4.2, 4.3, 4.6_

- [x] 7. CSS — Sekcja Technical Skills
  - Zaimplementuj `.skills-grid`: CSS Grid, `grid-template-columns: 1fr` (mobile)
  - ≥768px: `repeat(2, 1fr)`, ≥1024px: `repeat(3, 1fr)`
  - `.skill-box`: karta z `background: var(--card-bg)`, `border-radius`, `box-shadow`, padding
  - `.skill-box-header`: flexbox, ikona + nagłówek `<h3>`
  - `.skill-list`: lista technologii bez domyślnych stylów listy lub z niestandardowymi markerami
  - _Wymagania: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 8. CSS — Sekcja Hobbies
  - Zaimplementuj `.hobbies-grid`: CSS Grid analogiczny do `.skills-grid` (1 → 2 → 3 kolumny)
  - `.hobby-card`: karta z `background: var(--card-bg)`, `border-radius`, `box-shadow`, padding
  - Nagłówek `<h3>` i paragraf `<p>` wewnątrz karty
  - _Wymagania: 6.1, 6.2, 6.3, 6.4_

- [x] 9. CSS — Sekcja Links
  - Zaimplementuj `.links-grid`: CSS Grid lub Flexbox, `flex-wrap: wrap`, `gap`
  - `.link-card`: wizualny kafelek/przycisk z `background: var(--card-bg)`, `border-radius`, `box-shadow`, padding, `text-decoration: none`
  - Flexbox wewnątrz karty: ikona + nazwa serwisu, `align-items: center`, `gap`
  - Hover state: zmiana tła lub obramowania
  - _Wymagania: 7.1, 7.2_

- [x] 10. CSS — Media queries i dostępność
  - [x] 10.1 Zaimplementuj media queries mobile-first
    - `@media (min-width: 768px)`: 2 kolumny dla `.skills-grid`, `.hobbies-grid`; layout dwukolumnowy dla `.about-inner`; ukrycie `.hamburger`; wyświetlenie `#main-nav`
    - `@media (min-width: 1024px)`: 3 kolumny dla `.skills-grid`, `.hobbies-grid`; kontener do 1200px
    - _Wymagania: 1.2, 1.3, 1.4, 1.5_
  - [x] 10.2 Zaimplementuj focus indicators i style dostępności
    - `:focus-visible` outline: `2px solid var(--primary-color)`, `outline-offset: 2px` dla wszystkich interaktywnych elementów
    - Upewnij się że kontrast tekstu spełnia WCAG AA (≥4.5:1) dla obu trybów
    - _Wymagania: 10.1, 10.4, 10.5_

- [x] 11. JS — `initTheme()`
  - [x] 11.1 Zaimplementuj funkcję `getInitialTheme()` i `initTheme()` w `script.js`
    - Odczyt `localStorage.getItem("theme")` w bloku `try/catch`
    - Jeśli wartość to `"dark"` lub `"light"` → zastosuj; w przeciwnym razie sprawdź `prefers-color-scheme`; fallback: `"light"`
    - Ustaw `document.documentElement.setAttribute("data-theme", theme)`
    - Zaktualizuj ikonę toggle (☀️ / 🌙) i `aria-label` przycisku
    - _Wymagania: 8.1, 8.7, 8.9_
  - [ ]* 11.2 Napisz test właściwości P8 dla `initTheme()`
    - **Właściwość 8: Inicjalizacja trybu z preferencji systemowych i obsługa fallbacku**
    - Generuj losowe wartości `localStorage["theme"]` (w tym nieprawidłowe stringi, null, pusty string) i losowe wartości `prefers-color-scheme`; sprawdź że `getInitialTheme()` zawsze zwraca `"light"` lub `"dark"`
    - **Validates: Wymagania 8.7, 8.9**
    - _Wymagania: 8.7, 8.9_
  - [x] 11.3 Zaimplementuj obsługę kliknięcia theme toggle
    - Odczyt aktualnego `data-theme` z `<html>`, przełączenie na przeciwny tryb
    - Wywołanie `saveTheme(theme)` z `try/catch` wokół `localStorage.setItem`
    - Aktualizacja `aria-label` i ikony przycisku
    - _Wymagania: 8.2, 8.3, 8.4, 8.8, 10.7_
  - [ ]* 11.4 Napisz test właściwości P7 dla spójności stanu toggle
    - **Właściwość 7: Spójność stanu przełącznika trybu**
    - Generuj losowy stan theme (`"light"` lub `"dark"`); wywołaj funkcję aktualizacji UI; sprawdź że `data-theme` na `<html>`, ikona i `aria-label` są spójne ze stanem
    - **Validates: Wymagania 8.3, 8.4, 10.7**
    - _Wymagania: 8.3, 8.4, 10.7_
  - [ ]* 11.5 Napisz test właściwości P9 dla persystencji localStorage
    - **Właściwość 9: Persystencja trybu w localStorage**
    - Generuj losowy stan theme; wywołaj `saveTheme()`; sprawdź że `localStorage["theme"]` zawiera odpowiednią wartość; wywołaj `getInitialTheme()` z tym localStorage; sprawdź że tryb jest identyczny z zapisanym
    - **Validates: Wymagania 8.8**
    - _Wymagania: 8.8_

- [x] 12. JS — `initHamburger()`
  - [x] 12.1 Zaimplementuj funkcję `initHamburger()` w `script.js`
    - Kliknięcie `.hamburger` → toggle klasy `.nav-open` na `<header>` + aktualizacja `aria-expanded` (`"true"` / `"false"`)
    - Kliknięcie linku nawigacyjnego gdy menu otwarte → usunięcie `.nav-open` + `aria-expanded="false"`
    - _Wymagania: 2.5, 2.6, 10.5_

- [x] 13. JS — `initSmoothScroll()`
  - [x] 13.1 Zaimplementuj funkcję `initSmoothScroll()` w `script.js`
    - Nasłuchuj kliknięć na linkach nawigacyjnych z `href` zaczynającym się od `#`
    - `event.preventDefault()`, `document.querySelector(href).scrollIntoView({ behavior: "smooth" })`
    - CSS `scroll-behavior: smooth` jako fallback (już zdefiniowany w reset)
    - _Wymagania: 2.3_

- [x] 14. JS — `initActiveNav()`
  - [x] 14.1 Zaimplementuj funkcję `initActiveNav()` w `script.js`
    - Sprawdzenie `if ("IntersectionObserver" in window)` przed inicjalizacją (graceful degradation)
    - `IntersectionObserver` z `threshold: 0.5` obserwuje każdą `<section>` z `id`
    - Gdy sekcja wchodzi w viewport → odpowiedni link w nav otrzymuje klasę `.active`, pozostałe ją tracą
    - _Wymagania: 2.4_
  - [ ]* 14.2 Napisz test właściwości P1 dla active state nawigacji
    - **Właściwość 1: Active state nawigacji odpowiada widocznej sekcji**
    - Generuj losową sekcję z listy (about, career, skills, hobbies, links); symuluj wywołanie callbacku IntersectionObserver; sprawdź że tylko odpowiedni link ma klasę `active`, a pozostałe jej nie mają
    - **Validates: Wymagania 2.4**
    - _Wymagania: 2.4_
  - [x] 14.3 Podepnij wszystkie funkcje inicjalizacyjne pod `DOMContentLoaded` w `script.js`
    - `document.addEventListener("DOMContentLoaded", () => { initTheme(); initHamburger(); initSmoothScroll(); initActiveNav(); })`
    - _Wymagania: 2.1, 2.3, 2.4, 2.5, 8.1_

- [ ] 15. Checkpoint — Weryfikacja struktury i JS
  - Upewnij się że wszystkie testy przechodzą, zapytaj użytkownika jeśli pojawiają się pytania.

- [-] 16. Treść — Wypełnienie sekcji danymi
  - [-] 16.1 Wypełnij sekcję About
    - Zdjęcie `me.png` z `loading="eager"`, `alt="Krzysztof Królikowski — zdjęcie profilowe"`, `width="300"`, `height="300"`
    - `<h1>Krzysztof Królikowski</h1>`, `<h2 class="about-title">Senior IT/DevOps Engineer</h2>`
    - Bio 50–300 znaków opisujące 20+ lat doświadczenia w IT/DevOps
    - _Wymagania: 3.1, 3.5, 9.2, 10.6, 10.9_
  - [-] 16.2 Wypełnij sekcję Career danymi z obecnego `index.html`
    - Przepisz 8 pozycji zawodowych na nowy markup `.timeline` / `.timeline-item` / `.timeline-card`
    - Pozycja aktualna (07.2024 – obecnie): etykieta "obecnie" zamiast daty zakończenia
    - Zachowaj kolejność od najnowszej do najstarszej
    - `laptop.jpg` z `loading="lazy"`, `alt=""` (dekoracyjny)
    - _Wymagania: 4.1, 4.2, 4.3, 4.4, 4.5, 9.1, 9.3, 10.6_
  - [ ]* 16.3 Napisz test właściwości P2 dla kolejności timeline
    - **Właściwość 2: Kolejność pozycji na osi czasu jest malejąca**
    - Parsuj HTML; wyodrębnij daty rozpoczęcia z `.timeline-period`; sprawdź że każda kolejna data jest wcześniejsza lub równa poprzedniej
    - **Validates: Wymagania 4.1**
    - _Wymagania: 4.1_
  - [ ]* 16.4 Napisz test właściwości P3 dla etykiety "obecnie"
    - **Właściwość 3: Aktualne zatrudnienie wyświetla etykietę "obecnie"**
    - Parsuj HTML; znajdź pozycję z `isCurrent: true` (brak daty zakończenia); sprawdź że renderowany HTML zawiera tekst "obecnie"
    - **Validates: Wymagania 4.4**
    - _Wymagania: 4.4_
  - [-] 16.5 Wypełnij sekcję Technical Skills
    - Utwórz 6 elementów `.skill-box` dla kategorii: Cloud & Infrastructure (☁️), Containerization & Orchestration (🐳), CI/CD & Automation (⚙️), Operating Systems (🐧), Scripting & Programming (💻), Monitoring & Networking (📡)
    - Każdy box: `<h3>` z nazwą kategorii, `<span class="skill-icon" aria-hidden="true">` z emoji, `<ul class="skill-list">` z technologiami
    - _Wymagania: 5.1, 5.2, 5.3, 5.6_
  - [ ]* 16.6 Napisz test właściwości P4 dla kompletności Skill_Box
    - **Właściwość 4: Każdy Skill_Box zawiera wszystkie wymagane elementy**
    - Parsuj HTML; dla każdego `.skill-box` sprawdź obecność: elementu z nazwą kategorii (`h3`), elementu z ikoną (`.skill-icon`), listy z co najmniej jedną technologią (`.skill-list li`)
    - **Validates: Wymagania 5.3**
    - _Wymagania: 5.3_
  - [-] 16.7 Wypełnij sekcję Hobbies
    - Utwórz co najmniej 3 karty `.hobby-card` z `<h3>` (max 30 znaków) i `<p>` (max 150 znaków)
    - _Wymagania: 6.1, 6.2, 6.5_
  - [ ]* 16.8 Napisz test właściwości P5 dla ograniczeń HobbyCard
    - **Właściwość 5: Ograniczenia długości treści kart Hobbies**
    - Parsuj HTML; dla każdej `.hobby-card` sprawdź że `h3.textContent.length <= 30` i `p.textContent.length <= 150`
    - **Validates: Wymagania 6.2**
    - _Wymagania: 6.2_
  - [-] 16.9 Wypełnij sekcję Links
    - Utwórz co najmniej 2 karty `.link-card`: LinkedIn (💼, `https://linkedin.com/in/kkrolikowski`) i GitHub (🐙, `https://github.com/kkrolikowski`)
    - Każdy link: `target="_blank"`, `rel="noopener noreferrer"`, `<span class="link-icon" aria-hidden="true">`, `<span class="link-name">`
    - _Wymagania: 7.1, 7.2, 7.3, 7.4, 7.5_
  - [ ]* 16.10 Napisz test właściwości P6 dla kompletności i bezpieczeństwa linków
    - **Właściwość 6: Kompletność i bezpieczeństwo linków zewnętrznych**
    - Parsuj HTML; dla każdego `.link-card` sprawdź: obecność `.link-icon` i `.link-name`, `href` zaczyna się od `https://`, `target="_blank"`, `rel` zawiera `"noopener"` i `"noreferrer"`
    - **Validates: Wymagania 7.2, 7.3, 7.4**
    - _Wymagania: 7.2, 7.3, 7.4_

- [ ] 17. Testy właściwości (PBT) — fast-check
  - [ ] 17.1 Skonfiguruj środowisko testowe fast-check
    - Utwórz `package.json` z zależnościami: `fast-check`, `jest`, `jest-environment-jsdom`
    - Utwórz `jest.config.js` z `testEnvironment: "jsdom"` i `testMatch: ["**/*.pbt.test.js", "**/*.smoke.test.js"]`
    - Utwórz katalog `tests/` z plikami testów
    - _Wymagania: (infrastruktura testów)_
  - [ ]* 17.2 Napisz test właściwości P10 dla lazy loading
    - **Właściwość 10: Lazy loading dla obrazków innych niż zdjęcie profilowe**
    - Parsuj HTML; dla każdego `<img>` który nie ma `src="me.png"`; sprawdź że `loading === "lazy"`
    - **Validates: Wymagania 9.1, 9.3**
    - _Wymagania: 9.1, 9.3_
  - [ ]* 17.3 Napisz test właściwości P11 dla atrybutu alt
    - **Właściwość 11: Obecność atrybutu alt na wszystkich obrazkach**
    - Parsuj HTML; dla każdego `<img>` sprawdź że atrybut `alt` jest obecny (nie `undefined` ani brakujący)
    - **Validates: Wymagania 10.6**
    - _Wymagania: 10.6_

- [ ] 18. Testy smoke i dostępność
  - [ ] 18.1 Napisz testy smoke dla struktury HTML
    - Sprawdź obecność `<meta name="viewport">` w `<head>`
    - Sprawdź `lang="pl"` na `<html>`
    - Sprawdź obecność elementów semantycznych: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
    - Sprawdź `aria-label="Nawigacja główna"` na `<nav>`
    - Sprawdź poprawną hierarchię nagłówków (h1 → h2 → h3, bez pomijania poziomów)
    - Sprawdź obecność co najmniej 6 elementów `.skill-box`
    - Sprawdź obecność co najmniej 3 kart `.hobby-card`
    - Sprawdź obecność co najmniej 2 linków `.link-card` w sekcji `#links`
    - Sprawdź `loading="eager"` lub brak atrybutu `loading` na `img[src="me.png"]`
    - _Wymagania: 1.1, 5.1, 6.1, 7.1, 9.2, 10.2, 10.3, 10.8, 10.9_
  - [ ] 18.2 Weryfikacja WCAG AA — aria-labels, focus indicators, hierarchia nagłówków
    - Sprawdź że `.theme-toggle` ma dynamiczny `aria-label` (`"Przełącz na tryb ciemny"` / `"Przełącz na tryb jasny"`)
    - Sprawdź że `.hamburger` ma `aria-label` i `aria-expanded`
    - Sprawdź że wszystkie interaktywne elementy mają widoczny focus indicator (`:focus-visible` outline ≥2px)
    - Sprawdź że `<h1>` zawiera imię i nazwisko właściciela strony
    - _Wymagania: 10.1, 10.4, 10.5, 10.7, 10.8, 10.9_

- [ ] 19. Checkpoint końcowy — Weryfikacja całości
  - Upewnij się że wszystkie testy przechodzą, zapytaj użytkownika jeśli pojawiają się pytania.

---

## Notes

- Zadania oznaczone `*` są opcjonalne i mogą być pominięte dla szybszego MVP
- Każde zadanie odwołuje się do konkretnych wymagań dla pełnej identyfikowalności
- Testy właściwości (PBT) używają biblioteki **fast-check** uruchamianej przez Jest z `jest-environment-jsdom`
- Testy smoke i PBT dla HTML parsują `index.html` jako string DOM — nie wymagają uruchomionej przeglądarki
- Testy JS (P1, P7, P8, P9) testują wyeksportowane funkcje z `script.js` w izolacji
- Checkpointy zapewniają przyrostową walidację przed przejściem do kolejnych etapów
- Brak systemu budowania — `package.json` tworzony wyłącznie na potrzeby testów, nie jest częścią strony produkcyjnej


## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["2.1", "2.3"] },
    { "id": 1, "tasks": ["2.2", "3.1", "3.2", "4.1", "4.2"] },
    { "id": 2, "tasks": ["3.3", "5.1", "5.2", "6", "7", "8", "9"] },
    { "id": 3, "tasks": ["5.3", "10.1", "10.2"] },
    { "id": 4, "tasks": ["11.1", "12.1", "13.1", "14.1"] },
    { "id": 5, "tasks": ["11.2", "11.3", "14.2", "14.3"] },
    { "id": 6, "tasks": ["11.4", "11.5", "17.1"] },
    { "id": 7, "tasks": ["16.1", "16.2", "16.5", "16.7", "16.9"] },
    { "id": 8, "tasks": ["16.3", "16.4", "16.6", "16.8", "16.10", "17.2", "17.3"] },
    { "id": 9, "tasks": ["18.1", "18.2"] }
  ]
}
```

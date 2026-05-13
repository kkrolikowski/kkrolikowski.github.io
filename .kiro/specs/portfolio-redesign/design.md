# Dokument Projektowy: portfolio-redesign

## Overview

Celem redesignu jest zastąpienie obecnego layoutu opartego na UIkit 3 w pełni autorskim rozwiązaniem vanilla HTML5/CSS/JavaScript — bez zewnętrznych bibliotek UI. Strona pozostaje single-page, hostowana na GitHub Pages.

Kluczowe zmiany względem stanu obecnego:

| Obszar | Stan obecny | Stan docelowy |
|---|---|---|
| CSS framework | UIkit 3.20.8 (CDN) | Brak — autorski `style.css` |
| JavaScript | Brak | `script.js` (vanilla JS) |
| Responsywność | Brak media queries | Mobile-first, 3 breakpointy |
| Nawigacja | Statyczna, bez sticky | Sticky header + hamburger menu |
| Dark Mode | Brak | Toggle + localStorage + `prefers-color-scheme` |
| Dostępność | Minimalna | WCAG 2.1 AA |
| Lazy loading | Brak | Natywny `loading="lazy"` |

Strona zachowuje istniejące pliki (`index.html`, `style.css`, `me.png`, `laptop.jpg`) i rozszerza je o `script.js`. Nie wprowadza się systemu budowania, package managera ani frameworków JS.

---

## Architecture

### Struktura plików

```
kkrolikowski.github.io/
├── index.html      # Cały markup strony (single-page)
├── style.css       # Wszystkie style (przepisane od zera, mobile-first)
├── script.js       # Vanilla JS: nawigacja, dark mode, IntersectionObserver
├── me.png          # Zdjęcie profilowe (sekcja About, loading="eager")
└── laptop.jpg      # Zdjęcie dekoracyjne (sekcja Career, loading="lazy")
```

### Przepływ inicjalizacji JavaScript

```
DOMContentLoaded
  ├── initTheme()          → odczyt localStorage / prefers-color-scheme
  ├── initHamburger()      → obsługa menu mobilnego
  ├── initSmoothScroll()   → kliknięcia linków nawigacyjnych
  └── initActiveNav()      → IntersectionObserver na sekcjach
```

### Schemat warstw CSS

```
style.css
  ├── 1. CSS Custom Properties (zmienne kolorów, typografii)
  │     ├── :root          → Light Mode (domyślny)
  │     └── [data-theme="dark"]  → Dark Mode
  ├── 2. Reset / Base
  ├── 3. Layout (header, main, footer, kontenery)
  ├── 4. Komponenty (nav, hamburger, toggle, karty, timeline, skill-box)
  ├── 5. Sekcje (about, career, skills, hobbies, links)
  └── 6. Media Queries
        ├── @media (min-width: 768px)   → Breakpoint_Tablet
        └── @media (min-width: 1024px)  → Breakpoint_Desktop
```

---

## Components and Interfaces

### 1. Sticky Header (`<header>`)

**Markup:**
```html
<header class="site-header">
  <div class="header-inner">
    <a href="#about" class="site-logo">Krzysztof Królikowski</a>
    <button class="hamburger" aria-label="Otwórz menu" aria-expanded="false" aria-controls="main-nav">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <nav id="main-nav" aria-label="Nawigacja główna">
      <ul class="nav-list">
        <li><a href="#about">About</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#links">Links</a></li>
      </ul>
    </nav>
    <button class="theme-toggle" aria-label="Przełącz na tryb ciemny">☀️</button>
  </div>
</header>
```

**CSS:** `position: sticky; top: 0; z-index: 100;`

**JS — hamburger:**
- Kliknięcie `.hamburger` → toggle klasy `.nav-open` na `<header>` + aktualizacja `aria-expanded`
- Kliknięcie linku nawigacyjnego gdy menu otwarte → zamknięcie menu

**JS — active state:**
- `IntersectionObserver` obserwuje każdą `<section>` z progiem `threshold: 0.5`
- Gdy sekcja wchodzi w viewport → odpowiedni link w nav otrzymuje klasę `.active`

### 2. Theme Toggle

**JS — `initTheme()`:**
```
1. Odczytaj localStorage["theme"]
2. Jeśli wartość to "dark" lub "light" → zastosuj
3. Jeśli brak lub nieprawidłowa → sprawdź prefers-color-scheme
4. Fallback: Light Mode
5. Ustaw atrybut data-theme na <html>
```

**JS — obsługa kliknięcia:**
```
1. Odczytaj aktualny data-theme z <html>
2. Przełącz na przeciwny tryb
3. Zapisz do localStorage["theme"]
4. Zaktualizuj aria-label przycisku
5. Zaktualizuj ikonę (☀️ / 🌙)
```

**CSS — przejście:**
```css
html {
  transition: background-color 300ms ease, color 300ms ease;
}
```

### 3. Sekcja About (`<section id="about">`)

**Markup:**
```html
<section id="about">
  <div class="about-inner">
    <img src="me.png" alt="Krzysztof Królikowski — zdjęcie profilowe"
         class="about-photo" width="300" height="300" loading="eager">
    <div class="about-text">
      <h1>Krzysztof Królikowski</h1>
      <h2 class="about-title">Senior IT/DevOps Engineer</h2>
      <p><!-- bio 50–300 znaków --></p>
    </div>
  </div>
</section>
```

**Layout:** CSS Grid `grid-template-columns: 1fr 2fr` (≥768px), jednokolumnowy (<768px).

### 4. Sekcja Career (`<section id="career">`)

**Markup (jeden element timeline):**
```html
<section id="career">
  <h2>Kariera zawodowa</h2>
  <ol class="timeline">
    <li class="timeline-item">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-card">
        <header class="timeline-card-header">
          <time class="timeline-period">07.2024 – obecnie</time>
          <span class="timeline-employer">Ringier Axel Springer Tech</span>
          <span class="timeline-role">Senior Engineer</span>
        </header>
        <ul class="timeline-duties">
          <li>…</li>
        </ul>
      </div>
    </li>
    <!-- kolejne pozycje -->
  </ol>
</section>
```

**CSS:** Pionowa linia osi czasu realizowana przez `::before` na `.timeline-item` (border-left lub pseudo-element z `position: absolute`).

### 5. Sekcja Skills (`<section id="skills">`)

**Markup (jeden Skill_Box):**
```html
<section id="skills">
  <h2>Umiejętności techniczne</h2>
  <div class="skills-grid">
    <div class="skill-box">
      <div class="skill-box-header">
        <span class="skill-icon" aria-hidden="true">☁️</span>
        <h3>Cloud & Infrastructure</h3>
      </div>
      <ul class="skill-list">
        <li>AWS</li>
        <li>Azure</li>
        <li>GCP</li>
        <li>Terraform</li>
        <li>Terragrunt</li>
      </ul>
    </div>
    <!-- 5 kolejnych Skill_Boxów -->
  </div>
</section>
```

**CSS Grid:**
```css
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;                          /* mobile */
}
@media (min-width: 768px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### 6. Sekcja Hobbies (`<section id="hobbies">`)

**Markup (jedna karta):**
```html
<section id="hobbies">
  <h2>Zainteresowania</h2>
  <div class="hobbies-grid">
    <article class="hobby-card">
      <h3><!-- nazwa do 30 znaków --></h3>
      <p><!-- opis do 150 znaków --></p>
    </article>
    <!-- min. 2 kolejne karty -->
  </div>
</section>
```

**CSS Grid:** analogiczny do `.skills-grid` (1 → 2 → 3 kolumny).

### 7. Sekcja Links (`<section id="links">`)

**Markup:**
```html
<section id="links">
  <h2>Linki</h2>
  <div class="links-grid">
    <a href="https://linkedin.com/in/…" class="link-card"
       target="_blank" rel="noopener noreferrer">
      <span class="link-icon" aria-hidden="true">💼</span>
      <span class="link-name">LinkedIn</span>
    </a>
    <a href="https://github.com/kkrolikowski" class="link-card"
       target="_blank" rel="noopener noreferrer">
      <span class="link-icon" aria-hidden="true">🐙</span>
      <span class="link-name">GitHub</span>
    </a>
  </div>
</section>
```

---

## Data Models

Strona jest statyczna — nie ma backendu ani bazy danych. Dane są zakodowane bezpośrednio w HTML. Poniżej opisano struktury logiczne używane przez JavaScript.

### ThemeState

```
ThemeState {
  value: "light" | "dark"
  source: "localStorage" | "prefers-color-scheme" | "default"
}
```

Przechowywany w `localStorage` pod kluczem `"theme"` jako string `"light"` lub `"dark"`.

### NavState

```
NavState {
  isMenuOpen: boolean          // czy hamburger menu jest rozwinięte
  activeSection: string | null // id aktualnie widocznej sekcji
}
```

Stan zarządzany w pamięci przez `script.js` — nie jest persystowany.

### CareerEntry (dane statyczne w HTML)

```
CareerEntry {
  period: string        // "MM.YYYY – MM.YYYY" lub "MM.YYYY – obecnie"
  employer: string      // nazwa pracodawcy
  role: string          // stanowisko
  duties: string[]      // lista 1–10 obowiązków/osiągnięć
  isCurrent: boolean    // true gdy brak daty zakończenia
}
```

### SkillBox (dane statyczne w HTML)

```
SkillBox {
  category: string      // nazwa kategorii
  icon: string          // emoji lub znak Unicode
  technologies: string[] // lista technologii/narzędzi
}
```

Wymagane 6 kategorii: Cloud & Infrastructure, Containerization & Orchestration, CI/CD & Automation, Operating Systems, Scripting & Programming, Monitoring & Networking.

### HobbyCard (dane statyczne w HTML)

```
HobbyCard {
  name: string          // max 30 znaków
  description: string   // max 150 znaków
}
```

### LinkCard (dane statyczne w HTML)

```
LinkCard {
  name: string          // nazwa serwisu
  icon: string          // emoji lub znak Unicode
  url: string           // https://... (niepusty, prawidłowy URL)
}
```

---

## Correctness Properties


*Właściwość to cecha lub zachowanie, które powinno być prawdziwe dla wszystkich poprawnych wykonań systemu — formalny opis tego, co system powinien robić. Właściwości stanowią pomost między czytelną dla człowieka specyfikacją a weryfikowalnymi maszynowo gwarancjami poprawności.*

### Property 1: Active state nawigacji odpowiada widocznej sekcji

*Dla dowolnej* sekcji strony (about, career, skills, hobbies, links), gdy IntersectionObserver zgłosi że sekcja zajmuje ponad 50% wysokości viewportu, link nawigacyjny odpowiadający tej sekcji powinien posiadać klasę `active`, a wszystkie pozostałe linki nawigacyjne nie powinny jej posiadać.

**Validates: Requirements 2.4**

---

### Property 2: Kolejność pozycji na osi czasu jest malejąca

*Dla dowolnej* listy pozycji zawodowych z datami rozpoczęcia, pozycje renderowane w sekcji Career powinny być ułożone od najnowszej do najstarszej — data rozpoczęcia każdej kolejnej pozycji powinna być wcześniejsza lub równa dacie poprzedniej.

**Validates: Requirements 4.1**

---

### Property 3: Aktualne zatrudnienie wyświetla etykietę "obecnie"

*Dla dowolnej* pozycji zawodowej oznaczonej jako aktualna (brak daty zakończenia, `isCurrent: true`), renderowany HTML powinien zawierać etykietę "obecnie" w miejscu daty zakończenia.

**Validates: Requirements 4.4**

---

### Property 4: Każdy Skill_Box zawiera wszystkie wymagane elementy

*Dla dowolnego* elementu Skill_Box w dokumencie, powinien zawierać: element z nazwą kategorii, element z ikoną lub emoji reprezentującą kategorię, oraz listę z co najmniej jedną technologią/narzędziem.

**Validates: Requirements 5.3**

---

### Property 5: Ograniczenia długości treści kart Hobbies

*Dla dowolnej* karty hobby w dokumencie, długość tekstu nazwy powinna wynosić co najwyżej 30 znaków, a długość tekstu opisu powinna wynosić co najwyżej 150 znaków.

**Validates: Requirements 6.2**

---

### Property 6: Kompletność i bezpieczeństwo linków zewnętrznych

*Dla dowolnego* linku zewnętrznego w sekcji Links: (a) powinien zawierać element z ikoną i element z nazwą serwisu, (b) atrybut `href` powinien zaczynać się od `https://` i być niepusty, (c) atrybut `target` powinien być `"_blank"`, (d) atrybut `rel` powinien zawierać zarówno `"noopener"` jak i `"noreferrer"`.

**Validates: Requirements 7.2, 7.3, 7.4**

---

### Property 7: Spójność stanu przełącznika trybu

*Dla dowolnego* stanu trybu kolorystycznego (light lub dark): (a) atrybut `data-theme` na elemencie `<html>` powinien odpowiadać aktualnemu trybowi, (b) ikona wyświetlana przez przycisk toggle powinna być ☀️ dla light mode i 🌙 dla dark mode, (c) atrybut `aria-label` przycisku toggle powinien być `"Przełącz na tryb ciemny"` dla light mode i `"Przełącz na tryb jasny"` dla dark mode.

**Validates: Requirements 8.3, 8.4, 10.7**

---

### Property 8: Inicjalizacja trybu z preferencji systemowych i obsługa fallbacku

*Dla dowolnej* wartości `prefers-color-scheme` (dark lub light) przy pustym lub nieprawidłowym `localStorage["theme"]`, funkcja `initTheme()` powinna zastosować tryb odpowiadający preferencji systemowej. Dla dowolnego stringa w `localStorage["theme"]` który nie jest `"dark"` ani `"light"`, `initTheme()` powinno zastosować tryb z `prefers-color-scheme` lub Light Mode jako fallback.

**Validates: Requirements 8.7, 8.9**

---

### Property 9: Persystencja trybu w localStorage

*Dla dowolnego* aktualnego stanu trybu (light lub dark), po ręcznym przełączeniu przez użytkownika, `localStorage["theme"]` powinien zawierać string `"dark"` lub `"light"` odpowiadający nowemu trybowi. Przy kolejnym wywołaniu `initTheme()` z tym samym localStorage, zastosowany tryb powinien być identyczny z zapisanym.

**Validates: Requirements 8.8**

---

### Property 10: Lazy loading dla obrazków innych niż zdjęcie profilowe

*Dla dowolnego* elementu `<img>` w dokumencie który nie jest zdjęciem profilowym (`src="me.png"`), atrybut `loading` powinien być `"lazy"`.

**Validates: Requirements 9.1, 9.3**

---

### Property 11: Obecność atrybutu alt na wszystkich obrazkach

*Dla dowolnego* elementu `<img>` w dokumencie, atrybut `alt` powinien być obecny (nie `undefined` ani brakujący) — pusty string `""` dla obrazków dekoracyjnych, niepusty opis dla obrazków z treścią istotną dla zrozumienia strony.

**Validates: Requirements 10.6**

---

## Error Handling

### Nieprawidłowa wartość localStorage["theme"]

**Scenariusz:** `localStorage["theme"]` zawiera wartość inną niż `"dark"` lub `"light"` (np. `null`, `undefined`, pusty string, dowolny inny string).

**Obsługa:**
1. Sprawdź `window.matchMedia("(prefers-color-scheme: dark)").matches`
2. Jeśli `true` → zastosuj Dark Mode
3. Jeśli `false` lub API niedostępne → zastosuj Light Mode (fallback)
4. Nie zapisuj nieprawidłowej wartości do localStorage

```javascript
function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  // fallback do preferencji systemowych
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light"; // ostateczny fallback
}
```

### Brak obsługi IntersectionObserver

**Scenariusz:** Starsza przeglądarka nie obsługuje `IntersectionObserver`.

**Obsługa:** Sprawdzenie `if ("IntersectionObserver" in window)` przed inicjalizacją. Jeśli API niedostępne — active state nawigacji nie jest aktywowany (graceful degradation). Smooth scroll działa niezależnie przez CSS `scroll-behavior: smooth`.

### Brak obsługi localStorage

**Scenariusz:** `localStorage` niedostępny (tryb prywatny w niektórych przeglądarkach, blokada przez użytkownika).

**Obsługa:** Opakowanie operacji localStorage w blok `try/catch`. Przy błędzie — zastosuj preferencje systemowe lub Light Mode. Przełącznik działa w sesji, ale preferencja nie jest persystowana.

```javascript
function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // localStorage niedostępny — kontynuuj bez persystencji
  }
}
```

### Brak pliku obrazka

**Scenariusz:** Plik `me.png` lub `laptop.jpg` niedostępny (błąd 404).

**Obsługa:** Natywna obsługa przeglądarki — wyświetlenie placeholder (background-color zdefiniowany w CSS). Atrybut `alt` zapewnia dostępność treści dla czytników ekranu.

### Nieprawidłowy URL linku zewnętrznego

**Scenariusz:** Atrybut `href` linku nie zaczyna się od `https://`.

**Obsługa:** Walidacja na poziomie danych statycznych w HTML (wymaganie 7.4). Brak dynamicznej walidacji w runtime — odpowiedzialność leży po stronie autora treści.

---

## Testing Strategy

### Podejście ogólne

Strona jest statyczną witryną vanilla HTML/CSS/JS bez systemu budowania. Strategia testowania opiera się na:

1. **Testach jednostkowych** — izolowana logika JavaScript (`script.js`)
2. **Testach właściwości (PBT)** — weryfikacja właściwości ogólnych logiki JS
3. **Testach smoke** — weryfikacja struktury HTML i CSS
4. **Testach wizualnych/E2E** — weryfikacja renderowania i interakcji UI

### Biblioteka do testów właściwości

**fast-check** (JavaScript) — uruchamiana przez Node.js bez systemu budowania:

```bash
# Jednorazowe uruchomienie (bez watch mode)
node --experimental-vm-modules node_modules/.bin/jest --testPathPattern="*.pbt.test.js"
```

Każdy test właściwości uruchamia minimum **100 iteracji**.

### Testy jednostkowe (Unit Tests)

Testują konkretne scenariusze i przypadki brzegowe logiki `script.js`:

| Test | Opis | Wymaganie |
|---|---|---|
| `initTheme` — localStorage "dark" | Zastosowanie dark mode z localStorage | 8.8 |
| `initTheme` — localStorage "light" | Zastosowanie light mode z localStorage | 8.8 |
| `initTheme` — brak localStorage, dark system | Zastosowanie dark mode z prefers-color-scheme | 8.7 |
| `initTheme` — brak localStorage, light system | Zastosowanie light mode z prefers-color-scheme | 8.7 |
| `toggleTheme` — z light na dark | Przełączenie i zapis do localStorage | 8.3, 8.8 |
| `toggleTheme` — z dark na light | Przełączenie i zapis do localStorage | 8.3, 8.8 |
| Hamburger menu — otwieranie | Kliknięcie hamburger → menu otwarte | 2.5 |
| Hamburger menu — zamykanie przez link | Kliknięcie linku → menu zamknięte | 2.6 |
| Active nav — sekcja "about" widoczna | Link "About" ma klasę active | 2.4 |
| Active nav — zmiana sekcji | Poprzedni link traci klasę active | 2.4 |

### Testy właściwości (Property-Based Tests)

Każdy test właściwości jest oznaczony tagiem: `Feature: portfolio-redesign, Property N: <treść właściwości>`

| Właściwość | Opis testu | Iteracje |
|---|---|---|
| **P1** — Active state nawigacji | Generuj losową sekcję z listy; symuluj IntersectionObserver callback; sprawdź że tylko odpowiedni link ma klasę active | 100 |
| **P2** — Kolejność timeline | Generuj losową listę pozycji z datami; sprawdź że renderowane daty są posortowane malejąco | 100 |
| **P3** — Etykieta "obecnie" | Generuj losową pozycję z `isCurrent: true`; sprawdź że renderowany HTML zawiera "obecnie" | 100 |
| **P4** — Kompletność Skill_Box | Generuj losowy Skill_Box z nazwą, ikoną i listą technologii; sprawdź że renderowany HTML zawiera wszystkie 3 elementy | 100 |
| **P5** — Ograniczenia HobbyCard | Generuj losowe karty hobby z nazwami ≤30 znaków i opisami ≤150 znaków; sprawdź że renderowany HTML zachowuje te ograniczenia | 100 |
| **P6** — Linki zewnętrzne | Generuj losowe dane linku; sprawdź że renderowany element zawiera ikonę, nazwę, href z https://, target="_blank", rel z noopener+noreferrer | 100 |
| **P7** — Spójność stanu toggle | Generuj losowy stan theme (light/dark); wywołaj funkcję aktualizacji UI; sprawdź data-theme, ikonę i aria-label | 100 |
| **P8** — Inicjalizacja theme | Generuj losowe wartości localStorage (w tym nieprawidłowe) i prefers-color-scheme; sprawdź że initTheme() zwraca "light" lub "dark" | 100 |
| **P9** — Persystencja localStorage | Generuj losowy stan theme; wywołaj saveTheme(); sprawdź że localStorage["theme"] zawiera odpowiednią wartość; wywołaj initTheme() z tym localStorage; sprawdź że tryb jest identyczny | 100 |
| **P10** — Lazy loading | Parsuj HTML; dla każdego img który nie jest me.png; sprawdź atrybut loading="lazy" | 100 |
| **P11** — Atrybut alt | Parsuj HTML; dla każdego img; sprawdź że atrybut alt jest obecny | 100 |

### Testy smoke (Smoke Tests)

Weryfikacja struktury HTML i CSS — jednorazowe sprawdzenia:

- Obecność `<meta name="viewport">` w `<head>`
- Atrybut `lang="pl"` na `<html>`
- Obecność elementów semantycznych: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Atrybut `aria-label="Nawigacja główna"` na `<nav>`
- Poprawna hierarchia nagłówków (h1 → h2 → h3)
- Obecność co najmniej 6 elementów `.skill-box`
- Obecność co najmniej 3 kart `.hobby-card`
- Obecność co najmniej 2 linków zewnętrznych w sekcji `#links`
- Atrybut `loading="eager"` lub brak `loading` na `img[src="me.png"]`
- CSS: `position: sticky` lub `position: fixed` na `.site-header`
- CSS: `border-radius: 50%` na `.about-photo`
- CSS: zmienne `--bg-color` i `--text-color` zdefiniowane dla `:root` i `[data-theme="dark"]`
- CSS: media queries używają `min-width` (mobile-first)

### Testy wizualne / E2E (manualne lub Playwright)

- Renderowanie przy 375px (mobile), 900px (tablet), 1440px (desktop)
- Działanie hamburger menu na mobile
- Smooth scroll po kliknięciu linku nawigacyjnego
- Przełączanie Light/Dark Mode — animacja ≤300ms
- Nawigacja klawiaturą przez wszystkie interaktywne elementy
- Audyt dostępności (Lighthouse / axe) — wynik ≥90 dla Accessibility

# Requirements Document

## Introduction

Niniejszy dokument opisuje wymagania dla kompletnego przebudowania layoutu osobistej strony portfolio/CV Krzysztofa Królikowskiego — Senior IT/DevOps Engineer z ponad 20-letnim doświadczeniem. Strona jest hostowana na GitHub Pages jako statyczna witryna (HTML, CSS, JavaScript). Celem redesignu jest stworzenie nowoczesnego, czytelnego i w pełni responsywnego interfejsu, który profesjonalnie prezentuje doświadczenie zawodowe, umiejętności techniczne oraz zainteresowania właściciela — z myślą o rekruterach, potencjalnych pracodawcach i kontaktach zawodowych.

Redesign zachowuje istniejącą strukturę plików (single-page `index.html`, `style.css`) i rozszerza ją o plik JavaScript (`script.js`) obsługujący nawigację, przełącznik trybu jasny/ciemny oraz lazy loading obrazków.

---

## Glossary

- **Strona**: Statyczna witryna portfolio Krzysztofa Królikowskiego hostowana na GitHub Pages.
- **Użytkownik**: Osoba odwiedzająca stronę (rekruter, potencjalny pracodawca, kontakt zawodowy).
- **Nawigacja**: Poziomy pasek nawigacyjny zawierający linki do sekcji strony.
- **Sekcja**: Wyodrębniony blok treści na stronie (np. About, Career, Skills, Hobbies, Links).
- **Dark_Mode**: Wariant kolorystyczny strony z ciemnym tłem i jasnym tekstem.
- **Light_Mode**: Wariant kolorystyczny strony z jasnym tłem i ciemnym tekstem (domyślny).
- **Toggle**: Interaktywny przełącznik umożliwiający zmianę między Light_Mode a Dark_Mode.
- **Skill_Box**: Wyodrębniony komponent wizualny prezentujący pojedynczą kategorię umiejętności technicznych.
- **Timeline**: Chronologiczna lista pozycji kariery zawodowej wyświetlana jako oś czasu.
- **Lazy_Loading**: Technika opóźnionego ładowania obrazków — obrazek jest pobierany dopiero gdy wchodzi w obszar widoczny dla użytkownika.
- **Breakpoint_Mobile**: Szerokość ekranu poniżej 768px.
- **Breakpoint_Tablet**: Szerokość ekranu od 768px do 1024px.
- **Breakpoint_Desktop**: Szerokość ekranu powyżej 1024px.
- **Sticky_Header**: Nagłówek strony pozostający widoczny podczas przewijania treści.
- **Anchor**: Identyfikator HTML (`id`) sekcji, do której prowadzi link nawigacyjny.
- **Kontrast_WCAG_AA**: Minimalny współczynnik kontrastu tekstu względem tła wynoszący 4.5:1 dla tekstu normalnego i 3:1 dla tekstu dużego, zgodnie ze standardem WCAG 2.1 poziom AA.

---

## Requirements

### Wymaganie 1: Responsywny layout strony (Mobile-First)

**User Story:** Jako użytkownik odwiedzający stronę na urządzeniu mobilnym, chcę aby strona wyświetlała się poprawnie i była wygodna w obsłudze, tak żebym mógł zapoznać się z profilem zawodowym bez konieczności powiększania lub poziomego przewijania.

#### Kryteria Akceptacji

1. THE Strona SHALL zawierać tag `<meta name="viewport" content="width=device-width, initial-scale=1">` w sekcji `<head>`, zapewniający poprawne skalowanie na urządzeniach mobilnych.
2. THE Strona SHALL stosować podejście mobile-first przy definiowaniu stylów CSS — bazowe style zoptymalizowane dla Breakpoint_Mobile, a style dla szerszych ekranów dodawane przez media queries (`min-width`).
3. WHEN szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THE Strona SHALL wyświetlać wszystkie sekcje w układzie jednokolumnowym i nie generować poziomego paska przewijania.
4. WHEN szerokość ekranu wynosi od 768px do 1024px (Breakpoint_Tablet), THE Strona SHALL wyświetlać układ dwukolumnowy dla sekcji Skills i Hobbies; pozostałe sekcje mogą pozostać jednokolumnowe.
5. WHEN szerokość ekranu przekracza 1024px (Breakpoint_Desktop), THE Strona SHALL wyświetlać pełny układ wielokolumnowy (minimum 3 kolumny dla Skills) z maksymalną szerokością kontenera wynoszącą 1200px wycentrowaną na stronie.
6. THE Strona SHALL używać CSS Flexbox lub CSS Grid do budowania layoutu wszystkich sekcji.
7. WHEN użytkownik obraca urządzenie mobilne (zmiana orientacji), THE Strona SHALL dostosować układ do nowej szerokości ekranu bez przeładowania strony.

---

### Wymaganie 2: Sticky nawigacja z płynnym przewijaniem

**User Story:** Jako użytkownik, chcę mieć stały dostęp do menu nawigacyjnego podczas przewijania strony, tak żebym mógł szybko przejść do dowolnej sekcji bez konieczności przewijania z powrotem na górę.

#### Kryteria Akceptacji

1. THE Nawigacja SHALL być wyświetlana jako Sticky_Header — pozostaje widoczna w górnej części okna przeglądarki podczas przewijania całej strony (CSS `position: sticky` lub `position: fixed`).
2. THE Nawigacja SHALL zawierać linki do następujących sekcji: About, Career, Skills, Hobbies, Links.
3. WHEN użytkownik kliknie link nawigacyjny, THE Strona SHALL przewinąć widok do odpowiedniej sekcji z animacją płynnego przewijania (smooth scroll) w czasie nie dłuższym niż 600ms.
4. WHEN użytkownik przewija stronę i aktywna sekcja zmienia się (sekcja zajmuje ponad 50% wysokości viewportu), THE Nawigacja SHALL wizualnie wyróżnić link odpowiadający aktualnie widocznej sekcji poprzez zmianę koloru tekstu lub dodanie podkreślenia (active state).
5. WHEN szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THE Nawigacja SHALL zwinąć się do ikony hamburger menu (☰), a po jej kliknięciu rozwinąć listę linków jako menu rozwijane pionowo.
6. WHEN menu hamburger jest rozwinięte i użytkownik kliknie link nawigacyjny, THE Menu SHALL automatycznie się zwinąć.
7. THE Nawigacja SHALL zawierać Toggle umożliwiający przełączanie między Light_Mode a Dark_Mode.

---

### Wymaganie 3: Sekcja About (O mnie)

**User Story:** Jako rekruter odwiedzający stronę, chcę zobaczyć zwięzłe wprowadzenie do profilu zawodowego właściciela strony, tak żebym mógł szybko ocenić, czy kandydat pasuje do moich potrzeb.

#### Kryteria Akceptacji

1. THE Strona SHALL wyświetlać sekcję About zawierającą: zdjęcie profilowe (me.png), imię i nazwisko, tytuł zawodowy oraz opis biograficzny o długości od 50 do 300 znaków.
2. WHEN szerokość ekranu wynosi co najmniej 768px (Breakpoint_Tablet lub Breakpoint_Desktop), THE Sekcja_About SHALL wyświetlać zdjęcie i tekst w układzie dwukolumnowym (CSS Grid lub Flexbox), gdzie zdjęcie zajmuje lewą kolumnę.
3. WHEN szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THE Sekcja_About SHALL wyświetlać zdjęcie wycentrowane nad tekstem w układzie jednokolumnowym.
4. THE Zdjęcie_Profilowe SHALL być wyświetlane w okrągłym kształcie (border-radius: 50%) z efektem cienia (box-shadow) i minimalnym rozmiarem wyświetlania 120×120px.
5. THE Sekcja_About SHALL posiadać Anchor o wartości `about` umożliwiający nawigację bezpośrednią.

---

### Wymaganie 4: Sekcja Career (Kariera zawodowa) z Timeline

**User Story:** Jako rekruter, chcę zobaczyć chronologiczną historię zatrudnienia kandydata w czytelnej formie, tak żebym mógł szybko ocenić jego doświadczenie zawodowe.

#### Kryteria Akceptacji

1. THE Sekcja_Career SHALL wyświetlać historię zatrudnienia jako Timeline — pionową oś czasu z pozycjami ułożonymi od najnowszej do najstarszej według daty rozpoczęcia zatrudnienia.
2. THE Timeline SHALL dla każdej pozycji zawodowej wyświetlać: okres zatrudnienia w formacie MM.YYYY–MM.YYYY, nazwę pracodawcy, stanowisko oraz listę od 1 do 10 obowiązków/osiągnięć.
3. THE Timeline SHALL renderować każdą pozycję zawodową jako osobną kartę (card) wizualnie oddzieloną od sąsiednich pozycji za pomocą odstępu lub separatora.
4. IF pozycja zawodowa nie posiada daty zakończenia (aktualne zatrudnienie), THEN THE Timeline SHALL wyświetlać etykietę "obecnie" zamiast daty zakończenia.
5. THE Sekcja_Career SHALL posiadać Anchor o wartości `career` umożliwiający nawigację bezpośrednią.
6. IF szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THEN THE Timeline SHALL wyświetlać pozycje w układzie jednokolumnowym, zachowując wszystkie pola: okres zatrudnienia, pracodawca, stanowisko i lista obowiązków.

---

### Wymaganie 5: Sekcja Technical Skills (Umiejętności techniczne)

**User Story:** Jako rekruter, chcę zobaczyć umiejętności techniczne kandydata w przejrzystej, skategoryzowanej formie, tak żebym mógł szybko ocenić dopasowanie do wymagań stanowiska.

#### Kryteria Akceptacji

1. THE Strona SHALL wyświetlać dedykowaną sekcję Technical Skills zawierającą co najmniej 6 Skill_Boxów, po jednym dla każdej wymaganej kategorii.
2. THE Sekcja_Skills SHALL zawierać Skill_Boxy dla następujących kategorii: Cloud & Infrastructure, Containerization & Orchestration, CI/CD & Automation, Operating Systems, Scripting & Programming, Monitoring & Networking.
3. THE Skill_Box SHALL wyświetlać nazwę kategorii, ikonę lub emoji reprezentującą kategorię oraz listę konkretnych technologii/narzędzi.
4. THE Sekcja_Skills SHALL wyświetlać Skill_Boxy w układzie siatki (CSS Grid) — minimum 2 kolumny na Breakpoint_Tablet i minimum 3 kolumny na Breakpoint_Desktop.
5. IF szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THEN THE Sekcja_Skills SHALL wyświetlać Skill_Boxy w układzie jednokolumnowym.
6. THE Sekcja_Skills SHALL posiadać Anchor o wartości `skills` umożliwiający nawigację bezpośrednią.

---

### Wymaganie 6: Sekcja Hobbies (Zainteresowania)

**User Story:** Jako odwiedzający stronę, chcę poznać zainteresowania i pasje właściciela strony poza pracą zawodową, tak żebym mógł lepiej poznać go jako osobę.

#### Kryteria Akceptacji

1. THE Strona SHALL wyświetlać sekcję Hobbies zawierającą co najmniej 3 zainteresowania/pasje właściciela strony.
2. THE Sekcja_Hobbies SHALL prezentować każde zainteresowanie jako wyodrębnioną kartę zawierającą nazwę (do 30 znaków) i krótki opis (do 150 znaków).
3. THE Sekcja_Hobbies SHALL wyświetlać karty zainteresowań w układzie siatki (CSS Grid lub Flexbox) — minimum 2 kolumny na Breakpoint_Tablet i minimum 3 kolumny na Breakpoint_Desktop.
4. IF szerokość ekranu jest mniejsza niż 768px (Breakpoint_Mobile), THEN THE Sekcja_Hobbies SHALL wyświetlać karty w układzie jednokolumnowym.
5. THE Sekcja_Hobbies SHALL posiadać Anchor o wartości `hobbies` umożliwiający nawigację bezpośrednią.

---

### Wymaganie 7: Sekcja Links (Linki zewnętrzne)

**User Story:** Jako rekruter, chcę mieć łatwy dostęp do profili zawodowych kandydata (LinkedIn, GitHub itp.), tak żebym mógł zweryfikować jego doświadczenie i portfolio.

#### Kryteria Akceptacji

1. THE Strona SHALL wyświetlać sekcję Links zawierającą co najmniej 2 linki do zewnętrznych profili zawodowych właściciela strony (LinkedIn i GitHub).
2. THE Sekcja_Links SHALL wyświetlać każdy link jako wizualny przycisk lub kafelek zawierający ikonę serwisu i jego nazwę.
3. WHEN użytkownik kliknie link zewnętrzny, THE Strona SHALL otworzyć docelowy adres URL w nowej karcie przeglądarki (atrybut `target="_blank"` z `rel="noopener noreferrer"`).
4. THE Każdy_Link SHALL posiadać atrybut `href` z prawidłowym, niepustym adresem URL zaczynającym się od `https://`.
5. THE Sekcja_Links SHALL posiadać Anchor o wartości `links` umożliwiający nawigację bezpośrednią.

---

### Wymaganie 8: Przełącznik trybu jasny/ciemny (Light/Dark Mode)

**User Story:** Jako użytkownik, chcę móc przełączyć stronę między trybem jasnym a ciemnym, tak żebym mógł wygodnie przeglądać jej zawartość w różnych warunkach oświetleniowych.

#### Kryteria Akceptacji

1. THE Strona SHALL wyświetlać Toggle umożliwiający przełączanie między Light_Mode a Dark_Mode, widoczny w Nawigacji na wszystkich rozmiarach ekranu.
2. THE Toggle SHALL być obsługiwalny zarówno myszą (kliknięcie), jak i klawiaturą (klawisz Enter lub Spacja gdy Toggle ma fokus).
3. WHEN użytkownik aktywuje Toggle, THE Strona SHALL zmienić schemat kolorystyczny całej strony z Light_Mode na Dark_Mode lub odwrotnie w czasie nie dłuższym niż 300ms (animacja CSS transition na właściwościach `background-color` i `color`).
4. THE Toggle SHALL wizualnie wskazywać aktualny tryb — np. ikona słońca (☀️) dla Light_Mode i ikona księżyca (🌙) dla Dark_Mode.
5. THE Dark_Mode SHALL stosować kolor tła `#1a1a2e` (lub ciemniejszy) i kolor tekstu `#e0e0e0` (lub jaśniejszy), zapewniając Kontrast_WCAG_AA (współczynnik ≥ 4.5:1).
6. THE Light_Mode SHALL stosować kolor tła `#ffffff` (lub jaśniejszy) i kolor tekstu `#333333` (lub ciemniejszy), zapewniając Kontrast_WCAG_AA (współczynnik ≥ 4.5:1).
7. WHEN użytkownik ustawił preferencję trybu kolorystycznego w systemie operacyjnym (media query `prefers-color-scheme`), THE Strona SHALL zastosować odpowiedni tryb jako domyślny przy pierwszym załadowaniu, o ile brak jest wartości w `localStorage`.
8. WHEN użytkownik ręcznie przełączy tryb, THE Strona SHALL zapisać wybór jako string `"dark"` lub `"light"` w `localStorage` pod kluczem `theme` i zastosować go przy kolejnych odwiedzinach strony.
9. IF wartość odczytana z `localStorage[theme]` jest różna od `"dark"` i `"light"`, THEN THE Strona SHALL zastosować tryb wynikający z `prefers-color-scheme` lub Light_Mode jako fallback.

---

### Wymaganie 9: Lazy Loading obrazków

**User Story:** Jako użytkownik odwiedzający stronę na wolnym łączu, chcę aby strona ładowała się szybko, tak żebym nie musiał długo czekać na wyświetlenie treści.

#### Kryteria Akceptacji

1. THE Strona SHALL stosować Lazy_Loading dla wszystkich obrazków z wyjątkiem zdjęcia profilowego (me.png) w sekcji About, które jest widoczne above the fold i musi być załadowane natychmiast.
2. THE Zdjęcie_Profilowe (me.png) SHALL posiadać atrybut `loading="eager"` lub nie posiadać atrybutu `loading` (domyślne zachowanie przeglądarki).
3. THE Pozostałe_Obrazki SHALL posiadać atrybut `loading="lazy"`, co powoduje że przeglądarka pobiera je dopiero gdy wchodzą w obszar widoczny dla użytkownika.
4. WHEN obrazek objęty Lazy_Loading jest w trakcie ładowania, THE Strona SHALL wyświetlać placeholder w postaci jednolitego koloru tła (`background-color`) w miejscu docelowego obrazka, dopóki obrazek nie zostanie w pełni załadowany.

---

### Wymaganie 10: Dostępność i standardy UX

**User Story:** Jako użytkownik korzystający z technologii wspomagających (czytnik ekranu, nawigacja klawiaturą), chcę móc w pełni korzystać ze strony, tak żebym miał równy dostęp do wszystkich informacji.

#### Kryteria Akceptacji

1. THE Strona SHALL zapewniać Kontrast_WCAG_AA dla wszystkich elementów tekstowych zarówno w Light_Mode jak i Dark_Mode (współczynnik ≥ 4.5:1 dla tekstu normalnego, ≥ 3:1 dla tekstu dużego ≥18pt lub bold ≥14pt).
2. THE Strona SHALL zawierać atrybut `lang="pl"` w tagu `<html>` określający język strony.
3. THE Strona SHALL używać semantycznych elementów HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) do strukturyzacji treści.
4. THE Strona SHALL zapewniać widoczny focus indicator (outline o minimalnej szerokości 2px i współczynniku kontrastu ≥ 3:1 względem tła) dla wszystkich interaktywnych elementów podczas nawigacji klawiaturą.
5. THE Wszystkie_Interaktywne_Elementy (linki, przyciski, Toggle, hamburger menu) SHALL być obsługiwalne za pomocą klawiatury (Tab do fokusowania, Enter/Spacja do aktywacji).
6. WHEN obrazek zawiera treść istotną dla zrozumienia strony, THE Strona SHALL zawierać atrybut `alt` z opisem tego obrazka; WHEN obrazek jest dekoracyjny, THE Strona SHALL zawierać pusty atrybut `alt=""`.
7. THE Toggle SHALL posiadać atrybut `aria-label` dynamicznie odzwierciedlający aktualny stan — `"Przełącz na tryb ciemny"` gdy aktywny jest Light_Mode i `"Przełącz na tryb jasny"` gdy aktywny jest Dark_Mode.
8. THE Nawigacja SHALL posiadać atrybut `aria-label="Nawigacja główna"` identyfikujący jej rolę.
9. THE Strona SHALL posiadać poprawną hierarchię nagłówków (`<h1>` → `<h2>` → `<h3>`) bez pomijania poziomów, gdzie `<h1>` zawiera imię i nazwisko właściciela strony.

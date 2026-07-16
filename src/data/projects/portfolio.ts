import type { ProjectItem } from '@/types/Project'

export const portfolio = {
  id: 8,
  slug: { en: 'portfolio-v2', pl: 'portfolio-v2' },
  name: { en: 'Portfolio v2', pl: 'Portfolio v2' },
  highlight: true,
  teamSize: 1,
  technologies: [
    { code: 'nextjs', short: 'Next.js', full: 'Next.js 16 (App Router)' },
    { code: 'react', short: 'React', full: 'React 19' },
    { code: 'typescript', short: 'TS', full: 'TypeScript 5' },
    { code: 'css', short: 'CSS Modules', full: 'CSS Modules' },
  ],
  cardDescription: {
    en: 'A personal portfolio with a dark/light theme, bilingual support (PL/EN), an interactive bird guide, and parallax animations. Built on Next.js 16 App Router.',
    pl: 'Osobiste portfolio z motywem ciemnym/jasnym, dwujezycznoscia (PL/EN), interaktywnym ptaszkiem-przewodnikiem i animacjami parallaxy. Zbudowane na Next.js 16 App Router.',
  },
  articleHtml: {
    en: `
<h2>Project Overview</h2>

<p>
  <mark>Portfolio v2</mark> is a complete redesign of my personal website,
  built from scratch with <strong>Next.js 16</strong> and the App Router.
  The project goes beyond a simple showcase &mdash; it introduces three
  custom-built systems that define the user experience:
  a <strong>theme engine</strong>, full <strong>internationalization</strong>,
  and an <strong>interactive bird guide</strong>.
</p>

<figure style="max-width:620px;margin:2rem auto;text-align:center">
  <img
    src="/projects/portfolio/hero-dark.jpg"
    alt="Portfolio hero section in dark mode with parallax mountains"
    style="width:100%;height:auto;border-radius:1.2rem"
  />
  <figcaption><small>Hero section with parallax layers (dark mode)</small></figcaption>
</figure>

<h2>Architecture</h2>

<p>
  The application uses the <mark>App Router</mark> with route groups
  <code>(landing)</code> and <code>(main)/[lang]</code>,
  Server Components for initial data loading, and
  CSS Modules for style isolation. Every piece of text
  is stored in typed dictionaries, keeping the UI fully translatable.
</p>

<details>
  <summary>Follower System &mdash; interactive bird guide</summary>
  <p>
    An animated bird that follows the cursor and acts as a guide
    through the site. The system is built on <mark>useReducer</mark>
    with eight distinct action types controlling a state machine:
  </p>
  <ul>
    <li><strong>States:</strong> spawning &rarr; following &rarr; goingToNest &rarr; inNest &rarr; despawning</li>
    <li><strong>Tracking:</strong> mouse position throttled at 100 ms, smoothed with <code>requestAnimationFrame</code> and configurable easing</li>
    <li><strong>Direction:</strong> automatic left/right flip based on movement vector</li>
    <li><strong>Sprites:</strong> <code>bird-fly.gif</code> (flying) and <code>bird-idle.gif</code> (staying)</li>
  </ul>
  <p>
    Components are split into <strong>Spawn</strong> (entry point + welcome
    message), <strong>Follower</strong> (animation loop), and
    <strong>Nest</strong> (home position with messages). The
    <code>FollowerProvider</code> wraps the main layout so every page
    has access to the bird context.
  </p>
  <figure style="max-width:360px;margin:1.5rem auto;text-align:center">
    <img
      src="/projects/portfolio/follower-demo.jpg"
      alt="Bird follower following the cursor near a nest element"
      style="width:100%;height:auto;border-radius:1.2rem"
    />
    <figcaption><small>The bird following the cursor toward a nest</small></figcaption>
  </figure>
</details>

<details>
  <summary>Theme System &mdash; light / dark with persistence</summary>
  <p>
    A fully custom theme engine built with <mark>React Context</mark>
    and a priority-based resolution chain:
  </p>
  <ol>
    <li>URL parameter (<code>?mode=light</code>)</li>
    <li>localStorage value</li>
    <li>System preference (<code>prefers-color-scheme</code>)</li>
    <li>Server-side cookie fallback for SSR</li>
  </ol>
  <p>
    An inline <strong>ThemeScript</strong> runs before React hydration
    to prevent the flash of unstyled content (FOUC). The chosen theme
    is stored both in <code>localStorage</code> and in a cookie
    so the server can render the correct palette on the first response.
  </p>
  <p>
    CSS custom properties switch between two palettes:
    <strong>dark</strong> (navy #0b1e3d) and <strong>light</strong>
    (green #10b981), each with an optional high-contrast variant.
  </p>
  <figure style="max-width:620px;margin:1.5rem auto;text-align:center">
    <img
      src="/projects/portfolio/theme-comparison.jpg"
      alt="Side by side comparison of dark and light themes"
      style="width:100%;height:auto;border-radius:1.2rem"
    />
    <figcaption><small>Dark and light mode comparison</small></figcaption>
  </figure>
</details>

<details>
  <summary>i18n System &mdash; full Polish / English bilingualism</summary>
  <p>
    Every string in the application is wrapped in a
    <mark>Localized&lt;T&gt;</mark> type, ensuring compile-time safety
    for both languages. The system is composed of:
  </p>
  <ul>
    <li><strong>Middleware</strong> &mdash; reads <code>Accept-Language</code> and redirects to <code>/pl</code> or <code>/en</code></li>
    <li><strong>Dictionary layer</strong> &mdash; separate modules for <code>common</code>, <code>navigation</code>, <code>sections</code>, and individual pages, loaded with <code>React.cache</code></li>
    <li><strong>URL rewrites</strong> &mdash; <code>next.config.ts</code> maps Polish slugs to internal English routes</li>
    <li><strong>SEO</strong> &mdash; <code>hreflang</code> alternates generated per page, bilingual OpenGraph metadata</li>
  </ul>
  <p>
    The dictionary approach keeps translations co-located with the
    feature they serve, while the <code>Localized</code> generic makes
    it impossible to forget a translation at the type level.
  </p>
</details>

<details>
  <summary>Other Highlights</summary>
  <ul>
    <li><strong>Parallax hero</strong> &mdash; layered SVG mountains, fog and clouds animated on scroll</li>
    <li><strong>Contact form</strong> &mdash; server action with validation, bilingual error messages</li>
    <li><strong>Project filtering</strong> &mdash; by status, category, and technology with AND/OR logic</li>
    <li><strong>Recommendations</strong> &mdash; bilingual PDF references</li>
    <li><strong>SEO</strong> &mdash; per-project meta, hreflang, OpenGraph, canonical URL</li>
  </ul>
</details>
`,
    pl: `
<h2>Opis projektu</h2>

<p>
  <mark>Portfolio v2</mark> to kompletny redesign mojej strony osobistej,
  zbudowany od zera w <strong>Next.js 16</strong> z App Routerem.
  Projekt wykracza poza proste portfolio &mdash; wprowadza trzy
  autorskie systemy definiujace doswiadczenie uzytkownika:
  <strong>silnik motywow</strong>, pelna <strong>internacjonalizacja</strong>
  oraz <strong>interaktywny ptaszek-przewodnik</strong>.
</p>

<figure style="max-width:620px;margin:2rem auto;text-align:center">
  <img
    src="/projects/portfolio/hero-dark.jpg"
    alt="Sekcja hero portfolio w trybie ciemnym z paralaksa gor"
    style="width:100%;height:auto;border-radius:1.2rem"
  />
  <figcaption><small>Sekcja hero z warstwami paralaksy (tryb ciemny)</small></figcaption>
</figure>

<h2>Architektura</h2>

<p>
  Aplikacja wykorzystuje <mark>App Router</mark> z grupami tras
  <code>(landing)</code> i <code>(main)/[lang]</code>,
  Server Components do poczatkowego ladowania danych oraz
  CSS Modules do izolacji stylow. Kazdy tekst jest przechowywany
  w typowanych slownikach, co utrzymuje pelna tlumaczalnosc UI.
</p>

<details>
  <summary>Follower System &mdash; interaktywny ptaszek-przewodnik</summary>
  <p>
    Animowany ptaszek podazajacy za kursorem, pelniacy role przewodnika
    po stronie. System jest oparty na <mark>useReducer</mark>
    z osmoma typami akcji sterujacymi maszyna stanow:
  </p>
  <ul>
    <li><strong>Stany:</strong> spawning &rarr; following &rarr; goingToNest &rarr; inNest &rarr; despawning</li>
    <li><strong>Sledzenie:</strong> pozycja myszy throttlowana co 100 ms, wygladzana przez <code>requestAnimationFrame</code> z konfigurowalnym easingiem</li>
    <li><strong>Kierunek:</strong> automatyczne odbicie lewo/prawo na podstawie wektora ruchu</li>
    <li><strong>Sprite'y:</strong> <code>bird-fly.gif</code> (lot) i <code>bird-idle.gif</code> (spoczynek)</li>
  </ul>
  <p>
    Komponenty sa rozdzielone na <strong>Spawn</strong> (punkt wejscia +
    wiadomosc powitalna), <strong>Follower</strong> (petla animacji) i
    <strong>Nest</strong> (pozycja domowa z wiadomosciami).
    <code>FollowerProvider</code> opakowuje glowny layout, dzieki czemu
    kazda strona ma dostep do kontekstu ptaszka.
  </p>
  <figure style="max-width:360px;margin:1.5rem auto;text-align:center">
    <img
      src="/projects/portfolio/follower-demo.jpg"
      alt="Ptaszek podazajacy za kursorem w poblizu elementu gniazda"
      style="width:100%;height:auto;border-radius:1.2rem"
    />
    <figcaption><small>Ptaszek podazajacy za kursorem w strone gniazda</small></figcaption>
  </figure>
</details>

<details>
  <summary>Theme System &mdash; jasny / ciemny z persistencja</summary>
  <p>
    W pelni autorski silnik motywow oparty na <mark>React Context</mark>
    z priorytetowym lancuchem rozwiazywania:
  </p>
  <ol>
    <li>Parametr URL (<code>?mode=light</code>)</li>
    <li>Wartosc localStorage</li>
    <li>Preferencja systemowa (<code>prefers-color-scheme</code>)</li>
    <li>Fallback z ciasteczka po stronie serwera (SSR)</li>
  </ol>
  <p>
    Inline'owy <strong>ThemeScript</strong> wykonuje sie przed hydracja
    Reacta, zapobiegajac blysnieciu nieostylowanej tresci (FOUC).
    Wybrany motyw jest zapisywany zarowno w <code>localStorage</code>,
    jak i w ciasteczku, dzieki czemu serwer renderuje wlasciwa
    palete juz przy pierwszej odpowiedzi.
  </p>
  <p>
    Zmienne CSS przelaczaja miedzy dwoma paletami:
    <strong>ciemna</strong> (granat #0b1e3d) i <strong>jasna</strong>
    (zielen #10b981), kazda z opcjonalnym wariantem o wysokim kontrascie.
  </p>
  <figure style="max-width:620px;margin:1.5rem auto;text-align:center">
    <img
      src="/projects/portfolio/theme-comparison.jpg"
      alt="Porownanie trybu ciemnego i jasnego obok siebie"
      style="width:100%;height:auto;border-radius:1.2rem"
    />
    <figcaption><small>Porownanie trybu ciemnego i jasnego</small></figcaption>
  </figure>
</details>

<details>
  <summary>i18n System &mdash; pelna dwujezycznosc PL / EN</summary>
  <p>
    Kazdy string w aplikacji jest opakowany typem
    <mark>Localized&lt;T&gt;</mark>, gwarantujacym bezpieczenstwo
    kompilacyjne dla obu jezykow. System sklada sie z:
  </p>
  <ul>
    <li><strong>Middleware</strong> &mdash; odczytuje <code>Accept-Language</code> i przekierowuje na <code>/pl</code> lub <code>/en</code></li>
    <li><strong>Warstwa slownikow</strong> &mdash; oddzielne moduly dla <code>common</code>, <code>navigation</code>, <code>sections</code> i poszczegolnych stron, ladowane z <code>React.cache</code></li>
    <li><strong>Rewrite URL</strong> &mdash; <code>next.config.ts</code> mapuje polskie slugi na wewnetrzne angielskie trasy</li>
    <li><strong>SEO</strong> &mdash; <code>hreflang</code> generowane per strona, dwujezyczne metadane OpenGraph</li>
  </ul>
  <p>
    Podejscie slownikowe trzyma tlumaczenia blisko funkcjonalnosci,
    ktorej dotycza, a generyk <code>Localized</code> uniemozliwia
    pomiecie tlumaczenia na poziomie typow.
  </p>
</details>

<details>
  <summary>Pozostale wyrozniki</summary>
  <ul>
    <li><strong>Paralaksa hero</strong> &mdash; warstwowe SVG gor, mgly i chmur animowane przy scrollu</li>
    <li><strong>Formularz kontaktowy</strong> &mdash; server action z walidacja, dwujezyczne komunikaty bledow</li>
    <li><strong>Filtrowanie projektow</strong> &mdash; po statusie, kategorii i technologii z logika AND/OR</li>
    <li><strong>Rekomendacje</strong> &mdash; dwujezyczne referencje PDF</li>
    <li><strong>SEO</strong> &mdash; per-projektowe meta, hreflang, OpenGraph, kanoniczny URL</li>
  </ul>
</details>
`,
  },
  github: 'https://github.com/Gurgson/portfolio-v2',
  live: 'https://jstapinski.eu',
  thumbnailUrl: '/projects/portfolio/thumbnail.jpg',
  startDate: '2024-01',
  category: 'web',
  status: 'in-progress',

  seo: {
    title: {
      en: 'Portfolio v2 – Next.js 16 Personal Portfolio with Theme, i18n & Bird Guide',
      pl: 'Portfolio v2 – osobiste portfolio Next.js 16 z motywami, i18n i ptaszkiem-przewodnikiem',
    },
    desc: {
      en: 'A personal portfolio featuring a custom theme engine, full PL/EN internationalization, an interactive bird guide, parallax animations and project showcase. Built with Next.js 16 App Router, React 19 and TypeScript.',
      pl: 'Osobiste portfolio z autorskim silnikiem motywow, pelna internacjonalizacja PL/EN, interaktywnym ptaszkiem-przewodnikiem, animacjami paralaksy i prezentacja projektow. Zbudowane w Next.js 16 App Router, React 19 i TypeScript.',
    },
    keywords: {
      primary: {
        en: 'portfolio next.js react typescript',
        pl: 'portfolio next.js react typescript',
      },
      secondary: {
        en: [
          'dark mode',
          'light mode',
          'i18n',
          'internationalization',
          'interactive guide',
          'parallax',
        ],
        pl: [
          'tryb ciemny',
          'tryb jasny',
          'i18n',
          'internacjonalizacja',
          'interaktywny przewodnik',
          'paralaksa',
        ],
      },
      longTail: {
        en: [
          'next.js portfolio with theme switcher and i18n',
          'react portfolio interactive bird guide parallax',
        ],
        pl: [
          'portfolio next.js z przelacznikiem motywow i i18n',
          'portfolio react interaktywny ptaszek paralaksa',
        ],
      },
    },
  },
} satisfies ProjectItem

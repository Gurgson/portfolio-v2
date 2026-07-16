import type { ProjectItem } from '@/types/Project'

export const geopuzzle = {
  id: 2,
  slug: { en: 'geopuzzle', pl: 'geopuzzle' },
  name: { en: 'GeoPuzzle', pl: 'GeoPuzzle' },
  highlight: true,
  teamSize: 1,
  technologies: [
    { code: 'nodejs', short: 'Node.js', full: 'Node.js Runtime' },
    { code: 'typescript', short: 'TS', full: 'TypeScript' },
    { code: 'express', short: 'Express', full: 'Express.js Framework' },
    { code: 'mongodb', short: 'MongoDB', full: 'MongoDB Database' },
    { code: 'websocket', short: 'WS', full: 'WebSocket (ws)' },
    { code: 'oauth', short: 'OAuth', full: 'Google OAuth 2.0' },
    { code: 'jwt', short: 'JWT', full: 'JSON Web Tokens' },
  ],
  cardDescription: {
    en: 'Backend for a location-based puzzle game — REST API with real-time WebSocket game sessions, Google OAuth, MongoDB and geographic scoring via the Haversine formula.',
    pl: 'Backend gry puzzlowej opartej na lokalizacji — REST API z sesjami gry w czasie rzeczywistym przez WebSocket, Google OAuth, MongoDB i geograficznym scoringiem algorytmem Haversine.',
  },
  articleHtml: {
    en: `
      <p>
        <mark>GeoPuzzle Server 2</mark> is the backend for a location-based
        puzzle game, developed as my <strong>Bachelor's degree project</strong>.
        I was responsible for the entire backend — players solve geographic
        puzzles placed along a track, guessing map coordinates for each
        waypoint. The server handles auth, content management, real-time
        gameplay and scoring.
      </p>

      <details open>
        <summary>Game — WebSocket &amp; Command Protocol</summary>
        <p>
          Gameplay runs over a persistent <mark>WebSocket</mark> connection.
          Rather than polling, the client drives the game by sending
          typed JSON commands and the server maintains the complete game
          state per connection.
        </p>
        <ul>
          <li>Commands: <code>select</code>, <code>start</code>, <code>next</code>, <code>answer</code>, <code>exit</code></li>
          <li>Per-connection state — current stage, accumulated score, elapsed time</li>
          <li>Geographic scoring via the <strong>Haversine formula</strong> — 100 pts within radius, scaled 0–100 beyond</li>
          <li>Automatic scoreboard record written on game completion</li>
          <li>Two waypoint types: text puzzles and graphic puzzles (image upload)</li>
          <li>Tracks require both waypoints and tags before activation — enforced at Mongoose pre-save hook level</li>
        </ul>
      </details>

      <details>
        <summary>API Features &amp; Architecture</summary>
        <p>
          The server is built with <strong>Express.js</strong> and
          <strong>TypeScript</strong> (ESM), backed by <strong>MongoDB</strong>
          via Mongoose. A <mark>factory handler pattern</mark> provides generic
          CRUD operations shared across all models — controllers stay thin and
          consistent.
        </p>
        <ul>
          <li>Generic factory handlers — <code>getAll</code>, <code>getOne</code>, <code>addOne</code>, <code>updateOne</code>, <code>deleteOne</code></li>
          <li>Advanced query class — filtering, full-text search, sorting, field limiting, pagination</li>
          <li>Global error handler with custom <code>AppError</code> class and <code>catchAsync</code> wrapper</li>
          <li>Swagger / OpenAPI documentation generated from JSDoc comments</li>
          <li>Security: Helmet, CORS, NoSQL-injection sanitisation, XSS cleaning, HPP prevention</li>
        </ul>
      </details>

      <details>
        <summary>Authentication &amp; Ownership</summary>
        <p>
          Users authenticate with <mark>Google OAuth 2.0</mark> via Passport.js.
          After the callback the server issues a signed <strong>JWT</strong>
          used for all protected requests. An ownership middleware ensures
          only the content creator can edit or delete their resources.
        </p>
        <ul>
          <li>Google OAuth 2.0 login and redirect flow</li>
          <li>JWT generation and validation on every protected route</li>
          <li>Ownership middleware — creator-only mutations</li>
          <li>User profiles linked to Google accounts by provider ID</li>
        </ul>

        <figure style="max-width: 600px; margin: 1.5rem auto; text-align: center;">
          <img
            src="/projects/geopuzzle/thumbnail.jpg"
            alt="GeoPuzzle game interface"
            style="width: 100%; height: auto; border-radius: 1rem;"
          />
          <figcaption>
            <small>GeoPuzzle — location-based puzzle game</small>
          </figcaption>
        </figure>
      </details>
    `,
    pl: `
      <p>
        <mark>GeoPuzzle Server 2</mark> to backend gry puzzlowej opartej na
        lokalizacji, stworzony jako moja <strong>praca licencjacka</strong>.
        Byłem odpowiedzialny za cały backend — gracze rozwiązują geograficzne
        zagadki rozmieszczone wzdłuż trasy, zgadując współrzędne mapy
        dla każdego waypointu. Serwer obsługuje uwierzytelnianie, zarządzanie
        treścią, rozgrywkę w czasie rzeczywistym i obliczanie wyników.
      </p>

      <details open>
        <summary>Gra — WebSocket i protokół komend</summary>
        <p>
          Rozgrywka odbywa się przez trwałe połączenie <mark>WebSocket</mark>.
          Zamiast pollingu, klient steruje grą wysyłając typowane komendy JSON,
          a serwer utrzymuje kompletny stan gry per połączenie.
        </p>
        <ul>
          <li>Komendy: <code>select</code>, <code>start</code>, <code>next</code>, <code>answer</code>, <code>exit</code></li>
          <li>Stan per połączenie — bieżący etap, skumulowany wynik, czas</li>
          <li>Geograficzny scoring algorytmem <strong>Haversine</strong> — 100 pkt w promieniu, skalowane 0–100 poza nim</li>
          <li>Automatyczny wpis do scoreboard po zakończeniu gry</li>
          <li>Dwa typy waypointów: zagadki tekstowe i graficzne (upload obrazu)</li>
          <li>Trasa wymaga waypointów i tagów przed aktywacją — wymuszane przez hook pre-save Mongoose</li>
        </ul>
      </details>

      <details>
        <summary>Funkcje API i architektura</summary>
        <p>
          Serwer zbudowany na <strong>Express.js</strong> i
          <strong>TypeScript</strong> (ESM), z bazą <strong>MongoDB</strong>
          przez Mongoose. Wzorzec <mark>factory handler</mark> dostarcza
          generycznych operacji CRUD współdzielonych przez wszystkie modele —
          kontrolery pozostają zwięzłe i spójne.
        </p>
        <ul>
          <li>Generyczne factory handlery — <code>getAll</code>, <code>getOne</code>, <code>addOne</code>, <code>updateOne</code>, <code>deleteOne</code></li>
          <li>Klasa zapytań — filtrowanie, wyszukiwanie pełnotekstowe, sortowanie, ograniczanie pól, paginacja</li>
          <li>Globalny error handler z klasą <code>AppError</code> i wrapperem <code>catchAsync</code></li>
          <li>Dokumentacja Swagger / OpenAPI generowana z komentarzy JSDoc</li>
          <li>Bezpieczeństwo: Helmet, CORS, sanityzacja NoSQL, czyszczenie XSS, ochrona HPP</li>
        </ul>
      </details>

      <details>
        <summary>Uwierzytelnianie i własność zasobów</summary>
        <p>
          Użytkownicy logują się przez <mark>Google OAuth 2.0</mark> via
          Passport.js. Po callbacku serwer generuje podpisany <strong>JWT</strong>
          używany przy wszystkich chronionych żądaniach. Middleware własności
          zapewnia, że tylko twórca może edytować lub usuwać swoje zasoby.
        </p>
        <ul>
          <li>Przepływ logowania i przekierowania Google OAuth 2.0</li>
          <li>Generowanie i walidacja JWT na każdej chronionej trasie</li>
          <li>Middleware własności — mutacje tylko przez twórcę</li>
          <li>Profile użytkowników powiązane z kontami Google przez provider ID</li>
        </ul>

        <figure style="max-width: 600px; margin: 1.5rem auto; text-align: center;">
          <img
            src="/projects/geopuzzle/thumbnail.jpg"
            alt="Interfejs gry GeoPuzzle"
            style="width: 100%; height: auto; border-radius: 1rem;"
          />
          <figcaption>
            <small>GeoPuzzle — gra puzzlowa oparta na lokalizacji</small>
          </figcaption>
        </figure>
      </details>
    `,
  },
  github: 'https://github.com/Gurgson/geopuzzle-server-2',
  thumbnailUrl: '/projects/geopuzzle/thumbnail.jpg',
  startDate: '2024-01',
  category: 'web',
  status: 'in-progress',
  seo: {
    title: {
      en: 'GeoPuzzle — Location-based Puzzle Game Backend',
      pl: 'GeoPuzzle — Backend gry puzzlowej opartej na lokalizacji',
    },
    desc: {
      en: 'Node.js/Express backend for a location-based puzzle game with real-time WebSocket sessions, Google OAuth, MongoDB and Haversine geographic scoring.',
      pl: 'Backend Node.js/Express dla gry puzzlowej opartej na lokalizacji — sesje WebSocket w czasie rzeczywistym, Google OAuth, MongoDB i geograficzny scoring algorytmem Haversine.',
    },
    keywords: {
      primary: {
        en: 'Node.js Express location puzzle game backend',
        pl: 'Node.js Express backend gra puzzlowa lokalizacja',
      },
      secondary: {
        en: ['Node.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Google OAuth', 'JWT', 'REST API'],
        pl: ['Node.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Google OAuth', 'JWT', 'REST API'],
      },
      longTail: {
        en: [
          'location based puzzle game node.js backend',
          'websocket real-time game server express',
          'haversine formula geographic scoring api',
        ],
        pl: [
          'backend gry puzzlowej opartej na lokalizacji node.js',
          'websocket serwer gry w czasie rzeczywistym express',
          'geograficzny scoring haversine api',
        ],
      },
    },
  },
} satisfies ProjectItem

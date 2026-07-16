import type { ProjectItem } from '@/types/Project'

export const poltorque = {
  id: 9,
  slug: { en: 'poltorque', pl: 'poltorque' },
  name: { en: 'Poltorque', pl: 'Poltorque' },
  highlight: true,
  teamSize: 1,
  technologies: [
    { code: 'csharp', short: 'C#', full: 'C# Language' },
    { code: 'dotnet', short: '.NET', full: '.NET Framework' },
    { code: 'javascript', short: 'JS', full: 'JavaScript' },
    { code: 'modbus', short: 'Modbus', full: 'Modbus RTU/TCP Protocol' },
    { code: 'bluetooth', short: 'BT', full: 'Bluetooth Communication' },
  ],
  cardDescription: {
    en: 'Professional software development at Poltorque: service applications communicating with BMS keys, e-commerce migration, office automation tools and certificate generation.',
    pl: 'Zawodowe tworzenie oprogramowania w Poltorque: aplikacje serwisowe komunikujące się z kluczami BMS, migracja sklepu internetowego, narzędzia biurowe i automatyczne generowanie certyfikatów.',
  },
  articleHtml: {
    en: `
      <p>
        At <mark>Poltorque</mark> I was responsible for designing, building and
        maintaining a range of software solutions — from low-level hardware
        communication to e-commerce lifecycle management and office automation.
      </p>

      <details open>
        <summary>Wrench &amp; Integration Software</summary>
        <p>
          I developed <mark>desktop service applications</mark> for
          <strong>BMS brand torque keys</strong> communicating over Bluetooth.
          The applications managed the operational state of the tools in real
          time and returned measurement results integrated into the customer's
          infrastructure via industrial protocols such as
          <strong>Modbus RTU/TCP</strong>, <strong>OPC</strong> and other
          integration methods depending on the client environment.
        </p>
        <ul>
          <li>Bluetooth communication layer with BMS torque keys</li>
          <li>Real-time work-state management and result collection</li>
          <li>Integration with customer systems via Modbus, OPC and more</li>
          <li>Configurable output mapping for varied client environments</li>
        </ul>
        <div class="notice">
          ⚠️&nbsp; These projects were developed at the request of management under a
          confidentiality agreement. The technology stack is not disclosed and
          no screenshots or source code are publicly available.
        </div>
      </details>

      <details>
        <summary>Commerce Platform <mark> / </mark> Company Page</summary>
        <p>
          I took full ownership of the company's online store, managing the
          complete <mark>product lifecycle</mark> — starting on
          <strong>Sky-Shop</strong> and later leading the migration to
          <strong>Shoper</strong>.
        </p>
        <ul>
          <li>End-to-end product lifecycle management (creation, updates, deprecation)</li>
          <li>Platform migration from Sky-Shop to Shoper</li>
          <li>Data scraping and catalogue import automation in JavaScript&nbsp;/&nbsp;C#</li>
          <li>Maintaining data consistency during and after migration</li>
          <li>Creating and managing web content for the Poltorque company website</li>
        </ul>
        <figure style="max-width: 700px; margin: 1.5rem auto; text-align: center;">
          <a href="https://torqueshop.eu/en_GB/index?currency=PLN" target="_blank" rel="noopener noreferrer">
            <img
              src="/projects/poltorque/shop.jpg"
              alt="Torqueshop.eu online store"
              style="width: 100%; height: auto; border-radius: 1rem;"
            />
          </a>
          <figcaption>
            <small>
              <a href="https://torqueshop.eu/en_GB/index?currency=PLN" target="_blank" rel="noopener noreferrer">torqueshop.eu</a>
              — live store
            </small>
          </figcaption>
        </figure>
      </details>

      <details>
        <summary>Office Software</summary>
        <p>
          I built several internal <mark>desktop tools in C#&nbsp;/&nbsp;.NET</mark>
          to automate repetitive office workflows.
        </p>
        <h3>Offer Generator</h3>
        <p>
          Generates commercial offer documents automatically. It integrates
          directly with <strong>Shoper</strong> — product data is pulled from
          the live store, cached locally for performance, and rendered into
          formatted offer documents. Pricing and availability stay consistent
          between the store and generated documents at all times.
        </p>
        <h3>Certificate Generator</h3>
        <p>
          The original German software produced certificates with encoding
          errors. I built a replacement from scratch that generates correctly
          encoded PDFs, dispatches them automatically by e-mail, and handles
          all edge cases that caused corruption in the original tool.
        </p>
        <ul>
          <li>Reads raw calibration data from source files</li>
          <li>Generates correctly encoded PDF certificates</li>
          <li>Sends certificates automatically by e-mail</li>
          <li>Handles edge cases that caused corruption in the original software</li>
        </ul>
        <figure style="max-width: 560px; margin: 1.5rem auto; text-align: center;">
          <img
            src="/projects/poltorque/certificate-app.jpg"
            alt="Certificate generator desktop application"
            style="width: 100%; height: auto; border-radius: 1rem;"
          />
          <figcaption>
            <small>Certificate generator — PDF output &amp; e-mail dispatch</small>
          </figcaption>
        </figure>
      </details>
    `,
    pl: `
      <p>
        W <mark>Poltorque</mark> byłem odpowiedzialny za projektowanie, tworzenie
        i utrzymanie szeregu rozwiązań programistycznych — od komunikacji
        niskopoziomowej ze sprzętem, przez zarządzanie pełnym cyklem życia
        sklepu internetowego, po automatyzację procesów biurowych.
      </p>

      <details open>
        <summary>Aplikacje serwisowe i integracyjne</summary>
        <p>
          Tworzyłem <mark>desktopowe aplikacje serwisowe</mark> dla
          <strong>kluczy dynamometrycznych marki BMS</strong> komunikujących
          się przez Bluetooth. Aplikacje zarządzały stanem pracy narzędzi
          w czasie rzeczywistym i zwracały wyniki pomiarów zintegrowane
          z infrastrukturą klienta przez protokoły przemysłowe takie jak
          <strong>Modbus RTU/TCP</strong>, <strong>OPC</strong> i inne metody
          integracji zależne od środowiska klienta.
        </p>
        <ul>
          <li>Warstwa komunikacji Bluetooth z kluczami BMS</li>
          <li>Zarządzanie stanem pracy i zbieranie wyników w czasie rzeczywistym</li>
          <li>Integracja z systemami klientów przez Modbus, OPC i inne</li>
          <li>Konfigurowalne mapowanie wyjść dla różnych środowisk klienckich</li>
        </ul>
        <div class="notice">
          ⚠️&nbsp; Projekty te powstały na zlecenie zarządu w ramach umowy o poufności.
          Stos technologiczny nie jest ujawniany — brak zrzutów ekranu
          i publicznego kodu źródłowego.
        </div>
      </details>

      <details>
        <summary>Platforma e-commerce <mark> / </mark> Witryna firmowa</summary>
        <p>
          Przejąłem pełną odpowiedzialność za sklep internetowy firmy,
          zarządzając kompletnym <mark>cyklem życia produktów</mark> —
          początkowo na platformie <strong>Sky-Shop</strong>, a następnie
          przeprowadzając migrację do <strong>Shoper</strong>.
        </p>
        <ul>
          <li>Kompleksowe zarządzanie cyklem życia produktów (tworzenie, aktualizacje, wycofywanie)</li>
          <li>Migracja platformy z Sky-Shop na Shoper</li>
          <li>Automatyzacja scrapowania i importu katalogu w JavaScript&nbsp;/&nbsp;C#</li>
          <li>Utrzymanie spójności danych podczas i po migracji</li>
          <li>Tworzenie i zarządzanie treścią na stronie internetowej firmy Poltorque</li>
        </ul>
        <figure style="max-width: 700px; margin: 1.5rem auto; text-align: center;">
          <a href="https://torqueshop.eu/en_GB/index?currency=PLN" target="_blank" rel="noopener noreferrer">
            <img
              src="/projects/poltorque/shop.jpg"
              alt="Sklep internetowy Torqueshop.eu"
              style="width: 100%; height: auto; border-radius: 1rem;"
            />
          </a>
          <figcaption>
            <small>
              <a href="https://torqueshop.eu/en_GB/index?currency=PLN" target="_blank" rel="noopener noreferrer">torqueshop.eu</a>
              — aktywny sklep
            </small>
          </figcaption>
        </figure>
      </details>

      <details>
        <summary>Oprogramowanie biurowe</summary>
        <p>
          Zbudowałem szereg wewnętrznych <mark>aplikacji desktopowych w C#&nbsp;/&nbsp;.NET</mark>
          automatyzujących powtarzalne procesy biurowe.
        </p>
        <h3>Generator ofert</h3>
        <p>
          Automatycznie generuje dokumenty ofert handlowych. Integruje się
          bezpośrednio z <strong>Shoper</strong> — dane produktów są pobierane
          z aktywnego sklepu, buforowane lokalnie dla wydajności i renderowane
          do sformatowanych ofert. Ceny i dostępność są zawsze spójne między
          sklepem a generowanymi dokumentami.
        </p>
        <h3>Generator certyfikatów</h3>
        <p>
          Oryginalne oprogramowanie niemieckiego producenta generowało certyfikaty
          z błędami kodowania. Napisałem narzędzie zastępcze od zera — generuje
          poprawnie zakodowane pliki PDF, automatycznie wysyła je e-mailem
          i obsługuje przypadki brzegowe powodujące błędy w oryginale.
        </p>
        <ul>
          <li>Odczyt surowych danych kalibracyjnych z plików źródłowych</li>
          <li>Generowanie poprawnie zakodowanych certyfikatów PDF</li>
          <li>Automatyczna wysyłka certyfikatów e-mailem</li>
          <li>Obsługa przypadków brzegowych powodujących błędy w oryginalnym oprogramowaniu</li>
        </ul>
        <figure style="max-width: 560px; margin: 1.5rem auto; text-align: center;">
          <img
            src="/projects/poltorque/certificate-app.jpg"
            alt="Desktopowa aplikacja do generowania certyfikatów"
            style="width: 100%; height: auto; border-radius: 1rem;"
          />
          <figcaption>
            <small>Generator certyfikatów — generowanie PDF i wysyłka e-mail</small>
          </figcaption>
        </figure>
      </details>
    `,
  },
  live: {
    pl: 'https://torqueshop.eu/pl/index?currency=PLN',
    en: 'https://torqueshop.eu/en_GB/index?currency=PLN',
  },
  thumbnailUrl: '/projects/poltorque/thumbnail.jpg',
  startDate: '2023-07',
  category: 'desktop',
  status: 'in-progress',
  seo: {
    title: {
      en: 'Poltorque — Professional Software Development',
      pl: 'Poltorque — Zawodowe tworzenie oprogramowania',
    },
    desc: {
      en: 'Service applications for BMS torque keys via Bluetooth and Modbus, e-commerce migration, and office automation tools built with C#/.NET.',
      pl: 'Aplikacje serwisowe do kluczy BMS przez Bluetooth i Modbus, migracja sklepu internetowego oraz narzędzia biurowe w C#/.NET.',
    },
    keywords: {
      primary: {
        en: 'C# .NET service application Modbus Bluetooth',
        pl: 'C# .NET aplikacja serwisowa Modbus Bluetooth',
      },
      secondary: {
        en: [
          'C#',
          '.NET',
          'Modbus',
          'Bluetooth',
          'e-commerce',
          'PDF generation',
        ],
        pl: [
          'C#',
          '.NET',
          'Modbus',
          'Bluetooth',
          'sklep internetowy',
          'generowanie PDF',
        ],
      },
      longTail: {
        en: [
          'BMS torque key bluetooth service application',
          'C# certificate PDF generator',
          'Shoper e-commerce migration',
        ],
        pl: [
          'aplikacja serwisowa klucze BMS Bluetooth',
          'generator certyfikatów PDF C#',
          'migracja sklepu Shoper',
        ],
      },
    },
  },
} satisfies ProjectItem

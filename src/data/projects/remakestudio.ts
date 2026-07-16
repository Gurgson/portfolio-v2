import type { ProjectItem } from '@/types/Project'

export const remakeStudio = {
  id: 6,
  slug: { en: 'remake-studio', pl: 'remake-studio' },
  name: { en: 'Remake Studio', pl: 'Remake Studio' },
  highlight: false,
  teamSize: 1,
  technologies: [
    { code: 'nextjs', short: 'Next.js', full: 'Next.js Framework' },
    { code: 'react', short: 'React', full: 'React.js Library' },
    { code: 'typescript', short: 'TS', full: 'TypeScript' },
    { code: 'oauth', short: 'OAuth', full: 'OAuth 2.0 Authentication' },
    { code: 'ssr', short: 'SSR', full: 'Server-Side Rendering' },
  ],
  cardDescription: {
    en: 'Next.js application featuring blog section, user authentication with OAuth, and server-side rendering for optimal performance.',
    pl: 'Aplikacja Next.js z sekcją bloga, uwierzytelnianiem użytkowników przez OAuth oraz renderowaniem po stronie serwera dla optymalnej wydajności.',
  },
  articleHtml: {
    en: `
      <h2>Project Overview</h2>

      <p>
        <mark>Remake Studio</mark> is a Next.js application built to explore and
        demonstrate modern web development concepts such as
        <strong>server-side rendering</strong>,
        <strong>authentication</strong>, and
        <strong>content management</strong>.
        The project focuses on production-ready patterns rather than UI-only
        experimentation.
      </p>

      <h2>Key Features</h2>

      <p>
        The application includes a fully functional
        <mark>blog system</mark> that allows content to be created, edited, and
        published.
        User authentication is handled via
        <mark>OAuth&nbsp;2.0</mark>, providing a secure and scalable login flow.
      </p>

      <h3>Authentication & User Management</h3>

      <p>
        OAuth integration enables seamless user sign-in while maintaining a
        strong security baseline.
        This setup reflects real-world authentication patterns commonly used
        in commercial applications.
      </p>

      <h2>Technical Highlights</h2>

      <p>
        <mark>Server-side rendering</mark> ensures fast initial page loads and
        improved SEO performance.
        The project makes extensive use of Next.js capabilities such as
        API routes, dynamic routing, and built-in image optimization.
      </p>

      <figure
        style="
          max-width: 520px;
          margin: 2.5rem auto;
          text-align: center;
        "
      >
        <img
          src="/projects/remake-studio/blog.jpg"
          alt="Blog section of the Remake Studio application"
          class="article-img-right"
          style="
            width: 100%;
            height: auto;
            border-radius: 1.2rem;
          "
        />
        <figcaption>
          <small>Blog section with dynamic routing and SSR</small>
        </figcaption>
      </figure>

      <h2>Learning Outcomes</h2>

      <p>
        This project served as a deep dive into the
        <mark>Next.js ecosystem</mark>,
        OAuth implementation strategies, and best practices for building
        scalable, production-ready React applications.
      </p>
    `,
    pl: `
      <h2>Opis projektu</h2>

      <p>
        <mark>Remake Studio</mark> to aplikacja Next.js stworzona w celu eksploracji
        i demonstracji nowoczesnych koncepcji web developmentu, takich jak
        <strong>renderowanie po stronie serwera</strong>,
        <strong>uwierzytelnianie</strong> oraz
        <strong>zarządzanie treścią</strong>.
        Projekt skupia się na wzorcach gotowych do użycia produkcyjnego.
      </p>

      <h2>Kluczowe funkcje</h2>

      <p>
        Aplikacja zawiera w pełni funkcjonalny
        <mark>system blogowy</mark>, umożliwiający tworzenie, edycję oraz publikację
        treści.
        Uwierzytelnianie użytkowników realizowane jest przy użyciu
        <mark>OAuth&nbsp;2.0</mark>, co zapewnia bezpieczny i skalowalny proces logowania.
      </p>

      <h3>Uwierzytelnianie i zarządzanie użytkownikami</h3>

      <p>
        Integracja OAuth umożliwia płynne logowanie użytkowników przy zachowaniu
        wysokiego poziomu bezpieczeństwa.
        Jest to podejście często spotykane w rzeczywistych aplikacjach komercyjnych.
      </p>

      <h2>Wyróżniki techniczne</h2>

      <p>
        <mark>Renderowanie po stronie serwera</mark> zapewnia szybkie ładowanie
        początkowe oraz lepszą widoczność w wyszukiwarkach.
        Projekt wykorzystuje kluczowe funkcje Next.js, takie jak API routes,
        dynamiczny routing oraz optymalizację obrazów.
      </p>

      <figure
        style="
          max-width: 520px;
          margin: 2.5rem auto;
          text-align: center;
        "
      >
        <img
          src="/projects/remake-studio/blog.jpg"
          alt="Sekcja blogowa aplikacji Remake Studio"
          class="article-img-right"
          style="
            width: 100%;
            height: auto;
            border-radius: 1.2rem;
          "
        />
        <figcaption>
          <small>Sekcja bloga z dynamicznym routingiem i SSR</small>
        </figcaption>
      </figure>

      <h2>Efekty nauki</h2>

      <p>
        Projekt był pogłębionym wejściem w
        <mark>ekosystem Next.js</mark>,
        wzorce implementacji OAuth oraz dobre praktyki budowania
        skalowalnych aplikacji React gotowych do produkcji.
      </p>
    `,
  },
  github: 'https://github.com/Gurgson/remake-studio',
  live: 'https://remake-studio.netlify.app/',
  thumbnailUrl: '/projects/remake-studio/thumbnail.jpg',
  startDate: '2023-04',
  endDate: '2023-06',
  category: 'web',
  status: 'completed',

  seo: {
    title: {
      en: 'Remake Studio – Next.js SSR & OAuth Web Application',
      pl: 'Remake Studio – aplikacja Next.js z SSR i OAuth',
    },
    desc: {
      en: 'Production-ready Next.js application featuring server-side rendering, OAuth authentication and a dynamic blog system.',
      pl: 'Produkcyjna aplikacja Next.js z renderowaniem po stronie serwera, uwierzytelnianiem OAuth oraz dynamiczną sekcją bloga.',
    },
    keywords: {
      primary: {
        en: 'next.js ssr oauth application',
        pl: 'aplikacja next.js ssr oauth',
      },
      secondary: {
        en: [
          'next.js',
          'react',
          'typescript',
          'oauth',
          'server-side rendering',
        ],
        pl: [
          'next.js',
          'react',
          'typescript',
          'oauth',
          'renderowanie po stronie serwera',
        ],
      },
      longTail: {
        en: [
          'next.js blog with oauth authentication',
          'server side rendered next.js application',
        ],
        pl: [
          'blog next.js z uwierzytelnianiem oauth',
          'aplikacja next.js z renderowaniem po stronie serwera',
        ],
      },
    },
  },
} satisfies ProjectItem

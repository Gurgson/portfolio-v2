import type { ProjectItem } from '@/types/Project'

export const dailyPodcast = {
  id: 5,
  slug: {
    en: 'daily-podcast',
    pl: 'daily-podcast',
  },
  name: {
    en: 'Daily Podcast',
    pl: 'Daily Podcast',
  },
  highlight: false,
  teamSize: 1,
  technologies: [
    { code: 'react', short: 'React', full: 'React.js Library' },
    { code: 'typescript', short: 'TS', full: 'TypeScript' },
    { code: 'vite', short: 'Vite', full: 'Vite Build Tool' },
    { code: 'styledcomponents', short: 'Styled', full: 'styled-components' },
  ],
  cardDescription: {
    en: 'Frontend project simulating team workflow using a Figma template. Focuses on SEO-friendly, responsive design with smooth animations.',
    pl: 'Projekt frontendowy symulujący pracę zespołową na podstawie szablonu Figma. Skupia się na SEO-friendly, responsywnym designie z płynnymi animacjami.',
  },
  articleHtml: {
    en: `
    <h2>Project Overview</h2>

<p>
  <mark>Daily Podcast</mark> is a frontend project created to simulate a
  real-world team workflow using a freely available Figma template.
  The main goal was to deliver a
  <strong>fully responsive</strong> and <strong>SEO-friendly</strong> website
  while following professional frontend standards.
</p>

<h2>Design Implementation</h2>

<p>
  The interface was built with a strong focus on
  <mark>semantic HTML</mark> and
  <mark>pixel-perfect accuracy</mark>.
  Every layout element was carefully translated from the Figma design
  to ensure visual consistency across all breakpoints.
</p>

<h3>User Experience & Accessibility</h3>

<p>
  Smooth animations and subtle transitions were introduced to guide the
  user’s attention without overwhelming the content.
  The structure follows accessibility best practices, improving both
  usability and search engine visibility.
</p>

<h2>Technical Stack</h2>

<p>
  The project was developed using
  <strong>React</strong> with <strong>TypeScript</strong> to ensure type safety
  and long-term maintainability.
  <mark>Vite</mark> was chosen for its fast development experience, while
  <mark>styled-components</mark> enabled a modular and scalable styling
  approach.
</p>

<figure
  style="
    max-width: 320px;
    margin: 2rem auto;
    text-align: center;
  "
>
  <img
    src="/projects/daily-podcast/mobile.jpg"
    alt="Mobile responsive view of the Daily Podcast website"
    class="article-img-left"
    style="
      width: 100%;
      height: auto;
      border-radius: 1.2rem;
    "
  />
  <figcaption>
    <small>Mobile-first responsive layout</small>
  </figcaption>
</figure>

<h2>Key Focus Areas</h2>

<ul>
  <li>Pixel-perfect Figma to code translation</li>
  <li>Semantic HTML for accessibility and SEO</li>
  <li>Smooth, performance-friendly CSS animations</li>
  <li>Mobile-first responsive design</li>
  <li>On-page SEO optimization</li>
</ul>

    `,
    pl: `
      <h2>Opis projektu</h2>

<p>
  <mark>Daily Podcast</mark> to projekt frontendowy stworzony w celu
  zasymulowania rzeczywistej pracy zespołowej na podstawie
  ogólnodostępnego szablonu Figma.
  Kluczowym celem było przygotowanie
  <strong>w pełni responsywnej</strong> i
  <strong>przyjaznej SEO</strong> strony internetowej.
</p>

<h2>Implementacja designu</h2>

<p>
  Interfejs został zbudowany z naciskiem na
  <mark>semantyczny HTML</mark> oraz
  <mark>pixel-perfect</mark> odwzorowanie designu.
  Każdy element layoutu został dokładnie przeniesiony z projektu Figma
  do kodu.
</p>

<h3>Doświadczenie użytkownika i dostępność</h3>

<p>
  Płynne animacje oraz subtelne przejścia wspierają nawigację użytkownika,
  jednocześnie nie zaburzając czytelności treści.
  Struktura strony poprawia dostępność oraz widoczność w wyszukiwarkach.
</p>

<h2>Stack technologiczny</h2>

<p>
  Projekt został zrealizowany w
  <strong>React</strong> z wykorzystaniem
  <strong>TypeScript</strong>, co zapewnia bezpieczeństwo typów i łatwiejsze
  utrzymanie kodu.
  <mark>Vite</mark> odpowiada za szybkie środowisko developerskie, a
  <mark>styled-components</mark> umożliwia modularne podejście do stylowania.
</p>

<figure
  style="
    max-width: 320px;
    margin: 2rem auto;
    text-align: center;
  "
>
  <img
    src="/projects/daily-podcast/mobile.jpg"
    alt="Responsywny widok mobilny strony Daily Podcast"
    class="article-img-left"
    style="
      width: 100%;
      height: auto;
      border-radius: 1.2rem;
    "
  />
  <figcaption>
    <small>Układ strony w podejściu mobile-first</small>
  </figcaption>
</figure>

<h2>Główne obszary skupienia</h2>

<ul>
  <li>Pixel-perfect tłumaczenie Figma na kod</li>
  <li>Semantyczny HTML i dostępność</li>
  <li>Płynne animacje CSS</li>
  <li>Responsywny design mobile-first</li>
  <li>Optymalizacja SEO</li>
</ul>

    `,
  },
  github: 'https://github.com/Gurgson/daily-podcast',
  live: 'https://podofcast.netlify.app/',
  thumbnailUrl: '/projects/daily-podcast/thumbnail.jpg',
  startDate: '2023-08',
  endDate: '2023-09',
  category: 'web',
  status: 'completed',

  seo: {
    title: {
      en: 'Daily Podcast – React & TypeScript Frontend Project',
      pl: 'Daily Podcast – projekt frontendowy w React i TypeScript',
    },
    desc: {
      en: 'SEO-friendly and responsive frontend project based on a Figma design. Built with React, TypeScript and Vite.',
      pl: 'SEO-friendly i responsywny projekt frontendowy oparty o Figma. Zbudowany w React, TypeScript i Vite.',
    },
    keywords: {
      primary: {
        en: 'daily podcast react project',
        pl: 'daily podcast projekt react',
      },
      secondary: {
        en: ['react', 'typescript', 'vite', 'frontend'],
        pl: ['react', 'typescript', 'vite', 'frontend'],
      },
      longTail: {
        en: ['react podcast website', 'figma to react project'],
        pl: ['projekt figma react', 'strona podcast react'],
      },
    },
  },
} satisfies ProjectItem

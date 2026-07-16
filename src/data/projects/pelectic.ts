import type { ProjectItem } from '@/types/Project'

export const pElectric: ProjectItem = {
  id: 7,
  slug: { en: 'p-electric', pl: 'p-electric' },
  name: { en: 'P.Electric', pl: 'P.Electric' },
  highlight: false,
  teamSize: 1,
  technologies: [
    { code: 'javascript', short: 'JS', full: 'JavaScript' },
    { code: 'html', short: 'HTML', full: 'HTML5' },
    { code: 'css', short: 'CSS', full: 'CSS3' },
    { code: 'responsive', short: 'RWD', full: 'Responsive Web Design' },
  ],
  cardDescription: {
    en: 'My first commercial project - a professional website for an electrical services company. Built with vanilla JavaScript and responsive design.',
    pl: 'Mój pierwszy projekt komercyjny - profesjonalna strona dla firmy usług elektrycznych. Zbudowana z vanilla JavaScript i responsywnym designem.',
  },
  articleHtml: {
    en: `
      <h2>Project Overview</h2>

      <p>
        <mark>P.Electric</mark> was my first commercial project—a milestone in my
        development career.
        The goal was to create a professional online presence for a local electrical
        services company.
      </p>

      <h2>Client Requirements</h2>

      <p>
        The client needed a simple, professional website to showcase their
        services, display contact information, and establish credibility with
        potential customers. The site had to be fully responsive and work
        flawlessly on all devices.
      </p>

      <h2>Technical Approach</h2>

      <p>
        Built with <mark>vanilla JavaScript</mark>, <mark>HTML5</mark>, and <mark>CSS3</mark>,
        the site prioritizes performance and accessibility.
        No frameworks were used, resulting in fast load times and minimal dependencies.
      </p>

     

      <h2>Lessons Learned</h2>

      <p>
        This project taught me valuable lessons about client communication,
        requirement gathering, and delivering solutions that meet real business needs.
        It laid the foundation for my future freelance and commercial work.
      </p>
    `,
    pl: `
      <h2>Opis projektu</h2>

      <p>
        <mark>P.Electric</mark> był moim pierwszym projektem komercyjnym—kamieniem
        milowym w mojej karierze developerskiej.
        Celem było stworzenie profesjonalnej obecności online dla lokalnej firmy
        usług elektrycznych.
      </p>

      <h2>Wymagania klienta</h2>

      <p>
        Klient potrzebował prostej, profesjonalnej strony do prezentacji swoich
        usług, wyświetlania informacji kontaktowych i budowania wiarygodności
      wśród potencjalnych klientów. Strona musiała działać bezbłędnie na
        wszystkich urządzeniach.
      </p>

      <h2>Podejście techniczne</h2>

      <p>
        Zbudowana z <mark>vanilla JavaScript</mark>, <mark>HTML5</mark> i <mark>CSS3</mark>,
        strona priorytetyzuje wydajność i dostępność.
        Nie użyto frameworków, co skutkuje szybkim ładowaniem i minimalnymi zależnościami.
      </p>

      
      <h2>Wyciągnięte wnioski</h2>

      <p>
        Projekt nauczył mnie cennych lekcji o komunikacji z klientem, zbieraniu
        wymagań i dostarczaniu rozwiązań spełniających rzeczywiste potrzeby
        biznesowe. Był fundamentem dla mojej przyszłej pracy freelance i komercyjnej.
      </p>
    `,
  },
  github: 'https://github.com/Gurgson/P.Electric',
  thumbnailUrl: '/projects/p-electric/thumbnail.jpg',
  startDate: '2021-06',
  endDate: '2021-08',
  category: 'web',
  status: 'completed',

  seo: {
    title: {
      en: 'P.Electric – Professional Electrical Services Website',
      pl: 'P.Electric – Profesjonalna strona dla firmy usług elektrycznych',
    },
    desc: {
      en: 'First commercial project built with vanilla JavaScript, HTML5 and CSS3. Fully responsive and performance-oriented website for an electrical services company.',
      pl: 'Pierwszy projekt komercyjny zbudowany z vanilla JavaScript, HTML5 i CSS3. W pełni responsywna i wydajna strona dla firmy usług elektrycznych.',
    },
    keywords: {
      primary: {
        en: 'p.electric website javascript html css',
        pl: 'strona p.electric javascript html css',
      },
      secondary: {
        en: [
          'vanilla javascript',
          'responsive web design',
          'commercial project',
          'client website',
        ],
        pl: [
          'vanilla javascript',
          'responsywny design',
          'projekt komercyjny',
          'strona dla klienta',
        ],
      },
      longTail: {
        en: [
          'commercial website built with vanilla javascript',
          'responsive electrical services website',
        ],
        pl: [
          'komercyjna strona zbudowana w vanilla javascript',
          'responsywna strona dla firmy elektrycznej',
        ],
      },
    },
  },
} satisfies ProjectItem

import { ProjectItem } from '@/types/Project'

export const czytnik: ProjectItem = {
  id: 3,
  slug: { en: 'czytnik', pl: 'czytnik' },
  name: { en: 'Czytnik', pl: 'Czytnik' },
  highlight: true,
  teamSize: 4,
  technologies: [
    { code: 'csharp', short: 'C#', full: 'C# Language' },
    { code: 'aspnet', short: 'ASP.NET', full: 'ASP.NET Core' },
    { code: 'efcore', short: 'EF Core', full: 'Entity Framework Core' },
    { code: 'razor', short: 'Razor', full: 'Razor Pages' },
    { code: 'postgresql', short: 'PostgreSQL', full: 'PostgreSQL Database' },
    { code: 'mssql', short: 'MS SQL', full: 'Microsoft SQL Server' },
  ],
  cardDescription: {
    pl: 'Modularna księgarnia online z naciskiem na dostępność, wydajność i progresywne ulepszenia.',
    en: 'A modular online bookstore focused on accessibility, performance and progressive enhancement.',
  },
  articleHtml: {
    en: `
      <h2>Project Overview</h2>
      <p>Czytnik was developed as part of a group university project at the College of Economics and Computer Science in Cracow. The application functions as a complete online bookstore with user management, catalog browsing, and order processing capabilities.</p>
      
      
      <h2>My Responsibilities</h2>
      <p>Within the team, my main responsibility involved designing and exposing data-handling controllers. I created the API layer that bridges the frontend interface with the database, ensuring efficient data retrieval and manipulation.</p>
      
      <h2>Technical Evolution</h2>
      <p>The application was built using ASP.NET Core with Razor Pages for the frontend. Originally, the project used MS SQL Server as the database, but was later migrated to PostgreSQL to improve deployment flexibility and reduce licensing costs.</p>
      
      
      <h2>Key Features</h2>
      <ul>
        <li>User authentication and authorization</li>
        <li>Book catalog with search and filtering</li>
        <li>Shopping cart functionality</li>
        <li>Order management system</li>
        <li>Admin panel for inventory management</li>
      </ul>
    `,
    pl: `
      <h2>Opis projektu</h2>
      <p>Czytnik został stworzony jako część grupowego projektu uczelnianego w Wyższej Szkole Ekonomii i Informatyki w Krakowie. Aplikacja funkcjonuje jako kompletna księgarnia internetowa z zarządzaniem użytkownikami, przeglądaniem katalogu i obsługą zamówień.</p>
      
      
      <h2>Moje obowiązki</h2>
      <p>W zespole moim głównym zadaniem było projektowanie i eksponowanie kontrolerów obsługujących dane. Stworzyłem warstwę API łączącą interfejs frontendowy z bazą danych, zapewniając efektywne pobieranie i manipulację danymi.</p>
      
      <h2>Ewolucja techniczna</h2>
      <p>Aplikacja została zbudowana przy użyciu ASP.NET Core z Razor Pages na frontendzie. Pierwotnie projekt używał MS SQL Server jako bazy danych, ale później został zmigrowany do PostgreSQL, aby poprawić elastyczność wdrożenia i zmniejszyć koszty licencji.</p>
      
      
      <h2>Kluczowe funkcje</h2>
      <ul>
        <li>Uwierzytelnianie i autoryzacja użytkowników</li>
        <li>Katalog książek z wyszukiwaniem i filtrowaniem</li>
        <li>Funkcjonalność koszyka zakupowego</li>
        <li>System zarządzania zamówieniami</li>
        <li>Panel administracyjny do zarządzania magazynem</li>
      </ul>
    `,
  },
  github: 'https://github.com/Gurgson/Czytnik',
  thumbnailUrl: '/projects/czytnik/thumbnail.jpg',
  startDate: '2023-03',
  endDate: '2023-06',
  category: 'web',
  status: 'completed',
  seo: {
    title: {
      pl: 'Czytnik — Księgarnia online na .NET 5',
      en: 'Czytnik — Online bookstore on .NET 5',
    },
    desc: {
      pl: 'Case study projektu Czytnik — wydajna i dostępna księgarnia online oparta o ASP.NET Core.',
      en: 'Case study for Czytnik — an accessible, performant online bookstore built with ASP.NET Core.',
    },
    keywords: {
      primary: {
        pl: 'księgarnia, ASP.NET Core',
        en: 'bookstore, ASP.NET Core',
      },
      secondary: {
        pl: ['dostępność', 'wyszukiwanie'],
        en: ['accessibility', 'search'],
      },
      longTail: {
        pl: ['księgarnia .NET case study', 'serwerowe renderowanie sklep'],
        en: ['dotnet bookstore case study', 'server-side rendered ecommerce'],
      },
    },
  },
}

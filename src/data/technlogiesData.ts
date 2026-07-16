import { Technology } from '@/types/Technology'
import { Localized } from '@/lib/i18n-config'
import { getTech } from '@/lib/technologies-helper'

const languages: Technology[] = [
  getTech('javascript'),
  getTech('typescript'),
  getTech('csharp'),
]

const tools: Technology[] = [
  getTech('vscode'),
  getTech('visualstudio'),
  getTech('git'),
  getTech('github'),
  getTech('docker'),
  getTech('postman'),
  getTech('figma'),
  getTech('npm'),
  getTech('vitejs'),
  getTech('webpack'),
]

const frontendTechnologies: Technology[] = [
  getTech('react'),
  getTech('nextjs'),
  getTech('html5'),
  getTech('css3'),
  getTech('sass'),
  getTech('tailwindcss'),
]

const frontendConcepts: Localized<string[]> = {
  en: [
    'Responsive Web Design',
    'SEO Optimization',
    'Semantic HTML',
    'Accessibility (A11y)',
    'Cross-browser Compatibility',
  ],
  pl: [
    'Responsywny Design',
    'Optymalizacja SEO',
    'Semantyczny HTML',
    'Dostępność (A11y)',
    'Kompatybilność przeglądarek',
  ],
}

const backendTechnologies: Technology[] = [
  getTech('dotnetcore'),
  getTech('nodejs'),
  getTech('express'),
  getTech('mysql'),
  getTech('postgresql'),
  getTech('microsoftsqlserver'),
  getTech('mongodb'),
]

const backendConcepts: Localized<string[]> = {
  en: [
    'RESTful APIs',
    'MVC, MVVM Patterns',
    'Microservices',
    'SOLID Principles',
    'Clean Architecture (Design Patters)',
    'WebSockets',
    'Caching Strategies',
  ],
  pl: [
    'RESTful APIs',
    'Wzorzec MVC, MVVM',
    'Mikroserwisy',
    'Zasady SOLID',
    'Czysta Architektura (Wzorce projektowe)',
    'WebSockets',
    'Strategie Cache',
  ],
}

export type TechnologyGroup = {
  title: Localized<string>
  left: {
    label: Localized<string>
    items: Technology[] | Localized<string[]>
  }
  right: {
    label: Localized<string>
    items: Technology[] | Localized<string[]>
  }
}

const technologiesData: TechnologyGroup[] = [
  {
    title: { en: 'Main', pl: 'Główne' },
    left: { label: { en: 'Languages', pl: 'Języki' }, items: languages },
    right: { label: { en: 'Tools', pl: 'Narzędzia' }, items: tools },
  },
  {
    title: { en: 'Frontend', pl: 'Frontend' },
    left: {
      label: { en: 'Technologies', pl: 'Technologie' },
      items: frontendTechnologies,
    },
    right: {
      label: { en: 'Concepts', pl: 'Koncepcje' },
      items: frontendConcepts,
    },
  },
  {
    title: { en: 'Backend', pl: 'Backend' },
    left: {
      label: { en: 'Technologies', pl: 'Technologie' },
      items: backendTechnologies,
    },
    right: {
      label: { en: 'Concepts', pl: 'Koncepcje' },
      items: backendConcepts,
    },
  },
]

export {
  languages,
  tools,
  frontendTechnologies,
  frontendConcepts,
  backendTechnologies,
  backendConcepts,
  technologiesData,
}

import { Localized } from '@/lib/i18n-config'

export const recommendationsTranslations = {
  hero: {
    title: {
      pl: 'Rekomendacje',
      en: 'Recommendations',
    } as Localized<string>,
    subtitle: {
      pl: 'Co mówią o mnie inni',
      en: 'What others say about me',
    } as Localized<string>,
    description: {
      pl: 'Opinie od firm i osób, z którymi miałem przyjemność współpracować.',
      en: 'Testimonials from companies and people I had the pleasure to work with.',
    } as Localized<string>,
  },
  card: {
    download: {
      pl: 'Pobierz PDF',
      en: 'Download PDF',
  } as Localized<string>,
    viewPdf: {
      pl: 'Podgląd',
      en: 'Preview',
    } as Localized<string>,
    hidePdf: {
      pl: 'Ukryj podgląd',
      en: 'Hide preview',
    } as Localized<string>,
    readMore: {
      pl: 'Zobacz pełną rekomendację',
      en: 'View full recommendation',
    } as Localized<string>,
  },
  empty: {
    title: {
      pl: 'Brak rekomendacji',
      en: 'No recommendations',
    } as Localized<string>,
    description: {
      pl: 'Rekomendacje pojawią się wkrótce.',
      en: 'Recommendations coming soon.',
    } as Localized<string>,
  },
}

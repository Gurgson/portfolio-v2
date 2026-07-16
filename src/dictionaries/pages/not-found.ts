import { Localized } from '@/lib/i18n-config'

export const notFoundTranslations = {
  code: '404',
  title: {
    pl: 'Strona nie znaleziona',
    en: 'Page not found',
  } as Localized<string>,
  description: {
    pl: 'Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.',
    en: "Sorry, the page you're looking for doesn't exist or has been moved.",
  } as Localized<string>,
  backHome: {
    pl: 'Wróć na stronę główną',
    en: 'Back to homepage',
  } as Localized<string>,
  contact: {
    pl: 'Skontaktuj się',
    en: 'Contact me',
  } as Localized<string>,
}

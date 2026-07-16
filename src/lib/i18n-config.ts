export const locales = ['pl', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pl'
export type Localized<T> = Record<Locale, T>

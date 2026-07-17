import type { Localized } from '@/lib/i18n-config'

export interface Technology {
  code: string
  short: string
  full?: string
}

export type TechGroupSide = {
  label: Localized<string>
  items: Technology[] | Localized<string[]>
}

export type TechnologyGroup = {
  title: Localized<string>
  left: TechGroupSide
  right: TechGroupSide
}

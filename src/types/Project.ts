import { Localized } from '@/lib/i18n-config'
import { Technology } from './Technology'
type ProjectCategory = 'web' | 'desktop'
type ProjectStatus = 'in-progress' | 'completed'
export interface ProjectItem {
  id: number
  slug: Localized<string>
  name: Localized<string>
  highlight: boolean
  teamSize?: number
  technologies: Technology[]
  cardDescription: Localized<string>
  articleHtml?: Localized<string>
  github?: string
  live?: string | Localized<string>
  thumbnailUrl: string
  startDate?: string
  endDate?: string
  category?: ProjectCategory
  status?: ProjectStatus
  seo: {
    title: Localized<string>
    desc: Localized<string>
    keywords: {
      primary: Localized<string>
      secondary?: Localized<string[]>
      longTail?: Localized<string[]>
    }
  }
  followerMesages?: Localized<string>
}

// types.ts
import { Technology } from '@/types/Technology'
import { Locale } from '@/lib/i18n-config'
import { ProjectItem } from '@/types/Project'

export type SortOption = 'name' | 'highlight' | 'date'
export type FilterLogic = 'and' | 'or'
export type ProjectStatus = 'in-progress' | 'completed' | 'archived'
export type ProjectCategory = 'web' | 'desktop'

export interface Filters {
  status: ProjectStatus[]
  category: ProjectCategory[]
  technologies: string[] // zmiana na string[] - przechowujemy tylko code
}

export interface ProjectsSectionProps {
  projects: ProjectItem[]
  lang: Locale
  availableTechnologies: Technology[]
}

export interface ProjectsListProps {
  projects: ProjectItem[]
  lang: Locale
}

export interface ProjectItemProps {
  project: ProjectItem
  lang: Locale
}

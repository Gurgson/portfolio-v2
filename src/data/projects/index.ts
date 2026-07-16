import { ProjectItem } from '@/types/Project'
import { czytnik } from './czytnik'
import { geopuzzle } from './geopuzzle'
import { dailyPodcast } from './dailypodcast'
import { remakeStudio } from './remakestudio'
import { pElectric } from './pelectic'
import { portfolio } from './portfolio'
import { poltorque } from './poltorque'

export const projects: ProjectItem[] = [
  poltorque,
  geopuzzle,
  czytnik,
  dailyPodcast,
  remakeStudio,
  pElectric,
  portfolio,
]

export const getHighlightedProjects = (): ProjectItem[] => {
  return projects.filter((project) => project.highlight)
}

export const getProjectBySlug = (
  slug: string,
  lang: 'en' | 'pl' = 'en'
): ProjectItem | undefined => {
  return projects.find((project) => project.slug[lang] === slug)
}

export const getProjectById = (id: number): ProjectItem | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectsByCategory = (
  category: 'web' | 'desktop'
): ProjectItem[] => {
  return projects.filter((project) => project.category === category)
}

export const getProjectsByStatus = (
  status: 'in-progress' | 'completed'
): ProjectItem[] => {
  return projects.filter((project) => project.status === status)
}

export const getProjectsByTechnology = (
  technologyCode: string
): ProjectItem[] => {
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.code === technologyCode)
  )
}

export default projects

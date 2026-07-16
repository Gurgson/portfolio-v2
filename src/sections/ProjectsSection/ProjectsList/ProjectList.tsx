// ProjectsList/ProjectList.tsx
import { ProjectItem } from '../ProjectItem/ProjectItem'
import { ProjectsListProps } from '../types'
import { sections } from '@/dictionaries/sections'
import styles from './projectList.module.css'

export const ProjectsList = ({ projects, lang }: ProjectsListProps) => {
  const t = sections.projectsSection

  if (projects.length === 0) {
    return <p className={styles.noResults}>{t.noResults[lang]}</p>
  }

  return (
    <div className={styles.cardsContainer}>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} lang={lang} />
      ))}
    </div>
  )
}

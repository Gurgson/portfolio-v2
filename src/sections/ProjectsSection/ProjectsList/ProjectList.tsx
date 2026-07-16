// ProjectsList/ProjectList.tsx
import { ProjectItem } from '../ProjectItem/ProjectItem'
import { ProjectsListProps } from '../types'
import { useT } from '@/providers/Dictionary/DictionaryProvider'
import styles from './projectList.module.css'

export const ProjectsList = ({ projects, lang }: ProjectsListProps) => {
  const t = useT()

  if (projects.length === 0) {
    return (
      <p className={styles.noResults}>
        {t('sections.projectsSection.noResults')}
      </p>
    )
  }

  return (
    <div className={styles.cardsContainer}>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} lang={lang} />
      ))}
    </div>
  )
}

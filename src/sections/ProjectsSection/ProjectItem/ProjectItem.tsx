import Link from 'next/link'
import { ProjectItemProps } from '../types'
import { sections } from '@/dictionaries/sections'
import styles from './projectItem.module.css'
import { getProjectUrl } from '@/lib/route-helper'
export const ProjectItem = ({ project, lang }: ProjectItemProps) => {
  const t = sections.projectsSection.card

  const formatDuration = () => {
    if (!project.startDate) return null

    const start = new Date(project.startDate)
    const end = project.endDate ? new Date(project.endDate) : null

    const startStr = start.toLocaleDateString(
      lang === 'pl' ? 'pl-PL' : 'en-US',
      {
        month: 'short',
        year: 'numeric',
      }
    )

    if (!end) {
      return `${startStr} - ${t.ongoing[lang]}`
    }

    const endStr = end.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      month: 'short',
      year: 'numeric',
    })

    return `${startStr} - ${endStr}`
  }

  const duration = formatDuration()
  const projectUrl = getProjectUrl(project.slug[lang], lang)

  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img
          src={project.thumbnailUrl}
          alt={project.name[lang]}
          className={styles.cardImage}
        />
        <div className={styles.cardOverlay} />

        {project.status && (
          <span className={styles.statusBadge} data-status={project.status}>
            {project.status === 'in-progress'
              ? t.status.inProgress[lang]
              : t.status.completed[lang]}
          </span>
        )}

        {project.highlight && (
          <span className={styles.highlightBadge} title={t.featured[lang]}>
            ★
          </span>
        )}

        {project.teamSize && project.teamSize > 1 && (
          <span className={styles.teamBadge}>👥 {project.teamSize}</span>
        )}

        {project.category && (
          <span className={styles.categoryBadge}>
            {project.category === 'web' ? '🌐' : '💻'}
          </span>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.name[lang].toUpperCase()}</h3>

        {duration && <small className={styles.cardDuration}>{duration}</small>}

        <p className={styles.cardDescription}>
          {project.cardDescription[lang]}
        </p>

        <div className={styles.cardTechnologies}>
          {project.technologies.map((tech) => (
            <span key={tech.code} className={styles.techTag}>
              {tech.short}
            </span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          <Link href={projectUrl} className={styles.cardLink}>
            <p>
              <b>{t.readMore[lang]} →</b>
            </p>
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLinkSecondary}
            >
              <small>{t.github[lang]}</small>
            </a>
          )}

          {project.live && (
            <a
              href={typeof project.live === 'string' ? project.live : project.live[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLinkSecondary}
            >
              <small>{t.liveDemo[lang]}</small>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

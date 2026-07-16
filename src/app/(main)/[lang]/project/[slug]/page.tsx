import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Locale } from '@/lib/i18n-config'
import { getProjectBySlug, getProjects } from '@/lib/data/projects'
import styles from './projectPage.module.css'

interface ProjectPageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'pl']
  const params: { lang: Locale; slug: string }[] = []
  const projects = await getProjects()

  for (const lang of locales) {
    for (const project of projects) {
      params.push({ lang, slug: project.slug[lang] })
    }
  }

  return params
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string }
  const project = await getProjectBySlug(slug, lang)

  if (!project) {
    return {
      title: lang === 'pl' ? 'Projekt nie znaleziony' : 'Project Not Found',
    }
  }
  const { primary, secondary, longTail } = project.seo.keywords
  const keywordsArr = [
    primary[lang],
    ...(secondary?.[lang] ?? []),
    ...(longTail?.[lang] ?? []),
  ].filter(Boolean)

  return {
    title: project.seo.title[lang],
    keywords: keywordsArr,
    description: project.seo.desc[lang],
    openGraph: {
      title: project.name[lang],
      description: project.cardDescription[lang],
      images: [project.thumbnailUrl],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string }
  const project = await getProjectBySlug(slug, lang)

  if (!project) {
    notFound()
  }

  const liveUrl = typeof project.live === 'string' ? project.live : project.live?.[lang]

  const labels = {
    team: lang === 'pl' ? 'Zespół' : 'Team',
    person: lang === 'pl' ? 'os.' : 'people',
    completed: lang === 'pl' ? 'Ukończony' : 'Completed',
    inProgress: lang === 'pl' ? 'W trakcie' : 'In Progress',
    liveDemo: lang === 'pl' ? 'Zobacz na żywo' : 'Live Demo',
    viewCode: lang === 'pl' ? 'Zobacz kod' : 'View Code',
    category: {
      web: lang === 'pl' ? 'Aplikacja webowa' : 'Web Application',
      desktop: lang === 'pl' ? 'Aplikacja desktopowa' : 'Desktop Application',
    },
  }

  return (
    <div className={` ${styles.pageWrapper}`}>
      <article className={styles.container}>
        {/* Header: Thumbnail + Details */}
        <header className={styles.header}>
          <div className={styles.thumbnail}>
            <Image
              src={project.thumbnailUrl}
              alt={project.name[lang]}
              fill
              className={styles.thumbnailImage}
              priority
            />
          </div>

          <div className={styles.details}>
            <h1 className={styles.title}>{project.name[lang]}</h1>

            <div className={styles.meta}>
              {project.status && (
                <span
                  className={`${styles.status} ${styles[project.status.replace('-', '')]}`}
                >
                  {project.status === 'completed'
                    ? labels.completed
                    : labels.inProgress}
                </span>
              )}

              {project.category && (
                <span className={styles.category}>
                  {labels.category[project.category]}
                </span>
              )}

              {project.startDate && (
                <span className={styles.date}>
                  {project.startDate}
                  {project.endDate ? ` – ${project.endDate}` : ''}
                </span>
              )}

              {project.teamSize && (
                <span className={styles.teamSize}>
                  {labels.team}: {project.teamSize} {labels.person}
                </span>
              )}
            </div>

            <p className={styles.description}>
              {project.cardDescription[lang]}
            </p>

            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech.code} className={styles.tech} title={tech.full}>
                  {tech.short}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkSecondary}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {labels.viewCode}
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkPrimary}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {labels.liveDemo}
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Article content */}
        {project.articleHtml?.[lang] && (
          <section className={styles.article}>
            <div
              className={`${styles.articleContent} article-content`}
              dangerouslySetInnerHTML={{ __html: project.articleHtml[lang] }}
            />
          </section>
        )}
      </article>
    </div>
  )
}

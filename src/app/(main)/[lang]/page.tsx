import { Metadata } from 'next'
import styles from './homePage.module.css'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import { buildOpenGraph, buildTwitter } from '@/lib/seo'
import HeroSection from '@/sections/HeroSection/HeroSection'
import TechnologiesSection from '@/sections/TechnologiesSection/TechnologiesSection'
import AboutSection from '@/sections/AboutSection/AboutSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { getProjects } from '@/lib/data/projects'
import { getTechGroups } from '@/lib/data/tech'
import { techs } from '@/data/technologies'
import CTASection from '@/sections/CTASection/CTASection'
import { ScrollDots } from '@/components/ScrollDots/ScrollDots'
import { StackFit } from '@/components/StackFit/StackFit'

interface HomePageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }
  const t = await getT(lang)
  const title = t('seo.home.title')
  const description = t('seo.home.description')

  return {
    // absolute: bez sufiksu z szablonu (tytuł jest już pełny)
    title: { absolute: title },
    description,
    alternates: { canonical: `/${lang}` },
    openGraph: buildOpenGraph({ title, description, lang, path: `/${lang}` }),
    twitter: buildTwitter({ title, description }),
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = (await params) as { lang: Locale }
  const projects = await getProjects()
  const techGroups = await getTechGroups()

  // Etykiety kropek — inline, bo feature jest jeszcze eksperymentalny.
  // Gdy się ustabilizuje, przenieść do tabeli translations (page='sections').
  const dotItems =
    lang === 'pl'
      ? [
          { id: 'hero', label: 'Start' },
          { id: 'about', label: 'O mnie' },
          { id: 'tech', label: 'Technologie' },
          { id: 'projects', label: 'Projekty' },
          { id: 'cta', label: 'Kontakt' },
        ]
      : [
          { id: 'hero', label: 'Start' },
          { id: 'about', label: 'About' },
          { id: 'tech', label: 'Technologies' },
          { id: 'projects', label: 'Projects' },
          { id: 'cta', label: 'Contact' },
        ]

  return (
    <>
      <ScrollDots
        items={dotItems}
        navLabel={lang === 'pl' ? 'Nawigacja sekcji' : 'Section navigation'}
      />
      <StackFit />
      <header id="hero" data-stack-item className={styles.stackItem}>
        <HeroSection lang={lang} />
      </header>
      <main>
        <div id="about" data-stack-item className={styles.stackItem}>
          <AboutSection lang={lang} />
        </div>
        <div id="tech" data-stack-item className={styles.stackItem}>
          <TechnologiesSection lang={lang} groups={techGroups} />
        </div>
        <div id="projects" data-stack-item className={styles.stackItem}>
          <ProjectsSection
            projects={projects}
            lang={lang}
            availableTechnologies={techs}
          />
        </div>
        <div id="cta" data-stack-item className={styles.stackItem}>
          <CTASection lang={lang} />
        </div>
      </main>
    </>
  )
}

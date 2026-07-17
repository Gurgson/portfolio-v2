import { Metadata } from 'next'
import styles from './homePage.module.css'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import HeroSection from '@/sections/HeroSection/HeroSection'
import TechnologiesSection from '@/sections/TechnologiesSection/TechnologiesSection'
import AboutSection from '@/sections/AboutSection/AboutSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { getProjects } from '@/lib/data/projects'
import { getTechGroups } from '@/lib/data/tech'
import { techs } from '@/data/technologies'
import CTASection from '@/sections/CTASection/CTASection'

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
    openGraph: { title, description },
    twitter: { title, description },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = (await params) as { lang: Locale }
  const projects = await getProjects()
  const techGroups = await getTechGroups()

  return (
    <>
      <header className={styles.container}>
        <HeroSection lang={lang} />
      </header>
      <main>
        <AboutSection lang={lang} />
        <TechnologiesSection lang={lang} groups={techGroups} />
        <ProjectsSection
          projects={projects}
          lang={lang}
          availableTechnologies={techs}
        />
        <CTASection lang={lang} />
      </main>
    </>
  )
}

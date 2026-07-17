import styles from './homePage.module.css'
import { Locale } from '@/lib/i18n-config'
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

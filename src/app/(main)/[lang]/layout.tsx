import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Locale, locales } from '@/lib/i18n-config'
import Navigation from '@/components/Navigation/Navigation'
import { ThemeProvider } from '@/providers/Themes/ThemeProvider'
import { Follower, FollowerProvider, Spawn } from '@/components/FollowerSystem'
import { SetHtmlLang } from '@/components/SetHtmlLang/SetHtmlLang'
import { cookies } from 'next/headers'
import Footer from '@/sections/Footer/Footer'
import { DictionaryProvider } from '@/providers/Dictionary/DictionaryProvider'
import { ProjectSlugsProvider } from '@/providers/ProjectSlugs/ProjectSlugsProvider'
import { getDictionary, createTranslator } from '@/lib/data/translations'
import { getProjectSlugs } from '@/lib/data/projects'

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  return {
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `https://jstapinski.eu/${locale}`])
      ),
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = (await params) as { lang: Locale }

  if (!locales.includes(lang)) {
    notFound()
  }

  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')
  const initialTheme =
    themeCookie?.value === 'light' || themeCookie?.value === 'dark'
      ? themeCookie.value
      : 'dark'

  const dict = await getDictionary(lang)
  const t = createTranslator(dict)
  const projectSlugs = await getProjectSlugs()

  return (
    <>
      <SetHtmlLang lang={lang} />
      <ThemeProvider initialTheme={initialTheme}>
        <DictionaryProvider dict={dict}>
          <ProjectSlugsProvider slugs={projectSlugs}>
          <Navigation lang={lang} />
          <FollowerProvider>
            <Spawn
              position={{ x: 0, y: 80 }}
              lang={lang}
              welcomeMessage={{
                content: (
                  <>
                    {t('common.follower.welcomeMessageBefore')}{' '}
                    <img
                      src="/bird-nest.png"
                      alt={t('common.follower.nestAlt')}
                      style={{ width: 24, height: 24, verticalAlign: 'middle' }}
                    />{' '}
                    {t('common.follower.welcomeMessageAfter')}
                  </>
                ),
                popAfter: 1000,
                duration: 4000,
              }}
            />
            <Follower lang={lang} />
            {children}
          </FollowerProvider>
            <Footer lang={lang} />
          </ProjectSlugsProvider>
        </DictionaryProvider>
      </ThemeProvider>
    </>
  )
}

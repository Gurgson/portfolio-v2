import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'

import '@/css/globals.css'

import { Locale, locales } from '@/lib/i18n-config'
import { createTranslator, getDictionary, getT } from '@/lib/data/translations'
import { getProjectSlugs } from '@/lib/data/projects'

import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/sections/Footer/Footer'

import { ThemeScript } from '@/providers/Themes/ThemeScript'
import { ThemeProvider } from '@/providers/Themes/ThemeProvider'
import { DictionaryProvider } from '@/providers/Dictionary/DictionaryProvider'
import { ProjectSlugsProvider } from '@/providers/ProjectSlugs/ProjectSlugsProvider'

import { Follower, FollowerProvider, Spawn } from '@/components/FollowerSystem'

import { StructuredData } from '@/components/StructuredData/StructuredData'

const SITE_URL = 'https://jstapinski.eu'
const SITE_NAME = 'Jakub Stapiński - Portfolio'
const OG_IMAGE_URL = `${SITE_URL}/og.webp`

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const t = await getT(lang)
  const description = t('seo.default.description')

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },

    description,

    authors: [
      {
        name: 'Jakub Stapiński',
        url: 'https://github.com/gurgson',
      },
    ],

    keywords: [
      'portfolio',
      'web development',
      'frontend',
      'backend',
      'React.js',
      'Next.js',
      'Node.js',
      '.NET',
      'SQL',
      'MongoDB',
      'RESTful APIs',
      'SOLID',
      'Clean Architecture',
    ],

    icons: {
      icon: '/icons/icon.svg',
    },

    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
      ),
    },

    openGraph: {
      title: SITE_NAME,
      description,
      url: `${SITE_URL}/${lang}`,
      siteName: SITE_NAME,
      locale: lang === 'pl' ? 'pl_PL' : 'en_US',
      type: 'website',

      images: {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Full-Stack Developer`,
        type: 'image/webp',
      },
    },

    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description,
      images: [OG_IMAGE_URL],
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
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const [cookieStore, dict, projectSlugs] = await Promise.all([
    cookies(),
    getDictionary(lang),
    getProjectSlugs(),
  ])

  const themeCookie = cookieStore.get('theme')

  const initialTheme =
    themeCookie?.value === 'light' || themeCookie?.value === 'dark'
      ? themeCookie.value
      : 'dark'

  const t = createTranslator(dict)

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <StructuredData />
      </head>

      <body>
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
                          width={24}
                          height={24}
                          style={{
                            verticalAlign: 'middle',
                          }}
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
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import { buildOpenGraph, buildTwitter } from '@/lib/seo'
import { ContactSection } from '@/sections/ContactSection/ContactSection'

interface ContactPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }
  const t = await getT(lang)
  const title = t('sections.contact.hero.title')
  const description = t('sections.contact.hero.description')

  return {
    title,
    description,
    alternates: { canonical: `/${lang}/contact` },
    openGraph: buildOpenGraph({
      title,
      description,
      lang,
      path: `/${lang}/contact`,
    }),
    twitter: buildTwitter({ title, description }),
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = (await params) as { lang: Locale }

  return (
    <main>
      <ContactSection lang={lang} />
    </main>
  )
}

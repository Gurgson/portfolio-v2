import { Metadata } from 'next'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import { ContactSection } from '@/sections/ContactSection/ContactSection'

interface ContactPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }
  const t = await getT(lang)

  return {
    title: t('sections.contact.hero.title'),
    description: t('sections.contact.hero.description'),
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

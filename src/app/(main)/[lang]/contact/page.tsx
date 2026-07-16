import { Metadata } from 'next'
import { Locale } from '@/lib/i18n-config'
import { sections } from '@/dictionaries/sections'
import { ContactSection } from '@/sections/ContactSection/ContactSection'

interface ContactPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }
  const { hero } = sections.contact

  return {
    title: hero.title[lang],
    description: hero.description[lang],
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

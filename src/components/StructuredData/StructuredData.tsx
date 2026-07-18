import { CONTACT_INFO, PERSONAL_INFO, SITE_CONFIG } from '@/lib/contants'

/**
 * JSON-LD structured data (schema.org) — dane dla Google (rich results).
 * Person + WebSite. Renderowane po stronie serwera w <head>/<body>.
 */
export function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.fullName,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/me.jpg`,
    jobTitle: 'Full-Stack Developer',
    email: `mailto:${CONTACT_INFO.email}`,
    sameAs: [CONTACT_INFO.github, CONTACT_INFO.linkedin],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      '.NET',
      'C#',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Software Architecture',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${PERSONAL_INFO.fullName} - Portfolio`,
    url: SITE_CONFIG.url,
    inLanguage: ['pl', 'en'],
    author: { '@type': 'Person', name: PERSONAL_INFO.fullName },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

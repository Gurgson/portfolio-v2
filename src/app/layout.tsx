import { Metadata } from 'next'
import '@/css/globals.css'
import { ThemeScript } from '@/providers/Themes/ThemeScript'

export const metadata: Metadata = {
  metadataBase: new URL('https://jstapinski.eu'),
  title: {
    default: 'Jakub Stapiński - Portfolio',
    template: '%s | Jakub Stapiński - Portfolio',
  },
  description:
    'Jakub Stapiński — full-stack developer. Projects, skills and expertise in React, Next.js, .NET and Node.js. Web apps, APIs and software architecture.',
  authors: [
    {
      name: 'Jakub Stapiński',
      url: 'https://github.com/gurgson',
    },
  ],
  // Domyślne OG/Twitter dla całej witryny; strony pod [lang] nadpisują je
  // zlokalizowanymi wartościami. Obrazek dostarcza konwencja opengraph-image.
  openGraph: {
    title: 'Jakub Stapiński - Portfolio',
    description:
      'Jakub Stapiński — full-stack developer. React, Next.js, .NET, Node.js.',
    url: 'https://jstapinski.eu',
    siteName: 'Jakub Stapiński - Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Stapiński - Portfolio',
    description:
      'Jakub Stapiński — full-stack developer. React, Next.js, .NET, Node.js.',
  },
  keywords: [
    'portfolio',
    'web development',
    'frontend',
    'backend',
    'React.js',
    'Node.js',
    '.NET',
    'SQL',
    'MongoDB',
    'RESTful APIs',
    'SOLID',
    'Clean Architecture',
  ],
  icons: '/icons/icon.svg',
  alternates: {
    canonical: 'https://jstapinski.eu',
    languages: {
      en: 'https://jstapinski.eu/en',
      pl: 'https://jstapinski.eu/pl',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  )
}

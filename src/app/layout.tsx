import { Metadata } from 'next'
import '@/css/globals.css'
import { ThemeScript } from '@/providers/Themes/ThemeScript'

export const metadata: Metadata = {
  title: {
    default: 'Jakub Stapiński - Portfolio',
    template: '%s | Jakub Stapiński - Portfolio',
  },
  authors: [
    {
      name: 'Jakub Stapiński',
      url: 'github.com/gurgson',
    },
  ],
  openGraph: {
    title: 'Jakub Stapiński Portfolio',
    description:
      "Explore Jakub Stapiński's projects, skills, and expertise in frontend & backend development, databases, and software architecture.",
    url: 'https://jstapinski.eu',
    siteName: 'Jakub Stapiński - Portfolio',
    images: [
      {
        url: '/icons/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Jakub Stapiński - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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

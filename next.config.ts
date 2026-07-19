import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',

  // Optymalizacja next/image WŁĄCZONA — wymaga `sharp` w runtime (instalowany
  // w kontenerze, patrz Dockerfile). Serwuje responsywne rozmiary + webp.
  // avif pomijamy: kodowanie jest kosztowne CPU na małym VPS.
  images: {
    formats: ['image/webp'],
  },
  htmlLimitedBots: /.*/,
  async rewrites() {
    return [
      {
        source: '/pl/artykul/:id',
        destination: '/pl/article/:id',
      },

      {
        source: '/pl/rekomendacje',
        destination: '/pl/recommendations',
      },

      {
        source: '/pl/kontakt',
        destination: '/pl/contact',
      },
      {
        source: '/en/article/:id',
        destination: '/en/article/:id',
      },

      {
        source: '/en/recommendations',
        destination: '/en/recommendations',
      },

      {
        source: '/en/contact',
        destination: '/en/contact',
      },
    ]
  },
}
export default nextConfig

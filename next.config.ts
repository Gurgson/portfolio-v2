import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  // Bez optymalizatora (sharp) — obrazki serwowane wprost z public/.
  // Wystarczające dla portfolio (pliki są już webp/jpg), działa w kontenerze.
  images: { unoptimized: true },
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

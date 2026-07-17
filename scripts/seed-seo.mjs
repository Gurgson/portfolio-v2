// Idempotentny upsert kluczy SEO do tabeli translations (page='seo').
// Uruchom: node scripts/seed-seo.mjs   (czyta DATABASE_URL z .env.local)
// Bezpieczny do wielokrotnego uruchomienia (ON CONFLICT DO UPDATE).
import { Pool } from 'pg'
import fs from 'fs'

const env = fs.readFileSync('.env.local', 'utf8')
const url = env.match(/DATABASE_URL=(.+)/)[1].trim().replace(/^["']|["']$/g, '')
const pool = new Pool({ connectionString: url })

// page, key, { pl, en }
const rows = [
  [
    'seo',
    'home.title',
    {
      pl: 'Jakub Stapiński — Full-Stack Developer',
      en: 'Jakub Stapiński — Full-Stack Developer',
    },
  ],
  [
    'seo',
    'home.description',
    {
      pl: 'Portfolio Jakuba Stapińskiego — full-stack developer. Aplikacje webowe, API i architektura w React, Next.js, .NET i Node.js. Zobacz projekty i rekomendacje.',
      en: 'Portfolio of Jakub Stapiński — full-stack developer. Web apps, APIs and architecture in React, Next.js, .NET and Node.js. Explore projects and recommendations.',
    },
  ],
  [
    'seo',
    'default.description',
    {
      pl: 'Full-stack developer — React, Next.js, .NET, Node.js. Projekty, rekomendacje i kontakt.',
      en: 'Full-stack developer — React, Next.js, .NET, Node.js. Projects, recommendations and contact.',
    },
  ],
  [
    'seo',
    'og.tagline',
    {
      pl: 'Full-Stack Developer',
      en: 'Full-Stack Developer',
    },
  ],
]

const sql = `
  insert into translations (page, key, locale, value)
  values ($1, $2, $3, $4)
  on conflict (page, key, locale) do update set value = excluded.value
`

let n = 0
for (const [page, key, byLocale] of rows) {
  for (const locale of ['pl', 'en']) {
    await pool.query(sql, [page, key, locale, byLocale[locale]])
    n++
    console.log(`  ✓ ${page}.${key} [${locale}]`)
  }
}
console.log(`\nUpserted ${n} wierszy.`)
await pool.end()

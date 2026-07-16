import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

// Wczytaj .env.local (Next-owa konwencja), z fallbackiem na .env.
config({ path: '.env.local' })
config()

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})

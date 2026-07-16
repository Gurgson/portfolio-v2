import {
  pgTable,
  text,
  integer,
  boolean,
  jsonb,
  primaryKey,
} from 'drizzle-orm/pg-core'
import type { Localized } from '@/lib/i18n-config'
import type { Technology } from '@/types/Technology'

export const translations = pgTable(
  'translations',
  {
    page: text('page').notNull(),
    key: text('key').notNull(),
    locale: text('locale').notNull(),
    value: text('value').notNull(),
  },
  (t) => [primaryKey({ columns: [t.page, t.key, t.locale] })]
)

export const recommendations = pgTable('recommendations', {
  id: text('id').primaryKey(),
  company: text('company').notNull(),
  author: text('author'),
  description: jsonb('description').$type<Localized<string>>(),
  filePath: jsonb('file_path').$type<Localized<string>>().notNull(),
  imagePath: jsonb('image_path').$type<Localized<string>>().notNull(),
  sort: integer('sort').default(0).notNull(),
})

type ProjectLive = string | Localized<string>

type ProjectSeo = {
  title: Localized<string>
  desc: Localized<string>
  keywords: {
    primary: Localized<string>
    secondary?: Localized<string[]>
    longTail?: Localized<string[]>
  }
}

export const projects = pgTable('projects', {
  id: integer('id').primaryKey(),
  slug: jsonb('slug').$type<Localized<string>>().notNull(),
  name: jsonb('name').$type<Localized<string>>().notNull(),
  highlight: boolean('highlight').default(false).notNull(),
  teamSize: integer('team_size'),
  technologies: jsonb('technologies').$type<Technology[]>().notNull(),
  cardDescription: jsonb('card_description')
    .$type<Localized<string>>()
    .notNull(),
  articleHtml: jsonb('article_html').$type<Localized<string>>(),
  github: text('github'),
  live: jsonb('live').$type<ProjectLive>(),
  thumbnailUrl: text('thumbnail_url').notNull(),
  startDate: text('start_date'),
  endDate: text('end_date'),
  category: text('category'), // 'web' | 'desktop'
  status: text('status'), // 'in-progress' | 'completed'
  seo: jsonb('seo').$type<ProjectSeo>().notNull(),
  followerMessages: jsonb('follower_messages').$type<Localized<string>>(),
  sort: integer('sort').default(0).notNull(),
})

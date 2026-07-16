// dictionaries/index.ts

import Translations from '@/types/Translations'
import { navigation } from './navigation'
import { sections } from './sections'
import { common } from './common'

const translations: Translations = {
  navigation,
  articles: {},
  sections,
  common,
}

export default translations

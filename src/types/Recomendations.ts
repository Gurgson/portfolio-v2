import { Localized } from '@/lib/i18n-config'

interface Recommendation {
  id: string
  filePath: Localized<string>
  imagePath: Localized<string>
  description?: Localized<string>
  company: string
  author?: string
}

export default Recommendation

'use client'

import { useEffect } from 'react'
import { Locale } from '@/lib/i18n-config'

interface SetHtmlLangProps {
  lang: Locale
}

export function SetHtmlLang({ lang }: SetHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}

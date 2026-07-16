'use client'

import { createContext, useContext, type ReactNode } from 'react'

export type Dictionary = Record<string, string>

const DictionaryContext = createContext<Dictionary>({})

export function DictionaryProvider({
  dict,
  children,
}: {
  dict: Dictionary
  children: ReactNode
}) {
  return (
    <DictionaryContext.Provider value={dict}>
      {children}
    </DictionaryContext.Provider>
  )
}

/** Hook dla client-componentów: t('sections.homeHeader.title'). */
export function useT() {
  const dict = useContext(DictionaryContext)
  return (key: string, fallback?: string): string => dict[key] ?? fallback ?? key
}

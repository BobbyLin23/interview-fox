'use client'

import { ThemeProvider } from 'next-themes'

export function ColorProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

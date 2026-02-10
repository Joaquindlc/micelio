'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="data-theme" // Importante: Panda leerá este atributo
      defaultTheme="light"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}
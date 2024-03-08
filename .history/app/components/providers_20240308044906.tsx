// app/providers.jsx

'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => {
  return <NextThemeProvider {...rest}>{children}</NextThemeProvider>
}

{/*'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
*/}
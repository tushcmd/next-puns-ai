
'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProvider defaultTheme="system" attribute='class' enableSystem>{children}</ThemeProvider>
}
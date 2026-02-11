import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'
import Providers from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The-I Prep - Premier College Consulting Academy',
  description: 'Expert college consulting services for boarding school, university, transfer, graduate school, and EC consulting. Proven track record of Ivy League admissions success.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

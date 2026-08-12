import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'
import Providers from './providers'
import { SITE_URL } from '@/lib/site-config'

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
  metadataBase: new URL(SITE_URL),
  title: '디아이프렙 The I Prep | 미국 대학·보딩스쿨 입시 컨설팅',
  description: '미국 대학, 보딩스쿨, 편입, 대학원, EC 컨설팅까지 제공하는 디아이프렙의 입시 컨설팅 서비스를 소개합니다.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
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

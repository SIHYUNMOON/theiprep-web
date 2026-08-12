import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: '/college-consulting',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

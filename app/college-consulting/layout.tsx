import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '미국 대학 지원 컨설팅 | 디아이프렙 The I Prep',
  description: 'Premium Full Consulting, Deluxe Package, Essay Only 등 디아이프렙의 미국 대학 지원 컨설팅 패키지를 확인하세요.',
  alternates: {
    canonical: '/college-consulting',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

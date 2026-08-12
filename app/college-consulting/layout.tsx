import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학 지원 컨설팅 | 디아이프렙 The I Prep',
  description: 'Premium Full Consulting, Deluxe Package, Essay Only 등 디아이프렙의 미국 대학 지원 컨설팅 패키지를 확인하세요.',
  alternates: {
    canonical: '/college-consulting',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '대학교 컨설팅', path: '/college' },
  { name: '대학 지원 컨설팅', path: '/college-consulting' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

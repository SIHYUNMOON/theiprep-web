import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학 편입 지원 컨설팅 | 디아이프렙 The I Prep',
  description: 'Premium Full Consulting, Deluxe Package 등 디아이프렙의 미국 대학 편입 지원 컨설팅 패키지를 확인하세요.',
  alternates: {
    canonical: '/transfer-application',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '편입 컨설팅', path: '/transfer' },
  { name: '편입 지원 컨설팅', path: '/transfer-application' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학 편입 에세이 컨설팅 | 디아이프렙 The I Prep',
  description: 'Essay Only 패키지로 제공되는 디아이프렙의 미국 대학 편입 에세이 컨설팅 서비스를 소개합니다.',
  alternates: {
    canonical: '/transfer-essay',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '편입 컨설팅', path: '/transfer' },
  { name: '편입 에세이 컨설팅', path: '/transfer-essay' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학 편입 컨설팅 | 디아이프렙 The I Prep',
  description: '미국 명문대학 편입을 위한 디아이프렙의 편입 컨설팅 프로그램과 서비스를 소개합니다.',
  alternates: {
    canonical: '/transfer',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '편입 컨설팅', path: '/transfer' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

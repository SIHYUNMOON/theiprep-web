import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 입시 Academic EC 컨설팅 | 디아이프렙 The I Prep',
  description: '학업 역량을 강화하는 디아이프렙의 Academic EC 컨설팅 프로그램을 소개합니다.',
  alternates: {
    canonical: '/ec-academic',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'EC 컨설팅', path: '/ec' },
  { name: 'Academic EC', path: '/ec-academic' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

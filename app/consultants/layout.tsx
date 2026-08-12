import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 입시 컨설턴트 소개 | 디아이프렙 The I Prep',
  description: '디아이프렙의 전문 입시 컨설턴트팀을 소개합니다. 보딩스쿨, 대학, 편입, 대학원 등 다양한 분야의 컨설턴트를 만나보세요.',
  alternates: {
    canonical: '/consultants',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Consultants', path: '/consultants' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

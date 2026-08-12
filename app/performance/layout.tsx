import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학·보딩스쿨 합격 실적 | 디아이프렙 The I Prep',
  description: '디아이프렙의 연도별 미국 대학 및 보딩스쿨 합격 실적과 주요 학교별 입시 결과를 확인할 수 있습니다.',
  alternates: {
    canonical: '/performance',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '연도별 입시 결과', path: '/performance' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

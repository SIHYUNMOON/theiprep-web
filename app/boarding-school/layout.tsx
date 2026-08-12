import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 보딩스쿨 입시 컨설팅 | 디아이프렙 The I Prep',
  description: '미국 보딩스쿨 학교 선정부터 지원 전략, 에세이, 인터뷰 준비까지 제공하는 디아이프렙의 보딩스쿨 입시 컨설팅 서비스입니다.',
  alternates: {
    canonical: '/boarding-school',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '보딩스쿨 컨설팅', path: '/boarding-school' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

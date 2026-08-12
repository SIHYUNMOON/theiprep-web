import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 입시 멘토링 컨설팅 | 디아이프렙 The I Prep',
  description: '진로가 명확하지 않은 학생을 위한 디아이프렙의 주니어·시니어 멘토링 컨설팅 프로그램을 소개합니다.',
  alternates: {
    canonical: '/mentoring-consulting',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '대학교 컨설팅', path: '/college' },
  { name: '멘토링 컨설팅', path: '/mentoring-consulting' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

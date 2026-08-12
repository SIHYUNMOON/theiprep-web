import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 대학원 입시 컨설팅 | 디아이프렙 The I Prep',
  description: '미국 명문대학원 진학을 위한 디아이프렙의 대학원 입시 컨설팅 프로그램과 서비스를 소개합니다.',
  alternates: {
    canonical: '/graduate',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '대학원 컨설팅', path: '/graduate' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

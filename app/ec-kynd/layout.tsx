import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 입시 KYND EC 프로그램 | 디아이프렙 The I Prep',
  description: '디아이프렙이 제공하는 KYND 비교과 활동(EC) 프로그램을 소개합니다.',
  alternates: {
    canonical: '/ec-kynd',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'EC 컨설팅', path: '/ec' },
  { name: 'KYND EC', path: '/ec-kynd' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '미국 주니어 보딩스쿨 컨설팅 | 디아이프렙 The I Prep',
  description: 'Premium, Deluxe, Light 패키지로 제공되는 디아이프렙의 주니어 보딩스쿨 입시 컨설팅 프로그램을 확인하세요.',
  alternates: {
    canonical: '/junior-boarding',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: '보딩스쿨 컨설팅', path: '/boarding-school' },
  { name: 'Junior Boarding', path: '/junior-boarding' },
])

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  )
}

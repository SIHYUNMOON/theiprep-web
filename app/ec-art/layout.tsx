import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '미국 입시 Art EC 컨설팅 | 디아이프렙 The I Prep',
  description: '예술 포트폴리오와 비교과 활동을 지원하는 디아이프렙의 Art EC 컨설팅 프로그램을 소개합니다.',
  alternates: {
    canonical: '/ec-art',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

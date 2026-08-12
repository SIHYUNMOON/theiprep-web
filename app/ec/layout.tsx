import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '미국 입시 비교과 활동 EC | 디아이프렙 The I Prep',
  description: '미국 명문대 진학을 위한 디아이프렙의 비교과 활동(EC) 프로그램을 소개합니다.',
  alternates: {
    canonical: '/ec',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

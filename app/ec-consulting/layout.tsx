import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '미국 대학 입시 EC 컨설팅 | 디아이프렙 The I Prep',
  description: '미국 대학 입시를 위한 비교과 활동(EC) 설계와 컨설팅을 제공하는 디아이프렙의 EC 컨설팅 서비스입니다.',
  alternates: {
    canonical: '/ec-consulting',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

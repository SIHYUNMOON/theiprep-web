import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '미국 시니어 보딩스쿨 컨설팅 | 디아이프렙 The I Prep',
  description: 'Premium, Deluxe, Light 패키지로 구성된 디아이프렙의 시니어 보딩스쿨 전학 컨설팅 프로그램을 소개합니다.',
  alternates: {
    canonical: '/senior-boarding',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

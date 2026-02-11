'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function ECAcademicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Academic Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Academic
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* 포함 서비스 Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>대회</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  학생들이 학문적 깊이를 더할 수 있도록<br />
                  대회 참가를 위한 맞춤형 지원을 제공합니다.<br />
                  주제 선정, 기획, 결과물 완성까지의 과정을 지도하며,<br />
                  학생들이 자신만의 독창적인 결과물을<br />
                  만들어낼 수 있도록 돕습니다.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  * 대회 리스트, 비용, 진행 사항은<br />
                  &nbsp;&nbsp;상담 신청 시 제공됩니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>연구</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  학생들이 학문적 깊이를 더할 수 있도록<br />
                  연구 활동을 위한 맞춤형 지원을 제공합니다.<br />
                  주제 선정, 프로젝트 기획,<br />
                  결과물 완성까지의 과정을 지도하며,<br />
                  학생들이 자신만의 독창적인 결과물을<br />
                  만들어낼 수 있도록 돕습니다.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  * 리서치 리스트, 비용, 진행 사항은<br />
                  &nbsp;&nbsp;상담 신청 시 제공됩니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>인턴십</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  학생들의 관심사와 목표에 맞는<br />
                  인턴십 기회를 연결하고,<br />
                  지원서 준비부터 인터뷰 준비까지<br />
                  전 과정을 철저히 관리합니다.<br />
                  실질적인 경험을 통해 학생들이<br />
                  학문적 흥미를 현실과 연결할 수 있도록<br />
                  지원합니다.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  * 비용, 진행 및 관련 사항은<br />
                  &nbsp;&nbsp;상담 신청 시 제공됩니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="text-left text-sm space-y-2 opacity-90">
            <p className="leading-relaxed">
              The I Prep | 서울특별시 강남구 역삼로 424, 진영빌딩 4층 | 4F Jinyoung Building, Yeoksam-ro 424, Gangnam-gu, Seoul
            </p>
            <p className="leading-relaxed">
              디아이파트너즈 | 사업자번호: 224-85-28561 | 학원설립운영등록 제11725호 | EMAIL theipartners@theiprep.com | TEL : 02-6205-5455
            </p>
            <p className="leading-relaxed">
              입금계좌 | 디아이파트너즈학원<br />
              신한은행 140-012-951522
            </p>
            <p className="pt-2">
              Copyright © The I Prep. ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

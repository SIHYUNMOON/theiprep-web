'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function TransferEssayPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Essay Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Essay
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Essay Only Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 12학년 2학기 – 대학교 2학년 1학기</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Essay Only</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                편입 준비에서 <span className="text-[rgb(13,37,99)] font-semibold">강력한 에세이는 합격을 결정짓는 중요한 요소</span>입니다.
                <br />
                에세이 컨설팅 프로그램은 학생이 <span className="text-[rgb(13,37,99)] font-semibold">자신만의 학업 스토리를 효과적으로 전달</span>할 수 있도록 지도하며,
                <br />
                글쓰기 구조부터 세부적인 피드백까지 철저한 검토를 제공합니다.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                Transfer Essay는 논리적으로 학생의 관심이
                <br />
                어떻게 전문적으로 성장해 왔는지를 보여주어야 합니다.
                <br />
                FACT 중심의 나열이 아닌,
                <br />
                Why 혹은 질문 중심의 글을 통해
                <br />
                Admission Committee가 학생의 잠재력과 학업 능력을
                <br />
                동시에 파악할 수 있도록 지도합니다.
                <br />
                아이디어 개발, 초안 작성, 수정 작업까지 단계별로 진행하며
                <br />
                <span className="text-[rgb(13,37,99)] font-semibold">Main Essay(개인 에세이)</span> 및
                <br />
                <span className="text-[rgb(13,37,99)] font-semibold">Supplemental Essay(추가 에세이)</span>를 모두 다룹니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>아이디어 개발 및 주제 선정</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생이 차별화된 주제를 찾을 수 있도록 돕고,
                  개성이 돋보이는 에세이 방향을 설정합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>메인 에세이 작성</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  초안부터 최종 수정까지
                  전 과정에 걸친 피드백을 제공합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>대학별 추가 에세이 작성</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  각 대학이 요구하는 주제에 맞춘
                  에세이 작성 전략을 설계하고 지도합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>문장 구조, 논리, 표현력 개선</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  효과적인 글쓰기를 위한
                  문장 수정, 논리 보완, 표현력 강화를 진행합니다.
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

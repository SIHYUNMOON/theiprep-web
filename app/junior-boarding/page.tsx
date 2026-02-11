'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function JuniorBoardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Junior Boarding Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Junior Boarding
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Premium Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 6학년, 7학년, 8학년 학생</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Premium Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">프리미엄 패키지</span>는 상위 주니어 보딩스쿨 입학을 목표로 하는 학생들에게 <span className="text-[rgb(13,37,99)] font-semibold">종합적인 지원</span>을 제공합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>이력 관리</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학업 성적, 예술, 스포츠, 리더십 등 지원자의 강점을 극대화하는 전략적 이력 관리
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>학업 관리</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  SSAT, TOEFL Jr., Duolingo 등 필수 시험 준비를 위한 체계적 지도
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">학교 선정 및 인터뷰 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  명확하고 자신감 있는 인터뷰 준비를 통해 지원자의 적합성과 강점을 효과적으로 전달
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Ivy League 졸업자와 명문 보딩스쿨 출신 전문가의 지도 아래, 학생의 개성을 돋보이게 하는 에세이 작성
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>추가 지원 서비스</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  원서 작성, 추천서 준비, 학부모 에세이 번역, 행정 서류 작성, 입학 후 문화 적응 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Deluxe Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Deluxe Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">디럭스 패키지</span>는 기존의 학생 프로필을 강화하고, <span className="text-[rgb(13,37,99)] font-semibold">입학에 필요한 주요 요소</span>를 집중적으로 지원합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>학교 선정 및 인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학교와의 적합성을 명확히 표현할 수 있도록 맞춤형 인터뷰 대비 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생 개성을 나타내는 에세이 작성과 수정, Ivy League 및 명문 보딩스쿨 전문가의 세심한 피드백 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>추가 지원 서비스</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  원서 작성, 추천서 준비, 행정 서류 작성 등 입학 전반의 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Light Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Light Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">라이트 패키지</span>는 학생들이 <span className="text-[rgb(13,37,99)] font-semibold">에세이와 인터뷰 준비</span>에 집중할 수 있도록 설계된 프로그램입니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  긴장하지 않고 자신감을 가지고 의견을 전달할 수 있도록 철저히 대비
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  지원 학교별 요구 사항에 맞춘 에세이 작성 및 수정
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

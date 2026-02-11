'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function SeniorBoardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Senior Boarding Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Senior Boarding
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Premium Package */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 9학년, 10학년</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Premium Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">프리미엄 패키지</span>는 최상위 보딩스쿨 입학을 목표로 하는 학생들을 위해 <span className="text-[rgb(13,37,99)] font-semibold">종합적인 지원</span>을 제공합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>이력 관리</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  경쟁력 있는 보딩스쿨이 요구하는 학업, 과외 활동, 리더십 역량을 반영한 전략적 프로필 관리
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
                  SSAT, TOEFL 등 필수 시험에서 우수한 점수를 받을 수 있도록 체계적인 학습 플랜 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>학교 선정 및 인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  인터뷰에서 학생의 강점과 학교와의 적합성을 효과적으로 표현할 수 있도록 철저한 대비 제공
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
                  Ivy League 졸업자와 명문 보딩스쿨 졸업자의 전문적인 지도 하에 강점을 부각하는 에세이 작성
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
                  원서 작성, 추천서 준비, 학부모 에세이 번역, 입학 후 문화 적응 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Deluxe Package */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Deluxe Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">디럭스 패키지</span>는 학생이 이미 준비해 온 프로필을 기반으로 <span className="text-[rgb(13,37,99)] font-semibold">핵심 입시 요소를 보완</span>하고 강화하는 프로그램입니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>학교 선정 및 인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학교와의 적합성과 학생의 강점을 명확히 표현할 수 있도록 맞춤형 인터뷰 대비 제공
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>추가 지원 서비스</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  원서 작성, 추천서 준비, 행정 서류 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Light Package */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Light Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">라이트 패키지</span>는 <span className="text-[rgb(13,37,99)] font-semibold">입학 과정의 핵심 요소</span>에만 초점을 맞춘 프로그램으로, 학생이 에세이와 인터뷰 준비에 집중할 수 있도록 지원합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  명확하고 자신 있게 자신의 의견을 표현할 수 있도록 철저히 대비
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
                  학생의 개성을 효과적으로 보여주는 학교별 에세이 작성 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Transfer Consulting */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                보딩스쿨 전학 컨설팅 프로그램 (Boarding School Transfer Consulting)
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="text-[rgb(13,37,99)] font-semibold">보딩스쿨 전학 프로그램</span>은 상위 5개 명문 보딩스쿨로의 전학을 목표로 하는 학생들을 위해 설계되었습니다. 이 프로그램은 전학 과정에서 필수적인 강력한 학업 기록, 과외 활동, 추천서, 인터뷰 준비를 체계적으로 지원하며, 학생들이 새로운 학교에서 성공적으로 적응하고 두각을 나타낼 수 있도록 돕습니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>이력 및 학업 기록 검토</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  현재 학교에서의 학업 성적 및 활동 이력을 면밀히 검토하여 전학을 위한 강점과 보완점을 분석하고, 새로운 학교의 요구에 맞춘 전략을 설계합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>학교 선정 및 지원 전략</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업적 관심과 목표를 기반으로 상위 5개 보딩스쿨 중 최적의 학교를 선정하고, 학교별 맞춤형 지원 전략을 제공합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  전학 인터뷰는 학생이 새로운 환경에 얼마나 적합하고 준비되어 있는지를 평가하는 중요한 과정입니다. 학생들이 긴장하지 않고 자신의 강점을 효과적으로 전달할 수 있도록 철저히 대비합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>에세이 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  전학 지원 에세이는 현재의 학교 경험과 새로운 학교에서의 목표를 효과적으로 전달해야 합니다. 학생의 스토리를 부각할 수 있도록 전문적인 피드백과 지도를 제공합니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>추가 지원</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  추천서 준비, 행정 서류 작성, 부모님 에세이 번역, 전학 후 학교 적응을 위한 조언 등 전 과정을 체계적으로 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* TOP Art Boarding */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                Change to TOP 예술 보딩
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                미국 명문 예술 보딩스쿨 입시는 뛰어난 학업기록과 추천서 이외 <span className="text-[rgb(13,37,99)] font-semibold">포트폴리오와 창의적 스토리텔링이 핵심 요소</span>입니다. 디아이프렙의 <span className="text-[rgb(13,37,99)] font-semibold">명문 예술 보딩 컨설팅 프로그램은 포트폴리오 컨설팅</span>과 포트폴리오의 스토리와 맞는 <span className="text-[rgb(13,37,99)] font-semibold">artist statement 그리고 work description컨설팅</span>을 결합한 타 미술 유학원과 차별화되는 all-inclusive 프로그램으로, 학생이 자신의 예술적 비전을 명확하게 전달할 수 있도록 모든 요소를 지원합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>이력 및 학업 기록 검토</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  현재 학교에서의 학업 성적 및 활동 이력을 면밀히 검토하여 전학을 위한 강점과 보완점을 분석하고, 새로운 학교의 요구에 맞춘 전략을 설계합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>학교 선정 및 지원 전략</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업적 관심과 목표를 기반으로 상위 5개 보딩스쿨 중 최적의 학교를 선정하고, 학교별 맞춤형 지원 전략을 제공합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>인터뷰 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  전학 인터뷰는 학생이 새로운 환경에 얼마나 적합하고 준비되어 있는지를 평가하는 중요한 과정입니다. 학생들이 긴장하지 않고 자신의 강점을 효과적으로 전달할 수 있도록 철저히 대비합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>에세이 준비</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  전학 지원 에세이는 현재의 학교 경험과 새로운 학교에서의 목표를 효과적으로 전달해야 합니다. 학생의 스토리를 부각할 수 있도록 전문적인 피드백과 지도를 제공합니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span>아트 포트폴리오 전략 및 피드백</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  탑 예술 보딩학교들은 각각 추구하는 문화와 특성이 있고, 따라서 학생의 강점과 지원 학교의 특성을 반영하는 포트폴리오를 기회 해야 됩니다. 포트폴리오 작품 주제 선정,구성 부터 스토리텔링 까지 치밀하고 전략적인 지도를 제공 합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>추가 지원</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  추천서 준비, 행정 서류 작성, 부모님 에세이 번역, 전학 후 학교 적응을 위한 조언 등 전 과정을 체계적으로 지원합니다.
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

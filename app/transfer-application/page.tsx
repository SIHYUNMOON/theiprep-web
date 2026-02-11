'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function TransferApplicationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Transfer Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Transfer
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Premium Full Consulting */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 12학년 2학기 – 대학교 2학년 1학기</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Premium Full Consulting</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                편입에는 대학교 GPA 혹은 SAT점수만 반영되는 것이라는 일반적인 오해와는 반대로,
                학교들마다 자신들의 priority standard를 가지고 있습니다.
                따라서 지원하고자 하는 학교가 어떠한 학생을 원하고
                어떠한 요소들을 중요하게 판단하는지를 파악하여 철저히 준비하기를 위해
                <span className="text-[rgb(13,37,99)] font-semibold"> 전 과정 컨설팅을 원하는 학생들을 위한 프로그램</span>입니다.
                단순한 원서 작성 지원이 아닌,
                학생의 강점을 최대한 반영한 <span className="text-[rgb(13,37,99)] font-semibold">장기적인 로드맵을 설계</span>하여
                입시 경쟁력을 극대화합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>개인 맞춤 로드맵 작성</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Personalized Roadmap & Profile Management)</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업 성취도, 과외 활동, 관심 분야를 종합적으로 분석하여
                  최적의 편입 전략을 설계합니다.
                  학생의 성장 과정에 따라 지속적으로 계획을 수정하고 조정하여
                  장기적으로 경쟁력을 갖출 수 있도록 지원합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>이력 관리 및 액티비티 계획</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Profile & Activity Planning)</p>
                <p className="text-foreground/80 leading-relaxed">
                  편입은 단순한 성적만을 평가하는 것이 아니라,
                  학생의 활동과 리더십을 중점적으로 고려합니다.
                  봉사 활동, 연구 프로젝트, 인턴십, 경시대회 참가 등
                  관심 분야에 맞춘 활동을 기획하고 관리하여
                  지원서에서 강력한 경쟁력을 갖출 수 있도록 돕습니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(College Selection)</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업 성취도, 관심 전공, 편입 전략을 바탕으로
                  목표, Target, Reach, Safety 대학을 포함한
                  균형 잡힌 지원 대학 리스트를 구성합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>원서 작성 및 검토</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Application Guidance & Review)</p>
                <p className="text-foreground/80 leading-relaxed">
                  각 대학의 요구 사항에 맞춘 지원서 작성 지도 및
                  입학 사정관 관점의 철저한 검토와 피드백을 제공합니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 작성 및 지도</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Essay Writing & Editing)</p>
                <p className="text-foreground/80 leading-relaxed">
                  Transfer Essay의 논리 구조와 질문 중심 접근을 기반으로
                  Main Essay 및 Supplemental Essay 전반을 지도합니다.
                  아이디어 개발부터 초안 작성, 수정까지 단계별로 진행합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Additional Admissions Support)</p>
                <p className="text-foreground/80 leading-relaxed">
                  추천서 전략, 인터뷰 준비 등
                  편입 전 과정에서 발생할 수 있는 모든 요소를 지원합니다.
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
                디럭스 패키지 프로그램은 대학 리스트 선정부터
                지원서 작성 및 에세이 코칭까지
                <span className="text-[rgb(13,37,99)] font-semibold"> 핵심적인 입시 요소를 집중적으로 지원</span>하는 프로그램입니다.
                장기적인 이력 관리가 필요하지 않은 학생들에게 적합하며,
                <span className="text-[rgb(13,37,99)] font-semibold"> 핵심적인 지원 절차에서 강력한 전략을 제공</span>합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(College Selection)</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업 성취도와 관심 분야에 맞춘 대학 리스트 구성
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>원서 작성 및 검토</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Application Guidance & Review)</p>
                <p className="text-foreground/80 leading-relaxed">
                  Common App 포함 주요 원서 작성 및 피드백 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 코칭</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  <span className="text-[rgb(13,37,99)] font-semibold">• Main Essay (Personal Statement)</span>
                  <br />
                  <span className="text-[rgb(13,37,99)] font-semibold">• Supplemental Essays</span>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Art School Transfer */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">미대</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                미국 명문 아트 스쿨 편입은
                <span className="text-[rgb(13,37,99)] font-semibold"> 세부전공관련 작품 위주의 포트폴리오와 작가로서의 성장과 작품의 이해도가 핵심 요소</span>입니다.
                디아이프렙의 <span className="text-[rgb(13,37,99)] font-semibold">아트 스쿨 편입 프로그램</span>은
                <span className="text-[rgb(13,37,99)] font-semibold"> 포트폴리오 컨설팅</span>,
                <span className="text-[rgb(13,37,99)] font-semibold"> artist statement</span>,
                <span className="text-[rgb(13,37,99)] font-semibold"> work description 컨설팅</span>을 결합한
                차별화된 all-inclusive 프로그램입니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>아트 포트폴리오 전략 및 피드백</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Art Portfolio Consulting & Review)</p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(College Selection for Art Schools)</p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>지원서 및 에세이 코칭</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Application & Essay Coaching for Art Schools)</p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>인터뷰 및 프레젠테이션 준비</span>
                </h4>
                <p className="text-sm text-foreground/70 mb-2">(Interview & Verbal Art Critique Training)</p>
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

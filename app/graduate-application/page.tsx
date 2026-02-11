'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function GraduateApplicationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Grad Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Grad
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Full Consulting Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 MA, MBA, MFA, JD, Ph.D 지원자</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Full Consulting</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                비전문가의 충언 혹은 대학교진학과 같은 방법으로 대학원을 준비하고 있는 것이 많은 학생들의 현실입니다. 단순히 선배 혹은 교수님들의 출신학교들에 의존하여 학교를 선택하거나, 원서준비에만 신경을 쓰는데, 성공적인 대학원 준비는 Contact Email작성부터 시작하여, 전공 적합성, 한국인 학생수용 가능여부, SOP작성, Resume가 아닌 CV작성, 추천인 선택, 및 다양한 변수들이 통합적으로 고려되어야 되는 과정입니다. 디아이프렙 대학원 컨설팅 서비스는 지난 10여년의 경험을 바탕으로 대학원 입시에 시작부터 끝까지 여러분과 함께하며, 지원자들에게 가장 적합한 학교에 성공적으로 진학할 수 있도록 도움을 제공하고 있습니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학원 리스트 선정 (College Selection)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 CV을 바탕으로 최적의 지원 대학원 리스트를 구성합니다. 목표 대학원뿐만 아니라, 안전 지원 (Safety), 적정 지원 (Target), 도전 지원 (Reach)으로 균형 잡힌 리스트를 작성하여 전략적인 지원이 가능하도록 합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>원서 작성 및 검토 (Application Guidance & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생이 각 대학원의 요구사항에 맞춰 지원서를 작성할 수 있도록 지도하며, 입학 사정관의 시각에서 철저한 검토와 피드백을 제공합니다. 지원서 내용이 일관되며 효과적으로 학생의 강점을 부각할 수 있도록 수정 및 보완합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>SOP, PS, CV 작성 및 지도 (Essay Writing & Editing)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  미국 대학원 진학에 있어서 가장 중요한 서류는 Statement of Purpose (SOP)입니다. 대부분의 학생들이 비슷한 시험점수, GPA, 경험 등을 가지고 있기 때문에 최종적으로 합격여부를 결정하는 기준은 SOP가 됩니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스 (Additional Admissions Support)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  대학원별 추천서 전략 및 인터뷰 준비까지 포함하여, 입시 전반에서 발생할 수 있는 모든 요소를 지원합니다.
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Pricing</h3>
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>- 10개 대학원 500만원</li>
                <li>- 5개 대학원 300만원</li>
                <li>- 1개 대학원 100만원</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Full Consulting + Art Portfolio (MFA) */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Full Consulting + Art Portfolio (MFA)</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                비전문가의 충언 혹은 대학교진학과 같은 방법으로 대학원을 준비하고 있는 것이 많은 학생들의 현실입니다. 단순히 선배 혹은 교수님들의 출신학교들에 의존하여 학교를 선택하거나, 원서준비에만 신경을 쓰는데, 성공적인 대학원 준비는 Contact Email작성부터 시작하여, 전공 적합성, 한국인 학생수용 가능여부, SOP작성, Resume가 아닌 CV작성, 추천인 선택, 및 다양한 변수들이 통합적으로 고려되어야 되는 과정입니다. 디아이프렙 대학원 컨설팅 서비스는 지난 10여년의 경험을 바탕으로 대학원 입시에 시작부터 끝까지 여러분과 함께하며, 지원자들에게 가장 적합한 학교에 성공적으로 진학할 수 있도록 도움을 제공하고 있습니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>아트 포트폴리오 전략 및 피드백 (Art Portfolio Consulting & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Artistic voice 및 비전을 반영하는body of work 제출을 위한 포트폴리오 제작을 지원합니다.작품 선정, 주제 개발/설별, 구성 및 피드백을 통해 교수진들에게 강렬한 인상을 줄 수 있는 작품 큐레이팅을 지원하고 작품 설명을 완성합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학원 리스트 선정 (College Selection)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 CV을 바탕으로 최적의 지원 대학원 리스트를 구성합니다. 목표 대학원뿐만 아니라, 안전 지원 (Safety), 적정 지원 (Target), 도전 지원 (Reach)으로 균형 잡힌 리스트를 작성하여 전략적인 지원이 가능하도록 합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>원서 작성 및 검토 (Application Guidance & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생이 각 대학원의 요구사항에 맞춰 지원서를 작성할 수 있도록 지도하며, 입학 사정관의 시각에서 철저한 검토와 피드백을 제공합니다. 지원서 내용이 일관되며 효과적으로 학생의 강점을 부각할 수 있도록 수정 및 보완합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>SOP, PS, Artist Resume 작성 및 지도 (Essay Writing & Editing)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  미국 예술 대학원 진학에 있어서 가장 중요한 부분중 하나는 Statement of Purpose (SOP)와 Personal Statement(PS)입니다. 대부분의 학생들이 비슷한 시험점수, GPA, 경험 등을 가지고 있기 때문에 최종적으로 합격여부를 결정하는 기준은 SOP가 됩니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스 (Additional Admissions Support)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  대학원별 추천서 전략 및 인터뷰 준비까지 포함하여, 입시 전반에서 발생할 수 있는 모든 요소를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Itemized Services */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">항목별 서비스</span>
              </h2>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>- Statement of Purpose (SOP) 작성 70만원</li>
                <li>- Personal Statement (PS) 작성 70만원</li>
                <li>- Curriculum Vitae (CV): 작성 20만원</li>
                <li>- Contact Email: 작성 20만원</li>
              </ul>
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

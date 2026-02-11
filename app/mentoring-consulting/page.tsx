'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Header } from '@/components/header'

export default function MentoringConsulting() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-active')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    })

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="Mentoring Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Mentoring
              <br />
              Consulting
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 8학년 2학기 – 10학년 1학기 학생</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                <span className="text-[rgb(13,37,99)]">"진로가 명확하지 않아도, 입시는 시작될 수 있습니다."</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  아이비 트랙 컨설팅은 학생 개개인의 흥미, 성향, 가치관을 깊이 있게 분석해 전공 및 진로 방향을 설계하고, 대학 입시에 필요한 전략적 포트폴리오와 결과물을 준비할 수 있도록 돕는 프로그램입니다.
                </p>
                <p>
                  명문대는 단순히 활동이 많은 학생이 아닌, 분명한 내러티브와 증거 기반 전략을 갖춘 지원자를 원합니다. Ivy Track은 학생의 관심과 성향을 분석해 <span className="text-[rgb(13,37,99)] font-semibold">Hook Statement</span>를 도출하고, 입시 스토리에 맞춘 활동 설계를 중심으로 운영됩니다. 11학년 이전까지 체계적인 로드맵과 포트폴리오 전략을 마련하여, 진정성 있고 설득력 있는 지원서를 완성할 수 있도록 돕습니다.
                </p>
              </div>
            </div>

            {/* Included Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Hook Statement 및 입시 테마 도출
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>내러티브 테마(입시 테마) 설정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Hook Statement 초안 도출 및 수정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>해당 테마에 맞춘 장기 전략 방향 설정</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    전략적 포트폴리오 설계
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>EC (동아리, 대회, 인턴십 등) 제안 및 기획</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Writing Competitions 지원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Passion Project 또는 Capstone Project 아이디어 기획 및 실행 가이드</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공별 추천 캠프, 리서치, 커뮤니티 활동 안내 및 연결</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공 탐색 및 직업 관련 정보 제공 (Major & Job Search)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Included Elements */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">포함 요소</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(13,37,99)] mt-1">•</span>
                  <span>GPA 및 학과목 선택 점검, 커리큘럼 코칭</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(13,37,99)] mt-1">•</span>
                  <span>SAT/ACT/TOEFL/AP 등 주요 시험 대비 일정 및 준비 전략 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(13,37,99)] mt-1">•</span>
                  <span>Summer/Winter Study Plan 구성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(13,37,99)] mt-1">•</span>
                  <span>미국 대학 입시 관련 최신 트렌드 및 학교 정보 제공</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Junior Mentoring Section */}
        <section className="py-24 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">주니어 멘토링</span>
              </h2>
              <div className="h-1 w-24 bg-[rgb(13,37,99)] mb-8" />
              <p className="text-xl font-semibold text-foreground mb-8">대상: 7학년 – 예비 9학년 학생</p>

              {/* Provided Services */}
              <div className="bg-white rounded-lg p-8 mb-12 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">제공 서비스</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>컨설턴트 미팅 월 1회</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>Hook Statement 및 입시 테마 설정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>해당 테마 기반으로 포트폴리오 구성 및 활동 아이디어 기획 - 연간 전략 로드맵</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>NYT's writing competition 격월 참가</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>Bi-monthly 리포트 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>KYND 프로젝트 멤버십</span>
                  </li>
                </ul>
              </div>

              {/* Service Details */}
              <h3 className="text-2xl font-semibold text-foreground mb-8">서비스 내용</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Hook Statement 및 입시 테마 도출
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>내러티브 테마(입시 테마) 설정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Hook Statement 초안 도출 및 수정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>해당 테마에 맞춘 장기 전략 방향 설정</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    전략적 포트폴리오 설계
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>EC (동아리, 대회, 인턴십 등) 제안 및 기획</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Writing Competitions 추천</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Passion Project 또는 Capstone Project 아이디어 기획 및 실행 가이드</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공별 추천 캠프, 리서치, 커뮤니티 활동 안내</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공 탐색 및 직업 관련 정보 제공 (Major & Job Search)</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Application Readiness Coaching
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>GPA 및 학과목 선택 점검, 커리큘럼 코칭</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>SAT/ACT/TOEFL/AP 등 주요 시험 대비 일정 및 준비 전략 제공</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Summer/Winter Study Plan 구성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>미국 대학 입시 관련 최신 트렌드 및 학교 정보 제공</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Mentoring Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">시니어 멘토링</span>
              </h2>
              <div className="h-1 w-24 bg-[rgb(13,37,99)] mb-8" />
              <p className="text-xl font-semibold text-foreground mb-8">대상: 8학년 – 10학년 학생</p>

              {/* Provided Services */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">시니어 멘토링 제공 서비스</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>Hook Statement 및 입시 테마 설정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>해당 테마 기반으로 포트폴리오 구성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>연간 전략 로드맵</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>KYND 프로젝트 멤버십</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgb(13,37,99)] mt-1">•</span>
                    <span>EC Activity 지원/실행 (총 4개)</span>
                  </li>
                </ul>
              </div>

              {/* Service Details */}
              <h3 className="text-2xl font-semibold text-foreground mb-8">서비스 내용</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Hook Statement 및 입시 테마 도출
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>내러티브 테마(입시 테마) 설정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Hook Statement 초안 도출 및 수정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>해당 테마에 맞춘 장기 전략 방향 설정</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    전략적 포트폴리오 설계
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>해당 테마 기반으로 passion project, competitive writing competition, research, summer camp 중 3개 지원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Passion Project 또는 Capstone Project 아이디어 기획 및 실행 가이드</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공별 추천 캠프, 리서치, 커뮤니티 활동 안내</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>전공 탐색 및 직업 관련 정보 제공 (Major & Job Search)</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-up bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Application Readiness Coaching
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>GPA 및 학과목 선택 점검, 커리큘럼 코칭</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>SAT/ACT/TOEFL/AP 등 주요 시험 대비 일정 및 준비 전략 제공</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>Summer/Winter Study Plan 구성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[rgb(13,37,99)] mt-1">•</span>
                      <span>미국 대학 입시 관련 최신 트렌드 및 학교 정보 제공</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="text-left text-sm space-y-2 opacity-90">
            <p className="leading-relaxed">
              The I Prep | 서울특별시 강남구 역삼로 424, 진영빌딩 4층 | 4F Jinyoung Building, Yeoksam-ro 424, Gangnam-gu, Seoul
            </p>
            <p className="leading-relaxed">
              디아이파트너즈 | 사업자번호: 224-85-28561 | 학원설립운영록 제11725호 | EMAIL theipartners@theiprep.com | TEL : 02-6205-5455
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

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
      <AnimatedSection className="relative pt-32 pb-24 px-6 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-karola-g-7876785.jpg"
            alt="Consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto max-w-4xl text-center fade-up relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-8 text-balance">
            The-I Prep
            <br />
            Consulting
          </h1>
          <div className="w-24 h-px bg-white/40 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            디아이프렙은 지난 10여 년간 강남 압구정과 대치동 일대에서 수천 명의 유학생들이 성공적으로 대학 진학의 꿈을 이루도록 도운 맥스 원장이 설립한 학원입니다.
          </p>
        </div>
      </AnimatedSection>

      {/* How We Approach Section */}
      <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6 text-balance">
                How we approach
                <br />
                consulting
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                디아이프렙은 단순한 정보를 제공하는 것을 넘어, 정직하고 투명한 방법으로 학생들에게 필요한 방향성과 전략을 제공하며, 장기적인 성과를 위한 컨설팅을 제공합니다. 디아이프렙은 사명감을 가지고 학생들과 함께합니다. 학생들이 꿈꾸는 미래를 현실로 만들 수 있도록 최선을 다하며, 지속 가능한 성공을 통해 글로벌 리더로 성장할 수 있도록 돕는 것을 목표로 합니다.
              </p>
            </div>
            <div className="fade-up flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[3/4] lg:max-w-md lg:aspect-[2/3]">
                <Image
                  src="/images/maxjoo.png"
                  alt="Max Joo - Director"
                  fill
                  className="object-contain object-bottom"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About The-I Prep Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
            About The-I Prep
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fade-up border-none hover:shadow-lg transition-shadow bg-[#5a6a84]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                  비전
                </h3>
                <p className="text-white/90 leading-relaxed">
                  디아이프렙은 단순한 결과가 아닌 과정 자체를 소중히 여기며, 학생들이 입시 여정을 의미있게 경험할 수 있도록 최선을 다합니다. 학생 개개인의 목표와 가치관을 반영한 컨설팅을 통해, 입학 후에도 대학 생활과 미래 커리어에서 경쟁력을 가지고 글로벌 리더로 성장할 수 있도록 지원합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-up border-none hover:shadow-lg transition-shadow bg-[#3d5170]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                  전문 컨설턴트 팀
                </h3>
                <p className="text-white/90 leading-relaxed">
                  맥스원장과 팀은 세계적인 명문 대학들이 찾고 있는 지원자의 핵심 요소를 깊이 이해하고 있으며, 학생들에게 맞춤형 조언과 멘토링을 제공합니다. 저희는 컨설팅을 업무로 여기지 않으며, 학생들이 자신의 가능성을 발견하고 새로운 도전에 나설 수 있도록 돕는 변화의 과정의 멘토링이라 생각합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-up border-none hover:shadow-lg transition-shadow bg-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                  학생 중심 프로그램
                </h3>
                <p className="text-white/90 leading-relaxed">
                  저희는 모든 학생이 고유한 배경과 목표를 지고 있음을 이해하고, 지난 10년 동안 500명 넘는 학생들과 함께한 성공적인 노하우와 데이터를 바탕으로 학생의 학업 성취, 과외 활동, 미래 목표를 철저히 평가한 후, 학생의 필요와 강점에 맞는 학생 개개인에 최적화된 컨설팅을 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Consultant Team Section */}
      <AnimatedSection id="consultants" className="py-24 px-6 bg-[rgb(236,236,244)]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
            Consultant Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Max Joo */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Max Joo</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>
                  Consulting / College Essay
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">디아이프렙 총괄 원장</p>
                  <p className="text-sm text-foreground leading-snug">Columbia University, Law School 졸업</p>
                  <p className="text-sm text-foreground leading-snug">Washington College of Law, phD</p>
                </div>
              </div>
            </div>

            {/* Monika Chang */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Monika Chang</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College, Transfer, Graduate School Consulting, College Essay, Art Portfolio Consulting
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">디아아프렙 총괄 원장</p>
                  <p className="text-sm text-foreground leading-snug">MICA (BFA, Painting)</p>
                  <p className="text-sm text-foreground leading-snug">(전) 해커스 GRE 강사, 컨설팅 디렉터</p>
                  <p className="text-sm text-foreground leading-snug">(전) 에세이라인, 원장</p>
                  <p className="text-sm text-foreground leading-snug">(전) 아이비라인, 부원장</p>
                </div>
              </div>
            </div>

            {/* Grace */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Grace</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>Boarding School Consulting, Boarding School Advising Consulting
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">디아이프렙 보딩스쿨 원장</p>
                  <p className="text-sm text-foreground leading-snug">University of Texas, Austin (BA, Economics)</p>
                  <p className="text-sm text-foreground leading-snug">(전) CBIS K 교무처장</p>
                  <p className="text-sm text-foreground leading-snug">(전) Little School 부원장</p>
                  <p className="text-sm text-foreground leading-snug">(전)토스잉글리시 원장</p>
                  <p className="text-sm text-foreground leading-snug">(전)애임플러스 교육 유학컨설팅 과장</p>
                  <p className="text-sm text-foreground leading-snug">(전)세이스 유학 컨설턴트</p>
                </div>
              </div>
            </div>

            {/* Evelyn Nam */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Evelyn Nam</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College Consulting, College Essay, SAT Reading & Writing
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">Cornell (BS, Industrial and Labor Relations)</p>
                  <p className="text-sm text-foreground leading-snug">Harvard University, MA (Theological Studies)</p>
                  <p className="text-sm text-foreground leading-snug">Harvard University, Kennedy School, MPA (Public Administration)</p>
                  <p className="text-sm text-foreground leading-snug">Columbia University, MS (Business Journalism)</p>
                  <p className="text-sm text-foreground leading-snug">(전) Crimson Education, 컨설턴트</p>
                  <p className="text-sm text-foreground leading-snug">(전) 아주경제, 리포터</p>
                  <p className="text-sm text-foreground leading-snug">(전)블룸버그, localization data specialist</p>
                  <p className="text-sm text-foreground leading-snug">(전)하버드 비즈니스 리뷰, staff writer</p>
                </div>
              </div>
            </div>

            {/* 홍다인 (Gabrielle) */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">홍다인 (Gabrielle)</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College Counselling, College Essay, Graduate School Consulting
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">Duke University (B.A., Political Science)</p>
                  <p className="text-sm text-foreground leading-snug">(현) Arirang TV, Global Broadcaster</p>
                  <p className="text-sm text-foreground leading-snug">(전) Morgan Stanley, Summer Analyst</p>
                  <p className="text-sm text-foreground leading-snug">(전) Law Firm Manhattan, Paralegal</p>
                </div>
              </div>
            </div>

            {/* 한우리 */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">한우리</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College Consulting, Pre-Dental/ Pharm. School Consulting, EC Consulting, College Essay
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">University College of London, BSc (Information Management)</p>
                  <p className="text-sm text-foreground leading-snug">영국 Concord College 보딩스쿨</p>
                </div>
              </div>
            </div>

            {/* 이선규 (Sean) */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">이선규 (Sean)</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College Consulting, College Essay, SAT Reading
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">Emory University (BA, Philosophy)</p>
                  <p className="text-sm text-foreground leading-snug">Emory University, Laney Graduate School ( MA, Bioethics)</p>
                  <p className="text-sm text-foreground leading-snug">(전)인사이트 강남 컨설팅, 에세이스트</p>
                </div>
              </div>
            </div>

            {/* Aiden Song */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Aiden Song</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>Research Advisor, SAT Math, AP Calculus, Economics, Statistics
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">New York University of New York, Ph.D. in Financial Economics</p>
                  <p className="text-sm text-foreground leading-snug">(현) Lehman College, Faculty</p>
                  <p className="text-sm text-foreground leading-snug">(현) New York University, Instructor</p>
                  <p className="text-sm text-foreground leading-snug">(전) Columbia University, Instructor</p>
                </div>
              </div>
            </div>

            {/* Rita Obelleiro */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Rita Obelleiro</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>Boarding School, College, Transfer, Graduate School Consulting, College Essay, Art Portfolio Consulting
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">(전) Phillips Academy Andover, Teacher, Coach, Counselor</p>
                  <p className="text-sm text-foreground leading-snug">University of Pennsylvania, MFA (Painting)</p>
                  <p className="text-sm text-foreground leading-snug">SAIC, MAT (Art Education)</p>
                  <p className="text-sm text-foreground leading-snug">MICA, BFA (Painting)</p>
                </div>
              </div>
            </div>

            {/* Michael Kim */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Michael Kim</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>Research Advisor, SAT Math, AP Calculus, Economics, Statistics
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">Cornell U. BA (Government)</p>
                  <p className="text-sm text-foreground leading-snug">Stony Brook U. MBA</p>
                  <p className="text-sm text-foreground leading-snug">Brooklyn Law School</p>
                  <p className="text-sm text-foreground leading-snug">실리콘밸리 (삼성전자/Various Venture Firms), 15 years</p>
                  <p className="text-sm text-foreground leading-snug">계명대학교 Professor, 2 years</p>
                </div>
              </div>
            </div>

            {/* 김세준 */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">김세준</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>Research Advisor, SAT Math, AP Calculus, Economics, Statistics
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">Holyname Catholic High School (메사추세츠) 졸업</p>
                  <p className="text-sm text-foreground leading-snug">이화여대 국제학부</p>
                </div>
              </div>
            </div>

            {/* 강이원 */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">강이원</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>College Counselling, College Essay
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">인터프렙 SAT, AP English Lit. & Lang. 강의</p>
                  <p className="text-sm text-foreground leading-snug">Columbia University, BA (Creative Writing)</p>
                </div>
              </div>
            </div>

            {/* 이경은 */}
            <div className="fade-up border border-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-1 bg-[rgb(13,37,99)] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">이경은</h3>
              <div className="h-px bg-border mb-3" />
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-medium text-muted-foreground">과목 : </span>SAT Math/RW, IB Mathematics AA/AI SL, Japanese B SL/HL, Chemistry SL, Physics SL, MYP, AP Precalculus, AP Chemistry, AP Physics 1
                </p>
              </div>
              <div className="h-px bg-border mb-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">주요경력</p>
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground leading-snug">New York University, BS (Mathematics)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* YouTube Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
            The-I Prep YouTube
          </h2>
          <div className="fade-up">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dgpRf73dsFo"
                title="The-I Prep YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

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
      </main>
    </div>
  )
}

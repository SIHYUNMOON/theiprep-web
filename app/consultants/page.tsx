'use client'

import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Title Section */}
        <AnimatedSection className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
              Our Consultants
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              디아이프렙의 컨설턴트를 소개합니다.
            </p>
            <div className="h-px bg-border" />
          </div>
        </AnimatedSection>

        {/* Consultants Grid */}
        <AnimatedSection className="py-16 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-7xl">
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
                    <p className="text-sm text-foreground leading-snug">디아이프렙 총괄 원장</p>
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
                    <p className="text-sm text-foreground leading-snug">City University of New York, Ph.D. in Financial Economics</p>
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
                <div className="mb-4">
                  <p className="text-sm text-foreground/60 mb-4"></p>
                </div>
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
                <div className="mb-4">
                  <p className="text-sm text-foreground/60 mb-4"></p>
                </div>
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

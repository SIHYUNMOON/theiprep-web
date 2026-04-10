'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function AdmissionResultsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-pixabay-267885.jpg"
              alt="Admission Results"
              fill
              className="object-cover object-[center_40%]"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Performance
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              미국 명문대로 가는 첫 걸음, 디아이프렙 실적으로 증명합니다
            </p>
          </div>
        </AnimatedSection>

        {/* YouTube Videos Section */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/lk88CBVT5_E"
                    title="The-I Prep 수강생 인터뷰"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  TheIPrep TV - 입시결과 공개
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/watch?v=lk88CBVT5_E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    2024/2025 디아이프렙 입시결과
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=pXpt295qNRg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    2025 보딩스쿨 합격 실적 공개! 상위권 학교 대거 합격
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=OMYc_3WQawI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    2024년 입시결과 및 Trend: who succeeded and what to prepare?
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Ec-gygAmw6o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    디아이프렙 2022년 합격생 현황(2022년 4월 기준)
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=j4IGAibkpjE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    디아이프렙 2021 4월 현재 대학 합격 현황
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  *클릭하면 유튜브로 연결됩니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2026 Results */}
        <AnimatedSection className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2026 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 opacity-90">
                    2025년 4월 3일 기준
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  {/* 핵심 수치 3개 카드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">13명</div>
                      <div className="text-sm text-muted-foreground">미국 TOP15 합격</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">8명</div>
                      <div className="text-sm text-muted-foreground">아이비리그 플러스 합격자</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">7명</div>
                      <div className="text-sm text-muted-foreground">미국 외 글로벌 명문대 합격</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                  </div>

                  {/* 입시 합격자 특징 텍스트 */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      STEM 강세 대학 Caltech, Michigan, UIUC, Georgia Tech 등 최상위 공학·이공계 대학 합격
                    </p>
                    <p className="text-sm text-muted-foreground">
                      국내고, 미국고, 해외고, 편입 등 다양한 입시 경로에서 합격자 배출
                    </p>
                  </div>

                  {/* 미국 TOP 15대학교 */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 TOP 15대학교</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Caltech (2명)',
                        'Brown (2명)',
                        'Cornell (1명)',
                        'Northwestern (1명)',
                        'Duke (2명)',
                        'Johns Hopkins (1명)',
                        'Vanderbilt (1명)',
                        'UC Berkeley (1명)',
                        'UCLA (2명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 미국 TOP30대학교 */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 TOP30대학교</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'University of Michigan (4명)',
                        'University of Virginia (2명)',
                        'Georgetown (1명)',
                        'UNC Chapel Hill (1명)',
                        'Washington University in St. Louis (2명)',
                        'University of Southern California (1명)',
                        'Georgia Tech (2명)',
                        'New York University (3명)',
                        'Boston University (2명)',
                        'Northeastern (1명)',
                        'University of Illinois Urbana-Champaign (3명)',
                        'Emory University (1명)',
                        'UCSD (4명)',
                        'UC Davis (2명)',
                        'University of Texas at Austin (1명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 미국 TOP50대학교 */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 TOP50대학교</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'UC Irvine (3명)',
                        'UC Santa Barbara (1명)',
                        'Case Western Reserve University (1명)',
                        'University of Florida (1명)',
                        'University of Georgia (1명)',
                        'Rensselaer Polytechnic Institute (1명)',
                        'Penn State (1명)',
                        'Syracuse (1명)',
                        'George Washington (1명)',
                        'Purdue University (1명)',
                        'University of Miami (1명)',
                        'Indiana University (1명)',
                        'Ohio State University (1명)',
                        'Texas A&M University (1명)',
                        'Stony Brook University (1명)',
                        'Florida State University (1명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Art School */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">Art School</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">•</span>
                        <span>Rhode Island School of Design (1명)</span>
                      </div>
                    </div>
                  </div>

                  {/* 미국 외 글로벌 명문대 */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 외 글로벌 명문대</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Kings College (1명)',
                        'University College London (1명)',
                        'University of British Columbia (1명)',
                        'University of Hong Kong (1명)',
                        'Hong Kong University of Science and Technology (1명)',
                        'University of Toronto (1명)',
                        'University of Toronto Mississauga (1명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2025 Results */}
        <AnimatedSection className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2025 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 opacity-90">
                    2025년 4월 7일 기준 확정 데이터
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">8명</div>
                      <div className="text-sm text-muted-foreground">HYPS 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">11명</div>
                      <div className="text-sm text-muted-foreground">Top 20 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 4명</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">9명</div>
                      <div className="text-sm text-muted-foreground">Top 30 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-foreground">
                      아이비리그 HYPS: Harvard, Stanford, Princeton, Dartmouth, Cornell, Brown, University of Chicago
                    </p>
                    <p className="text-sm text-muted-foreground">
                      이 외에 Accelerated Medical Program (의대), Accelerated Dental Program (치대), Pharmacy Program (약대) 등 다양한 professional school 합격
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">보딩 스쿨 합격 리스트</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 10위 총 3명</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Philips Exeter Academy (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>The Lawrenceville School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>The Loomis Chaffee School (1명)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 25위 School 총 4명</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Milton Academy (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Cranbrook Schools (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Blair Academy (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Webb Schools (1명)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 10위 Junior Boarding School</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Eaglebrook School (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Fay School (4명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Fessenden School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Indian Mountain School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Rumsey Hall School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Rectory School (1명)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 대학 합격 리스트</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Harvard University (1명)',
                        'Stanford University (2명)',
                        'Princeton University (1명)',
                        'Dartmouth College (1명)',
                        'Cornell University (1명)',
                        'Brown University (1명)',
                        'University of Chicago (1명)',
                        'Carnegie Mellon (1명)',
                        'Pomona College (1명)',
                        'Northwestern University (3명)',
                        'Vanderbilt University (1명)',
                        'Johns Hopkins University (1명)',
                        'Georgia Tech (1명)',
                        'USC (4명)',
                        'University of Michigan (1명)',
                        'UC Berkeley (1명)',
                        'UCLA (1명)',
                        'Emory University (2명)',
                        'Washington University (1명)',
                        'UVA (1명)',
                        'Notre Dame (1명)',
                        'Boston University (1명)',
                        'NYU (3명)',
                        'UC San Diego (1명)',
                        'UNC Chapel Hill (1명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2024 Results */}
        <AnimatedSection className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2024 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 opacity-90">
                    2024년 4월 1일 기준 (편입 결과 및 일부 누락된 합격 결과는 추후 업데이트 예정)
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">5명</div>
                      <div className="text-sm text-muted-foreground">HYPS 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 30%</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">10명</div>
                      <div className="text-sm text-muted-foreground">아이비리그 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 59%</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">15명</div>
                      <div className="text-sm text-muted-foreground">아이비리그 플러스 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 88%</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      디아이프렙 '아이비리그 프로그램' 등록 학생 총 17명 기준
                    </p>
                    <p className="text-sm text-muted-foreground">
                      아이비리그 플러스: 아이비리그 8개교 + MIT, Stanford, Caltech, Duke, Johns Hopkins, University of Chicago
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      NYU BA/DDS 7년제 치과대학 합격
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">Top 30 대학 합격 리스트</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Harvard University (3명)',
                        'Yale University (1명)',
                        'Stanford University (3명)',
                        'MIT (1명)',
                        'Columbia University (2명)',
                        'University of Oxford, UK (1명)',
                        'UPenn (4명)',
                        'Cornell University (1명)',
                        'Brown University (3명)',
                        'Dartmouth College (1명)',
                        'Duke University (2명)',
                        'Northwestern University (2명)',
                        'Johns Hopkins Universit (3명)',
                        'University of Chicago (1명)',
                        'Vanderbilt University (1명)',
                        'Rice University (1명)',
                        'UCLA (4명)',
                        'Carnegie Mellon (1명)',
                        'NYU (1명)',
                        'Georgetown University (2명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2023 Results */}
        <AnimatedSection className="bg-gray-50 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div>
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2023 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 text-white/90">2023년 4월 10일 기준</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">11명</div>
                      <div className="text-sm text-muted-foreground">HYPS 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 1명</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">6명</div>
                      <div className="text-sm text-muted-foreground">Top 15 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">69명</div>
                      <div className="text-sm text-muted-foreground">Top 50 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 기재</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-foreground">
                      미술 전공반 3명 전원 Top tier School 합격
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">보딩 스쿨 합격 리스트</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-bold text-foreground mb-2">Top 10위 총 8명 (중복 합격 1명)</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground ml-4">
                          {[
                            'Philips Academy Andover (1명)',
                            'Philips Exeter Academy (2명)',
                            'The Hotchkiss School (1명)',
                            'The Lawrenceville School (1명)',
                            'Deerfield Academy (1명)',
                            'Concord Academy (1명)',
                            'Milton Academy (1명)',
                            'The Thacher School (1명)',
                          ].map((school, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-[rgb(13,37,99)]">•</span>
                              <span>{school}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-bold text-foreground mb-2">Top 30위 School 총 12명 (중복 합격 2명)</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground ml-4">
                          {[
                            'The Peddie School (1명)',
                            'Cranbrook Schools (2명)',
                            'The Webb School (2명)',
                            'Kent School (1명)',
                            "St. Mark's School (1명)",
                            'The Madeira School (1명)',
                            "St. Andrew's School (1명)",
                            'Lake Forest Academy (3명)',
                            "St. Stephen's Episcopal School (2명)",
                          ].map((school, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-[rgb(13,37,99)]">•</span>
                              <span>{school}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 대학 합격 리스트</h4>

                    <div className="mb-6">
                      <p className="font-semibold text-foreground mb-3">아이비리그 / HYPS</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground ml-4">
                        {[
                          'Harvard University (2명)',
                          'Princeton University (1명)',
                          'Stanford University (1명)',
                          'Columbia University (3명)',
                          'University of Pennsylvania (1명)',
                          'Brown University (1명)',
                          'Cornell University (2명)',
                        ].map((school, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>{school}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-foreground mb-3">Top 15 School</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground ml-4">
                        {[
                          'University of Chicago (1명)',
                          'Johns Hopkins University (1명)',
                          'Vanderbilt University (1명)',
                          'Washington University in St. Louis (3명)',
                        ].map((school, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>{school}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-3">Top 50 School</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground ml-4">
                        {[
                          'University of Notre Dame (1명)',
                          'UC Berkeley (5명)',
                          'UCLA (5명)',
                          'University of California (28명)',
                          'Carnegie Mellon University (1명)',
                          'Georgetown University (2명)',
                          'New York University (1명)',
                          'University of Michigan, Ann Arbor (2명)',
                          'University of Southern California (2명)',
                          'University of North Carolina at Chapel Hill (3명)',
                          'Boston College (1명)',
                          'University of Texas at Austin (1명)',
                          'University of Wisconsin–Madison (1명)',
                          'Boston University (3명)',
                          'University of Illinois Urbana-Champaign (7명)',
                          'Case Western Reserve University (2명)',
                          'Georgia Institute of Technology (2명)',
                          'Ohio State University (1명)',
                          'University of Georgia (1명)',
                        ].map((school, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>{school}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 ml-4 italic">
                        * University of California (28명): Berkeley·LA 제외 UC 전체
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">Art School Admission Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                      {[
                        'Cornell University',
                        'Rhode Island School of Design (RISD)',
                        'School of Visual Arts (SVA)',
                        'Parsons School of Design',
                        'UC Berkeley',
                        'UC San Diego',
                        'UC Davis',
                        'University of Michigan, Ann Arbor',
                        'UCLA',
                        'University College London (UK)',
                        "King's College London (UK)",
                        'University of Manchester (UK)',
                        'University of Toronto (Canada)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
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

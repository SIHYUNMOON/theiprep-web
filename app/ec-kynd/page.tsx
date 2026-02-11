'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function ECKyndPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="KYND Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              KYND
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  KYND 컨설팅
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  KYND 컨설팅은 매월 1회 진행되는 1:1 컨설팅을 통해
                  학생의 활동 진행 상황을 점검하고,
                  개인별 로드맵을 지속적으로 업데이트하는
                  정규 프로그램입니다.
                  학생의 관심사와 활동이 하나의 내러티브로
                  연결되도록 방향성을 유지하며,
                  프로젝트와 결과물 전반에 대한
                  피드백을 제공합니다.
                  KYND 컨설팅은 단발성 활동 관리가 아닌,
                  학생 고유의 스토리와 성장을
                  체계적으로 축적해 나가는
                  장기 프로그램입니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  KYND 프로젝트
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  KYND 프로젝트는 담당 컨설턴트가
                  멘토로 함께하는 팀 기반
                  프로젝트 프로그램입니다.
                  연구, 글쓰기, 공모전 준비,
                  사회 문제 탐구 등
                  실제 결과물 생성에 집중하며,
                  미국형 enrichment lab 구조로
                  운영됩니다.
                  KYND 프로젝트는 학생의 관심사를
                  깊이 있게 확장하면서,
                  대학 지원에 의미 있게 활용될 수 있는
                  실질적인 활동 경험과 결과물을
                  제공하는 프로그램입니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  KYND 부트캠프
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  KYND 집중 컨설팅 프로그램은
                  봄방학, 여름방학,
                  가을방학(추수감사절/추석),
                  겨울방학 등
                  연 4회 운영되는
                  3일 집중 과정으로,
                  학생이 단기간 안에
                  방향성을 정리하고
                  이후 활동을 본격적으로
                  시작할 수 있도록 돕는
                  프로그램입니다.
                  이 과정에서는 학생의
                  관심 분야를 탐색하고,
                  차별화된 비교과 활동(EC)을
                  설계하며,
                  자기서사(Narrative)를
                  구조화합니다.
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

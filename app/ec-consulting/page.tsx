import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function ECConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="EC Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              EC
              <br />
              Consulting
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 8학년 2학기 – 12학년 학생</p>
              <div className="h-px bg-border mb-8" />
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                  <span>대회 & 연구</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생들이 학문적 깊이를 더할 수 있도록 연구 프로젝트와 대회 참가를 위한 맞춤형 지원을 제공합니다. 주제 선정, 프로젝트 기획, 결과물 완성까지의 과정을 지도하며, 학생들이 자신만의 독창적인 결과물을 만들어낼 수 있도록 돕습니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>썸머스쿨/프로그램 원서</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  세계적인 명문 대학과 교육 기관의 썸머스쿨 프로그램 지원을 위한 전략적 컨설팅을 제공합니다. 프로그램 선정, 지원서 작성, 추천서 준비 등 전체 과정을 지원하며, 학생들이 글로벌 학문 경험을 쌓을 수 있도록 돕습니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>인턴십</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생들의 관심사와 목표에 맞는 인턴십 기회를 연결하고, 지원서 준비부터 인터뷰 준비까지 철저히 관리합니다. 실질적인 경험을 통해 학생들이 학문적 흥미를 현실과 연결할 수 있도록 지원합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span>아트 포트폴리오</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  아트 스쿨 및 비전공자 학생의 supplementary material 제출을 위한 전문 포트폴리오 제작을 지원합니다. 학생의 개성을 반영한 작품 선정, 주제 개발, 구성 및 피드백을 통해 입학 사정관에게 강렬한 인상을 줄 수 있는 포트폴리오를 완성합니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>아트 포트폴리오 부트 캠프</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  예술 전공을 목표로 하는 학생들을 위한 집중 부트캠프 프로그램입니다. 학생들이 창의적 아이디어를 구체화하고, 짧은 시간 안에 고품질의 작품을 완성할 수 있도록 전문 아티스트의 지도 아래 진행됩니다.
                </p>
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

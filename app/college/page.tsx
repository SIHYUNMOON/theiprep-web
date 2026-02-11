'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function CollegePage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <AnimatedSection className="relative min-h-[85vh] flex items-end pt-16">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/pexels-rdne-9034783.jpg"
                alt="College Consulting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
              <div className="absolute inset-0 backdrop-blur-[2px]" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)' }} />
            </div>
            
            <div className="container mx-auto px-6 pb-16 relative z-10">
              <div className="text-white space-y-4 max-w-2xl">
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-balance leading-tight" style={{ color: 'rgb(205, 173, 125)' }}>
                  College Consulting
                </h1>
                <div className="w-20 h-px bg-white/40" />
                <h2 className="text-xl md:text-2xl font-medium text-balance">
                  미국 명문대학으로 가는 첫 걸음,
                  <br />
                  디아이프렙
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                  Ivy League 및 상위 20개 대학 합격을 이끈 검증된 성공 기록, 경쟁이 치열한 미국 대학 입시를 위한 탁월한 컨설팅 제공
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Why Us Section */}
          <AnimatedSection className="bg-[rgb(236,236,244)] py-24 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                Why us?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      검증된 성공률
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      저희는 90% 이상의 학생들이 dream school 에 합격하는 놀라운 성과를 기록하고 있으며, Harvard, Stanford, MIT를 포함한 세계적인 명문 대학에 성공적으로 진학시켜 왔습니다. 이러한 성과는 디아이프렙의 탁월한 전문성과 입시 프로세스에 대한 깊은 이해를 증명합니다.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      맞춤형 접근
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      저희는 모든 학생이 고유한 배경과 목표를 가지고 있음을 이해하고, 이를 바탕으로 개별화된 전략을 제공합니다. 학생의 학업 성취, 과외 활동, 미래 목표를 철저히 평가한 후, 학생의 필요와 강점에 맞는 맞춤형 계획을 설계합니다.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      전문 컨설턴트 팀
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      저희의 컨설턴트 팀은 Harvard, Columbia 등 Ivy League 급 출신 졸업생들과 컨설팅에만 전념하는 전문가들로 구성되어 있습니다. 이들은 세계적인 명문 대학들이 찾고 있는 지원자의 핵심 요소를 깊이 이해하고 있으며, 학생들에게 맞춤형 조언과 멘토링을 제공합니다. 다양한 배경과 전문성을 충분히 갖춘 컨설턴트 팀은 학생들이 입시 경쟁에서 두각을 나타낼 수 있도록 최상의 지원을 제공합니다.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      포괄적인 서비스
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      저희는 입시 과정 전반에 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 대학을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 대학 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Programs Section */}
          <AnimatedSection className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                Programs
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* College Consulting */}
                <a href="/college-consulting" className="fade-up bg-[#5a6a84] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    대학 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 예비 11학년</p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>Premium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>Deluxe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>Essay Only</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>미대</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>편입</span>
                      </li>
                    </ul>
                  </div>
                </a>

                {/* Mentoring */}
                <a href="/mentoring-consulting" className="fade-up bg-[#3d5170] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    멘토링 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 7학년 – 10 학년 학생</p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>주니어 멘토링</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>시니어 멘토링</span>
                      </li>
                    </ul>
                  </div>
                </a>

                {/* EC Consulting */}
                <a href="/ec-consulting" className="fade-up bg-[rgb(13,37,99)] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    EC 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 8학년 2학기 학생 - 12 학년 학생</p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>대회 & 연구</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>써머스쿨/ 프로그램 원서</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>인턴십</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>아트 포트폴리오</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>아트 포트폴리오 부트 캠프</span>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* YouTube Section */}
          <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                The-I Prep TV
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="fade-up">
                  <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/6kZ1XNO-coE"
                      title="The-I Prep TV Video 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="fade-up">
                  <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/PMWr0ajhEL0"
                      title="The-I Prep TV Video 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 fade-up">
                <a
                  href="https://blog.naver.com/the-i-partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#03C75A] group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      <path d="M12 6.75c-2.9 0-5.25 2.35-5.25 5.25S9.1 17.25 12 17.25s5.25-2.35 5.25-5.25S14.9 6.75 12 6.75zm0 8.5c-1.795 0-3.25-1.455-3.25-3.25S10.205 8.75 12 8.75s3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground">블로그</span>
                </a>

                <a
                  href="https://www.youtube.com/@the-iprep9895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF0000] group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground">유튜브</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEE500] group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" fill="#3C1E1E"/>
                      <path d="M10.5 8.67023L14.7 11.5954C15.1 11.8577 15.1 12.4724 14.7 12.7347L10.5 15.6599C10.1 15.9222 9.6 15.6349 9.6 15.1103V9.25983C9.6 8.73525 10.1 8.44795 10.5 8.67023Z" fill="#FEE500"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground">카카오 상담</span>
                </a>
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
    </>
  )
}

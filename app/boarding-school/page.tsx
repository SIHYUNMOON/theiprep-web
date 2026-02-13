'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'
import Head from 'next/head'

export default function BoardingSchoolPage() {
  useEffect(() => {
    const fadeUpElements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-active')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    fadeUpElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const form = document.getElementById('boarding-contact-form') as HTMLFormElement
    const messageDiv = document.getElementById('form-message')

    const handleSubmit = async (e: Event) => {
      e.preventDefault()

      const formData = new FormData(form)
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        grade: formData.get('grade'),
        subject: formData.get('subject'),
        question: formData.get('question'),
      }

      try {
        const response = await fetch('/api/contact-boarding-school', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        if (response.ok && messageDiv) {
          messageDiv.textContent = result.message || '문의가 성공적으로 전송되었습니다. Thank you for contacting us!'
          messageDiv.className = 'p-4 rounded-md bg-green-100 text-green-800 border border-green-300'
          messageDiv.classList.remove('hidden')
          form.reset()

          setTimeout(() => {
            messageDiv.classList.add('hidden')
          }, 5000)
        } else if (messageDiv) {
          messageDiv.textContent = result.error || '오류가 발생했습니다. Please try again.'
          messageDiv.className = 'p-4 rounded-md bg-red-100 text-red-800 border border-red-300'
          messageDiv.classList.remove('hidden')
        }
      } catch (error) {
        console.error('[v0] Form submission error:', error)
        if (messageDiv) {
          messageDiv.textContent = '오류가 발생했습니다. Please try again.'
          messageDiv.className = 'p-4 rounded-md bg-red-100 text-red-800 border border-red-300'
          messageDiv.classList.remove('hidden')
        }
      }
    }

    if (form) {
      form.addEventListener('submit', handleSubmit)
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit)
      }
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
        .programs-card {
          transition: transform 0.25s cubic-bezier(0.4, 0.8, 0.2, 1), box-shadow 0.2s;
        }
        .programs-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 8px 24px rgba(13,37,99,0.12);
        }
      `}</style>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <AnimatedSection className="relative min-h-[85vh] flex items-end pt-16">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/pexels-rdne-9034783.jpg"
                alt="Boarding School Consulting"
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
                  Boarding school
                  <br />
                  Consulting
                </h1>
                <div className="w-20 h-px bg-white/40" />
                <h2 className="text-xl md:text-2xl font-medium text-balance">
                  미국 사립고로 가는 첫 걸음,
                  <br />
                  디아이프렙
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                  Phillips Exeter 및 상위 10 보딩스쿨 합격을 이끈 검증된 성공 기록, 경쟁이 치열한 탑보딩스쿨 입시를 위한 탁월한 컨설팅 제공
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Why Us Section */}
          <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                Why us?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      검증된 성공률
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      다년간의 경험을 바탕으로 500명 이상의 학생들이 자신에게 맞는 학교에 입학하여 꿈을 이룰 수 있도록 도왔습니다. 단순히 합격을 목표로 하는게 아니라, 학생 개개인과 잘 어울리는 드림스쿨을 찾을 수 있도록 맞춤형 컨설팅을 제공합니다.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      전문 컨설턴트 팀
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Grace 원장과 컨설턴트 팀은 미국유명 보딩스쿨 출신 졸업생, 전직 입학 담당자 및 교육자들로 구성되어 있습니다. 함께 축적된 경험과 전문성을 바탕으로 학생들을 성공적인 입학과 그 이상의 여정으로 이끌어갑니다. 저희 팀은 모두 유학생 출신으로, 학생들이 미국 보딩 스쿨 시스템에 적응하고 성공할 수 있도록 돕는데 특화 되었습니다.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-1 bg-[rgb(13,37,99)]" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      포괄적인 서비스
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      저희는 입시 과정 전 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 보딩스쿨을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 보딩스쿨 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Programs Section */}
          <AnimatedSection className="py-24 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                Programs
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Senior Boarding */}
                <a href="/senior-boarding" className="programs-card fade-up bg-[#5a6a84] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    명문 시니어 보딩 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 9 학년, 10 학년 학생</p>
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
                        <span>Light</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>전학</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>탑 예술 보딩</span>
                      </li>
                    </ul>
                  </div>
                </a>

                {/* Junior Boarding */}
                <a href="/junior-boarding" className="programs-card fade-up bg-[#3d5170] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    주니어 보딩 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 6 학년, 7 학년, 8 학년 학생</p>
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
                        <span>Light</span>
                      </li>
                    </ul>
                  </div>
                </a>

                {/* Advising */}
                <div className="programs-card fade-up bg-[rgb(13,37,99)] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    보딩스쿨 어드바이징 컨설팅
                  </h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-white/90 font-medium">대상: 7학년 - 10 학년 보딩스쿨 재학생</p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <span>+</span>
                        <span>Advising Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* YouTube Section */}
          <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
                The-I Prep TV
              </h2>
              <div className="fade-up max-w-4xl mx-auto">
                <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/UGjYeSzUhGc"
                    title="The-I Prep TV"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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

          {/* Contact Us Section */}
          <AnimatedSection className="relative py-24 px-6">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/pexels-pavel-danilyuk-8112186.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>
            
            <div className="container mx-auto max-w-3xl relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center mb-12 fade-up">
                Contact Us
              </h2>
              
              <div className="fade-up bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12">
                <form id="boarding-contact-form" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        이름/Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        연락처/Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        이메일/Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="grade" className="block text-sm font-semibold text-foreground mb-2">
                        학년/Grade
                      </label>
                      <input
                        type="text"
                        id="grade"
                        name="grade"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      제목/Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-sm font-semibold text-foreground mb-2">
                      문의사항/Question *
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div id="form-message" className="hidden p-4 rounded-md"></div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                    >
                      Send
                    </button>
                  </div>
                </form>
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

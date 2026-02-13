'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Header } from '@/components/header'

export default function TransferPage() {
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
    const form = document.getElementById('transfer-contact-form') as HTMLFormElement
    const messageDiv = document.getElementById('transfer-form-message')

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
          transition: transform 0.25s cubic-bezier(0.4, 0.8, 0.2, 1), box-shadow 0.2s !important;
          will-change: transform, box-shadow;
        }
        .programs-card:hover {
          transform: translateY(-12px) !important;
          box-shadow: 0 8px 24px rgba(13,37,99,0.12) !important;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.fade-up-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="flex flex-col min-h-screen">
        <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative min-h-[85vh] flex items-end pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-rdne-9034783.jpg"
              alt="Transfer Consulting"
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
                Transfer Consulting
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

        {/* Why us Section */}
        <section className="py-24 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Why us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">검증된 성공률</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 90% 이상의 학생들이 dream school 에 합격하는 놀라운 성과를 기록하고 있으며, Harvard, Stanford, MIT를 포함한 세계적인 명문 대학에 성공적으로 진학시켜 왔습니다. 이러한 성공률은 The I Prep의 탁월한 전문성과 입시 프로세스에 대한 깊은 이해를 증명합니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">맞춤형 접근</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 모든 학생이 고유한 배경과 목표를 가지고 있음을 이해하고, 이를 바탕으로 개별화된 전략을 제공합니다. 학생의 학업 성취, 과외 활동, 미래 목표를 철저히 평가한 후, 학생의 필요와 강점에 맞춘 맞춤형 계획을 설계합니다. 저희의 맞춤형 전략은 학생들의 강점을 최대한 부각시키고, 경쟁이 치열한 입시 환경에서 돋보일 수 있도록 돕습니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">전문 컨설턴트 팀</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희의 컨설턴트 팀은 Harvard, Columbia 등 Ivy League 급 출신 졸업생들과 컨설팅에만 전념하는 전문가들로 구성되어 있습니다. 이들은 세계적인 명문 대학들이 찾고 있는 지원자의 핵심 요소를 깊이 이해하고 있으며, 학생들에게 맞춤형 조언과 멘토링을 제공합니다. 다양한 배경과 전문성을 갖춘 컨설턴트 팀은 학생들이 입시 경쟁에서 두각을 나타낼 수 있도록 최상의 지원을 제공합니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">포괄적인 서비스</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 입시 과정 전반에 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 대학을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 대학 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Programs Section */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Program 1 */}
              <a href="/transfer-application" className="programs-card fade-up bg-gradient-to-br from-[#5a6a84] to-[#3d5170] border-none rounded-lg p-8 text-white block cursor-pointer">
                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                  원서 컨설팅
                </h3>
                <div className="space-y-4">
                  <p className="text-white/90 font-medium">
                    대상: 12 학년 2학기 - 대학교 2학년 1 학기
                  </p>
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
                      <span>미대</span>
                    </li>
                  </ul>
                </div>
              </a>

              {/* Program 2 */}
              <a href="/transfer-essay" className="programs-card fade-up bg-gradient-to-br from-[#3d5170] to-[#2c3e5a] border-none rounded-lg p-8 text-white block cursor-pointer">
                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                  에세이 컨설팅
                </h3>
                <div className="space-y-4">
                  <p className="text-white/90 font-medium">
                    대상: 12 학년 2학기 - 대학교 2학년 1 학기
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>10 학교</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>5 학교</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

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
            <form id="transfer-contact-form" className="space-y-6">
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
              <div id="transfer-form-message" className="hidden p-4 rounded-md"></div>
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

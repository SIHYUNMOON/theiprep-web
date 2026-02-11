"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Header } from "@/components/header";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={className}>{children}</section>;
}

export default function CollegeConsultingPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-matreding-12040569.jpg"
              alt="College Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              College
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Premium Full Consulting */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 11학년 학생 및 예비 11학년</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Premium Full Consulting</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                미국 대학 입시를 철저히 준비하기 위해 <span className="text-[rgb(13,37,99)] font-semibold">전 과정 컨설팅을 원하는 학생들을 위한 프로그램</span>입니다. 단순한 원서 작성 지원이 아닌, 학생의 강점을 최대한 반영한 <span className="text-[rgb(13,37,99)] font-semibold">장기적인 로드맵을 설계</span>하여 입시 경쟁력을 극대화합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>개인 맞춤 로드맵 작성</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Personalized Roadmap & Profile Management</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업 성취도, 과외 활동, 관심 분야를 종합적으로 분석하여 최적의 입시 전략을 설계합니다. 학생의 성장 과정에 따라 지속적으로 계획을 수정하고 조정하여 장기적으로 경쟁력을 갖출 수 있도록 지원합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>이력 관리 및 액티비티 계획</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Profile & Activity Planning</p>
                <p className="text-foreground/80 leading-relaxed">
                  대학 입시는 단순한 성적만을 평가하는 것이 아니라, 학생의 활동과 리더십을 중점적으로 고려합니다. 봉사 활동, 연구 프로젝트, 인턴십, 경시대회 참가 등 학생의 관심 분야에 맞춘 활동을 기획하고 관리하여 지원서에서 강력한 경쟁력을 가질 수 있도록 돕습니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">College Selection</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생의 학업 성취도, 관심 전공, 입시 전략을 바탕으로 최적의 지원 대학 리스트를 구성합니다. 목표 대학뿐만 아니라, 안전 지원 대학(Safety), 적정 지원 대학(Target), 도전 지원 대학(Reach)으로 균형 잡힌 리스트를 작성하여 전략적인 지원이 가능하도록 합니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span>원서 작성 및 검토</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Application Guidance & Review</p>
                <p className="text-foreground/80 leading-relaxed">
                  학생이 각 대학의 요구사항에 맞춰 지원서를 작성할 수 있도록 지도하며, 입학 사정관의 시각에서 철저한 검토와 피드백을 제공합니다. 지원서 내용이 일관되며 효과적으로 학생의 강점을 부각할 수 있도록 수정 및 보완합니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 작성 및 지도</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Essay Writing & Editing</p>
                <p className="text-foreground/80 leading-relaxed">
                  미국 대학 입시는 에세이가 당락을 결정짓는 중요한 요소입니다. 학생이 자신만의 독창적인 스토리를 효과적으로 전달할 수 있도록 아이디어 개발, 초안 작성, 수정 작업까지 단계별로 지도하며, Main Essay(개인 에세이) 및 Supplemental Essay(추가 에세이) 를 모두 다룹니다.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Additional Admissions Support</p>
                <p className="text-foreground/80 leading-relaxed">
                  대학별 추천서 전략 및 인터뷰 준비까지 포함하여, 입시 전반에서 발생할 수 있는 모든 요소를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Deluxe Package */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Deluxe Package</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                디럭스 패키지 프로그램은 <span className="text-[rgb(13,37,99)] font-semibold">대학 리스트 선정부터 지원서 작성 및 에세이 코칭까지 핵심적인 입시 요소를 집중적으로 지원</span>하는 프로그램입니다. 장기적인 이력 관리나 액티비티 설계가 필요하지 않은 학생들에게 적합하며, <span className="text-[rgb(13,37,99)] font-semibold">핵심적인 단원 절차에서 강력한 전략을 제공</span>합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">College Selection</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>학생의 학업 성취도와 관심 분야에 맞춰 목표 대학을 설정합니다.</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>원서 작성 및 검토</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Application Guidance & Review</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>Common App을 포함한 주요 원서의 작성 및 피드백 제공.</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>에세이 작성 및 지도</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Essay Writing & Editing</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>메인 에세이(Main Essay, Personal Statement) 작성</li>
                  <li>대학별 추가 에세이(Supplemental Essay) 작성 및 수정</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Essay Only */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Essay Only</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                대학 입시에서 <span className="text-[rgb(13,37,99)] font-semibold">강력한 에세이는 합격을 결정짓는 중요한 요소</span>입니다. <span className="text-[rgb(13,37,99)] font-semibold">The I Prep</span>의 에세이 컨설팅 프로그램은 학생이 <span className="text-[rgb(13,37,99)] font-semibold">자신만의 스토리를 효과적으로 전달할 수 있도록 지도</span>하며, 글쓰기 구조부터 세부적인 피드백까지 철저한 검토를 제공합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>아이디어 개발 및 주제 선정</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생이 차별화된 주제를 찾을 수 있도록 돕고, 개성이 돋보이는 에세이 방향 설정
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>메인 에세이 작성</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  초안부터 최종 수정까지 전 과정 피드백 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>대학별 추가 에세이 작성</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  각 대학이 요구하는 주제에 맞춘 에세이 작성 및 전략 설정
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>문장 구조, 논리, 표현력 개선</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  효과적인 글쓰기를 위한 문장 수정 및 논리 보완
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Art School (미대) */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">미대</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                미국 명문 아트 스쿨 입시는 포트폴리오와 창의적 스토리텔링이 핵심 요소입니다. 디아이프렙의 아트 스쿨 컨설팅 프로그램은 포트폴리오 컨설팅과 포트폴리오의 스토리와 맞는 artist statement 그리고 work description 컨설팅을 결합한 타 미술 유학원과 차별화되는 all-inclusive 프로그램으로, 학생이 자신의 예술적 비전을 명확하게 전달할 수 있도록 모든 요소를 지원합니다.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>아트 포트폴리오 전략 및 피드백</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Art Portfolio Consulting & Review</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>학생의 강점과 지원 대학의 특성을 반영한 맞춤형 포트폴리오 기획</li>
                  <li>포트폴리오 작품의 주제 선정, 구성 및 스토리텔링 지도</li>
                  <li>기존 작품 수정 및 보완, 새로운 작품 개발 계획 제공</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학 리스트 선정</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">College Selection for Art Schools</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>학생의 작품 스타일과 관심 분야에 적합한 학교 매칭</li>
                  <li>RISD, Parsons, Pratt, SAIC, MICA 등 최상위 아트 스쿨 입학 전략 제공</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>지원서 및 에세이 코칭</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Application & Essay Coaching for Art Schools</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>아트 스쿨 전용 Artist Statement 및 Supplemental Essays 작성 지원</li>
                  <li>각 대학의 요구 사항에 맞춘 맞춤형 원서 작성 및 검토</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>인터뷰 및 프레젠테이션 준비</span>
                </h4>
                <p className="text-sm text-foreground/60 mb-2">Interview & Verbal Art Critique Training</p>
                <ul className="text-foreground/80 leading-relaxed space-y-1 text-sm list-disc list-inside">
                  <li>포트폴리오에 대한 논리적 설명 및 인터뷰 대비 훈련</li>
                  <li>비판적 사고와 아트 크리틱(Art Critique) 스킬 강화 (인터프렙 수업 – Art + English Immersion 수업 50% 할인)</li>
                </ul>
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
  );
}

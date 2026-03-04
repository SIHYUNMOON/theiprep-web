'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LoginModal } from '@/components/board/login-modal'
import { useAuth } from '@/lib/auth-context'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [showBoardLogin, setShowBoardLogin] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false)
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false)
  const { isAdminLoggedIn, logout, login, isLoading } = useAuth()

  const handleBoardLogout = async () => {
    try {
      const result = await logout()
      if (result.success) {
        // logged out
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password)
      setShowBoardLogin(false)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileConsultingOpen(false)
    setMobileGuideOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/그림2.png"
                alt="The-I Prep Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="/consultants" className="hover:text-primary transition-colors">
                Our Consultants
              </a>
              <div className="relative group">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  컨설팅 서비스
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/boarding-school" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      보딩스쿨 컨설팅
                    </a>
                    <a href="/college" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      대학교 컨설팅
                    </a>
                    <a href="/transfer" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      편입 컨설팅
                    </a>
                    <a href="/graduate" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      대학원 컨설팅
                    </a>
                    <a href="/ec" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      EC컨설팅
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  입시 가이드
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/board" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      정보게시판
                    </a>
                    <a href="/performance" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      연도별 입시 결과
                    </a>
                  </div>
                </div>
              </div>
              {!isLoading && (
                isAdminLoggedIn ? (
                  <Button
                    onClick={handleBoardLogout}
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive/30"
                  >
                    로그아웃
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowBoardLogin(true)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    로그인
                  </Button>
                )
              )}
            </div>

            {/* Mobile hamburger button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border/40">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1 text-sm font-medium">
              <a
                href="/consultants"
                onClick={closeMobileMenu}
                className="py-3 px-2 rounded-md hover:bg-muted transition-colors"
              >
                Our Consultants
              </a>

              {/* 컨설팅 서비스 accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
                  aria-expanded={mobileConsultingOpen}
                >
                  <span>컨설팅 서비스</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileConsultingOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileConsultingOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                    <a href="/boarding-school" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">보딩스쿨 컨설팅</a>
                    <a href="/college" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">대학교 컨설팅</a>
                    <a href="/transfer" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">편입 컨설팅</a>
                    <a href="/graduate" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">대학원 컨설팅</a>
                    <a href="/ec" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">EC컨설팅</a>
                  </div>
                )}
              </div>

              {/* 입시 가이드 accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileGuideOpen(!mobileGuideOpen)}
                  aria-expanded={mobileGuideOpen}
                >
                  <span>입시 가이드</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileGuideOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileGuideOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                    <a href="/board" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">정보게시판</a>
                    <a href="/performance" onClick={closeMobileMenu} className="py-2 hover:text-primary transition-colors">연도별 입시 결과</a>
                  </div>
                )}
              </div>

              {/* 로그인/로그아웃 */}
              {!isLoading && (
                <div className="pt-2 pb-1">
                  {isAdminLoggedIn ? (
                    <Button
                      onClick={() => { handleBoardLogout(); closeMobileMenu() }}
                      variant="outline"
                      size="sm"
                      className="w-full text-destructive border-destructive/30"
                    >
                      로그아웃
                    </Button>
                  ) : (
                    <Button
                      onClick={() => { setShowBoardLogin(true); closeMobileMenu() }}
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      로그인
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
      <LoginModal
        isOpen={showBoardLogin}
        onClose={() => setShowBoardLogin(false)}
        onLogin={handleLogin}
        isLoading={isLoading}
      />
    </>
  )
}

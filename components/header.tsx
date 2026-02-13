'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginModal } from '@/components/board/login-modal'
import { useAuth } from '@/lib/auth-context'

export function Header() {
  const [showBoardLogin, setShowBoardLogin] = useState(false)
  const { isAdminLoggedIn, logout, login, isLoading } = useAuth()

  const handleBoardLogout = async () => {
    try {
      const result = await logout()
      if (result.success) {
        console.log('[v0] Admin logged out successfully')
      }
    } catch (error) {
      console.error('[v0] Logout error:', error)
    }
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password)
      setShowBoardLogin(false)
    } catch (error) {
      console.error('[v0] Login error:', error)
      throw error
    }
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
          </div>
        </nav>
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

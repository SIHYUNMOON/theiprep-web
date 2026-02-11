'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

interface Post {
  id: string
  title: string
  author: string
  created_at: string
  views: number
  likes: number
  content_html: string
  category: string
}

interface PaginatedResponse {
  items: Post[]
  totalCount: number
  page: number
  pageSize: number
  totalPages: number
}

const YOUTUBE_VIDEOS = [
  { title: '미국대학 Defer 후 합격 확률 높이는 3단계 전략', url: 'https://www.youtube.com/watch?v=YpXkkr4AqOI&t=11s' },
  { title: '열정이 스펙을 이긴다! 변화하는 아이비리그 합격 전략', url: 'https://www.youtube.com/watch?v=ACrDbddUT0U&t=896s' },
  { title: 'AP는 몇 학년부터 어떤 과목을 들어야할까?', url: 'https://www.youtube.com/watch?v=TiEt1sNUc5Q&t=10s' },
  { title: 'ED와 EA. 우리 아이에게 맞는 전략은?', url: 'https://www.youtube.com/watch?v=DiUge7fl0Ts' },
  { title: '경쟁률 낮은 전공으로 우회 지원하면 유리할까요?', url: 'https://www.youtube.com/watch?v=ea0pQVTSazI&t=10s' },
]

interface BoardClientProps {
  initialPosts?: Post[]
  initialTotalCount?: number
  initialTotalPages?: number
  initialDbUnavailable?: boolean
}

export function BoardClient({ 
  initialPosts = [], 
  initialTotalCount = 0, 
  initialTotalPages = 1,
  initialDbUnavailable = false
}: BoardClientProps) {
  const router = useRouter()
  const { isAdminLoggedIn } = useAuth()
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [sortBy, setSortBy] = useState<'latest' | 'recommended' | 'mostViewed' | 'updated'>('latest')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [totalCount, setTotalCount] = useState(initialTotalCount)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [categories, setCategories] = useState<string[]>([
    '디아이프렙 프로그램',
    'GPA',
    'AP',
    '액티비티 인턴쉽',
    'SAT ACT Toefl',
    '추천서',
    'AdmissionProcess',
    'Others',
    'Webinar',
    '입시트렌드',
  ])
  const [dbUnavailable, setDbUnavailable] = useState(initialDbUnavailable)

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    loadPosts()
  }, [sortBy, currentPage, selectedCategory])

  const loadCategories = async () => {
    try {
      const response = await fetch('/api/board/categories')
      const data = await response.json()
      
      // Define default categories in order
      const defaultCategories = [
        '디아이프렙 프로그램',
        'GPA',
        'AP',
        '액티비티 인턴쉽',
        'SAT ACT Toefl',
        '추천서',
        'AdmissionProcess',
        'Others',
        'Webinar',
        '입시트렌드',
      ]
      
      // Merge default categories with categories from database
      // Remove duplicates and keep the order: defaults first, then additional ones
      const dbCategories = data.categories || []
      const additionalCategories = dbCategories.filter(
        (cat: string) => !defaultCategories.includes(cat)
      )
      
      setCategories([...defaultCategories, ...additionalCategories])
    } catch (error) {
      console.error('[v0] Failed to load categories:', error)
      // Fallback to default categories if API fails
      setCategories([
        '디아이프렙 프로그램',
        'GPA',
        'AP',
        '액티비티 인턴쉽',
        'SAT ACT Toefl',
        '추천서',
        'AdmissionProcess',
        'Others',
        'Webinar',
        '입시트렌드',
      ])
    }
  }

  const loadPosts = async () => {
    setIsLoadingPosts(true)
    try {
      const params = new URLSearchParams({
        sort: sortBy,
        page: currentPage.toString(),
        pageSize: '10',
      })
      
      if (selectedCategory !== 'all') {
        params.append('category', selectedCategory)
      }
    
    const response = await fetch(`/api/board/posts?${params}`)
      if (response.status === 503) {
        setDbUnavailable(true)
        setPosts([])
        setTotalPages(1)
        setTotalCount(0)
        return
      }

      const data: PaginatedResponse = await response.json()
      setDbUnavailable(false)
      setPosts(data.items)
      setTotalPages(data.totalPages)
      setTotalCount(data.totalCount)
    } catch (error) {
      console.error('[v0] Failed to load posts:', error)
      setDbUnavailable(true)
      setPosts([])
    } finally {
      setIsLoadingPosts(false)
    }
  }



  const handlePostClick = (post: Post) => {
    router.push(`/board/${post.id}`)
  }

  const sortOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'mostViewed', label: '조회수 많은순' },
  ] as const

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <AnimatedSection className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-2">
              입시 관련 정보 게시판
            </h1>
            <p className="text-center text-muted-foreground text-sm">
              미국 대학 입시 정보, 합격 전략, 그리고 유학 준비 가이드를 확인하세요
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/uRLhkWTFF4s"
                    title="The I Prep YouTube Featured Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  The I Prep - 입시 전략 영상
                </h3>
                <div className="space-y-4">
                  {YOUTUBE_VIDEOS.map((video, idx) => (
                    <a
                      key={idx}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white text-sm leading-relaxed hover:underline transition-all"
                    >
                      {video.title}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  *클릭하면 유튜브로 연결됩니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setCurrentPage(1)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
                  }`}
                >
                  전체
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-gray-100 text-foreground hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="text-sm text-foreground font-medium">
                  {dbUnavailable ? '전체 -' : `전체 ${totalCount}`}
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as any)
                    setCurrentPage(1)
                  }}
                  className="px-4 py-2 text-sm border border-gray-200 rounded bg-white text-foreground cursor-pointer hover:border-gray-300 transition-colors"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-200 px-4 py-3 text-center font-bold text-primary bg-primary/10 w-16">번호</th>
                        <th className="border border-gray-200 px-6 py-3 text-center font-bold text-primary bg-primary/10">제목</th>
                        <th className="border border-gray-200 px-4 py-3 text-center font-bold text-primary bg-primary/10 w-32">작성자</th>
                        <th className="border border-gray-200 px-4 py-3 text-center font-bold text-primary bg-primary/10 w-32">작성일</th>
                        <th className="border border-gray-200 px-4 py-3 text-center font-bold text-primary bg-primary/10 w-20">조회</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoadingPosts ? (
                        <tr>
                          <td colSpan={5} className="border border-gray-200 px-4 py-8 text-center text-gray-400">
                            로딩 중...
                          </td>
                        </tr>
                      ) : dbUnavailable ? (
                        <tr>
                          <td colSpan={5} className="border border-gray-200 px-4 py-8 text-center text-gray-400">
                            일시적으로 이용할 수 없습니다. 잠시 후 다시 시도해 주세요. SERVICE_TEMP_UNAVAILABLE
                          </td>
                        </tr>
                      ) : posts.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="border border-gray-200 px-4 py-8 text-center text-gray-400">
                            게시물이 없습니다.
                          </td>
                        </tr>
                      ) : (
                        posts.map((post) => (
                          <tr
                            key={post.id}
                            className="hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="border border-gray-200 px-4 py-3 text-center text-sm text-foreground">{post.id.slice(0, 8)}</td>
                            <td className="border border-gray-200 px-6 py-3 text-sm text-foreground">
                              <Link href={`/board/${post.id}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary whitespace-nowrap">
                                  {post.category || '인터프렙 소개'}
                                </span>
                                <span className="truncate">{post.title}</span>
                              </Link>
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center text-sm text-foreground">{post.author}</td>
                            <td className="border border-gray-200 px-4 py-3 text-center text-sm text-foreground">
                              {new Date(post.created_at).toLocaleDateString('ko-KR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                              })}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center text-sm text-foreground">{post.views}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      // Show first page, last page, current page, and pages around current
                      if (page === 1 || page === totalPages) return true
                      if (Math.abs(page - currentPage) <= 2) return true
                      return false
                    })
                    .map((page, idx, arr) => {
                      // Add ellipsis if there's a gap
                      const showEllipsis = idx > 0 && page - arr[idx - 1] > 1
                      return (
                        <React.Fragment key={page}>
                          {showEllipsis && <span className="px-2 text-gray-400">...</span>}
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded text-sm transition-colors ${
                              currentPage === page
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-gray-100 text-foreground hover:bg-gray-200'
                            }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      )
                    })}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {isAdminLoggedIn && (
                <div className="flex justify-end mt-8">
                  <Button
                    onClick={() => router.push('/board/write')}
                    className="bg-primary hover:bg-primary/90 gap-2"
                  >
                    <Plus size={18} />
                    글쓰기
                  </Button>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

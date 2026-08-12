import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostViewClient } from './client'
import { getPostById } from '@/lib/db'
import { SITE_URL } from '@/lib/site-config'
import { JsonLd } from '@/components/json-ld'
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  stripHtmlToDescription,
} from '@/lib/structured-data'

export const runtime = 'nodejs'

type Post = {
  id: string
  title: string
  author: string
  created_at: string
  views: number
  content_html: string
  category: string
}

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const result = await getPostById(id)
  if (!result.ok) {
    return {
      title: 'Temporarily unavailable',
    }
  }

  if (!result.data) {
    return {
      title: 'Not Found',
    }
  }

  const post = result.data

  const textContent = stripHtmlToDescription(post.content_html)

  return {
    title: post.title,
    description: textContent,
    alternates: {
      canonical: `/board/${id}`,
    },
    openGraph: {
      title: post.title,
      description: textContent,
      url: `${SITE_URL}/board/${id}`,
    },
  }
}

export default async function PostViewPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const result = await getPostById(id)

  if (!result.ok) {
    console.error('[post] db fetch failed:', { error: 'db_unavailable', route: '/board/[id]', id })
    return (
      <PostViewClient
        postId={id}
        initialData={null}
        initialError="db_unavailable"
        initialLoading={false}
      />
    )
  }

  if (!result.data) {
    notFound()
  }

  const initialData = result.data

  // JSON-LD is only emitted here, on the confirmed-post-exists path.
  // db_unavailable (above) and notFound() (above) never reach this point,
  // so no BlogPosting/breadcrumb schema is ever emitted for missing or
  // unpublished posts.
  const blogPosting = buildBlogPostingSchema({
    id: initialData.id,
    title: initialData.title,
    createdAt: initialData.created_at,
    description: stripHtmlToDescription(initialData.content_html),
  })

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: '입시 가이드·정보', path: '/board' },
    { name: initialData.title, path: `/board/${initialData.id}` },
  ])

  return (
    <>
      <JsonLd data={blogPosting} />
      <JsonLd data={breadcrumb} />
      <PostViewClient
        postId={id}
        initialData={initialData}
        initialLoading={false}
      />
    </>
  )
}

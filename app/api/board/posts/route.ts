import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sort = (searchParams.get('sort') || 'latest') as 'latest' | 'recommended' | 'mostViewed' | 'updated'
    const page = parseInt(searchParams.get('page') || '1', 10)
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10)
    const category = searchParams.get('category') || undefined

    console.log('[v0] Fetching posts:', { sort, page, pageSize, category })

    const result = await getPosts(sort, page, pageSize, category)

    if (!result.ok) {
      console.error('[v0] Failed to fetch posts:', result.error)
      return NextResponse.json(
        { error: result.error },
        { status: 503 }
      )
    }

    console.log('[v0] Successfully fetched posts:', result.data.totalCount, 'total')

    return NextResponse.json(result.data)
  } catch (error) {
    console.error('[v0] Posts API error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

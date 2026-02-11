import { NextRequest, NextResponse } from 'next/server'
import { createPost } from '@/lib/db'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!isAdminAuthenticatedFromRequest(request)) {
      console.log('[v0] Unauthorized create post attempt')
      return NextResponse.json(
        { error: 'unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    console.log('[v0] Creating post:', body.title)

    const result = await createPost(body)

    if (!result.ok) {
      console.error('[v0] Failed to create post:', result.error)
      return NextResponse.json(
        { error: result.error },
        { status: 503 }
      )
    }

    console.log('[v0] Successfully created post:', result.data.id)

    return NextResponse.json(result.data)
  } catch (error) {
    console.error('[v0] Create post API error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

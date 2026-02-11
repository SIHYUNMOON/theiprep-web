import { NextRequest, NextResponse } from 'next/server'
import { getPostById, deletePost, updatePost } from '@/lib/db'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    console.log('[v0] Fetching post:', id)

    const result = await getPostById(id)

    if (!result.ok) {
      console.error('[v0] Failed to fetch post:', result.error)
      return NextResponse.json(
        { error: result.error },
        { status: 503 }
      )
    }

    if (!result.data) {
      return NextResponse.json(
        { error: 'post_not_found' },
        { status: 404 }
      )
    }

    console.log('[v0] Successfully fetched post:', result.data.title)

    return NextResponse.json(result.data)
  } catch (error) {
    console.error('[v0] Post API error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    if (!isAdminAuthenticatedFromRequest(request)) {
      return NextResponse.json(
        { error: 'unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params

    console.log('[v0] Deleting post:', id)

    const result = await deletePost(id)

    if (!result.ok) {
      console.error('[v0] Failed to delete post:', result.error)
      return NextResponse.json(
        { error: result.error },
        { status: 503 }
      )
    }

    console.log('[v0] Successfully deleted post')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Delete post API error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    if (!isAdminAuthenticatedFromRequest(request)) {
      return NextResponse.json(
        { error: 'unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const body = await request.json()

    console.log('[v0] Updating post:', id)

    const result = await updatePost({
      id,
      title: body.title,
      contentHtml: body.contentHtml,
      customDate: body.customDate,
      category: body.category,
    })

    if (!result.ok) {
      console.error('[v0] Failed to update post:', result.error)
      return NextResponse.json(
        { error: result.error },
        { status: 503 }
      )
    }

    console.log('[v0] Successfully updated post')

    return NextResponse.json(result.data)
  } catch (error) {
    console.error('[v0] Update post API error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

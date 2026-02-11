import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!isAdminAuthenticatedFromRequest(request)) {
      console.log('[v0] Unauthorized image upload attempt')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    console.log('[v0] Uploading image:', file.name, file.size, 'bytes')

    // Upload to Vercel Blob with a unique filename
    const timestamp = Date.now()
    const filename = `board-images/${timestamp}-${file.name}`
    
    const blob = await put(filename, file, {
      access: 'public',
    })

    console.log('[v0] Image uploaded successfully:', blob.url)

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error('[v0] Image upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

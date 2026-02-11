import { WriteClient } from './client'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function WritePage() {
  return <WriteClient />
}

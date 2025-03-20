'use client'

import { Page } from '@/payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

export const UI: React.FC<{ initialPage: Page }> = ({ initialPage }) => {
  const { data } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: 'http://localhost:3000',
    depth: 1,
  })

  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{data['virtual-field']}</h1>
    </div>
  )
}

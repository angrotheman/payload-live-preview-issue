'use client'

import { GlobalPage } from '@/payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

export const UI: React.FC<{ initialPage: GlobalPage }> = ({ initialPage }) => {
  const { data } = useLivePreview<GlobalPage>({
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

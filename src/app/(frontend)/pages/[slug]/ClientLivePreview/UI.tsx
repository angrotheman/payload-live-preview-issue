'use client'

import { PureUI } from '@/app/(frontend)/PureUI'
import { Page } from '@/payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

export const UI: React.FC<{ initialPage: Page }> = ({ initialPage }) => {
  const { data } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: 'http://localhost:3000',
    depth: 1,
  })

  return <PureUI page={data} />
}

'use client'

import { GlobalPage } from '@/payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { PureUI } from '../../PureUI'

export const UI: React.FC<{ initialPage: GlobalPage }> = ({ initialPage }) => {
  const { data } = useLivePreview<GlobalPage>({
    initialData: initialPage,
    serverURL: 'http://localhost:3000',
    depth: 1,
  })

  return <PureUI page={data} />
}

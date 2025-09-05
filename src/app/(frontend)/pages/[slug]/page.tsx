import Image from 'next/image'

import '../../styles.css'
import { ClientLivePreview } from './ClientLivePreview'
import { ServerLivePreview } from './ServerLivePreview'

export default async function HomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>

        <ClientLivePreview slug={slug} />
        {/* <ServerLivePreview slug={slug} /> */}
      </div>
    </div>
  )
}

import { GlobalPage, Page } from '@/payload-types'

export const PureUI = ({ page }: { page: Page | GlobalPage }) => {
  return (
    <div>
      <h1>{page.title}</h1>
      <h1>{page['virtual-field']}</h1>
    </div>
  )
}

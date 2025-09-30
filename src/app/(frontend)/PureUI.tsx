import { GlobalPage, Page } from '@/payload-types'

export const PureUI = ({ page }: { page: Page | GlobalPage }) => {
  return (
    <div>
      <h1>{page.title}</h1>
      <h1>{page.virtualField}</h1>

      {page.relation && page.relation.length >= 1 && (
        <ul>
          {page.relation
            .filter((i) => typeof i !== 'string')
            .map(({ id, title, slug }) => (
              <li key={id}>
                <a href={`/pages/${slug}`}>{title}</a>
              </li>
            ))}
        </ul>
      )}

      <pre>{JSON.stringify(page.virtualLocalizedArray, null, 2)}</pre>
    </div>
  )
}

import { getGlobalPage } from '../getGlobalPage'
import { UI } from './UI'

export const ClientLivePreview: React.FC = async () => {
  const page = await getGlobalPage()

  return <UI initialPage={page} />
}

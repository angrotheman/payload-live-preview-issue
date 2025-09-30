import { getGlobalPage } from '../getGlobalPage'
import { RefreshRouteOnSave } from '../../RefreshRouteOnSave'
import { PureUI } from '../../PureUI'

export const ServerLivePreview: React.FC = async () => {
  const page = await getGlobalPage()

  return (
    <>
      <RefreshRouteOnSave />
      <PureUI page={page} />
    </>
  )
}

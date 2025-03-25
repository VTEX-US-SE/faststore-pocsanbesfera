import type { GetPickupPointQuery } from '@faststore/core/api'
import { GetPickupPointDocument } from '@faststore/core/api'
import { useQuery_unstable as useQuery } from '@faststore/core/experimental'

export const usePickupPoints = () => {
  return useQuery<GetPickupPointQuery>(GetPickupPointDocument, {})
}

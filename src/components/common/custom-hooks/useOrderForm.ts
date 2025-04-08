import type { GetOrderFormIdQuery } from '@faststore/core/api'
import { useQuery_unstable as useQuery } from '@faststore/core/experimental'
import { GetOrderFormIdDocument } from '@faststore/core/api'

export const useGetOrderFormId = () => {
  return useQuery<GetOrderFormIdQuery>(GetOrderFormIdDocument, {})
}

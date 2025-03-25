import type {
  GetSellerQuery,
  GetSellerQueryVariables,
} from '@faststore/core/api'
import { GetSellerDocument } from '@faststore/core/api'
import { useQuery_unstable as useQuery } from '@faststore/core/experimental'

export const useSeller = (identifier: string) => {
  return useQuery<GetSellerQuery, GetSellerQueryVariables>(GetSellerDocument, {
    id: identifier,
  })
}

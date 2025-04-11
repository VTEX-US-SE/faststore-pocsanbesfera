import { useMemo } from 'react'
import { useProductsQuery } from '@faststore/core'
import { ClientManyProduct, SortOptions } from '../../types/productCarousel'
import { UseCustomProductsQueryProps } from '../../types/productQuery'

export const useCustomProductsQuery = ({
  first,
  after = '0',
  selectedFacets,
  sort = 'discount_desc',
  term = '',
  skipWhenEmptyTermAndFacets = true,
}: UseCustomProductsQueryProps) => {
  const shouldSkipQuery =
    skipWhenEmptyTermAndFacets &&
    term === '' &&
    (selectedFacets?.length === 0 ||
      !selectedFacets ||
      selectedFacets?.value === '')

  const data = useProductsQuery(
    {
      first: first <= 0 ? 5 : first,
      after,
      selectedFacets,
      sort: sort as SortOptions,
      term,
    },
    { doNotRun: shouldSkipQuery }
  )

  const isLoading = shouldSkipQuery ? false : !data?.search

  const productsData = useMemo(() => {
    if (isLoading || !data?.search?.products?.edges) {
      return []
    }

    return Array.isArray(data.search.products.edges)
      ? data.search.products.edges.map(
          (edge: any) => edge.node as ClientManyProduct
        )
      : []
  }, [data?.search?.products?.edges, isLoading])

  return { productsData, isLoading }
}

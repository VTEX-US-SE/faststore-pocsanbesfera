import { useEffect, useState } from 'react'
import { Facet, SearchSort } from '@faststore/sdk/dist/types'
import { Ads } from '../../types/ads'
import {
  NewtailAdsPlacement,
  NewtailAdType,
  NewtailContext,
  Newtail,
} from '../../clients/newtail'

interface useNewtailAdsProps {
  placement: NewtailAdsPlacement
  count: number
  vtexContext?: {
    term?: string
    sort?: SearchSort
    selectedFacets?: Facet[]
    showSponsored?: boolean
  }
  adType?: NewtailAdType
  context?: NewtailContext
  pdpSku?: string
  size?: string
}

const useNewtailAds = ({
  placement,
  count,
  vtexContext,
  adType = 'product',
  context,
  pdpSku,
  size,
}: useNewtailAdsProps) => {
  const { sort, term, selectedFacets, showSponsored } = { ...vtexContext }

  const categoryName =
    selectedFacets?.length &&
    selectedFacets.some((facet) => facet.key.startsWith('category'))
      ? selectedFacets
          .filter((facet) => facet.key.startsWith('category'))
          .map((facet) => facet.value)
          .join(' > ')
      : undefined

  const tags =
    selectedFacets?.length &&
    selectedFacets.some((facet) => facet.key === 'productClusterIds')
      ? selectedFacets
          .filter((facet) => facet.key === 'productClusterIds')
          .map((facet) => `product_cluster/${facet.value}`)
      : undefined

  context =
    context ?? pdpSku
      ? 'product_page'
      : term
      ? 'search'
      : categoryName
      ? 'category'
      : 'home'

  const RELEVANCE_SORTING_CONTEXTS = ['search', 'category']

  const [ads, setAds] = useState<Ads | null>(null)
  const fetchData = async () => {
    try {
      const result = await Newtail.getInstance().ad_request<Ads>({
        term,
        context,
        categoryName,
        placements: {
          [placement]: {
            quantity: count,
            types: [adType],
            size,
          },
        },
        productSku: pdpSku,
        tags,
      })
      setAds(result)
    } catch (err) {
      console.error(err)
      setAds({ [placement]: [] })
    }
  }
  useEffect(() => {
    if (
      (!RELEVANCE_SORTING_CONTEXTS.includes(context) ||
        !sort ||
        sort == 'score_desc' ||
        adType == 'banner') &&
      showSponsored
    )
      fetchData()
    else setAds({ [placement]: [] })
  }, [
    term,
    sort,
    selectedFacets,
    count,
    context,
    showSponsored,
    placement,
    pdpSku,
    size,
  ])

  return ads
}

export default useNewtailAds

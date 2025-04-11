import { useCallback, useEffect, useState } from 'react'
import { ClientManyProduct } from '../../types/productCarousel'
import { SponsoredBrandDetail, SponsoredProductDetail } from '../../types/ads'
import { useProductsByIdData } from '../useProductsByIdData'

interface useSponsoredShelvesProps {
  products: SponsoredProductDetail[]
  brand?: SponsoredBrandDetail
  count?: number
}

const DEFAULT_PRODUCTS_COUNT = 2

export default function useSponsoredShelves({
  products,
  brand,
  count = DEFAULT_PRODUCTS_COUNT,
}: useSponsoredShelvesProps) {
  const sponsoredBrand = !!brand
    ? {
        brandUrl: brand.brand_url,
        brandName: brand.brand_name,
        headline: brand.headline,
        description: brand.description,
        destinationUrl: brand.destination_url,
        newtailAdvertisement: {
          adId: brand.ad_id,
          impressionUrl: brand.impression_url,
          viewUrl: brand.view_url,
          clickUrl: brand.click_url,
        },
      }
    : undefined

  const [sponsoredProducts, setSponsoredProducts] = useState<
    ClientManyProduct[]
  >([])

  const [adsProductIds, setAdsProductIds] = useState(
    (products ?? [])
      .map((product) => product?.product_metadata?.productId)
      .filter((id) => id !== undefined)
  )

  const assembleSponsoredProducts = useCallback(
    (adsProductsSkusData: ClientManyProduct[]) => {
      const sponsoredProducts = []

      for (let product of products ?? []) {
        const skuProduct = adsProductsSkusData.find(
          (p) =>
            p.isVariantOf?.productGroupID ==
              product?.product_metadata?.productId &&
            p.sku == product.product_sku
        )

        if (!!skuProduct) {
          sponsoredProducts.push({
            ...skuProduct,
            newtailAdvertisement: {
              adId: product?.ad_id,
              impressionUrl: product?.impression_url,
              viewUrl: product?.view_url,
              clickUrl: product?.click_url,
              sku: product?.product_sku,
              productId: product?.product_metadata?.productId,
              sellerId: product?.seller_id,
            },
          })
        }
      }

      return sponsoredProducts
    },
    [products]
  )

  useEffect(() => {
    setAdsProductIds(
      (products ?? [])
        .map((products) => products.product_metadata?.productId)
        .filter((id) => id !== undefined)
    )
  }, [products])

  const adsProductsSkusData = useProductsByIdData(adsProductIds)

  useEffect(() => {
    const sponsoredProducts = assembleSponsoredProducts(adsProductsSkusData)
    setSponsoredProducts(sponsoredProducts.slice(0, count))
  }, [adsProductsSkusData, assembleSponsoredProducts])

  return {
    sponsoredBrand,
    sponsoredProducts,
  }
}

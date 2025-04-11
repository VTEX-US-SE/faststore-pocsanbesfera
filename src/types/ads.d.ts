import { NewtailAdsPlacement } from '../clients/newtail'
import { MergeOperation } from '../hooks/useMergeProductsAds'

export interface Ads {
  [key: string]: AdsDetail[]
}

export interface SponsoredProductDetail {
  ad_id?: string
  click_url: string
  impression_url: string
  view_url: string
  product_name: string
  product_sku: string
  image_url?: string
  seller_id?: string
  destination_url?: string
  product_metadata?: {
    productId?: string
  }
}
export interface SponsoredBrandDetail {
  products: SponsoredProductDetail[]
  ad_id: string
  click_url: string
  impression_url: string
  view_url: string
  brand_url: string
  brand_name: string
  headline: string
  description: string
  destination_url: string
  assets?: {
    type?: string
    url: string
  }[]
}

export interface SponsoredBannerDetail {
  ad_id?: string
  media_url: string
  destination_url: string
  click_url: string
  impression_url: string
  view_url: string
  seller_id?: string
}

type AdsDetail =
  | SponsoredProductDetail
  | SponsoredBrandDetail
  | SponsoredBannerDetail

export interface AdsProperties {
  showSponsored?: boolean
  sponsoredCount?: number
  onlyShowSponsored?: boolean
  sponsoredMergeOperation?: MergeOperation
  sponsoredPlacement?: NewtailAdsPlacement
  useProductPageContext?: boolean
}

export interface Advertisement {
  newtailAdvertisement?: {
    adId?: string
    impressionUrl?: string
    viewUrl?: string
    clickUrl?: string
    sku?: string
    productId?: string
    sellerId?: string
  }
}

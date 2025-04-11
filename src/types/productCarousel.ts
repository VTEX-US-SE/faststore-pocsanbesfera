import { ProductCluster } from './product'
import Property from './property'

export interface ProductCarouselProps {
  title: string
  numberOfItems: number
  navigationArrowsDisplay: 'always' | 'onHover'
  carouselProps: CarouselProps
  after: string
  sort: SortOptions
  term?: string
  selectedFacets: Facet[]
  inView: boolean
  isUseShowMore: boolean
  urlShowmore?: string
}

export type SortOptions =
  | 'discount_desc'
  | 'name_asc'
  | 'name_desc'
  | 'orders_desc'
  | 'price_asc'
  | 'price_desc'
  | 'release_desc'
  | 'score_desc'

interface CarouselProps {
  itemsPerPageDesktop: {
    large: number
    medium: number
  }
  itemsPerPageMobile: number
  bulletsPosition: 'outside' | 'inside'
  arrowsPosition: 'outside' | 'inside'
  infiniteMode: boolean
  controlsDesktop: 'navigationArrows' | 'paginationBullets' | 'complete'
  controlsMobile:
    | 'navigationArrows'
    | 'paginationBullets'
    | 'complete'
    | 'sameAsDesktop'
  autoplay: {
    enabled: boolean
    timeout: number
    pauseOnHover: boolean
  }
}

interface Facet {
  key: string
  value: string
}

export type ClientManyProductsQuery = {
  search: {
    products: {
      pageInfo: { totalCount: number }
      edges: EdgeProduct
    }
  }
}

export interface EdgeProduct {
  node: ClientManyProduct
}

export interface ClientManyProduct {
  categories: string[]
  advertisement: Advertisement
  link: string | null
  slug: string
  sku: string
  name: string
  nameComplete: string
  gtin: string
  id: string
  sellers: Array<{
    sellerId: string
    sellerName: string
    sellerDefault: boolean
    commertialOffer: {
      Installments: Array<{
        Value: number
        NumberOfInstallments: number
        Name: string
      }>
    }
  }>
  clusterHighlights: ProductCluster[]
  brand: { name: string; brandName: string }
  isVariantOf: { productGroupID: string; name: string }
  image: Array<{ url: string; alternateName: string }>
  offers: {
    lowPrice: number
    lowPriceWithTaxes: number
    offers: Array<{
      availability: string
      price: number
      listPrice: number
      listPriceWithTaxes: number
      quantity: number
      seller: { identifier: string }
    }>
  }
  additionalProperty: Array<{
    propertyID: string
    name: string
    value: any
    valueReference: any
  }>
  properties: Property[]
}

interface Advertisement {
  adId: string
  adResponseId: string
}

export interface ShelfContext extends ClientManyProductsQuery {
  title: string
}

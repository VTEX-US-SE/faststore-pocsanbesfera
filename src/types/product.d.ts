interface Brand {
  name: string
}

interface BreadcrumbItem {
  item: string
  name: string
  position: number
}

interface BreadcrumbList {
  itemListElement: BreadcrumbItem[]
}

interface Image {
  alternateName: string
  url: string
}

interface ActiveVariations {
  [key: string]: string
}

interface AvailableVariationOption {
  src: string
  alt: string
  label: string
  value: string
}

interface AvailableVariations {
  [key: string]: AvailableVariationOption[]
}

interface SlugsMap {
  [key: string]: string
}

interface SkuVariants {
  activeVariations: ActiveVariations
  availableVariations: AvailableVariations
  slugsMap: SlugsMap
}

interface IsVariantOf {
  productGroupID: string
  name: string
  skuVariants: SkuVariants
}

interface OfferSeller {
  identifier: string
}

interface Offer {
  availability: string
  listPrice: number
  listPriceWithTaxes: number
  price: number
  priceWithTaxes: number
  seller: OfferSeller
  clusterHighlights?: ProductCluster[]
}

export interface ProductCluster {
  id: string
  name: string
}

export interface Offers {
  highPrice: number
  lowPrice: number
  lowPriceWithTaxes: number
  offers: Offer[]
  priceCurrency: string
}

interface Seo {
  canonical: string
  description: string
  title: string
}

export interface AdditionalProperty {
  name: string
  propertyID: string
  value: string
  valueReference: string
}

interface ProductProperty {
  name: string
  values: string | string[]
}

export interface Product {
  brand: Brand
  breadcrumbList: BreadcrumbList
  description: string
  gtin: string
  image: Image[]
  isVariantOf: IsVariantOf
  name: string
  offers: Offers
  id: string
  releaseDate: string
  seo: Seo
  sku: string
  additionalProperty: AdditionalProperty[]
  unitMultiplier: number
  properties: ProductProperty[]
  sellers: Seller[]
}

export interface ProductCollection {
  brand: Brand
  breadcrumbList: BreadcrumbList
  categories: String[]
  description: string
  gtin: string
  image: Image[]
  isVariantOf: IsVariantOf
  name: string
  offers: Offers
  id: string
  releaseDate: string
  seo: Seo
  sku: string
  additionalProperty: AdditionalProperty[]
  unitMultiplier: number
  properties: ProductProperty[]
  sellers: Seller
}

export interface OfferSellerData {
  id?: string
  availability: string
  itemCondition: string
  price: number
  priceCurrency: string
  priceValidUntil: string
  seller: Seller
  listPrice: number
  listPriceWithTaxes: number
  priceWithTaxes: number
  sellerName: string
  productId: string
  sellerDetails: SellerDetails
}

interface SellerDetails {
  sellerData: SellerData
}

interface SellerData {
  CNPJ: string
  Description: string
  Email: string
  Name: string
  SellerId: string
  UrlLogo: string
}

export interface Seller {
  identifier: string
  sellerName?: string
  sellerId?: string
}

export interface ClientProductQueryQuery {
  product: {
    link: string
    sku: string
    name: string
    gtin: string
    description: string
    unitMultiplier: number | null
    id: string
    isVariantOf: {
      name: string
      productGroupID: string
      skuVariants: {
        activeVariations: any | null
        slugsMap: any | null
        availableVariations: any | null
      } | null
    }
    image: Array<{ url: string; alternateName: string }>
    brand: { name: string }
    offers: {
      lowPrice: number
      lowPriceWithTaxes: number
      offers: Array<{
        availability: string
        price: number
        priceWithTaxes: number
        listPrice: number
        listPriceWithTaxes: number
        seller: { identifier: string }
      }>
    }
    additionalProperty: Array<{
      propertyID: string
      name: string
      value: any
      valueReference: any
    }>
  }
}

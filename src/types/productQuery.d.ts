export interface UseCustomProductsQueryProps {
  first: number
  after?: string
  selectedFacets?: any
  sort?: string
  term?: string
  skipWhenEmptyTermAndFacets?: boolean
}

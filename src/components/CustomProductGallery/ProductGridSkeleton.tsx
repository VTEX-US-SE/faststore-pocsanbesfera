import type { PropsWithChildren } from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

const ITEMS_PER_PAGE = 12

interface ProductGridSkeletonProps {
  loading?: boolean
  aspectRatio?: number
}

function ProductGridSkeleton({
  children,
  aspectRatio,
  loading = true,
}: PropsWithChildren<ProductGridSkeletonProps>) {
  return loading ? (
    <ul data-fs-product-grid>
      {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => (
        <li key={String(index)}>
          <ProductCardSkeleton aspectRatio={aspectRatio} bordered />
        </li>
      ))}
    </ul>
  ) : (
    <>{children}</>
  )
}

export default ProductGridSkeleton

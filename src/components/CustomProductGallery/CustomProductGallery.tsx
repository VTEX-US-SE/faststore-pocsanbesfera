import { useProductsQuery } from '@faststore/core'
import type { ClientManyProductsQueryQueryVariables } from '@faststore/core/api'
import { ProductGrid, ProductGridItem } from '@faststore/ui'
import CustomProductCard from '../common/CustomProductCard'
import Section from '../common/Section'
import ProductGridSkeleton from './ProductGridSkeleton'
import styles from './section.module.scss'

interface CustomProductGalleryProps
  extends Partial<ClientManyProductsQueryQueryVariables> {
  title: string
}

const CustomProductGallery = ({
  title,
  ...variables
}: CustomProductGalleryProps) => {
  const data = useProductsQuery(variables)
  const products = data?.search?.products
  const productEdges = products?.edges ?? []

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`${styles.section} section-product-tiles layout__section`}
    >
      <h2 className="text__title-section layout__content">{title}</h2>
      <div data-fs-content>
        <ProductGridSkeleton aspectRatio={1} loading={!products}>
          <ProductGrid>
            {productEdges.map((product, idx) => (
              <ProductGridItem>
                <CustomProductCard
                  data-testid="custom-gallery-card"
                  product={product.node}
                  index={idx + 1}
                />
              </ProductGridItem>
            ))}
          </ProductGrid>
        </ProductGridSkeleton>
      </div>
    </Section>
  )
}

export default CustomProductGallery

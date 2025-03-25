import { useProductsQuery } from '@faststore/core'
import type { ClientManyProductsQueryQueryVariables } from '@faststore/core/api'
import { Tile, Tiles } from '@faststore/ui'
import CustomProductCard from '../common/CustomProductCard'
import Section from '../common/Section'
import ProductTilesSkeleton from './ProductTilesSkeleton'
import styles from './section.module.scss'

interface CustomProductTilesProps
  extends Partial<ClientManyProductsQueryQueryVariables> {
  title: string
}

const NUMBER_ITEMS_TO_EXPAND_FIRST = 3
const NUMBER_ITEMS_TO_EXPAND_FIRST_TWO = 2

const getRatio = (products: number, idx: number) => {
  const expandsFirstTile =
    products === NUMBER_ITEMS_TO_EXPAND_FIRST && idx === 0

  const expandsFirstTwoTile =
    products === NUMBER_ITEMS_TO_EXPAND_FIRST_TWO && (idx === 0 || idx === 1)

  if (expandsFirstTile || expandsFirstTwoTile) {
    return 5 / 3
  }

  return 3 / 4
}

const CustomProductTiles = ({
  title,
  ...variables
}: CustomProductTilesProps) => {
  const data = useProductsQuery(variables)
  const products = data?.search?.products
  const productEdges = products?.edges.slice(0, 4) ?? []

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`${styles.section} section-product-tiles layout__section`}
    >
      <h2 className="text__title-section layout__content">{title}</h2>
      <ProductTilesSkeleton loading={!products}>
        <Tiles testId="custom-product-tiles" onError={() => null}>
          {productEdges.map((product, idx) => (
            <Tile key={product.node.id}>
              <CustomProductCard
                data-testid="custom-tile-card"
                product={product.node}
                index={idx + 1}
                variant="wide"
                aspectRatio={getRatio(productEdges.length, idx)}
              />
            </Tile>
          ))}
        </Tiles>
      </ProductTilesSkeleton>
    </Section>
  )
}

export default CustomProductTiles

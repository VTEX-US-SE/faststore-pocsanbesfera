import customStyles from './index.module.scss'
import { AdsProperties, SponsoredProductDetail } from '../../../types/ads'
import useNewtailAds from '../../../hooks/useNewtailAds'
import useSponsoredShelves from '../../../hooks/useSponsoredShelves'
import SponsoredShelfProduct from '../../molecules/SponsoredShelfProduct'
import { useSafeSearch } from '../../../hooks/useSafeSearch'
import Section from '../../common/Section'
import categoryCardStyles from '../../CategoryCards/categoryCards.module.scss'

type SponsoredShelfProperties = {
  sponsoredQuery?: string
  useNavigationContext?: boolean
}

const DEFAULT_SPONSORED_COUNT = 2

const SponsoredShelf = ({
  sponsoredQuery = '',
  useNavigationContext = true,
  ...props
}: SponsoredShelfProperties & AdsProperties) => {
  const {
    state: { term, sort, selectedFacets },
  } = useSafeSearch()

  const adsCount = props?.sponsoredCount ?? DEFAULT_SPONSORED_COUNT
  const adsPlacement = props?.sponsoredPlacement ?? 'search_top-shelf_product'
  const query = useNavigationContext ? term ?? '' : sponsoredQuery
  const { [adsPlacement]: ads } =
    useNewtailAds({
      placement: adsPlacement,
      count: adsCount,
      vtexContext: {
        term: query,
        showSponsored: true,
        sort: useNavigationContext ? sort : undefined,
        selectedFacets: useNavigationContext ? selectedFacets : undefined,
      },
    }) ?? {}

  const { sponsoredProducts } = useSponsoredShelves({
    products: ads as SponsoredProductDetail[],
    count: adsCount,
  })

  if (!sponsoredProducts.length) {
    return null
  }

  return (
    <>
      <Section className={`carousel_title ${categoryCardStyles.categoryCards}`}>
        <div
          data-fs-custom-product-card
          className={[customStyles.shelfCard].filter(Boolean).join(' ')}
        >
          {sponsoredProducts.map((product: any) => (
            <SponsoredShelfProduct
              product={product}
              type="product"
              key={`shelf-${product.id}`}
            ></SponsoredShelfProduct>
          ))}
        </div>
      </Section>
    </>
  )
}

export default SponsoredShelf

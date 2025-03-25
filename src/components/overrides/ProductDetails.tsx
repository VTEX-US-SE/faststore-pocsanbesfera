import { SectionOverride } from '@faststore/core'
import { ProductPrice, ProductTitle, ShippingSimulation } from '@faststore/ui'
import SellerBuyBox from '../SellerBuyBox'
import SellerInfo from '../SellerInfo'
import { usePriceFormatter } from '../common/custom-hooks'

const SECTION = 'ProductDetails' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    ProductTitle: {
      Component: (props) => (
        <>
          <ProductTitle {...props} />
          <SellerInfo />
        </>
      ),
    },
    ProductPrice: {
      Component: (props) => {
        const formatter = usePriceFormatter()
        return <ProductPrice {...props} formatter={formatter} />
      },
    },
    ShippingSimulation: {
      Component: (props) => (
        <>
          <ShippingSimulation {...props} />
          <SellerBuyBox />
        </>
      ),
    },
  },
}

export { override }

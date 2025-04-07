import { SectionOverride } from '@faststore/core'
import {
  ProductPrice,
  ProductTitle,
  ShippingSimulation,
  BuyButton,
} from '@faststore/ui'
import SellerBuyBox from '../SellerBuyBox'
import SellerInfo from '../SellerInfo'
import { usePriceFormatter } from '../common/custom-hooks'
import {
  cartStore_unstable as useCart,
  useCartToggleButton_unstable as useCartToggleButton,
} from '@faststore/core/experimental'
import { useCartWithPoints } from '../common/custom-hooks/useCartWithPoints'

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
    BuyButton: {
      Component: (props: any) => {
        const { read, set } = useCart
        const cartInfo = read()
        const { addToCartWithPoints } = useCartWithPoints({
          orderformId: cartInfo.id,
        })
        if (!cartInfo.id) {
          set({
            ...cartInfo,
            id: '2438e1502ef343b3a5c37f2430645391',
          })
        }

        return (
          <BuyButton
            {...props}
            onClick={async (e) => {
              e.preventDefault()
              await addToCartWithPoints({
                params: {
                  orderformId: cartInfo.id,
                  productId: props['data-sku'],
                  sellerId: props['data-seller'],
                  quantity: '1',
                  attachment: '60',
                },
              })
            }}
          />
        )
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

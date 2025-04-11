import { SectionOverride, usePDP } from '@faststore/core'
import {
  ProductPrice,
  ProductTitle,
  ShippingSimulation,
  BuyButton,
} from '@faststore/ui'
import SellerBuyBox from '../SellerBuyBox'
import divMaluca from '../SellerBuyBox/divMaluca'
import { usePriceFormatter } from '../common/custom-hooks'
import { cartStore_unstable as useCart } from '@faststore/core/experimental'
import { useCartWithPoints } from '../common/custom-hooks/useCartWithPoints'
import { useGetOrderFormId } from '../common/custom-hooks/useOrderForm'
import { useEffect, useState } from 'react'

const SECTION = 'ProductDetails' as const
const SUBSCRIPTION_SKUS = ['98']

const override: SectionOverride = {
  section: SECTION,
  components: {
    QuantitySelector: {
      Component: () => <></>,
    },
    ProductTitle: {
      Component: (props) => (
        <>
          <ProductTitle {...props} />
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
        const priceDiv: any = document.querySelector(
          'span[data-fs-price="true"]'
        )
        const { read, set } = useCart
        const { data: dataProduct } = usePDP()
        const { cpp, offers, id } = dataProduct.product
        const cartInfo = read()
        const { addToCartWithPoints } = useCartWithPoints({
          orderformId: cartInfo.id,
        })
        const [selectedSeller, setSelectedSeller] = useState<string>(
          props['data-seller']
        )
        const selectedOffer = offers.offers.find((offer: any) => {
          return offer?.seller?.identifier === selectedSeller
        })
        const [buyButtonEnable, setBuyButtonEnable] = useState(
          !!cartInfo.id && cartInfo.id !== ''
        )
        const { data } = useGetOrderFormId()

        const listPoints = (
          Number(selectedOffer.listPrice) * Number(cpp)
        ).toFixed(0)
        const finalPoints = (Number(selectedOffer.price) * Number(cpp)).toFixed(
          0
        )

        //@ts-ignore
        window.gambiarra = {
          pointValue: `60|${cpp}`,
        }

        if (id !== '98') {
          priceDiv?.setHTMLUnsafe(
            divMaluca({
              ponto1: listPoints,
              ponto2: finalPoints,
              ponto3: Number(listPoints) * 0.8,
              ponto4: Number(listPoints) * 0.7,
              ponto5: Number(listPoints) * 0.6,
              preco1: Number(selectedOffer.listPrice) * 0.2,
              preco2: Number(selectedOffer.listPrice) * 0.3,
              preco3: Number(selectedOffer.listPrice) * 0.4,
            })
          )

          const inputPrice100 = document.getElementById('inputPrice100')

          inputPrice100?.addEventListener('change', () => {
            //@ts-ignore
            window.gambiarra = {
              pointValue: `100|${cpp}`,
            }
          })

          const inputPrice80 = document.getElementById('inputPrice80')

          inputPrice80?.addEventListener('change', () => {
            //@ts-ignore
            window.gambiarra = {
              pointValue: `80|${cpp}`,
            }
          })

          const inputPrice70 = document.getElementById('inputPrice70')

          inputPrice70?.addEventListener('change', () => {
            //@ts-ignore
            window.gambiarra = {
              pointValue: `70|${cpp}`,
            }
          })

          const inputPrice60 = document.getElementById('inputPrice60')

          inputPrice60?.addEventListener('change', () => {
            //@ts-ignore
            window.gambiarra = {
              pointValue: `60|${cpp}`,
            }
          })
        }

        useEffect(() => {
          if (
            !cartInfo.id &&
            data?.getOrderFormId?.orderFormId &&
            !buyButtonEnable
          ) {
            const newOrderFormId = data?.getOrderFormId?.orderFormId
            set({
              ...cartInfo,
              id: newOrderFormId,
            })
            setBuyButtonEnable(true)
          } else if (cartInfo.id && !buyButtonEnable) {
            setBuyButtonEnable(true)
          }
        }, [data])

        const handleAddButton = async (isSubscription = false) => {
          const pointsValue = isSubscription
            ? `0|${cpp}`
            : //@ts-ignore
              window.gambiarra.pointValue

          await addToCartWithPoints({
            params: {
              orderformId: cartInfo.id,
              productId: props['data-sku'],
              sellerId: selectedSeller,
              quantity: '1',
              attachment: pointsValue,
              isSubscription,
            },
          })
        }

        return (
          <>
            <BuyButton
              {...props}
              loading={props.loading || !buyButtonEnable}
              onClick={async (e) => {
                e.preventDefault()

                const currentSku = dataProduct?.product?.id
                const isSubscription = SUBSCRIPTION_SKUS.includes(currentSku)

                await handleAddButton(isSubscription)
              }}
            />
            <SellerBuyBox
              priceDiv={priceDiv}
              setSelectedSeller={setSelectedSeller}
              selectedSeller={selectedSeller}
            />
          </>
        )
      },
    },
    ShippingSimulation: {
      Component: (props) => (
        <>
          <ShippingSimulation {...props} />
        </>
      ),
    },
  },
}

export { override }

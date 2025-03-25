import { usePDP } from '@faststore/core'
import {
  CartItem,
  cartStore_unstable as useCart,
  useCartToggleButton_unstable as useCartToggleButton,
} from '@faststore/core/experimental'
import { BuyButton as Button, ProductPrice } from '@faststore/ui'
import Seller from '../common/Seller'
import { usePriceFormatter } from '../common/custom-hooks'
import styles from './sellerBuyBox.module.scss'

export default function SellerBuyBox() {
  const { onClick: toggleCart } = useCartToggleButton()
  const { addItem } = useCart
  const { data } = usePDP()
  const product = data?.product
  const offers = product?.offers.offers

  const filteredOffers = offers
    ?.filter((o) => o.availability === 'https://schema.org/InStock')
    ?.slice(1)

  const formatter = usePriceFormatter()

  if (!filteredOffers?.length) {
    return null
  }

  return (
    <section data-fs-product-details-section className={styles.sellerBuyBox}>
      <div className={styles.content}>
        <h2 className={`text__title-mini ${styles.title}`}>
          Mais opções de compra
        </h2>
        {filteredOffers.map((offer) => (
          <div key={offer.seller.identifier} className={styles.seller}>
            <Button
              variant="secondary"
              onClick={() => {
                addItem({
                  itemOffered: { ...product },
                  quantity: 1,
                  seller: { ...offer.seller },
                  listPrice: offer.listPrice,
                  price: offer.price,
                } as unknown as Omit<CartItem, 'id'>)
                toggleCart()
              }}
            >
              <div>
                Comprar de{' '}
                <Seller
                  id={offer.seller.identifier}
                  showLogoIfPossible={false}
                />{' '}
                por:
              </div>
              <ProductPrice
                listPrice={offer.listPrice}
                value={offer.price}
                formatter={formatter}
              />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

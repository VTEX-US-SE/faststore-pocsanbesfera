import { usePDP } from '@faststore/core'
import Seller from '../common/Seller'
import styles from './sellerInfo.module.scss'

export default function SellerInfo() {
  const { data } = usePDP()
  const product = data?.product
  const offers = product?.offers.offers ?? []
  const [offer] = offers

  const {
    seller: { identifier },
  } = offer

  if (!identifier) {
    return null
  }

  return (
    <div className={styles.sellerInfo}>
      Vendido e entregue por: <Seller id={identifier} />
    </div>
  )
}

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
    <div className="c-seller__info-title">
      Vendido e entregue por:{' '}
      <span className="c-seller__info-seller">
        <Seller id={identifier} />
      </span>
    </div>
  )
}

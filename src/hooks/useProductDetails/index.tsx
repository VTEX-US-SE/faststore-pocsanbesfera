/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from 'react'
import { ClientManyProduct } from '../../types/productCarousel'
import { useFormattedPrice } from '../useFormattedPrice'
import { Advertisement } from '../../types/ads'
import { filterInstallmentValue } from '../../utils/utils'

const useProductDetails = (product: ClientManyProduct & Advertisement) => {
  const { image, name, slug, newtailAdvertisement } = product

  const offer = product.offers.offers[0]

  const { listPrice, price, availability } = offer

  // const seller = offer.seller.identifier;

  const link = `/${slug}/p`

  const formattedListPrice = useFormattedPrice(listPrice)
  const formattedPrice = useFormattedPrice(price)

  const discountPercentage = useMemo(() => {
    if (listPrice > price) {
      const discount = listPrice - price
      return parseFloat(((discount / listPrice) * 100).toFixed(0))
    }
    return 0
  }, [listPrice, price])

  // const installmentValue = filterInstallmentValue(sellers);

  return {
    link,
    imageUrl: image[0]?.url,
    imageAlt: image[0]?.alternateName,
    nameComplete: name,
    listPrice: formattedListPrice,
    price: formattedPrice,
    discountPercentage,
    installments: 0,
    unavailable: availability === 'https://schema.org/OutOfStock',
  }
}

export default useProductDetails

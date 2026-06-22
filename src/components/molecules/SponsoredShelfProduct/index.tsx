import { useMemo } from 'react'
import useDeviceInfo from '../../../hooks/useDeviceInfo'
import useProductDetails from '../../../hooks/useProductDetails'
import { ClientManyProduct } from '../../../types/productCarousel'
import customStyles from './index.module.scss'
import Link from 'next/link'
import getProductFlags from '../../../utils/getProductFlags'
import { Advertisement } from '../../../types/ads'
import { useAdvertisementAttributes } from '../../../hooks/useAdvertisementAttributes'

interface ProductCardProps {
  product: ClientManyProduct & Advertisement
  orientation?: 'vertical' | 'horizontal'
  type?: 'brand' | 'product'
}

const SponsoredShelfProduct = ({
  product,
  type = 'product',
}: ProductCardProps) => {
  const [isAdvertisement, advertisementDataAttributes] =
    useAdvertisementAttributes({
      newtailAdvertisement: product?.newtailAdvertisement,
    })

  const isMobile = useDeviceInfo()

  const productDetails = useProductDetails(product)

  const specs = useMemo(
    () => getProductFlags(product.properties),
    [product.properties]
  )

  if (!productDetails) {
    return null
  }

  const {
    imageUrl,
    imageAlt,
    nameComplete,
    listPrice,
    price,
    discountPercentage,
    link,
    unavailable,
  } = productDetails

  return (
    <div className={customStyles.productCard} {...advertisementDataAttributes}>
      <Link href={link ?? ''}>
        <div data-fs-card-image className={customStyles.productImage}>
          <img src={imageUrl} alt={imageAlt} />
        </div>

        <div className={customStyles.productInfoContainer}>
          <div
            className={[
              customStyles.productInfo,
              type == 'brand' && customStyles.brand,
            ].join(' ')}
          >
            <div
              className={[
                customStyles.descriptiveContent,
                type == 'brand' && customStyles.brand,
              ].join(' ')}
            >
              {!isMobile && isAdvertisement && type == 'product' && (
                <div>
                  <div className={customStyles.sponsored}>Sponsored</div>
                </div>
              )}

              <h3 className={customStyles.productName} title={nameComplete}>
                {nameComplete}
              </h3>
            </div>

            <div className={customStyles.priceAndAvailabilityContent}>
              {unavailable ? (
                <div
                  className={[
                    customStyles.productUnavailable,
                    type == 'brand' && customStyles.brand,
                  ].join(' ')}
                >
                  <span>Sorry! We have sold out of this item</span>
                </div>
              ) : (
                <div className={customStyles.priceContent}>
                  {discountPercentage > 0 && (
                    <div
                      className={[
                        customStyles.discount,
                        type == 'brand' && customStyles.brand,
                      ].join(' ')}
                    >
                      <span
                        className={[
                          customStyles.discountPrice,
                          type == 'brand' && customStyles.brand,
                        ].join(' ')}
                      >
                        {listPrice}
                      </span>
                      <span
                        className={[
                          customStyles.discountPercent,
                          type == 'brand' && customStyles.brand,
                        ].join(' ')}
                      >
                        {discountPercentage}%
                      </span>
                    </div>
                  )}

                  <p
                    className={[
                      customStyles.productPrice,
                      type == 'brand' && customStyles.brand,
                    ].join(' ')}
                  >
                    {price}
                  </p>
                </div>
              )}
            </div>
          </div>

          {!isMobile && specs.length > 0 && (
            <div className={customStyles.productSpecsDesktop}>
              {specs.map((spec) => (
                <div
                  key={`spec-${spec}`}
                  className={[customStyles.spec, customStyles[spec.trim()]]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {spec}
                </div>
              ))}
            </div>
          )}
        </div>

        {isMobile && specs.length > 0 && (
          <div
            data-fs-card-specs-list
            className={customStyles.productSpecsMobile}
          >
            {specs.map((spec) => (
              <div
                key={`mobile-${spec}`}
                className={[customStyles.spec, customStyles[spec.trim()]]
                  .filter(Boolean)
                  .join(' ')}
              >
                {spec}
              </div>
            ))}
          </div>
        )}

        {isMobile && isAdvertisement && type == 'product' && (
          <div className={customStyles.productSpecsMobile}>
            <div
              className={[customStyles.spec, customStyles.sponsored].join(' ')}
            >
              Sponsored
            </div>
          </div>
        )}
      </Link>
    </div>
  )
}

export default SponsoredShelfProduct

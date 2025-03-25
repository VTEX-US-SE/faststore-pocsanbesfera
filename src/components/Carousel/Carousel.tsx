import { useSession_unstable as useSession } from '@faststore/core/experimental'
import { Carousel } from '@faststore/ui'
import NextImage from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import styles from './carousel.module.scss'

export interface HeroProps {
  images: [
    {
      link: string
      imageAlt: string
      imageTitle: string
      imageSrcDesktop: string
      imageSrcMobile: string
      franchise: string
    }
  ]
  fullImage: boolean
}

export default function CustomHero(props: HeroProps) {
  const { channel } = useSession()
  const { regionId } = JSON.parse(channel ?? '{}')
  const regionFranchise = Buffer.from(regionId, 'base64')
    .toString('ascii')
    .replace('SW#', '')

  const images = props.images.filter(
    (image) => !image.franchise || image.franchise === regionFranchise
  )

  const carousel = useCallback(
    (type: 'mobile' | 'desktop') => (
      <Carousel
        itemsPerPage={1}
        infiniteMode={true}
        controls="complete"
        variant="slide"
      >
        {images.map((image, index) => {
          return (
            <Link
              href={image.link}
              key={index}
              className={`${styles.carouselItem}
             ${styles.card}`}
            >
              <NextImage
                data-fs-image
                src={
                  type === 'mobile'
                    ? image.imageSrcMobile
                    : image.imageSrcDesktop
                }
                alt={image.imageAlt}
                width={1920}
                height={250}
              />
            </Link>
          )
        })}
      </Carousel>
    ),
    [images]
  )

  if (!images?.length) {
    return null
  }

  return (
    <div className={`${styles.container} ${styles.customHeroFullImage}`}>
      {props.fullImage ? (
        <div>
          <div className="hidden-mobile">{carousel('desktop')}</div>
          <div className="display-mobile">{carousel('mobile')}</div>
        </div>
      ) : (
        <div data-fs-content>
          <div className="hidden-mobile">{carousel('desktop')}</div>
          <div className="display-mobile">{carousel('mobile')}</div>
        </div>
      )}
    </div>
  )
}

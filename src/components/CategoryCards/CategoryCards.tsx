import { Carousel } from '@faststore/ui'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import Section from '../common/Section'
import styles from './categoryCards.module.scss'

export interface CategoryCardsProps {
  title: string
  images: Array<{
    link: string
    imageAlt: string
    imageTitle: string
    imageSrcDesktop: string
    imageSrcMobile: string
  }>
}

export default function CategoryCards(props: CategoryCardsProps) {
  const renderCarousel = useCallback(
    (type: 'mobile' | 'desktop') => (
      <Carousel
        controls="complete"
        itemsPerPage={type === 'mobile' ? 3 : 7}
        className={styles.carousel}
      >
        {props.images?.map((image, index) => {
          return (
            <Link
              key={index}
              href={image.link}
              rel="noopener noreferrer"
              className={styles.card}
            >
              <Image
                src={
                  type === 'mobile'
                    ? image.imageSrcMobile
                    : image.imageSrcDesktop
                }
                alt={image.imageAlt}
                width={64}
                height={64}
              />
              <span>{image.imageTitle}</span>
            </Link>
          )
        })}
      </Carousel>
    ),
    [props.images]
  )

  if (!props.images?.length) {
    return null
  }

  return (
    <Section className={styles.categoryCards}>
      <div data-fs-content>
        <h2 className={`text__title-section ${styles.title}`}>{props.title}</h2>
        <div className="display-mobile">{renderCarousel('mobile')}</div>
        <div className="hidden-mobile">{renderCarousel('desktop')}</div>
      </div>
    </Section>
  )
}

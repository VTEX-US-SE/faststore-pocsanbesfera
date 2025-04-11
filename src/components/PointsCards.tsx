import { Carousel } from '@faststore/ui'
import Link from 'next/link'
import { useCallback } from 'react'
import Section from './common/Section'
import styles from './CategoryCards/categoryCards.module.scss'

export interface PointsCardsProps {
  title: string
  subtitle: string
  text: string
  items: Array<{
    link: string
    title: string
    subtitle: string
    text: string
  }>
}

export default function PointsCards(props: PointsCardsProps) {
  const renderCarousel = useCallback(
    (type: 'mobile' | 'desktop') => (
      <Carousel
        itemsPerPage={type === 'mobile' ? 4 : 8}
        className={'c-points__card'}
      >
        {props.items?.map((item, index) => {
          return (
            <Link key={index} href="/" className="c-points__card-item">
              <Section
                key={index}
                rel="noopener noreferrer"
                className="c-points__card-section"
              >
                <div className={styles.cardText}>
                  <h3 className="c-card__item-title">{item.title}</h3>
                  <p className="c-card__item-subtitle">{item.subtitle}</p>
                  <p className="c-card__item-text">{item.text}</p>
                </div>
              </Section>
            </Link>
          )
        })}
      </Carousel>
    ),
    [props.items]
  )

  if (!props.items?.length) {
    return null
  }

  return (
    <Section className={`carousel_title ${styles.categoryCards}`}>
      <div data-fs-content>
        <h2 className={`text__title-section ${styles.title}`}>{props.title}</h2>
        <h3 className={`text__subtitle-section ${styles.subtitle}`}>
          {props.subtitle}
        </h3>
        <p className={`text__text-section ${styles.text}`}>{props.text}</p>
        <div className="display-mobile">{renderCarousel('mobile')}</div>
        <div className="hidden-mobile">{renderCarousel('desktop')}</div>
      </div>
    </Section>
  )
}

import type { PickupPoint } from '@faststore/core/api'
import { useState } from 'react'
import MapsGoogle from '../MapsGoogle/MapsGoogle'
import { usePickupPoints } from '../common/custom-hooks/usePickupPoints'
import styles from './pickupPoints.module.scss'

interface PickupPointsProps {
  title: string
  apiKey: string
}

const formatTime = (time: string) => {
  const [hour, minute, _] = time.split(':')
  return `${hour}:${minute}`
}

export default function PickupPoints(props: PickupPointsProps) {
  const { data } = usePickupPoints()
  const [actionCard, setActionCard] = useState(false)

  const pickupPoints = data?.getPickupPoint || []
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <>
      {props.title && (
        <h2 data-fs-content className={styles.titleContainer}>
          {props.title}
        </h2>
      )}
      <div className={styles.container} data-fs-content>
        <div className={styles.containerInfo}>
          {pickupPoints.map((pickupPoint: PickupPoint, index: number) => (
            <div key={index} className={styles.border}>
              <p className={styles.title}>{pickupPoint.name}</p>
              <p className={styles.info}>
                {pickupPoint.address.number} {pickupPoint.address.street}
                ,&nbsp;
                {pickupPoint.address.city}, {pickupPoint.address.state}-&nbsp;
                {pickupPoint.address.postalCode}
              </p>
              {actionCard && (
                <div className={styles.card}>
                  <p className={styles.subTitle}>Opening hours</p>
                  {pickupPoint.businessHours.map((businessHour, id) => (
                    <div key={id}>
                      <p className={styles.info}>
                        <p className={styles.day}>
                          {daysOfWeek[businessHour.dayOfWeek]}:
                        </p>
                        {formatTime(businessHour.openingTime)} -&nbsp;
                        {formatTime(businessHour.closingTime)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <p
                className={styles.titleDetails}
                onClick={() => setActionCard((prev) => !prev)}
              >
                More details
              </p>
            </div>
          ))}
        </div>

        <div className={styles.containerMap}>
          <MapsGoogle data={pickupPoints} apiKey={props.apiKey} />
        </div>
      </div>
    </>
  )
}

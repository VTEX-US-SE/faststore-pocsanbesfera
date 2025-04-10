import { useSession_unstable as useSession } from '@faststore/core/experimental'
import { useCallback } from 'react'

export const usePointsFormatter = () => {
  const { locale } = useSession()

  return useCallback(
    (points: number) =>
      new Intl.NumberFormat(locale, {
        style: 'decimal',
        maximumFractionDigits: 0,
      }).format(points) + ' pts',
    [locale]
  )
}

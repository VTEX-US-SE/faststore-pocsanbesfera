import { useSession_unstable as useSession } from '@faststore/core/experimental'
import { useCallback } from 'react'

export const usePriceFormatter = () => {
  const {
    currency: { code },
    locale,
  } = useSession()

  return useCallback(
    (price: number) =>
      Intl.NumberFormat(locale, {
        style: 'currency',
        currency: code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price),
    [code, locale]
  )
}

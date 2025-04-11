import { useEffect, useState } from 'react'
import { ClientManyProduct } from '../../types/productCarousel'
import mockData from './mock'
import { useCustomProductsQuery } from '../useProductsQuery'

export const useProductsByIdData = (ids: string[]): ClientManyProduct[] => {
  const [data, setData] = useState<ClientManyProduct[]>([])
  const [term, setTerm] = useState<string>('')

  useEffect(() => {
    setTerm(
      ids.length > 0
        ? ids.reduce(
            (acc: string, curr: string, index: number) =>
              index == 0 ? `${acc}${curr}` : `${acc};${curr}`,
            'product:'
          )
        : ''
    )
  }, [ids])

  const { productsData, isLoading } = useCustomProductsQuery({
    term,
    first: ids.length,
    sort: 'score_desc',
  })

  useEffect(() => {
    if (!isLoading) {
      setData(productsData)
      // setData(mockData(ids)) // DEV MODE
    }
  }, [isLoading, productsData])

  return data
}

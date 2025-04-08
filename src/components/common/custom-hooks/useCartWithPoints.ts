import {
  useQuery_unstable as useQuery,
  useLazyQuery_unstable as useLazyQuery,
} from '@faststore/core/experimental'
import {
  getOrderForm as GET_ORDER_FORM_QUERY,
  addToCartWithPoints as ADD_TO_CART_MUTATION,
} from '../graphql'
import type {
  GetOrderFormQuery,
  AddToCartWithPointsMutation,
} from '@faststore/core/api'
import { useEffect } from 'react'
import {
  cartStore_unstable as useCart,
  useCartToggleButton_unstable as useCartToggleButton,
} from '@faststore/core/experimental'

interface UseCartWithPointsProps {
  orderformId: string
}

export function useCartWithPoints({ orderformId }: UseCartWithPointsProps) {
  const { read, set } = useCart
  const { onClick: toggleCart } = useCartToggleButton()

  const {
    data: orderFormData,
    isValidating: loadingOrderForm,
    error: orderFormError,
  } = useQuery<GetOrderFormQuery>(
    GET_ORDER_FORM_QUERY,
    { orderformId },
    { doNotRun: !orderformId }
  )

  const [
    addToCartWithPoints,
    {
      data: addToCartDataResponse,
      isValidating: loadingAddToCart,
      error: addToCartError,
    },
  ] = useLazyQuery<AddToCartWithPointsMutation>(ADD_TO_CART_MUTATION, {
    retry: true,
    retryDelay: 1000,
  })

  useEffect(() => {
    console.log('addToCartDataResponse =>', addToCartDataResponse)
    if (
      addToCartDataResponse &&
      addToCartDataResponse?.addToCartWithPoints?.orderFormId &&
      !loadingAddToCart
    ) {
      const newCart = read()
      set(newCart)
      toggleCart()
    }
  }, [addToCartDataResponse])

  return {
    orderFormData,
    loadingOrderForm,
    orderFormError,
    addToCartWithPoints,
    addToCartDataResponse,
    loadingAddToCart,
    addToCartError,
  }
}

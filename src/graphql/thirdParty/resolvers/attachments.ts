import type {
  GetOrderFormQueryVariables,
  GetOrderFormQuery,
  AddToCartWithPointsMutationVariables,
  AddToCartWithPointsMutation,
} from '@faststore/core/api'

const attachmentsResolver = {
  Query: {
    getOrderForm: async (
      _: unknown,
      { orderformId }: GetOrderFormQueryVariables
    ) => {
      const result: GetOrderFormQuery['getOrderForm'] =
        await getOrderFormFromExternalService(orderformId)
      return result
    },
  },
  Mutation: {
    addToCartWithPoints: async (
      _: unknown,
      {
        params: {
          orderformId,
          productId,
          sellerId,
          quantity,
          attachment,
          isSubscription = false,
        },
      }: AddToCartWithPointsMutationVariables
    ): Promise<AddToCartWithPointsMutation['addToCartWithPoints']> => {
      const baseAttachments = []

      if (isSubscription) {
        baseAttachments.push({
          name: 'vtex.subscription.clube-esfera',
          content: {
            'vtex.subscription.key.frequency': '1 month',
          },
        })
      }
      baseAttachments.push({
        name: 'Points Conversion Information',
        content: {
          points: attachment,
        },
      })

      const body: AddToCartBody = {
        orderItems: [
          {
            id: productId,
            quantity: Number(quantity),
            seller: sellerId,
            attachments: baseAttachments,
          },
        ],
      }

      const result: AddToCartWithPointsMutation['addToCartWithPoints'] =
        await addItemToOrderFormFromExternalService(orderformId, body)

      return result
    },
  },
}

async function getOrderFormFromExternalService(orderformId: string) {
  const url = `https://pocsanbesfera.myvtex.com/_v/token/document/${orderformId}`
  const response = await fetch(url)
  const data: OrderFormData = await response.json()

  return data
}

async function addItemToOrderFormFromExternalService(
  orderformId: string,
  body: AddToCartBody
) {
  const url = `https://pocsanbesfera.vtexcommercestable.com.br/api/checkout/pub/orderForm/${orderformId}/items`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data: OrderFormData = await response.json()

  return data
}

export default attachmentsResolver

type AddToCartBody = {
  orderItems: {
    id: string
    quantity: number
    seller: string
    attachments: {
      name: string
      content: Record<string, string>
    }[]
  }[]
}

type OrderFormData = {
  orderFormId: string
}

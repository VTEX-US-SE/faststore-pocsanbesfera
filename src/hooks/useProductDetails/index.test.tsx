import { renderHook } from '@testing-library/react-hooks'
import useProductDetails from './index'
import { ProductAttributes } from '../../types/customProductShelf'

jest.mock('../useFormattedPrice', () => ({
  useFormattedPrice: jest.fn(
    (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`
  ),
}))

describe('useProductDetails', () => {
  const mockProduct: ProductAttributes = {
    id: '1',
    slug: 'product-slug',
    sku: '12345',
    gtin: '1234567890123',
    image: [
      { url: 'http://example.com/image.jpg', alternateName: 'Product Image' },
    ],
    name: 'Product Name',
    sellers: [
      {
        sellerDefault: true,
        commertialOffer: {
          Installments: [
            {
              Value: 50,
              NumberOfInstallments: 10,
              Name: 'Installment Name',
            },
          ],
        },
        sellerId: '',
        sellerName: '',
      },
    ],
    offers: {
      offers: [
        {
          listPrice: 500,
          price: 450,
        },
      ],
    },
    link: 'http://example.com/product',
    additionalProperty: [],
  }

  it('should format the product details correctly', () => {
    const { result } = renderHook(() => useProductDetails(mockProduct))

    expect(result.current).toEqual({
      link: 'http://example.com/product',
      imageUrl: 'http://example.com/image.jpg',
      imageAlt: 'Product Image',
      productName: 'Product Name',
      listPrice: 'R$ 500,00',
      price: 'R$ 450,00',
      discountPercentage: 10,
      installmentCount: 10,
      installmentValue: 'R$ 50,00',
      installmentName: 'Installment Name',
    })
  })

  it('should calculate the discount percentage correctly', () => {
    const { result } = renderHook(() => useProductDetails(mockProduct))

    expect(result.current.discountPercentage).toBe(10)
  })

  it('should handle case where listPrice is not greater than price', () => {
    const productWithNoDiscount = {
      ...mockProduct,
      offers: {
        offers: [
          {
            listPrice: 450,
            price: 450,
          },
        ],
      },
    }

    const { result } = renderHook(() =>
      useProductDetails(productWithNoDiscount)
    )

    expect(result.current.discountPercentage).toBe(0)
  })
})

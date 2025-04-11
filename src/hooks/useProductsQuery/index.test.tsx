import { renderHook } from '@testing-library/react-hooks'
import { useCustomProductsQuery } from './index'
import { useProductsQuery } from '@faststore/core'
import { ClientManyProductsQuery } from '../../types/productCarousel'

// Mock da query useProductsQuery
jest.mock('@faststore/core', () => ({
  useProductsQuery: jest.fn(),
}))

describe('useCustomProductsQuery', () => {
  const mockProductsData: ClientManyProductsQuery = {
    search: {
      products: {
        edges: [
          { node: { id: '1', name: 'Product 1' } },
          { node: { id: '2', name: 'Product 2' } },
        ],
      },
    },
  }

  it('should return products data when query is successful', async () => {
    // Simular o retorno da query
    ;(useProductsQuery as jest.Mock).mockReturnValue(mockProductsData)

    const { result, waitForNextUpdate } = renderHook(() =>
      useCustomProductsQuery({ first: 2 })
    )

    // Esperar atualização do hook
    await waitForNextUpdate()

    // Verificar se os dados dos produtos são retornados corretamente
    expect(result.current.productsData).toEqual([
      { id: '1', name: 'Product 1' },
      { id: '2', name: 'Product 2' },
    ])
    expect(result.current.isLoading).toBe(false)
  })

  it('should set isLoading to true when query is in progress', () => {
    // Simular query sem dados (em progresso)
    ;(useProductsQuery as jest.Mock).mockReturnValue(null)

    const { result } = renderHook(() => useCustomProductsQuery({ first: 2 }))

    // Verificar se isLoading está true
    expect(result.current.isLoading).toBe(true)
    expect(result.current.productsData).toEqual([])
  })

  it('should handle case where there are no products returned', async () => {
    // Simular query com retorno vazio
    ;(useProductsQuery as jest.Mock).mockReturnValue({
      search: { products: { edges: [] } },
    })

    const { result, waitForNextUpdate } = renderHook(() =>
      useCustomProductsQuery({ first: 2 })
    )

    // Esperar atualização do hook
    await waitForNextUpdate()

    // Verificar que o array de produtos está vazio
    expect(result.current.productsData).toEqual([])
    expect(result.current.isLoading).toBe(false)
  })
})

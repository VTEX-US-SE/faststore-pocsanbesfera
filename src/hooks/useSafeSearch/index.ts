import { useSearch } from '@faststore/sdk'
import { Facet } from '@faststore/sdk/dist/types'
import { useRef } from 'react'

const fallback = {
  state: { term: '', selectedFacets: [] as Facet[], sort: undefined },
  dispatch: () => {},
}

export const useSafeSearch = () => {
  const hasWarned = useRef(false)

  try {
    return useSearch()
  } catch (error) {
    if (!hasWarned.current) {
      console.warn('Search context not available:', error)
      hasWarned.current = true
    }
    return fallback
  }
}

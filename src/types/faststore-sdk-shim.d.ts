declare module '@faststore/sdk/dist/types' {
  import type { SearchState } from '@faststore/sdk'

  export type Facet = SearchState['selectedFacets'][number]
  export type State = SearchState
  export type SearchSort = SearchState['sort']
}

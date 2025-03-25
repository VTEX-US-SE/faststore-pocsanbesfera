import { SectionOverride } from '@faststore/core'
import CustomProductCard from '../common/CustomProductCard'

const SECTION = 'ProductShelf' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: {
      Component: CustomProductCard,
    },
  },
}

export { override }

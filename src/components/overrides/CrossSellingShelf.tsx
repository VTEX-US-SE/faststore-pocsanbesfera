import { SectionOverride } from '@faststore/core'
import CustomProductCard from '../common/CustomProductCard'

const SECTION = 'CrossSellingShelf' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: {
      Component: CustomProductCard,
    },
  },
}

export { override }

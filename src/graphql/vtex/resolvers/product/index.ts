import type { StoreProductRoot } from '@faststore/core/api'

const productResolver = {
  StoreProduct: {
    cpp: (root: StoreProductRoot) => {
      const cppValue =
        root?.isVariantOf?.specificationGroups
          ?.find((specificationGroup) => specificationGroup.name === 'Pontos')
          ?.specifications?.find(
            (specification) => specification.name === 'CPP'
          )?.values?.[0] || '100'

      return cppValue
    },
  },
}

export default productResolver

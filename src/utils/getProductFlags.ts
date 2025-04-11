import Property from '../types/property'

const getProductFlags = (properties: Property[] | undefined) => {
  const activeFlags: string[] = []
  properties?.forEach((spec) => {
    if (
      spec.name.toLowerCase() === 'condição do item' &&
      spec.values[0].toLowerCase() === 'usado'
    ) {
      activeFlags.push('usado')
    }
    if (
      spec.name.toLowerCase() === 'produto internacional' &&
      spec.values[0].toLowerCase() === 'sim'
    ) {
      activeFlags.push('internacional')
    }
  })
  return activeFlags
}

export default getProductFlags

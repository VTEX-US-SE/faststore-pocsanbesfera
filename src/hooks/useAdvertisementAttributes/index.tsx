import { Advertisement } from '../../types/ads'

export const useAdvertisementAttributes = (
  ad?: Advertisement
): [boolean, Record<string, any>] => {
  const isAdvertisement = ad?.newtailAdvertisement !== undefined
  const encodedDefaultEventUrl = btoa(
    ad?.newtailAdvertisement?.impressionUrl ?? ''
  )
  const advertisementDataAttributes = isAdvertisement
    ? {
        'data-van-aid':
          encodedDefaultEventUrl.length > 0
            ? encodedDefaultEventUrl
            : undefined,
        'data-newtail-impression': ad.newtailAdvertisement?.impressionUrl,
        'data-newtail-view': ad.newtailAdvertisement?.viewUrl,
        'data-newtail-click': ad.newtailAdvertisement?.clickUrl,
      }
    : {}
  return [isAdvertisement, advertisementDataAttributes]
}

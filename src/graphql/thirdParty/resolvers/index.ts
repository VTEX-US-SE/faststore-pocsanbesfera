import cookieResolver from './cookie'
import { default as PickupPointResolver } from './pickupPoint'
import { default as SellerResolver } from './seller'
import { default as AttachmentsResolver } from './attachments'
import { default as OrderFormResolver } from './orderFormResolver'

const resolvers: any = [
  { ...SellerResolver },
  { ...PickupPointResolver },
  { ...cookieResolver },
  { ...AttachmentsResolver },
  { ...OrderFormResolver },
]

export default resolvers

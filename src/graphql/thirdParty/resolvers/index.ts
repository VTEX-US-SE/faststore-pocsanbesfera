import cookieResolver from './cookie'
import { default as PickupPointResolver } from './pickupPoint'
import { default as SellerResolver } from './seller'
import { default as AttachmentsResolver } from './attachments'

const resolvers = [
  { ...SellerResolver },
  { ...PickupPointResolver },
  { ...cookieResolver },
  { ...AttachmentsResolver },
]

export default resolvers

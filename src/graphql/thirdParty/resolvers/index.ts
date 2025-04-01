import cookieResolver from './cookie'
import { default as PickupPointResolver } from './pickupPoint'
import { default as SellerResolver } from './seller'

const resolvers = [
  { ...SellerResolver },
  { ...PickupPointResolver },
  { ...cookieResolver },
]

export default resolvers

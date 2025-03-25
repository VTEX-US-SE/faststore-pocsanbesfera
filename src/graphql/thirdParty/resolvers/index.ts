import { default as PickupPointResolver } from './pickupPoint'
import { default as SellerResolver } from './seller'

const resolvers = [{ ...SellerResolver }, { ...PickupPointResolver }]

export default resolvers

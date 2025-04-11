import { NEWTAIL_PUBLISHER_ID } from '../constants'
import { getCookieValue } from '../hooks/useCookies'
import { fetchAPI } from './fetch'

export interface NewtailArgs {
  context: NewtailContext
  term?: string
  placements: { [key: string]: NewtailPlacementBody }
  categoryName?: string
  productSku?: string
  tags?: string[]
}

interface NewtailAdRequest {
  context: NewtailContext
  term?: string
  category_name?: string
  user_id: string
  session_id: string
  tags?: string[]
  placements: { [Key in NewtailAdsPlacement as string]?: NewtailPlacementBody }
  channel?: NewtailChannel
  product_sku?: string
}

export type NewtailAdsPlacement =
  | 'search_top_product'
  | 'search_top-shelf_product'
  | 'home_shelf_product'
  | 'pdp_shelf_product'
  | 'plp_shelf_product'
  | 'autocomplete_product'
  | 'search_top_brand'
  | 'home_banner'
  | 'search_banner'
  | 'pdp_banner'

export type NewtailContext =
  | 'search'
  | 'category'
  | 'brand'
  | 'product_page'
  | 'home'

interface NewtailPlacementBody {
  quantity: number
  size?: string
  types: [NewtailAdType]
}

export type NewtailAdType = 'product' | 'banner' | 'sponsored_brand'
type NewtailChannel = 'site' | 'app'

export class Newtail {
  static instance: Newtail
  private base_url: string | undefined

  static getInstance() {
    if (!Newtail.instance) {
      Newtail.instance = new Newtail()
      Newtail.instance.base_url = `https://newtail-media.newtail.com.br/v1/rma/${NEWTAIL_PUBLISHER_ID}`
    }

    return Newtail.instance
  }

  public ad_request = <T>({
    term = '',
    context,
    placements,
    categoryName,
    productSku,
    tags,
  }: NewtailArgs): Promise<T> => {
    const url = `${this.base_url}`
    const mac_id = getCookieValue('VtexRCMacIdv7') ?? ''

    const data: NewtailAdRequest = {
      term,
      context,
      placements,
      user_id: mac_id,
      session_id: mac_id,
      channel: 'site',
      category_name: categoryName,
      product_sku: productSku,
      tags,
    }

    return fetchAPI(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}

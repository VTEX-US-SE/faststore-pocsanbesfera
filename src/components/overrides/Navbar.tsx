import { SectionOverride } from '@faststore/core'
import { Navbar } from '@faststore/ui'
import { useEffect } from 'react'
import CheckAndUpdateCookie from '../LoginCookie/LoginCookie'
import CartToPoints from '../CartToPoints'

const SECTION = 'Navbar' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    Navbar: {
      Component: (props) => {
        /* Temporary workaround to change the Navbar search input placeholder.
         * The native @faststore/core SearchInput component hardcodes
         * "Search everything at the store" as the placeholder.
         * Remove this effect once the toolkit allows overriding SearchInput placeholder.
         */
        useEffect(() => {
          document
            .querySelector('[data-fs-search-input-field-input]')
            ?.setAttribute('placeholder', 'Search for products or brands')
        }, [])

        return (
          <>
            <Navbar {...props} />
            <CheckAndUpdateCookie />
            <CartToPoints />
          </>
        )
      },
    },
  },
}

export { override }

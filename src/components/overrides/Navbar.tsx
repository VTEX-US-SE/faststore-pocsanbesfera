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
        /* `useEffect` para alterar o placeholder do input de busca da Navbar.
         * É uma solução provisória, pois o componente nativo @faststore/core/src/components/search/SearchInput,
         * utilizado dentro do Navbar, possui um valor hardcoded "Search everything at the store" no placeholder.
         * Quando a toolkit permitir sobrescrever o placeholder do SearchInput, este `useEffect` poderá ser
         * removido.
         */
        useEffect(() => {
          document
            .querySelector('[data-fs-search-input-field-input]')
            ?.setAttribute('placeholder', 'Pesquise por produtos ou marcas')
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

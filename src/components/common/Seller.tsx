import { Loader } from '@faststore/ui'
import { useSeller } from './custom-hooks/useSeller'

type Props = {
  id: string
  showLogoIfPossible?: boolean
}

export default function Seller({ id, showLogoIfPossible = true }: Props) {
  const { data, isValidating } = useSeller(id)
  const name = data?.getSeller?.name ?? ''
  const logo = data?.getSeller?.logo

  if (isValidating) {
    return (
      <Loader style={{ display: 'inline-flex', verticalAlign: 'middle' }} />
    )
  }

  return showLogoIfPossible && logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      height="20"
      style={{ verticalAlign: 'middle' }}
      src={logo}
      alt={name}
    />
  ) : (
    <>{name}</>
  )
}
